import { json, Outlet, useLoaderData } from "remix";
import { db } from "~/supabase.server";

export const loader = async ({ params }) => {
    const { data, error } = await db.from("posts").select().match({id: params.slug})
    return data;
};

export default function PostSlug() {
    let posts = useLoaderData();
    let post = posts[0];
    console.log(post)
    return (
        <main>
            <h1>{post.id} : {post.title}</h1>
            <p>{post.description}</p>
            <Outlet />
        </main>
    );
}

export function CatchBoundary() {
    const caught = useCatch();

    return (
        <div>
            <h1>Caught</h1>
            <p>Status: {caught.status}</p>
            <pre>
                <code>{JSON.stringify(caught.data, null, 2)}</code>
            </pre>
        </div>
    );
}

export function ErrorBoundary({ error }) {
    return (
        <div>
            <h1>Error</h1>
            <p>{error.message}</p>
            <p>The stack trace is:</p>
            <pre>{error.stack}</pre>
        </div>
    );
}
import { Link, useLoaderData, useCatch } from "remix";

import { db } from "~/supabase.server";

export const loader = async () => {
    const { data, error } = await db.from("posts").select()
    return data
};


export default function Home() {
    let posts = useLoaderData()
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
            <h1>Welcome to Da Remix</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/post">Posts</Link>
                </li>
                <li>
                    <Link to="/post/13">Post 13</Link>
                </li>

                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={"/post/" + post.id}>{post.title}</Link>
                    </li>
                ))}

            </ul>
        </div>
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
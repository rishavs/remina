
import { redirect, json } from "remix";

import { db } from "~/supabase.server";

export const action = async ({
    request,
}) => {
    const form = await request.formData();
    const title = form.get("title");
    const descr = form.get("description");

    const { data, error } = await db
        .from('posts')
        .insert([
            { title: title, description: descr }
        ])
    console.log(data)
    // console.log(json(data))
    return redirect(`/post/${data[0].id}`);
};

export default function NewPost() {
    return (
        <div>
            <p>Add a blog post</p>
            <form method="post">
                <div>
                    <label>
                        Title: <input type="text" name="title" />
                    </label>
                </div>
                <div>
                    <label>
                        Description: <textarea name="description" />
                    </label>
                </div>
                <div>
                    <button type="submit" className="button">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}
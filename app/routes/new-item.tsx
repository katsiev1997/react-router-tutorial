import { Form, redirect, type ActionFunctionArgs } from "react-router";
import { supabase } from "~/supabase-client";

export function meta() {
	return [
		{ title: "New item | RRV7" },
		{ name: "description", content: "Create new item using supabase" },
	];
}

export async function action({ request }: ActionFunctionArgs) {
	const formData = await request.formData();
	const title = formData.get("title") as string;
	const description = formData.get("description") as string;

	if (!title || !description) {
		return { error: "Title and content are required" };
	}

	const { error } = await supabase.from("items").insert({
		title,
		description,
	});

	if (error) {
		return { error: error.message };
	}

	return redirect("/");
}

export default function NewItemsPage() {
	return (
		<div className="max-w-md mx-auto">
			<h2 className="text-2xl font-bold mb-4">Create new item</h2>
			<Form method="post" className="space-y-4 bg-white p-4 rounded shadow">
				<div>
					<label className="block text-gray-700">Title</label>
					<input
						type="text"
						name="title"
						required
						className="border border-gray-300 rounded px-3 py-2 w-full"
					/>
				</div>
				<div>
					<label className="block text-gray-700">Description</label>
					<textarea
						name="description"
						required
						className="border border-gray-300 rounded px-3 py-2 w-full"
					/>
				</div>
				<button type="submit" className="bg-green-600 text-white rounded p-3">
					Create Item
				</button>
			</Form>
		</div>
	);
}

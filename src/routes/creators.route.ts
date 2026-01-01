import { Elysia } from "elysia";
import { CreatorListResponse } from "@/schema/creators.schema";
import { ErrorResponse } from "@/schema/error.schema";
import { supabase } from "@/utils/supabase";

const creatorsRoute = new Elysia({ prefix: "/creators" });

creatorsRoute.get(
	"/",
	async ({ set }) => {
		const { data, error } = await supabase.from("creators").select("*");

		if (error) {
			set.status = 500;
			return { error: error.message };
		}

		return { data: data ?? [] };
	},
	{
		detail: {
			summary: "[GET] Get creators",
			tags: ["creators"],
		},
		response: {
			200: CreatorListResponse,
			500: ErrorResponse,
		},
	},
);

export { creatorsRoute };

import { swaggerUI } from "@hono/swagger-ui";
import { Hono } from "hono";
import { supabase } from "./utils/supabase";

const app = new Hono();

const openApiDoc = {
	openapi: "3.0.0",
	info: {
		title: "API Documentation",
		version: "1.0.0",
		description: "API documentation",
	},
	paths: {
		"/": {
			get: {
				summary: "Test",
				responses: {
					"200": {
						description: "OK",
					},
				},
			},
		},
	},
};

app.get("/", async (c) => {
	const { data, error } = await supabase.from("creators").select("*");

	if (error) {
		return c.json({ error: error.message }, 500);
	}

	return c.json(data);
});

app.get("/doc", (c) => c.json(openApiDoc));

app.get("/docs", swaggerUI({ url: "/doc" }));

export default app;

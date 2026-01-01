import { cors } from "@elysiajs/cors";
import { fromTypes, openapi } from "@elysiajs/openapi";
import { Elysia } from "elysia";
import * as z from "zod";
import { version } from "../package.json";
import { creatorsRoute } from "./routes/creators.route";

const app = new Elysia();

app.listen(3000);

app.use(cors());
app.use(
	openapi({
		references: fromTypes(
			Bun.env.NODE_ENV === "production" ? "dist/index.d.ts" : "src/index.ts",
		),
		path: "/docs",
		mapJsonSchema: {
			zod: z.toJSONSchema,
		},
	}),
);

app.get("/", () => {
	return {
		timestamp: new Date().toISOString(),
		version: version,
	};
});

app.use(creatorsRoute);

console.log(
	`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`,
);

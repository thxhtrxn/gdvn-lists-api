import { createClient } from "@supabase/supabase-js";
import { Hono } from "hono";

const supabaseUrl = Bun.env.SUPABASE_URL;
const supabaseKey = Bun.env.SUPABASE_SECRET_KEY;

if (!supabaseUrl || !supabaseKey) {
	throw new Error(
		"Missing required environment variables: SUPABASE_URL or SUPABASE_SECRET_KEY",
	);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const app = new Hono();

app.get("/", async (c) => {
	const { data, error } = await supabase.from("users").select("*");

	if (error) {
		return c.json({ error: error.message }, 500);
	}

	return c.json(data);
});

export default app;

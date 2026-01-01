import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/types/supabase";

const supabaseUrl = Bun.env.SUPABASE_URL;
const supabaseKey = Bun.env.SUPABASE_SECRET_KEY;

if (!supabaseUrl || !supabaseKey) {
	throw new Error(
		"Missing required environment variables: SUPABASE_URL or SUPABASE_SECRET_KEY",
	);
}

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export { supabase };

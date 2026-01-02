import { Elysia, redirect } from "elysia";
import { getAccessToken } from "@/services/discordAuth.service";

const authRoute = new Elysia({ prefix: "/auth" });

authRoute.get("/callback/discord", async ({ query, set }) => {
	const { code } = query as { code?: string };
	const data = await getAccessToken(String(code));

	if (!code) {
		set.status = 400;
		return { error: "Missing `code`" };
	}

	if (data.access_token === undefined) {
		set.status = 401;
		return data;
	}

	return redirect(
		`${Bun.env.FRONTEND_URL}/link/discord?token=${data.access_token}`,
	);
});

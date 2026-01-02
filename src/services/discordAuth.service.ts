export async function getAccessToken(code: string) {
	if (
		!Bun.env.DISCORD_AUTH_CLIENT_ID ||
		!Bun.env.DISCORD_AUTH_CLIENT_SECRET ||
		!Bun.env.DISCORD_AUTH_REDIRECT_URI
	) {
		throw new Error("Missing Discord OAuth environment variables");
	}

	const res = await fetch("https://discord.com/api/v10/oauth2/token", {
		method: "POST",
		body: new URLSearchParams({
			client_id: Bun.env.DISCORD_AUTH_CLIENT_ID,
			client_secret: Bun.env.DISCORD_AUTH_CLIENT_SECRET,
			grant_type: "authorization_code",
			code: code,
			redirect_uri: Bun.env.DISCORD_AUTH_REDIRECT_URI,
		}),
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
	});

	// biome-ignore lint/suspicious/noExplicitAny: Discord OAuth token response is not typed yet
	const data: any = await res.json();

	if (data.access_token === undefined) {
		console.log(data);
	}

	return data;
}

export async function getUserByToken(token: string) {
	const res = await fetch("https://discord.com/api/v10/users/@me", {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
		},
	});
	// biome-ignore lint/suspicious/noExplicitAny: Discord API response is not typed yet
	const data: any = await res.json();

	return data;
}

export async function getUserById(id: number) {
	const res = await fetch(`https://discord.com/api/v10/users/${id}`, {
		method: "GET",
		headers: {
			Authorization: `Bot ${Bun.env.DISCORD_BOT_TOKEN}`,
			"Content-Type": "application/json",
		},
	});

	// biome-ignore lint/suspicious/noExplicitAny: Discord API response is not typed yet
	const data: any = await res.json();

	return data;
}

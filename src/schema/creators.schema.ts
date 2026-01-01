import { t } from "elysia";
import { ProvinceEnum } from "@/types";

export const CreatorResponse = t.Object({
	id: t.Number(),
	gd_username: t.String(),
	name: t.Nullable(t.String()),
	email: t.Nullable(t.String()),
	facebook: t.Nullable(t.String()),
	youtube: t.Nullable(t.String()),
	discord: t.Nullable(t.String()),
	gdbrowser: t.Nullable(t.String()),
	total_cp_point: t.Nullable(t.Number()),
	cp_rated_point: t.Nullable(t.Number()),
	cp_featured_point: t.Nullable(t.Number()),
	cp_epic_point: t.Nullable(t.Number()),
	cp_legendary_point: t.Nullable(t.Number()),
	cp_mythic_point: t.Nullable(t.Number()),
	uid: t.String(),
	overall_rank: t.Nullable(t.Number()),
	province: t.Nullable(ProvinceEnum),
});

export const CreatorListResponse = t.Object({
	data: t.Array(CreatorResponse),
});

export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[];

export type Database = {
	graphql_public: {
		Tables: {
			[_ in never]: never;
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			graphql: {
				Args: {
					extensions?: Json;
					operationName?: string;
					query?: string;
					variables?: Json;
				};
				Returns: Json;
			};
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
	public: {
		Tables: {
			creators: {
				Row: {
					cp_epic_point: number | null;
					cp_featured_point: number | null;
					cp_legendary_point: number | null;
					cp_mythic_point: number | null;
					cp_rated_point: number | null;
					discord: string | null;
					email: string | null;
					facebook: string | null;
					gd_username: string;
					gdbrowser: string | null;
					id: number;
					name: string | null;
					overall_rank: number | null;
					province: Database["public"]["Enums"]["Provinces"] | null;
					total_cp_point: number | null;
					uid: string;
					youtube: string | null;
				};
				Insert: {
					cp_epic_point?: number | null;
					cp_featured_point?: number | null;
					cp_legendary_point?: number | null;
					cp_mythic_point?: number | null;
					cp_rated_point?: number | null;
					discord?: string | null;
					email?: string | null;
					facebook?: string | null;
					gd_username: string;
					gdbrowser?: string | null;
					id?: number;
					name?: string | null;
					overall_rank?: number | null;
					province?: Database["public"]["Enums"]["Provinces"] | null;
					total_cp_point?: number | null;
					uid?: string;
					youtube?: string | null;
				};
				Update: {
					cp_epic_point?: number | null;
					cp_featured_point?: number | null;
					cp_legendary_point?: number | null;
					cp_mythic_point?: number | null;
					cp_rated_point?: number | null;
					discord?: string | null;
					email?: string | null;
					facebook?: string | null;
					gd_username?: string;
					gdbrowser?: string | null;
					id?: number;
					name?: string | null;
					overall_rank?: number | null;
					province?: Database["public"]["Enums"]["Provinces"] | null;
					total_cp_point?: number | null;
					uid?: string;
					youtube?: string | null;
				};
				Relationships: [];
			};
			levels: {
				Row: {
					creator_gd_username: string | null;
					demon_difficulty:
						| Database["public"]["Enums"]["Demon difficulty"]
						| null;
					difficulty_star_number: number;
					id: number;
					ingame_level_id: number;
					is_demon: boolean;
					name: string;
					rated_at: string;
					video_id: string | null;
				};
				Insert: {
					creator_gd_username?: string | null;
					demon_difficulty?:
						| Database["public"]["Enums"]["Demon difficulty"]
						| null;
					difficulty_star_number: number;
					id?: number;
					ingame_level_id: number;
					is_demon?: boolean;
					name?: string;
					rated_at?: string;
					video_id?: string | null;
				};
				Update: {
					creator_gd_username?: string | null;
					demon_difficulty?:
						| Database["public"]["Enums"]["Demon difficulty"]
						| null;
					difficulty_star_number?: number;
					id?: number;
					ingame_level_id?: number;
					is_demon?: boolean;
					name?: string;
					rated_at?: string;
					video_id?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "levels_creator_fkey";
						columns: ["creator_gd_username"];
						isOneToOne: false;
						referencedRelation: "creators";
						referencedColumns: ["gd_username"];
					},
				];
			};
			mappack_levels: {
				Row: {
					level_id: number;
					mappack_id: number;
					position: number;
				};
				Insert: {
					level_id: number;
					mappack_id: number;
					position: number;
				};
				Update: {
					level_id?: number;
					mappack_id?: number;
					position?: number;
				};
				Relationships: [
					{
						foreignKeyName: "mappack_levels_level_id_fkey";
						columns: ["level_id"];
						isOneToOne: false;
						referencedRelation: "levels";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "mappack_levels_mappack_id_fkey";
						columns: ["mappack_id"];
						isOneToOne: false;
						referencedRelation: "mappacks";
						referencedColumns: ["id"];
					},
				];
			};
			mappacks: {
				Row: {
					color_primary: string | null;
					color_secondary: string | null;
					created_at: string;
					description: string | null;
					gradient_color_1: string | null;
					gradient_color_2: string | null;
					gradient_color_3: string | null;
					id: number;
					is_gradient: boolean;
					name: string;
				};
				Insert: {
					color_primary?: string | null;
					color_secondary?: string | null;
					created_at?: string;
					description?: string | null;
					gradient_color_1?: string | null;
					gradient_color_2?: string | null;
					gradient_color_3?: string | null;
					id?: number;
					is_gradient?: boolean;
					name: string;
				};
				Update: {
					color_primary?: string | null;
					color_secondary?: string | null;
					created_at?: string;
					description?: string | null;
					gradient_color_1?: string | null;
					gradient_color_2?: string | null;
					gradient_color_3?: string | null;
					id?: number;
					is_gradient?: boolean;
					name?: string;
				};
				Relationships: [];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			add_event_levels_progress: {
				Args: { updates: Json };
				Returns: undefined;
			};
			get_event_leaderboard: {
				Args: { event_id: number };
				Returns: {
					elo: number;
					matchCount: number;
					penalty: number;
					point: number;
					userID: string;
				}[];
			};
			get_top_buyers: {
				Args: {
					interval_ms: number;
					limit_count: number;
					offset_count: number;
				};
				Returns: {
					totalAmount: number;
					uid: string;
				}[];
			};
			update_list: { Args: never; Returns: undefined };
			update_rank: { Args: never; Returns: undefined };
			update_supporter_until: { Args: never; Returns: undefined };
		};
		Enums: {
			"Demon difficulty":
				| "Easy Demon"
				| "Medium Demon"
				| "Hard Demon"
				| "Insane Demon"
				| "Extreme Demon";
			Provinces:
				| "TP. Hà Nội"
				| "Cao Bằng"
				| "Tuyên Quang"
				| "Lào Cai"
				| "Điện Biên"
				| "Lai Châu"
				| "Sơn La"
				| "Thái Nguyên"
				| "Lạng Sơn"
				| "Quảng Ninh"
				| "Phú Thọ"
				| "Bắc Ninh"
				| "TP. Hải Phòng"
				| "Hưng Yên"
				| "Ninh Bình"
				| "Thanh Hoá"
				| "Nghệ An"
				| "Hà Tĩnh"
				| "Quảng Trị"
				| "TP. Huế"
				| "TP. Đà Nẵng"
				| "Quảng Ngãi"
				| "Khánh Hoà"
				| "Gia Lai"
				| "Đắk Lắk"
				| "Lâm Đồng"
				| "Tây Ninh"
				| "Đồng Nai"
				| "TP. Hồ Chí Minh"
				| "Vĩnh Long"
				| "Đồng Tháp"
				| "An Giang"
				| "TP. Cần Thơ"
				| "Cà Mau";
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
};

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">;

type DefaultSchema = DatabaseWithoutInternals[Extract<
	keyof Database,
	"public"
>];

export type Tables<
	DefaultSchemaTableNameOrOptions extends
		| keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
		| { schema: keyof DatabaseWithoutInternals },
	TableName extends DefaultSchemaTableNameOrOptions extends {
		schema: keyof DatabaseWithoutInternals;
	}
		? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
				DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
		: never = never,
> = DefaultSchemaTableNameOrOptions extends {
	schema: keyof DatabaseWithoutInternals;
}
	? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
			DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
			Row: infer R;
		}
		? R
		: never
	: DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
				DefaultSchema["Views"])
		? (DefaultSchema["Tables"] &
				DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
				Row: infer R;
			}
			? R
			: never
		: never;

export type TablesInsert<
	DefaultSchemaTableNameOrOptions extends
		| keyof DefaultSchema["Tables"]
		| { schema: keyof DatabaseWithoutInternals },
	TableName extends DefaultSchemaTableNameOrOptions extends {
		schema: keyof DatabaseWithoutInternals;
	}
		? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
		: never = never,
> = DefaultSchemaTableNameOrOptions extends {
	schema: keyof DatabaseWithoutInternals;
}
	? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Insert: infer I;
		}
		? I
		: never
	: DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
		? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
				Insert: infer I;
			}
			? I
			: never
		: never;

export type TablesUpdate<
	DefaultSchemaTableNameOrOptions extends
		| keyof DefaultSchema["Tables"]
		| { schema: keyof DatabaseWithoutInternals },
	TableName extends DefaultSchemaTableNameOrOptions extends {
		schema: keyof DatabaseWithoutInternals;
	}
		? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
		: never = never,
> = DefaultSchemaTableNameOrOptions extends {
	schema: keyof DatabaseWithoutInternals;
}
	? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Update: infer U;
		}
		? U
		: never
	: DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
		? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
				Update: infer U;
			}
			? U
			: never
		: never;

export type Enums<
	DefaultSchemaEnumNameOrOptions extends
		| keyof DefaultSchema["Enums"]
		| { schema: keyof DatabaseWithoutInternals },
	EnumName extends DefaultSchemaEnumNameOrOptions extends {
		schema: keyof DatabaseWithoutInternals;
	}
		? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
		: never = never,
> = DefaultSchemaEnumNameOrOptions extends {
	schema: keyof DatabaseWithoutInternals;
}
	? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
	: DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
		? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
		: never;

export type CompositeTypes<
	PublicCompositeTypeNameOrOptions extends
		| keyof DefaultSchema["CompositeTypes"]
		| { schema: keyof DatabaseWithoutInternals },
	CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
		schema: keyof DatabaseWithoutInternals;
	}
		? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
		: never = never,
> = PublicCompositeTypeNameOrOptions extends {
	schema: keyof DatabaseWithoutInternals;
}
	? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
	: PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
		? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
		: never;

export const Constants = {
	graphql_public: {
		Enums: {},
	},
	public: {
		Enums: {
			"Demon difficulty": [
				"Easy Demon",
				"Medium Demon",
				"Hard Demon",
				"Insane Demon",
				"Extreme Demon",
			],
			Provinces: [
				"TP. Hà Nội",
				"Cao Bằng",
				"Tuyên Quang",
				"Lào Cai",
				"Điện Biên",
				"Lai Châu",
				"Sơn La",
				"Thái Nguyên",
				"Lạng Sơn",
				"Quảng Ninh",
				"Phú Thọ",
				"Bắc Ninh",
				"TP. Hải Phòng",
				"Hưng Yên",
				"Ninh Bình",
				"Thanh Hoá",
				"Nghệ An",
				"Hà Tĩnh",
				"Quảng Trị",
				"TP. Huế",
				"TP. Đà Nẵng",
				"Quảng Ngãi",
				"Khánh Hoà",
				"Gia Lai",
				"Đắk Lắk",
				"Lâm Đồng",
				"Tây Ninh",
				"Đồng Nai",
				"TP. Hồ Chí Minh",
				"Vĩnh Long",
				"Đồng Tháp",
				"An Giang",
				"TP. Cần Thơ",
				"Cà Mau",
			],
		},
	},
} as const;

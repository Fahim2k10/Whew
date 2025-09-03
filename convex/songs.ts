import { query } from "./_generated/server";
import { v } from "convex/values";

// Fetch all songs for a given genre
export const getSongsByGenre = query({
  args: { genre: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("songs")
      .filter((q) => q.eq(q.field("genre"), args.genre))
      .collect();
  },
});

import { query } from "./_generated/server";
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const addSong = mutation({
  args: {
    title: v.string(),
    genre: v.string(),
    uploader: v.string(),
    url: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("songs", {
      title: args.title,
      genre: args.genre,
      uploader: args.uploader,
      url: args.url,
    });
  },
});

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

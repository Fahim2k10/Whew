// convex/schema.js
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  songs: defineTable({
    genre: v.string(),
    title: v.string(),
    uploader: v.string(),
    url: v.string(),
  }),
});
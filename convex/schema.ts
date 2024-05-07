import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  user: defineTable({
    email: v.string(),
    name: v.string(),
    picture: v.string(),
    tokenIdentifier: v.string(),
  }),
  plans: defineTable({
    plancode: v.number(),
    name: v.string(),
    amount: v.number(),
    months: v.number(),
    chitamount: v.array(v.number()),
    installment: v.array(v.number()),
  }),
  
  
});
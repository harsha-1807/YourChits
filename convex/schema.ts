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
    plancode: v.float64(),
    name: v.string(),
    amount: v.float64(),
    months: v.float64(),
    chitamount: v.array(v.float64()),
    installment: v.array(v.float64()),
  }),
  
  
});
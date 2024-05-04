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
    name: v.string(),
    amount: v.number(),
    duration: v.number(), //month
    installment: v.object({
        kind: v.number(), //month number
        value: v.number(), // amount for the month to pay
    }),
    chitamount: v.object({
        kind: v.number(), //month number
        value: v.number(), // amount for the month to withdraw
    }),
    maxsub: v.number(),
  }),
  
  
});
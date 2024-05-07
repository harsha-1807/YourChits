import { ConvexError, v } from 'convex/values';
import { mutation, query } from './_generated/server';


// To get all the plans available 
export const getAllPlans = query({
    handler: async (ctx) => {
  
      const allPlans = await ctx.db.query("plans").collect();
  
      return allPlans;
    },
  });

// To add plans
export const createPlan = mutation({
  args:{
    amount: v.number(),
    chitamount: v.array(v.number()),
    installment: v.array(v.number()),
    months: v.number(),
    name: v.string(),
    plancode: v.number(),
  },
  handler: async(ctx, args)=>{
    // Check for empty values in the arguments
    if (!args.amount || !args.chitamount.length || !args.installment.length || !args.months || !args.name || !args.plancode) {
      throw new ConvexError("All fields must be provided and non-empty.");
    }
    const plan = await ctx.db.insert("plans",{
      amount:args.amount,
      chitamount:args.chitamount,
      installment:args.installment,
      months:args.months,
      name:args.name,
      plancode:args.plancode,
      
    })


    return plan;
  },
})


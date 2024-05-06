import { mutation, query } from './_generated/server';


// To get all the plans available 
export const getAllPlans = query({
    handler: async (ctx) => {
  
      const allPlans = await ctx.db.query("plans").collect();
  
      return allPlans;
    },
  });


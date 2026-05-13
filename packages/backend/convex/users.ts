import { query, mutation } from "./_generated/server";

export const getMany = query(({ 
    args: {},
    handler: async (ctx) => {
       const users =  await ctx.db.query("users").take(10);
       return users;
    }
 }) 
    
)

export const add = mutation({
   args:{},
   handler: async (ctx) => {
      const userId = await ctx.db.insert("users", {
         name: "Antonio",
      });
      return userId;
   }
})
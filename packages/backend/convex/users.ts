import { query, mutation } from "./_generated/server";

export const getMany = query({
   args: {},
   handler: async (ctx, args) => {
      const users = await ctx.db.query("users").take(10);
      return users;
   }
});

export const add = mutation({
   args: {},
   handler: async (ctx) => {
      const identity = await ctx.auth.getUserIdentity();
      if (identity === null) {
         throw new Error("Not authenticated");
      }
      
      // Ambil orgId dari property standar atau property 'o' (singkatan Clerk)
      const orgId = identity.orgId || (identity as any).o?.id;

      if(!orgId){
         throw new Error("No active organization selected");
      }
      const userId = await ctx.db.insert("users", {
         name: "antonio",
      });
      return userId;
   }
})
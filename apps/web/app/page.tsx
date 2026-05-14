'use client';
import { useQuery, useMutation } from "convex/react"
import { SignInButton, UserButton } from "@clerk/nextjs";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button"
import { Authenticated, Unauthenticated } from "convex/react";


export default function Page() {
  const users = useQuery(api.users.getMany);
  const adduser = useMutation(api.users.add);
  return (
    <>
    <Authenticated>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <p>apps/web</p>
        <Button onClick={() => adduser({})}>Add</Button>
        <div className="max-w-sm w-full mx-auto">
          {JSON.stringify(users, null, 2)}
        </div>
        <UserButton />
      </div>
    </Authenticated>
    <Unauthenticated>
      <p>Must Be sign in</p>
      <SignInButton>
        <Button>Sign In</Button>
      </SignInButton>
    </Unauthenticated>
    </>
  )
}

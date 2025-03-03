import React from 'react'
import ModeToggle from './ModeToggle'
import { Separator } from './ui/separator'
import { SignedOut, SignInButton } from '@clerk/nextjs'
import { SignedIn,  UserButton } from '@clerk/nextjs'

const Header = () => {
  return (
    <div className="relative h-14 bg-secondary text-primary flex justify-center items-center gap-6">
      <Separator className="absolute top-0 left-0 w-full bg-primary/40" />

      <ModeToggle />
      <h1>Header</h1>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  )
}

export default Header
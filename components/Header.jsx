import React from 'react'
import ModeToggle from './ModeToggle'
import { Separator } from './ui/separator'
import { SignedOut, SignInButton } from '@clerk/nextjs'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Header = () => {
  return (
    <div className="relative h-14 bg-secondary text-primary flex justify-center items-center">
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
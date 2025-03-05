import React from 'react'
import ModeToggle from './ModeToggle'
import { SignedOut, SignInButton, SignedIn } from '@clerk/nextjs'
import Link from 'next/link' 
import Image from 'next/image'
import { Button } from './ui/button'
import UserMenu from './user-menu'
import { checkUser } from '@/lib/checkUser'

const Header = async () => {
  await checkUser()

  return (
    <header className={`px-4 mb-8 border-b border-secondary/70`}>

      <nav className='py-6 px-4 flex justify-between items-center'>
        <Link href='/'>
          <Image src='/images/sync-w.png' alt='logo' width={160} height={40} />
        </Link>

        <div className='flex items-center justify-center gap-4'>
          <ModeToggle />

          <Link href='/project/create'>
            <Button>
              Create Project
            </Button>
          </Link>

          
          <SignedOut>
            <SignInButton forceRedirectUrl='/onboarding'>
              <Button>
                Get Started
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserMenu />
          </SignedIn>
        </div>

      </nav>
    </header>
  )
}

export default Header
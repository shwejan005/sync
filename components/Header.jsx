'use client'

import React from 'react'
import ModeToggle from './ModeToggle'
import { SignedOut, SignInButton, SignedIn } from '@clerk/nextjs'
import Link from 'next/link' 
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Button } from './ui/button'
import UserMenu from './user-menu'

const Header = () => {
  const { theme } = useTheme()

  const logoSrc = theme === 'dark' ? '/images/sync-b.png' : '/images/sync-w.png'

  return (
    <header className="container mx-auto">

      <nav className='py-6 px-4 flex justify-between items-center'>
        <Link href='/'>
          <Image src={logoSrc} alt='logo' width={130} height={40} />
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
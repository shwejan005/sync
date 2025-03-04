'use client'

import React from 'react'
import ModeToggle from './ModeToggle'
import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/nextjs'
import { cinzel } from '@/app/layout'
import Link from 'next/link' 
import Image from 'next/image'
import { useTheme } from 'next-themes'

const Header = () => {
  const { theme } = useTheme()

  // Set correct logo based on theme
  const logoSrc = theme === 'dark' ? '/images/sync-b.png' : '/images/sync-w.png'

  return (
    <header className="container mx-auto flex items-center justify-between">
      <nav className={`${cinzel.className} text-4xl`}>
        <Link href='/'>
          <Image src={logoSrc} alt='logo' width={80} height={80} />
        </Link>
      </nav>

      <ModeToggle />

      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  )
}

export default Header
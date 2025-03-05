import React from 'react'
import ModeToggle from './ModeToggle'
import { SignedOut, SignInButton, SignedIn } from '@clerk/nextjs'
import Link from 'next/link' 
import Image from 'next/image'
import { Button } from './ui/button'
import UserMenu from './user-menu'
import { checkUser } from '@/lib/checkUser'
import { Cardo } from 'next/font/google'

const ebGaramond = Cardo({
  subsets: ['latin'],
  weight: ['400','700'],
  display: 'swap'
})

const Header = async () => {
  await checkUser()

  return (
    <header className={`px-4 mb-8 border-b border-primary/20`}>

      <nav className='py-6 px-6 flex justify-between items-center'>
        <Link href='/' className={`${ebGaramond.className} text-4xl`}>
          SYNC
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
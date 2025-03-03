import React from 'react'
import ModeToggle from './ModeToggle'
import { Separator } from './ui/separator'

const Header = () => {
  return (
    <div className="relative h-14 bg-secondary text-primary flex justify-center items-center">
      <Separator className="absolute top-0 left-0 w-full bg-primary/40" />
      <ModeToggle />
      <h1>Header</h1>
    </div>
  )
}

export default Header
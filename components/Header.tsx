'use client'

import Image from 'next/image'
import Link from 'next/link'
import DarkModeButton from './DarkModeButton'
import brandLogoBlack from '@/public/logo.png'
import brandLogoWhite from '@/public/logo.png'
import { useTheme } from 'next-themes'

function Header() {
  const { theme } = useTheme()

  return (
    <header className="flex items-center justify-between space-x-2 px-10 py-4 font-bold">
      <div className="flex items-center space-x-2">
        <Link
          href="/"
          className="rounded-full p-1 shadow-md"
        >
          {theme === 'dark' ? (
            <Image
              className="rounded-full object-cover"
              width={50}
              height={50}
              src={brandLogoWhite}
              alt="brand logo"
            ></Image>
          ) : (
            <Image
              className="rounded-full object-cover"
              width={50}
              height={50}
              src={brandLogoBlack}
              alt="brand logo"
            ></Image>
          )}
        </Link>
        <h2>Ghareeb Star</h2>
      </div>
      <div>
        <DarkModeButton></DarkModeButton>
      </div>
    </header>
  )
}
export default Header

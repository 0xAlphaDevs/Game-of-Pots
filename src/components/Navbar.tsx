"use client"

import { ConnectKitButton } from 'connectkit'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-white rounded-full border border-emerald-100 shadow-md mx-24 my-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/home" className="flex-shrink-0">
              <span className="text-2xl font-bold text-emerald-600">Game of Pots</span>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/available-pots"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/available-pots'
                    ? 'text-emerald-50 bg-emerald-800'
                    : 'text-zinc-600 hover:bg-emerald-50 hover:text-emerald-800 font-semibold'
                    }`}
                >
                  Available Pots
                </Link>
                <Link
                  href="/my-pots"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === '/my-pots'
                    ? 'text-emerald-50 bg-emerald-800'
                    : 'text-zinc-600 hover:bg-emerald-50 hover:text-emerald-800 font-semibold'
                    }`}
                >
                  My Pots
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <ConnectKitButton />
          </div>
        </div>
      </div>
    </nav>
  )
}


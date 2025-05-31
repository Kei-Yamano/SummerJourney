"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white shadow-lg">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <motion.span className="text-xl font-bold" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Logo
          </motion.span>
        </Link>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:bg-white/20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/product">Product</NavLink>
          <NavLink href="/article">Article</NavLink>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <motion.div
            className="absolute top-16 left-0 right-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 border-t border-white/10 z-50 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col p-4 space-y-4">
              <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </MobileNavLink>
              <MobileNavLink href="/product" onClick={() => setIsMenuOpen(false)}>
                Product
              </MobileNavLink>
              <MobileNavLink href="/article" onClick={() => setIsMenuOpen(false)}>
                Article
              </MobileNavLink>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="relative group">
      <span className="text-sm font-medium transition-colors duration-300 group-hover:text-white">{children}</span>
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
      <span
        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 
                     border-l-4 border-l-transparent 
                     border-r-4 border-r-transparent 
                     border-b-4 border-b-white 
                     opacity-0 transition-all duration-300 
                     group-hover:opacity-100"
      ></span>
    </Link>
  )
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <motion.div whileHover={{ scale: 1.05, x: 5 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        className="block text-sm font-medium text-white hover:text-white/80 transition-colors duration-300"
        onClick={onClick}
      >
        {children}
      </Link>
    </motion.div>
  )
}

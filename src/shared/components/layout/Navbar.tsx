"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { primaryNavItems } from "@/shared/config/navigation"
import { siteConfig } from "@/shared/config/site"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/waac_logo.png"
              alt="WAAC Logo"
              width={300}
              height={75}
              className="h-12 w-auto"
            />
          </Link>
        </div>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {primaryNavItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader className="mb-4 border-b pb-4 text-left">
                <SheetTitle className="font-bold tracking-tight text-blue-600">
                  {siteConfig.name} Navigation
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2">
                {primaryNavItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl border border-transparent px-4 py-3 text-lg font-medium transition-all hover:border-slate-100 hover:bg-slate-50 hover:text-blue-600"
                  >
                    {item.title}
                  </Link>
                ))}
                <div className="mt-8 border-t border-slate-100 pt-8">
                  <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                    Contact Office
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm font-medium text-slate-600 hover:text-blue-600"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}


"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
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

const navItems = [
    { title: "Home", href: "/" },
    { title: "Events", href: "/events" },
    { title: "News", href: "/news" },
    { title: "Academicians", href: "/academicians" },
    { title: "Collaboration", href: "/collaboration" },
    { title: "Charter", href: "/charter" },
    { title: "About", href: "/about" },
]

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
                            width={200}
                            height={50}
                            className="h-12 w-auto"
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <NavigationMenu className="hidden lg:flex">
                    <NavigationMenuList>
                        {navItems.map((item) => (
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

                {/* Mobile Navigation */}
                <div className="flex items-center lg:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-10 w-10">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <SheetHeader className="text-left border-b pb-4 mb-4">
                                <SheetTitle className="text-blue-600 font-bold tracking-tight">WAAC Navigation</SheetTitle>
                            </SheetHeader>
                            <nav className="flex flex-col gap-2">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.title}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="px-4 py-3 text-lg font-medium rounded-xl hover:bg-slate-50 hover:text-blue-600 transition-all border border-transparent hover:border-slate-100"
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                                <div className="mt-8 pt-8 border-t border-slate-100">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Contact Office</p>
                                    <a href="mailto:contact@waac.ac" className="text-sm font-medium text-slate-600 hover:text-blue-600">
                                        contact@waac.ac
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

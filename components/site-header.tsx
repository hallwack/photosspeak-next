import * as React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function SiteHeader() {
  return (
    <header className="bg-primary dark:bg-primary/70 relative top-0 z-40 w-full">
      <div className="container flex h-28 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="hover:bg-transparent focus:ring-0 md:hidden"
                  >
                    <Icons.menu className="mr-2 h-6 w-6" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  sideOffset={6}
                  className="w-[300px] mr-4 2xl:mr-0 overflow-scroll"
                >
                  <DropdownMenuLabel>
                    <Link href="/" className="flex items-center">
                      <Icons.logo className="mr-2 h-6 w-6" /> {siteConfig.name}
                    </Link>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {siteConfig.mainNav?.map(
                    (item, index) =>
                      item.href && (
                        <DropdownMenuItem key={index} asChild>
                          <Link href={item.href}>{item.title}</Link>
                        </DropdownMenuItem>
                      )
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
              <Popover>
                <PopoverTrigger asChild>
                  <Button type="button" variant="ghost" size="sm">
                    <Icons.search />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="dark:bg-primary lg:min-w-max min-w-fit rounded-md mr-4 2xl:mr-0">
                  <div className="flex gap-4">
                    <Input type="text" placeholder="Search" />
                    <Button type="submit">Search</Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

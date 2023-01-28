import { siteConfig } from "@/config/site"

import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"

export function SiteHeader() {
  return (
    <header className="bg-primary dark:bg-primary/70 relative top-0 z-40 w-full">
      <div className="container flex h-28 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <div className="flex w-full max-w-sm items-center space-x-2">
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

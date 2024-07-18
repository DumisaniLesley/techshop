import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { IoMdSearch } from "react-icons/io";
import { MdOutlineShoppingCart, MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between py-8 px-4 bg-background md:px-6">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <div className="w-6 h-6">Logo</div>
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="hidden items-center gap-6 text-[16px] font-medium md:flex">
        <Link href="#" className="text-black" prefetch={false}>
          Home
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
          Shop
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
          About Us
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
          Products
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
          Blog
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
          Contact Us
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
          Login
        </Link>
        <Link href="#" size="icon" variant="ghost" className="text-muted-foreground hover:text-foreground">
          <IoMdSearch className='w-6 h-6 text-black font-semibold'/>
          <span className="sr-only">Search</span>
        </Link>
        <Link href="#" size="icon" variant="ghost" className="text-muted-foreground hover:text-foreground">
          <MdOutlineShoppingCart className='w-6 h-6 text-black font-semibold'/>
          <span className="sr-only">Cart</span>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-foreground md:hidden">
              <MdOutlineMenu className='w-8 h-8 text-black font-semibold'/>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="md:hidden w-full">
            <nav className="grid gap-12 text-center p-4 text-sm font-medium">
              <Link href="#" className="text-primary-foreground" prefetch={false}>
                Home
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                Shop
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                About Us
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                Products
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                Blog
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                Contact Us
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Navbar
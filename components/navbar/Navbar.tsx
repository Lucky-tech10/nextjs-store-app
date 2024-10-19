import { Suspense } from "react";
import Container from "../global/Container";
import CartButton from "./CartButton";
import DarkMode from "./DarkMode";
import LinkDropdown from "./LinksDropdown";
import Logo from "./Logo";
import NavSearch from "./NavSearch";

function Navbar() {
  return (
    <nav className="border-b">
      <Container className="hidden sm:flex sm:flex-row sm:justify-between sm:items-center gap-4 py-8 flex-wrap">
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>
        <div className="flex items-center gap-4">
          <CartButton />
          <DarkMode />
          <LinkDropdown />
        </div>
      </Container>
      <Container className="sm:hidden gap-4 py-8 flex flex-col">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-4">
            <CartButton />
            <DarkMode />
            <LinkDropdown />
          </div>
        </div>
        <div className="flex justify-center">
          <Suspense>
            <NavSearch />
          </Suspense>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;

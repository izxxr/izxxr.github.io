import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
    Link,
    Image,
    Button,
} from "@heroui/react";
import { useState } from "react";
import { SunIcon, MoonIcon } from "../icons";
import logo from "../assets/logo.png";
import logo_dark from "../assets/logo_dark.png";
import type { ComponentCommonProps } from "../types";

const NAV_ITEMS = [
  {label: "Home", props: {href: "#"}},
  {label: "About", props: {href: "#about"}},
  {label: "Projects", props: {href: "#projects"}},
  // {label: "Education", props: {href: "#education"}},
]

export default function Nav(props: ComponentCommonProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = NAV_ITEMS.map((value: any) => {
    return (
      <NavbarItem key={value.label}>
        <Link color="foreground" {...value.props}>
          {value.label}
        </Link>
      </NavbarItem>
    );
  })

  const navMenuLinks = NAV_ITEMS.map((value: any) => {
    return (
      <NavbarMenuItem key={value.label}>
        <Link color="foreground" size="lg" {...value.props}>
          {value.label}
        </Link>
      </NavbarMenuItem>
    );
  })

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="sm:flex gap-4">
          <Link href={"#"}>
            <Image src={props.theme === 'light' ? logo : logo_dark} width={50} height={50} />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        {navLinks}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            isIconOnly
            onPress={() => { props.theme === 'light' ? props.setTheme('dark') : props.setTheme('light') }}
            radius="lg"
          >
            {props.theme === 'light' ? <SunIcon /> : <MoonIcon />}
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {navMenuLinks}
      </NavbarMenu>
    </Navbar>
  );
}

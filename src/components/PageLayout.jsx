import React from "react";

import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import { useMsal } from "@azure/msal-react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  User,
  Image,
} from "@nextui-org/react";
import Logo from "../Images/logo.png";

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = (props) => {
  const isAuthenticated = useIsAuthenticated();
  const { instance, accounts } = useMsal();
  const name = accounts[0] && accounts[0].name;
  const username = accounts[0] && accounts[0].username;

  const avatarName = name ? name.charAt(0) : "";

  return (
    <>
      <Navbar className="bg-neutral-900">
        <NavbarBrand>
          <Image width={250} alt="Logo" src={Logo} />
        </NavbarBrand>
        <NavbarContent justify="start" className="hidden sm:flex gap-8">
          <NavbarItem>
            <Link color="foreground" href="#"></Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page"></Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#"></Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          {isAuthenticated ? (
            <NavbarItem>
              <User
                name={name}
                description={username}
                avatarProps={{
                  fallback: avatarName,
                }}
              />
            </NavbarItem>
          ) : (
            ""
          )}

          <NavbarItem className="ml-5">
            {isAuthenticated ? <SignOutButton /> : <SignInButton />}
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {props.children}
    </>
  );
};

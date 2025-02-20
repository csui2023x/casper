import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import React from "react";
import { NavItems, NavLink } from "./interface";
import { cn } from "@/lib/utils";
import { signOutAction } from "@/app/actions";

const DropdownItem: React.FC<NavLink> = ({ href, label, icon, className }) => {
  if (label === "Keluar") {
    return (
      <form
        action={signOutAction}
        className={cn(
          navigationMenuTriggerStyle({
            variant: "secondary",
          }),
          `text-text-dark-1 w-full rounded-sm justify-start ${className}`,
        )}
      >
        {icon}
        <button type="submit">{label}</button>
      </form>
    );
  }
  return (
    <Link
      href={href}
      className={cn(
        navigationMenuTriggerStyle({
          variant: "secondary",
        }),
        `text-text-dark-1 w-full rounded-sm justify-start ${className}`,
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export const NavigationButtons = ({
  navbarLinks,
  className,
}: {
  navbarLinks: NavItems;
  className?: string;
}) => {
  return (
    <NavigationMenu className={className}>
      <NavigationMenuList className="*:min-w-32 gap-3">
        {navbarLinks.map((link) => {
          if ("children" in link) {
            return (
              <NavigationMenuItem key={link.label}>
                <NavigationMenuTrigger>
                  {link.icon}
                  <span> {link.label}</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="min-w-32 bg-button-secondary rounded-sm p-2">
                    {link.children.map((child) => (
                      <DropdownItem
                        key={child.label}
                        label={child.label}
                        href={child.href}
                        icon={child.icon}
                        className={child.className}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }
          return (
            <NavigationMenuItem key={link.label}>
              <Link href={link.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle({
                      // Feel free to change this according to the design needs
                      variant: "secondary",
                    }),
                    "text-text-dark-1",
                  )}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

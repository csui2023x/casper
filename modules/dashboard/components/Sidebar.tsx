import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { House } from "lucide-react";
import { LogoutButton } from "@/components/elements/Layout/Navbar/LogoutButton";
import { SidebarProps } from "../interface";
import { NavLink } from "@/components/elements/Layout/Navbar/interface";

const DropdownItem: React.FC<NavLink> = ({ href, label, icon, className }) => {
  if (label === "Keluar") {
    return <LogoutButton icon={icon} className="w-full" />;
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

const Sidebar: React.FC<SidebarProps> = ({
  isSidebarOpen,
  Games,
  Navigation,
  selectedGame,
  onGameSelect,
  profile,
}) => {
  return (
    <div
      className={`${isSidebarOpen && "translate-x-0"} w-80 flex flex-col items-center px-8 inset-y-0 fixed bg-accents-pink-4 border-r-4 min-[1441px]:border-x-4 border-section-4 rounded-r-md min-[1441px]:rounded-md -translate-x-full md:translate-x-0 transition z-10`}
    >
      <div className="w-full">
        <div className="w-full h-20 relative my-14">
          <Image
            src="/perak-logo-2.png"
            fill
            alt="logo"
            className="object-contain"
          />
        </div>
        <div className="w-full">
          <div className="flex gap-2 justify-center text-lg text-text-dark-1">
            <House />
            <span>Dashboard</span>
          </div>
          <div className="border-t-4 border-b-4 border-text-dark-1 px-2 py-4 my-4">
            {Games.map((game, idx) => (
              <Button
                key={idx}
                variant="tertiary"
                className={`text-lg text-text-dark-1 w-full justify-start ${
                  selectedGame === game ? "bg-accents-pink-3" : ""
                }`}
                onClick={() => onGameSelect(game)}
              >
                <div className="relative w-6 h-6">
                  <Image src="/star.svg" fill alt="star" />
                </div>
                {game.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="relative mt-12">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                {Navigation.icon}
                <span>{profile.username}</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="min-w-32 bg-button-secondary rounded-sm p-2">
                  {Navigation.children.map((child) => {
                    return (
                      <DropdownItem
                        key={child.label}
                        label={child.label}
                        href={child.href}
                        icon={child.icon}
                        className={child.className}
                      />
                    );
                  })}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Sidebar;

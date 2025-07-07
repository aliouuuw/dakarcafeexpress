import { ChevronDownIcon } from "lucide-react";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const LayoutWrapperSection = (): JSX.Element => {
  // Navigation menu items data
  const menuItems = [
    {
      text: "Capsules",
      href: "https://www.lorespresso.com/fr_fr/capsules-de-cafe",
      hasDropdown: true,
    },
    {
      text: "Machines",
      href: "https://www.lorespresso.com/fr_fr/machine-a-cafe",
      hasDropdown: true,
    },
    {
      text: "Offres",
      href: "https://www.lorespresso.com/fr_fr/offres",
      hasDropdown: false,
    },
    {
      text: "Café en grain",
      href: "https://www.lorespresso.com/fr_fr/cafe-en-grain",
      hasDropdown: true,
    },
    {
      text: "Accessoires",
      href: "https://www.lorespresso.com/fr_fr/accessoires-cafe",
      hasDropdown: false,
    },
    {
      text: "Cafe moulu",
      href: "https://www.lorespresso.com/fr_fr/cafe-moulu",
      hasDropdown: false,
    },
    {
      text: "L'OR s'engage",
      href: "https://www.lorespresso.com/fr_fr/cp/notre-histoire/durabilite/cafe-durabilite",
      hasDropdown: true,
    },
    {
      text: "L'Univers L'OR",
      href: "https://www.lorespresso.com/fr_fr/cp/notre-histoire/univers-lor",
      hasDropdown: true,
    },
  ];

  return (
    <header className="h-[60px] w-full border-b border-[#3c3c3c] bg-wwwlorespressocomblack">
      <div className="mx-auto max-w-[1440px] h-full relative">
        <NavigationMenu className="h-full">
          <NavigationMenuList className="flex items-center gap-16 px-10 py-0 h-full overflow-x-auto">
            {menuItems.map((item, index) => (
              <NavigationMenuItem key={index} className="flex items-center">
                <NavigationMenuLink
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdusty-gray text-base tracking-[-0.10px] leading-4"
                >
                  {item.text}
                  {item.hasDropdown && (
                    <span className="ml-1">
                      <ChevronDownIcon className="h-[22.63px] w-[22.63px]" />
                    </span>
                  )}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

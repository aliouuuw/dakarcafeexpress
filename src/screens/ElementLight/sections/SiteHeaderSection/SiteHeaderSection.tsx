import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const SiteHeaderSection = (): JSX.Element => {
  // Navigation items data
  const navItems = [
    {
      icon: "/reorder.svg",
      text: "Commander\nà nouveau",
      link: null,
      iconWidth: "w-6",
      iconHeight: "h-6",
    },
    {
      icon: "/profile.svg",
      text: "Mon Compte",
      link: "https://www.lorespresso.com/fr_fr/account/signin",
      iconWidth: "w-6",
      iconHeight: "h-6",
    },
    {
      icon: "/basket.svg",
      text: "Panier",
      link: "https://www.lorespresso.com/fr_fr/cart",
      iconWidth: "w-6",
      iconHeight: "h-6",
    },
  ];

  return (
    <header className="flex w-full items-center justify-center pt-2 pb-[9px] px-0 border-b border-[#3c3c3c] bg-wwwlorespressocomblack">
      <div className="flex w-full max-w-[1360px] items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center">
          <div className="relative w-16 h-[49.33px] bg-[url(/l-or-logo-1.png)] bg-cover bg-[50%_50%]" />
        </div>

        {/* SearchIcon Bar */}
        <div className="flex py-3 relative max-w-[570px] w-full">
          <div className="flex w-full items-start relative bg-wwwlorespressocommine-shaft rounded-lg">
            <div className="relative w-full flex items-center rounded border border-solid border-[#969696]">
              <Input
                className="h-10 pl-3.5 pr-0 py-[8.5px] bg-transparent border-none text-wwwlorespressocomwhite font-www-lorespresso-com-semantic-input text-[length:var(--www-lorespresso-com-semantic-input-font-size)] tracking-[var(--www-lorespresso-com-semantic-input-letter-spacing)] leading-[var(--www-lorespresso-com-semantic-input-line-height)] [font-style:var(--www-lorespresso-com-semantic-input-font-style)]"
                placeholder="Rechercher des produits"
              />
              <Button
                variant="ghost"
                size="icon"
                className="p-[5px] rounded-[16.7px]"
              >
                <div className="relative w-[23.39px] h-[23.39px] bg-[url(/icon-8.svg)] bg-[100%_100%]" />
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex items-start gap-2 relative">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col min-h-9 items-center justify-between relative"
            >
              <div className="relative flex items-center justify-center">
                <div
                  className={`relative ${item.iconWidth} ${item.iconHeight} bg-[url(${item.icon})] bg-[100%_100%]`}
                />
              </div>

              {item.link ? (
                <a
                  className="relative w-fit font-www-lorespresso-com-semantic-link font-[number:var(--www-lorespresso-com-semantic-link-font-weight)] text-wwwlorespressocomwhite text-[length:var(--www-lorespresso-com-semantic-link-font-size)] text-center tracking-[var(--www-lorespresso-com-semantic-link-letter-spacing)] leading-[var(--www-lorespresso-com-semantic-link-line-height)] whitespace-nowrap [font-style:var(--www-lorespresso-com-semantic-link-font-style)]"
                  href={item.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {item.text}
                </a>
              ) : (
                <div className="relative w-fit mt-[-1.00px] font-www-lorespresso-com-semantic-button font-[number:var(--www-lorespresso-com-semantic-button-font-weight)] text-wwwlorespressocomwhite text-[length:var(--www-lorespresso-com-semantic-button-font-size)] text-center tracking-[var(--www-lorespresso-com-semantic-button-letter-spacing)] leading-[var(--www-lorespresso-com-semantic-button-line-height)] [font-style:var(--www-lorespresso-com-semantic-button-font-style)]">
                  {item.text}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

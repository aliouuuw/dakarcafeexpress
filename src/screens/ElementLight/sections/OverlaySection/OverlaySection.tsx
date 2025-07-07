import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb";

export const OverlaySection = (): JSX.Element => {
  // Navigation links data
  const breadcrumbItems = [
    {
      label: "Accueil",
      href: "https://www.lorespresso.com/fr_fr",
      active: true,
    },
    {
      label: "Capsules de café",
      href: "https://www.lorespresso.com/fr_fr/capsules-de-cafe",
      active: false,
    },
  ];

  return (
    <section
      className="relative w-full h-96 bg-cover bg-center"
      style={{ backgroundImage: "url(..//background.png)" }}
    >
      <div className="relative h-full mx-auto px-7 max-w-[1440px]">
        {/* Breadcrumb navigation */}
        <Breadcrumb className="pt-4">
          <BreadcrumbList className="flex items-center">
            {breadcrumbItems.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <BreadcrumbSeparator className="text-wwwlorespressocomronchi [font-family:'Avenir_Next-Regular',Helvetica] text-base tracking-[-0.64px] leading-5">
                    /
                  </BreadcrumbSeparator>
                )}
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-base tracking-[-0.64px] leading-5 ${
                      item.active
                        ? "text-wwwlorespressocomwhite"
                        : "text-wwwlorespressocomdove-gray"
                    }`}
                  >
                    {item.label}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>

        {/* Dark gradient overlay */}
        <div className="absolute w-[702px] h-full top-0 right-0 bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_38%)]" />

        {/* SVG mask */}
        <img
          className="absolute w-full h-[52px] bottom-[97px] left-3"
          alt="Mask group"
          src="/mask-group-1.svg"
        />

        {/* Main heading with gold gradient */}
        <div className="absolute top-[83px] left-3">
          <h1 className="mt-[-1.00px] bg-[linear-gradient(90deg,rgba(211,153,57,1)_0%,rgba(251,231,162,1)_22%,rgba(220,170,79,1)_52%,rgba(251,222,167,1)_76%,rgba(225,180,83,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-www-lorespresso-com-semantic-heading-1 font-[number:var(--www-lorespresso-com-semantic-heading-1-font-weight)] text-transparent text-[length:var(--www-lorespresso-com-semantic-heading-1-font-size)] tracking-[var(--www-lorespresso-com-semantic-heading-1-letter-spacing)] leading-[var(--www-lorespresso-com-semantic-heading-1-line-height)] whitespace-nowrap [font-style:var(--www-lorespresso-com-semantic-heading-1-font-style)]">
            Capsules de café
          </h1>
        </div>

        {/* Promotional text */}
        <div className="absolute top-[167px] left-3 max-w-[734px]">
          <p className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomwhite text-lg leading-6">
            Profitez de 20 % de remise sur les capsules dès 45 € d&#39;achat et
            jusqu&#39;à 25 % sur les
            <br />
            formats de 50 capsules. NOUVEAU : Un cadeau vous attend dès 65 €
            d&#39;achat .
          </p>
        </div>
      </div>
    </section>
  );
};

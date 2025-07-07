import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const CustomerReviewsSection = (): JSX.Element => {
  // Footer column data for L'OR SHOP
  const shopLinks = [
    {
      text: "Capsule café",
      url: "https://www.lorespresso.com/fr_fr/capsules-de-cafe",
    },
    {
      text: "Machine à café",
      url: "https://www.lorespresso.com/fr_fr/machine-a-cafe",
    },
    {
      text: "Capsule espresso",
      url: "https://www.lorespresso.com/fr_fr/capsules-de-cafe/espresso",
    },
    {
      text: "Capsule ristretto",
      url: "https://www.lorespresso.com/fr_fr/capsules-de-cafe/ristretto",
    },
    {
      text: "Café grains",
      url: "https://www.lorespresso.com/fr_fr/cafe-en-grain",
    },
    { text: "Café moulu", url: "https://www.lorespresso.com/fr_fr/cafe-moulu" },
  ];

  // Footer column data for QUI SOMMES-NOUS
  const aboutLinks = [
    {
      text: "Notre histoire",
      url: "https://www.lorespresso.com/fr_fr/cp/notre-histoire",
    },
    {
      text: "L'art de la fabrication",
      url: "https://www.lorespresso.com/fr_fr/cp/notre-histoire/la-fabrication",
    },
    {
      text: "Recyclage",
      url: "https://www.lorespresso.com/fr_fr/cp/notre-histoire/recyclage",
    },
    {
      text: "Machine à café professionnelle",
      url: "https://www.jacobsdouweegbertsprofessional.fr/machines/machines-a-cafe",
    },
    {
      text: "L'OR La Boutique",
      url: "https://www.lorespresso.com/fr_fr/cp/lor-la-boutique-paris",
    },
    {
      text: "La Transat Café L'OR",
      url: "https://www.lorespresso.com/fr_fr/cp/transat-cafe-lor",
    },
  ];

  // Footer column data for SUPPORT
  const supportLinks = [
    {
      text: "Assistance support",
      url: "https://www.lorespresso.com/fr_fr/cp/machine-support",
    },
    {
      text: "Utilisation machine",
      url: "https://www.lorespresso.com/fr_fr/cp/machine-support/utilisation",
    },
    {
      text: "Nettoyage L'OR",
      url: "https://www.lorespresso.com/fr_fr/cp/machine-support/nettoyage",
    },
    {
      text: "Dépannage",
      url: "https://www.lorespresso.com/fr_fr/cp/machine-support/depannage",
    },
  ];

  // Footer column data for AIDE ET ASSISTANCE
  const helpLinks = [
    { text: "Contact/Aide", url: "https://www.lorespresso.com/fr_fr/faq" },
    {
      text: "Questions fréquentes",
      url: "https://www.lorespresso.com/fr_fr/faq",
    },
    {
      text: "Compatibilité",
      url: "https://www.lorespresso.com/fr_fr/cp/notre-histoire/compatibilite",
    },
    {
      text: "Conditions de promotion",
      url: "https://www.lorespresso.com/fr_fr/cp/conditions-promo",
    },
    {
      text: "Livraison et retours",
      url: "https://www.lorespresso.com/fr_fr/cp/conditions-generales",
    },
    {
      text: "Gérer vos cookies",
      url: "https://www.lorespresso.com/fr_fr/capsules-de-cafe",
    },
  ];

  // Function to render a footer column
  const renderFooterColumn = (
    title: string,
    links: { text: string; url: string }[],
    className: string,
  ) => (
    <div
      className={`inline-flex flex-col items-start pl-4 pr-0 py-0 ${className}`}
    >
      <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
        <div className="flex flex-col items-start self-stretch w-full relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-www-lorespresso-com-semantic-item font-[number:var(--www-lorespresso-com-semantic-item-font-weight)] text-wwwlorespressocomdusty-gray text-[length:var(--www-lorespresso-com-semantic-item-font-size)] tracking-[var(--www-lorespresso-com-semantic-item-letter-spacing)] leading-[var(--www-lorespresso-com-semantic-item-line-height)] whitespace-nowrap [font-style:var(--www-lorespresso-com-semantic-item-font-style)]">
            {title}
          </div>
        </div>

        {links.map((link, index) => (
          <div
            key={index}
            className="flex items-center self-stretch w-full relative flex-[0_0_auto]"
          >
            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <a
                className="relative w-fit mt-[-1.00px] [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomwhite text-sm tracking-[0] leading-4 whitespace-nowrap"
                href={link.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.text}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <footer className="w-full border-t border-white bg-wwwlorespressocomblack py-px px-60">
      <Card className="relative w-full max-w-[1440px] h-72 bg-transparent border-none mx-auto">
        <CardContent className="p-0 relative h-full">
          {/* Logo */}
          <div className="flex flex-col w-[84px] items-center absolute top-10 left-10">
            <div className="inline-flex items-center justify-center relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <div className="relative w-[84px] h-[65.63px] bg-[url(/l-or-logo.png)] bg-cover bg-[50%_50%]" />
              </div>
            </div>
          </div>

          {/* Empty div preserved from original */}
          <div className="absolute w-[172px] h-[58px] top-10 left-[1228px]" />

          {/* Footer columns */}
          {renderFooterColumn(
            "L'OR SHOP",
            shopLinks,
            "absolute top-10 left-[213px]",
          )}
          {renderFooterColumn(
            "QUI SOMMES-NOUS",
            aboutLinks,
            "absolute top-10 left-[431px]",
          )}
          {renderFooterColumn(
            "SUPPORT",
            supportLinks,
            "absolute top-10 left-[734px]",
          )}
          {renderFooterColumn(
            "AIDE ET ASSISTANCE",
            helpLinks,
            "absolute top-10 left-[961px]",
          )}
        </CardContent>
      </Card>
    </footer>
  );
};

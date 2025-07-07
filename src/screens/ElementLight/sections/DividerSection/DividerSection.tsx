import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const DividerSection = (): JSX.Element => {
  // Footer links data
  const footerLinks = [
    {
      text: "Conditions générales",
      href: "https://www.lorespresso.com/fr_fr/cp/conditions-generales",
    },
    {
      text: "Conditions d'utilisation",
      href: "https://www.lorespresso.com/fr_fr/cp/conditions-dutilisation",
    },
    {
      text: "Politique de confidentialité",
      href: "https://www.lorespresso.com/fr_fr/cp/politique-de-confidentialite",
    },
    {
      text: "Informations commerciales",
      href: "https://www.lorespresso.com/fr_fr/cp/informations-commerciales",
    },
  ];

  return (
    <footer className="w-full bg-wwwlorespressocomblack px-60 py-0">
      <div className="w-full max-w-[1440px] flex flex-col items-start border-t border-[#3c3c3c] pt-[41px] pb-10 px-10">
        <div className="flex items-center w-full z-[1]">
          <div className="relative w-[242.63px] h-px" />

          <div className="inline-flex items-start justify-center gap-6">
            <div className="inline-flex flex-col items-start">
              <div className="mt-[-1.00px] [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdusty-gray text-sm tracking-[-0.56px]">
                © 2025 Jacobs Douwe Egberts
              </div>
            </div>

            {footerLinks.map((link, index) => (
              <div key={index} className="inline-flex flex-col items-start">
                <a
                  className="mt-[-1.00px] [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdusty-gray text-sm tracking-[-0.56px]"
                  href={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.text}
                </a>
              </div>
            ))}
          </div>

          <div className="flex w-[266.63px] pl-6 pr-0 py-0 flex-col items-start">
            <div className="flex items-start justify-end w-full">
              <div className="relative w-[167.41px]">
                <div className="flex w-[46px] h-[22px] pl-0 pr-4 py-0 absolute top-[3px] left-0 flex-col items-start">
                  <div className="flex w-[30px] h-[22px] items-center justify-center relative rounded-[3px] overflow-hidden">
                    <div className="flex flex-col items-start relative flex-1 grow">
                      <div className="relative w-[30px] h-[22px] overflow-hidden">
                        <div className="relative h-[30px] -top-1">
                          <img
                            className="absolute w-[30px] h-[22px] top-1 left-0"
                            alt="Group"
                            src="/group.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  className="absolute w-[122px] h-7 -top-0.5 left-[46px] [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomwhite text-base tracking-[0] leading-[27.2px] whitespace-nowrap"
                  href="https://www.lorespresso.com/fr_fr/switch-stores"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  France - Français
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6 bg-transparent" />

        <div className="flex w-full">
          <div className="flex flex-col min-h-3.5 items-center w-full">
            <div className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-center text-sm leading-[14px]">
              <span className="text-[#969696] tracking-[-0.08px]">
                Tous les prix incluent la TVA et excluent tous{" "}
              </span>

              <a
                href="https://www.lorespresso.com/fr_fr/cp/conditions-generales"
                rel="noopener noreferrer"
                target="_blank"
                className="text-[#ebbc55] tracking-[-0.08px]"
              >
                les frais (de livraison) supplémentaires.
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

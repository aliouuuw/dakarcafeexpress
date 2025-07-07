import React from "react";
import { Button } from "../../../../components/ui/button";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";
import { Separator } from "../../../../components/ui/separator";

export const MainWrapperSection = (): JSX.Element => {
  // Filter options data
  const filterOptions = [
    { label: "Taille capsules", icon: "/icon.svg" },
    { label: "Intensité", icon: "/icon.svg" },
    { label: "Taille de la tasse", icon: "/icon.svg" },
    { label: "Offre spécifique", icon: "/icon.svg" },
    { label: "Saveurs", icon: "/icon.svg" },
  ];

  return (
    <section className="flex flex-col items-start px-60 py-0 relative w-full flex-[0_0_auto] z-[1] bg-wwwlorespressocomwhite">
      <div className="flex flex-col max-w-[1440px] items-start px-10 py-0 relative w-full flex-[0_0_auto]">
        <div className="flex items-start pt-6 pb-4 px-0 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center justify-between relative flex-1 self-stretch grow">
            <ScrollArea className="w-full max-w-[852px]">
              <div className="flex items-center space-x-6">
                {filterOptions.map((option, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="h-8 px-0 bg-wwwlorespressocomwhite"
                  >
                    <span className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-base">
                      {option.label}
                    </span>
                    <div className="flex w-6 h-5 items-center justify-center pl-1">
                      <div className="w-5 h-5 bg-[url(/icon.svg)] bg-[100%_100%]" />
                    </div>
                  </Button>
                ))}

                <Button
                  variant="ghost"
                  className="h-8 px-0 bg-wwwlorespressocomwhite"
                >
                  <div className="inline-flex items-center">
                    <div className="w-6 h-5 bg-[url(/sortandfilter.svg)] bg-[100%_100%] mr-1" />
                    <span className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-base">
                      Tous les filtres
                    </span>
                    <div className="flex w-6 h-5 items-center justify-center pl-1">
                      <div className="w-5 h-5 bg-[url(/icon.svg)] bg-[100%_100%]" />
                    </div>
                  </div>
                </Button>
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>

            <Button
              variant="ghost"
              className="h-8 bg-wwwlorespressocomwhite ml-4"
            >
              <span className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-base">
                Trier par
              </span>
              <div className="flex w-6 h-5 items-center justify-center pl-1">
                <div className="w-5 h-5 bg-[url(/icon.svg)] bg-[100%_100%]" />
              </div>
            </Button>
          </div>
        </div>

        <Separator className="w-full border-[#969696]" />
      </div>
    </section>
  );
};

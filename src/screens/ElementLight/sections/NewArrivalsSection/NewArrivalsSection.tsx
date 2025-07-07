import { ShoppingCartIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const NewArrivalsSection = (): JSX.Element => {
  return (
    <Card className="flex flex-col w-full max-w-[328px] items-start rounded-lg bg-wwwlorespressocomwild-sand overflow-hidden">
      <div className="w-full pt-[72.66px] px-[32.66px] pb-[1.84px] bg-wwwlorespressocomwild-sand rounded-lg overflow-hidden">
        <div className="w-full h-[262.69px] bg-[url(/picture---espresso-or-rose.png)] bg-cover bg-center rounded-t-lg" />
      </div>

      <CardContent className="w-full p-0">
        <div className="w-full bg-[linear-gradient(270deg,rgba(214,214,214,0)_0%,rgba(214,214,214,1)_50%,rgba(214,214,214,0)_100%)] p-4">
          <div className="py-[12.8px] w-full">
            <a
              className="block w-full [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-2xl tracking-[-0.96px] leading-8"
              href="https://www.lorespresso.com/fr_fr/p/espresso-or-rose"
              rel="noopener noreferrer"
              target="_blank"
            >
              Espresso Or Rose
            </a>
          </div>

          <div className="flex flex-wrap min-h-5 items-center gap-[0px_8px] pt-[2.5px] pb-[3px] w-full">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={`star-${star}`} className="w-3.5 h-3.5" />
              ))}
            </div>

            <div className="inline-flex items-start">
              <div className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdusty-gray text-sm leading-[14px] whitespace-nowrap">
                130 avis
              </div>
            </div>
          </div>

          <div className="pb-4 w-full">
            <div className="pt-1 w-full">
              <div className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdove-gray text-base tracking-[-0.64px] leading-5">
                Tasses 10 | Intensité 7
              </div>
            </div>

            <div className="pt-2 w-full">
              <div className="flex items-center w-full">
                <div className="pr-2">
                  <div className="w-[25px]" />
                </div>

                <div className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdove-gray text-base tracking-[-0.64px] leading-5 whitespace-nowrap">
                  Espresso
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 w-full">
            <div className="flex items-end justify-between w-full">
              <div className="pt-[0.89px] pb-[0.5px]">
                <div className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-lg leading-8 whitespace-nowrap">
                  3,79 €
                </div>
              </div>

              <Button
                size="icon"
                className="w-8 h-8 rounded-2xl bg-[linear-gradient(90deg,rgba(217,170,70,1)_0%,rgba(255,215,123,1)_50%,rgba(217,170,70,1)_100%)] p-0"
              >
                <ShoppingCartIcon className="w-5 h-5 text-white" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

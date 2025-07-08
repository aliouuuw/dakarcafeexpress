import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const BestSellersSection = (): JSX.Element => {
  // Star rating data
  const stars = Array(5).fill(null);

  return (
    <Card className="w-full max-w-[328px] rounded-lg bg-wwwlorespressocomwild-sand overflow-hidden">
      <div className="px-[32.66px] pt-[72.66px] pb-[1.84px] bg-wwwlorespressocomwild-sand rounded-lg overflow-hidden">
        <div
          className="w-full h-[262.69px] bg-cover bg-center"
          style={{ backgroundImage: "url(/picture---espresso-maranello.png)" }}
        />
      </div>

      <CardContent className="p-0">
        <div className="flex flex-col bg-[linear-gradient(270deg,rgba(214,214,214,0)_0%,rgba(214,214,214,1)_50%,rgba(214,214,214,0)_100%)] p-4">
          <div className="py-[12.8px]">
            <a
              className="block [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-2xl tracking-[-0.96px] leading-8"
              href="https://www.lorespresso.com/fr_fr/p/maranello-espresso"
              rel="noopener noreferrer"
              target="_blank"
            >
              Espresso Maranello
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-[0px_8px] pt-[2.5px] pb-[3px] min-h-5">
            <div className="flex">
              {stars.map((_, index) => (
                <div key={`star-${index}`} className="w-3.5" />
              ))}
            </div>
            <div className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdusty-gray text-sm leading-[14px]">
              55 avis
            </div>
          </div>

          <div className="pt-0 pb-4">
            <div className="pt-1">
              <div className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdove-gray text-base tracking-[-0.64px] leading-5">
                Tasses 10 | Intensité 10
              </div>
            </div>

            <div className="pt-2">
              <div className="flex items-center">
                <div className="pr-2">
                  <div className="w-[25px]" />
                </div>
                <div className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdove-gray text-base tracking-[-0.64px] leading-5">
                  Espresso
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <div className="flex items-end justify-between">
              <div className="pt-[0.89px] pb-[0.5px]">
                <div className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-lg leading-8">
                  3,79 €
                </div>
              </div>

              <Button
                className="w-8 h-8 rounded-2xl p-0 bg-[linear-gradient(90deg,rgba(217,170,70,1)_0%,rgba(255,215,123,1)_50%,rgba(217,170,70,1)_100%)] hover:bg-[linear-gradient(90deg,rgba(217,170,70,1)_0%,rgba(255,215,123,1)_50%,rgba(217,170,70,1)_100%)]"
                size="icon"
              >
                <ShoppingCartIcon className="w-5 h-5 text-wwwlorespressocomblack" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

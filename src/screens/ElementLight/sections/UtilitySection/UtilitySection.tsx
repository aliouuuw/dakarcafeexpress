import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const UtilitySection = (): JSX.Element => {
  // Star rating elements
  const starCount = 5;

  return (
    <Card className="w-full max-w-[328px] rounded-lg bg-wwwlorespressocomwild-sand overflow-hidden">
      <div className="relative">
        {/* Product image */}
        <div className="h-[262.69px] w-full bg-[url(/picture---decaffeinato-maranello.png)] bg-cover bg-center" />

        {/* Web exclusive badge */}
        <div className="absolute top-0 left-0">
          <div className="relative">
            <Badge className="rounded-[8px_0px_8px_0px] bg-wwwlorespressocomcod-gray text-wwwlorespressocomwhite px-2 py-0.5 [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-base leading-[27.2px]">
              Exclu Web
            </Badge>
            <div className="absolute w-[18px] h-[43px] top-px left-[87px] rounded-[0px_0px_7px_0px] rotate-[37deg]" />
          </div>
        </div>
      </div>

      <CardContent className="p-0">
        {/* Gradient separator */}
        <div className="w-full bg-[linear-gradient(270deg,rgba(214,214,214,0)_0%,rgba(214,214,214,1)_50%,rgba(214,214,214,0)_100%)] p-4 flex flex-col gap-4">
          {/* Product title */}
          <div className="py-[12.8px]">
            <a
              className="block [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-2xl tracking-[-0.96px] leading-8"
              href="https://www.lorespresso.com/fr_fr/p/maranello-decaffeinato"
              rel="noopener noreferrer"
              target="_blank"
            >
              Decaffeinato Maranello
            </a>
          </div>

          {/* Ratings */}
          <div className="flex flex-wrap items-center gap-2 pt-[2.5px] pb-[3px]">
            <div className="flex">
              {Array(starCount)
                .fill(null)
                .map((_, index) => (
                  <div key={`star-${index}`} className="w-3.5 h-3.5" />
                ))}
            </div>
            <span className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdusty-gray text-sm leading-[14px]">
              37 avis
            </span>
          </div>

          {/* Product details */}
          <div className="pb-4">
            <div className="flex flex-col gap-2">
              <p className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdove-gray text-base tracking-[-0.64px] leading-5 pt-1">
                Tasses 10 | Intensité 10
              </p>

              <div className="flex items-center pt-2">
                <div className="pr-2">
                  <div className="w-[25px]" />
                </div>
                <span className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdove-gray text-base tracking-[-0.64px] leading-5">
                  Espresso
                </span>
              </div>
            </div>
          </div>

          {/* Price and add to cart */}
          <div className="flex items-end justify-between pt-4">
            <div className="pt-[0.89px] pb-[0.5px]">
              <span className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-lg leading-8">
                3,49 €
              </span>
            </div>

            <Button
              size="icon"
              className="w-8 h-8 rounded-2xl bg-[linear-gradient(90deg,rgba(217,170,70,1)_0%,rgba(255,215,123,1)_50%,rgba(217,170,70,1)_100%)] p-0"
              aria-label="Add to cart"
            >
              <div className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

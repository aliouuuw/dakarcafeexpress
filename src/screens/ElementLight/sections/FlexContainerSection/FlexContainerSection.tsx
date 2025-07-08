import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const FlexContainerSection = (): JSX.Element => {
  // Star rating data
  const totalStars = 5;
  const reviewCount = "23 avis";

  return (
    <Card className="flex flex-col w-full max-w-[328px] rounded-lg overflow-hidden bg-wwwlorespressocomwild-sand">
      <div className="relative">
        {/* Product image */}
        <div className="h-[262.69px] w-full bg-[url(/picture---espresso-brazil-x30.png)] bg-cover bg-center" />

        {/* New product badge */}
        <div className="absolute top-0 left-0">
          <div className="relative">
            <Badge className="rounded-[8px_0px_8px_0px] bg-wwwlorespressocomcod-gray text-wwwlorespressocomwhite px-2 py-0.5 [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-base">
              Nouveauté
            </Badge>
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
              href="https://www.lorespresso.com/fr_fr/p/espresso-brazil-30"
              rel="noopener noreferrer"
              target="_blank"
            >
              Espresso Brazil x30
            </a>
          </div>

          {/* Ratings */}
          <div className="flex items-center gap-2 pt-[2.5px] pb-[3px]">
            <div className="flex">
              {Array(totalStars)
                .fill(null)
                .map((_, index) => (
                  <div key={`star-${index}`} className="w-3.5" />
                ))}
            </div>
            <div className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdusty-gray text-sm leading-[14px]">
              {reviewCount}
            </div>
          </div>

          {/* Product details */}
          <div className="pb-4">
            <div className="flex flex-col gap-2">
              <div className="pt-1">
                <div className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdove-gray text-base tracking-[-0.64px] leading-5">
                  Tasses 30 | Intensité 8
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
          </div>

          {/* Price and add to cart */}
          <div className="pt-4 flex items-end justify-between">
            <div className="pt-[0.89px] pb-[0.5px]">
              <div className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-lg leading-8">
                9,39 €
              </div>
            </div>
            <div>
              <button className="w-8 h-8 rounded-2xl bg-[linear-gradient(90deg,rgba(217,170,70,1)_0%,rgba(255,215,123,1)_50%,rgba(217,170,70,1)_100%)] flex items-center justify-center">
                <div className="w-5 h-5">
                  <ShoppingCartIcon className="w-5 h-5 text-wwwlorespressocomblack" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

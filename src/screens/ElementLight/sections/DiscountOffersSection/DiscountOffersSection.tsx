import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const DiscountOffersSection = (): JSX.Element => {
  // Star rating data
  const totalStars = 5;
  const reviewCount = "1 avis";

  return (
    <Card className="w-full bg-wwwlorespressocomwild-sand rounded-lg overflow-hidden">
      <div className="relative">
        {/* Product image */}
        <div className="h-[262.69px] w-full bg-[url(/picture---iced-coffee-xxl.png)] bg-cover bg-center" />

        {/* New product badge */}
        <div className="absolute top-0 left-0">
          <div className="relative">
            <Badge className="rounded-[8px_0px_8px_0px] bg-wwwlorespressocomcod-gray text-wwwlorespressocomwhite px-2 py-0.5">
              <span className="[font-family:'Avenir_Next-Regular',Helvetica] text-base leading-[27.2px]">
                Nouveauté
              </span>
            </Badge>
          </div>
        </div>
      </div>

      <CardContent className="p-0">
        {/* Separator line */}
        <div className="w-full h-[1px] bg-[linear-gradient(270deg,rgba(214,214,214,0)_0%,rgba(214,214,214,1)_50%,rgba(214,214,214,0)_100%)]"></div>

        {/* Product information */}
        <div className="p-4">
          {/* Product title */}
          <div className="py-[12.8px]">
            <a
              className="block [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-2xl tracking-[-0.96px] leading-8"
              href="https://www.lorespresso.com/fr_fr/p/cafe-glace-4057832"
              rel="noopener noreferrer"
              target="_blank"
            >
              Iced Coffee XXL
            </a>
          </div>

          {/* Ratings */}
          <div className="flex items-center gap-2 pt-[2.5px] pb-[3px]">
            <div className="flex">
              {Array(totalStars)
                .fill(null)
                .map((_, index) => (
                  <div key={`star-${index}`} className="w-3.5 h-3.5" />
                ))}
            </div>
            <span className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdusty-gray text-sm leading-[14px]">
              {reviewCount}
            </span>
          </div>

          {/* Product details */}
          <div className="pt-0 pb-[19px]">
            <div className="pt-1">
              <p className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdove-gray text-base tracking-[-0.64px] leading-5">
                Tasses 10 | Intensité 7
              </p>
            </div>

            <div className="pt-2">
              <div className="flex items-center">
                <div className="pr-2">
                  <div className="w-[25px]" />
                </div>
                <span className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdove-gray text-base tracking-[-0.64px] leading-5">
                  Lungo
                </span>
              </div>
            </div>
          </div>

          {/* Price and add to cart */}
          <div className="pt-4 flex items-end justify-between">
            <div className="pt-[0.89px] pb-[0.5px]">
              <span className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-lg leading-8">
                5,39 €
              </span>
            </div>

            <Button
              className="w-8 h-8 rounded-2xl p-0 bg-[linear-gradient(90deg,rgba(217,170,70,1)_0%,rgba(255,215,123,1)_50%,rgba(217,170,70,1)_100%)] hover:bg-[linear-gradient(90deg,rgba(217,170,70,1)_0%,rgba(255,215,123,1)_50%,rgba(217,170,70,1)_100%)]"
              aria-label="Add to cart"
            >
              <ShoppingCartIcon className="w-5 h-5 text-wwwlorespressocomwhite" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

import { ShoppingCartIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ComponentNodeSection = (): JSX.Element => {
  // Star rating data
  const totalStars = 5;
  const reviews = "14 avis";

  return (
    <Card className="flex flex-col w-full max-w-[328px] rounded-lg bg-wwwlorespressocomwild-sand overflow-hidden">
      <div className="relative">
        {/* Product image */}
        <div
          className="w-full h-[262.69px] bg-cover bg-center"
          style={{ backgroundImage: "url(/picture---espresso-brazil.png)" }}
        />

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
        <div className="bg-[linear-gradient(270deg,rgba(214,214,214,0)_0%,rgba(214,214,214,1)_50%,rgba(214,214,214,0)_100%)] p-4 flex flex-col gap-4">
          {/* Product title */}
          <div className="py-[12.8px]">
            <a
              className="block [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-2xl tracking-[-0.96px] leading-8"
              href="https://www.lorespresso.com/fr_fr/p/espresso-brazil"
              rel="noopener noreferrer"
              target="_blank"
            >
              Espresso Brazil
            </a>
          </div>

          {/* Ratings */}
          <div className="flex flex-wrap items-center gap-2 pt-[2.5px] pb-[3px]">
            <div className="flex">
              {Array(totalStars)
                .fill(null)
                .map((_, index) => (
                  <div key={index} className="w-3.5" />
                ))}
            </div>
            <div className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdusty-gray text-sm leading-[14px]">
              {reviews}
            </div>
          </div>

          {/* Product details */}
          <div className="pb-4">
            <div className="pt-1">
              <div className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdove-gray text-base tracking-[-0.64px] leading-5">
                Tasses 10 | Intensité 8
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

          {/* Price and add to cart */}
          <div className="pt-4 flex items-end justify-between">
            <div className="pt-[0.89px] pb-[0.5px]">
              <div className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-lg leading-8">
                3,49 €
              </div>
            </div>

            <Button
              className="w-8 h-8 rounded-2xl p-0 bg-[linear-gradient(90deg,rgba(217,170,70,1)_0%,rgba(255,215,123,1)_50%,rgba(217,170,70,1)_100%)]"
              size="icon"
            >
              <ShoppingCartIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroImageSection = (): JSX.Element => {
  // Star rating data
  const totalStars = 5;
  const reviewCount = "276 avis";

  return (
    <Card className="w-full rounded-lg overflow-hidden bg-wwwlorespressocomwild-sand">
      <div className="relative">
        {/* Product image */}
        <div className="h-[262.69px] w-full bg-[url(/picture---capsules-espresso-decaffeinato-1.png)] bg-cover bg-center" />

        {/* Best seller badge */}
        <div className="absolute top-0 left-0">
          <Badge className="rounded-[8px_0px_8px_0px] bg-wwwlorespressocomcod-gray text-wwwlorespressocomwhite px-2 py-0.5 [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-base leading-[27.2px]">
            Meilleures ventes
          </Badge>
        </div>
      </div>

      <CardContent className="p-0">
        {/* Product info section with gradient background */}
        <div className="bg-[linear-gradient(270deg,rgba(214,214,214,0)_0%,rgba(214,214,214,1)_50%,rgba(214,214,214,0)_100%)] p-4 flex flex-col gap-4">
          {/* Product title */}
          <div className="py-[12.8px]">
            <a
              className="block [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-2xl tracking-[-0.96px] leading-8"
              href="https://www.lorespresso.com/fr_fr/p/espresso-decaffeinato-06"
              rel="noopener noreferrer"
              target="_blank"
            >
              Espresso Decaffeinato
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
            <span className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdusty-gray text-sm tracking-[0] leading-[14px]">
              {reviewCount}
            </span>
          </div>

          {/* Product details */}
          <div className="pb-4">
            <div className="flex flex-col gap-2">
              <p className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdove-gray text-base tracking-[-0.64px] leading-5">
                Tasses 10 | Intensité 6
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
          <div className="flex justify-between items-end pt-4">
            <span className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-lg tracking-[0] leading-8">
              3,49 €
            </span>

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

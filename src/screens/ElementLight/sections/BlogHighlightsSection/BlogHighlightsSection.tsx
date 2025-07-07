import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../../../components/ui/card";

export const BlogHighlightsSection = (): JSX.Element => {
  return (
    <Card className="flex flex-col w-full max-w-[328px] bg-wwwlorespressocomwild-sand rounded-lg overflow-hidden">
      <div className="relative">
        {/* Product image */}
        <div
          className="w-full h-[262.69px] bg-cover bg-center"
          style={{ backgroundImage: "url(/picture---extra-long-8.png)" }}
        />

        {/* Category badge */}
        <div className="absolute top-0 left-0">
          <div className="relative">
            <Badge className="px-2 py-0.5 bg-wwwlorespressocomcod-gray text-wwwlorespressocomwhite rounded-[8px_0px_8px_0px] [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-base">
              Capsules XXL
            </Badge>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-[linear-gradient(270deg,rgba(214,214,214,0)_0%,rgba(214,214,214,1)_50%,rgba(214,214,214,0)_100%)]">
        <CardHeader className="px-4 py-[12.8px]">
          <a
            className="self-stretch [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-2xl tracking-[-0.96px] leading-8"
            href="https://www.lorespresso.com/fr_fr/p/extra-long-8"
            rel="noopener noreferrer"
            target="_blank"
          >
            Extra Long 8
          </a>
        </CardHeader>

        <CardContent className="p-4 pt-0">
          {/* Ratings */}
          <div className="flex flex-wrap items-center gap-2 pt-[2.5px] pb-[3px]">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={`star-${star}`} className="w-3.5" />
              ))}
            </div>
            <div className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdusty-gray text-sm leading-[14px]">
              273 avis
            </div>
          </div>

          {/* Product details */}
          <div className="flex flex-col pt-0 pb-[19px]">
            <div className="pt-1">
              <div className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdove-gray text-base tracking-[-0.64px] leading-5">
                Tasses 10 | Intensité 8
              </div>
            </div>

            <div className="flex items-center pt-2">
              <div className="pr-2">
                <div className="w-[25px]" />
              </div>
              <div className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdove-gray text-base tracking-[-0.64px] leading-5">
                Lungo
              </div>
            </div>
          </div>

          {/* Price and add to cart */}
          <div className="flex items-end justify-between pt-4">
            <div className="pt-[0.89px] pb-[0.5px]">
              <div className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-lg leading-8">
                5,39 €
              </div>
            </div>

            <Button
              className="w-8 h-8 p-0 rounded-2xl bg-[linear-gradient(90deg,rgba(217,170,70,1)_0%,rgba(255,215,123,1)_50%,rgba(217,170,70,1)_100%)]"
              size="icon"
            >
              <div className="w-5 h-5" />
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

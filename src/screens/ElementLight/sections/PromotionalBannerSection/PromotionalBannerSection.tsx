import { PlusIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const PromotionalBannerSection = (): JSX.Element => {
  return (
    <Card className="w-full rounded-lg bg-wwwlorespressocomwild-sand overflow-hidden">
      <div className="relative">
        {/* Product Image */}
        <div className="h-[262.69px] w-full bg-[url(/picture---double-barista-selection.png)] bg-cover bg-center" />

        {/* Web Exclusive Badge */}
        <div className="absolute top-0 left-0">
          <div className="relative">
            <Badge className="rounded-[8px_0px_8px_0px] bg-wwwlorespressocomcod-gray text-wwwlorespressocomwhite px-2 py-0.5 [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-base leading-[27.2px]">
              Exclu Web
            </Badge>
          </div>
        </div>
      </div>

      <div className="bg-[linear-gradient(270deg,rgba(214,214,214,0)_0%,rgba(214,214,214,1)_50%,rgba(214,214,214,0)_100%)]">
        <CardContent className="p-4 flex flex-col gap-4">
          {/* Product Title */}
          <div className="py-[12.8px]">
            <a
              className="block [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-2xl tracking-[-0.96px] leading-8"
              href="https://www.lorespresso.com/fr_fr/p/double-barista-selection"
              rel="noopener noreferrer"
              target="_blank"
            >
              Double Barista Selection
            </a>
          </div>

          {/* Ratings */}
          <div className="flex flex-wrap items-center gap-2 pt-[2.5px] pb-[3px]">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={`star-${star}`} className="w-3.5" />
              ))}
            </div>
            <div className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdusty-gray text-sm leading-[14px]">
              326 avis
            </div>
          </div>

          {/* Product Details */}
          <div className="pb-[20.39px]">
            <div className="flex flex-col gap-2">
              <div className="pt-1">
                <div className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdove-gray text-base tracking-[-0.64px] leading-5">
                  Tasses 10 | Intensité 13
                </div>
              </div>
              <div className="pt-2">
                <div className="flex items-center">
                  <div className="pr-2">
                    <div className="w-[25px]" />
                  </div>
                  <div className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdove-gray text-base tracking-[-0.64px] leading-5">
                    Ristretto
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Availability and Action */}
          <div className="pt-4 flex items-center justify-between">
            <div className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdove-gray text-sm leading-[23.8px]">
              Bientôt de retour en stock
            </div>
            <div>
              <div className="w-8 h-8 rounded-2xl bg-[linear-gradient(90deg,rgba(217,170,70,1)_0%,rgba(255,215,123,1)_50%,rgba(217,170,70,1)_100%)] flex items-center justify-center">
                <PlusIcon className="w-4 h-4" />
              </div>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

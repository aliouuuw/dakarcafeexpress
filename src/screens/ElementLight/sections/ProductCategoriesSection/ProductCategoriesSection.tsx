import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ProductCategoriesSection = (): JSX.Element => {
  return (
    <Card className="w-full max-w-[328px] rounded-lg bg-wwwlorespressocomwild-sand overflow-hidden">
      <div className="relative w-full h-[262.69px] bg-[url(/picture---espresso-biondo.png)] bg-cover bg-center" />

      <div className="bg-[linear-gradient(270deg,rgba(214,214,214,0)_0%,rgba(214,214,214,1)_50%,rgba(214,214,214,0)_100%)]">
        <CardContent className="p-4 flex flex-col gap-2">
          {/* Product Title */}
          <div className="py-[12.8px]">
            <a
              className="block [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-2xl tracking-[-0.96px] leading-8"
              href="https://www.lorespresso.com/fr_fr/p/espresso-biondo"
              rel="noopener noreferrer"
              target="_blank"
            >
              Espresso Biondo
            </a>
          </div>

          {/* Ratings */}
          <div className="flex flex-wrap items-center gap-2 pt-[2.5px] pb-[3px]">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} className="w-3.5" />
              ))}
            </div>
            <div className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdusty-gray text-sm leading-[14px]">
              52 avis
            </div>
          </div>

          {/* Product Details */}
          <div className="pb-4">
            <div className="pt-1">
              <div className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdove-gray text-base tracking-[-0.64px] leading-5">
                Tasses 10 | Intensité 4
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

          {/* Price and Add to Cart */}
          <div className="pt-4 flex items-end justify-between">
            <div className="pt-[0.89px] pb-[0.5px]">
              <div className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-lg leading-8">
                3,49 €
              </div>
            </div>

            <Button
              size="icon"
              className="w-8 h-8 rounded-2xl bg-[linear-gradient(90deg,rgba(217,170,70,1)_0%,rgba(255,215,123,1)_50%,rgba(217,170,70,1)_100%)] p-0"
            >
              <ShoppingCartIcon className="w-5 h-5" />
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

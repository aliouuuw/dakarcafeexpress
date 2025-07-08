import { StarIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturedProductsSection = (): JSX.Element => {
  // StarIcon rating data
  const rating = {
    stars: 5,
    reviews: 342,
  };

  return (
    <Card className="w-full max-w-[328px] rounded-lg overflow-hidden bg-wwwlorespressocomwild-sand">
      <div className="relative overflow-hidden">
        <div className="h-[262.69px] w-full bg-[url(/picture---double-ristretto---lot-de-50-capsules.png)] bg-cover bg-center" />
      </div>

      <div className="bg-[linear-gradient(270deg,rgba(214,214,214,0)_0%,rgba(214,214,214,1)_50%,rgba(214,214,214,0)_100%)]">
        <CardContent className="p-4 flex flex-col gap-2">
          <div className="py-[12.8px]">
            <a
              className="block [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-2xl tracking-[-0.96px] leading-8"
              href="https://www.lorespresso.com/fr_fr/p/double-ristretto-5-packs"
              rel="noopener noreferrer"
              target="_blank"
            >
              Double Ristretto - lot de 50
              <br />
              Capsules
            </a>
          </div>

          <div className="flex items-center gap-2 pt-[2.5px] pb-[3px]">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  key={`star-${index}`}
                  className="w-3.5 h-3.5 text-wwwlorespressocomronchi"
                  fill="currentColor"
                />
              ))}
            </div>
            <span className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdusty-gray text-sm leading-[14px]">
              {rating.reviews} avis
            </span>
          </div>

          <div className="pt-1 pb-[17.39px]">
            <p className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdove-gray text-base tracking-[-0.64px] leading-5">
              Intensité 11/13
            </p>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <Badge
              variant="outline"
              className="bg-transparent border-none p-0 [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdove-gray text-sm leading-[23.8px]"
            >
              Bientôt de retour en stock
            </Badge>

            <Button
              size="icon"
              className="w-8 h-8 rounded-2xl bg-[linear-gradient(90deg,rgba(217,170,70,1)_0%,rgba(255,215,123,1)_50%,rgba(217,170,70,1)_100%)] p-0"
              aria-label="Add to cart"
            >
              <div className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

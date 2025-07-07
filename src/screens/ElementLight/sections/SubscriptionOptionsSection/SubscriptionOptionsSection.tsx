import { StarIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const SubscriptionOptionsSection = (): JSX.Element => {
  // Star rating data
  const stars = Array(5).fill(null);

  return (
    <Card className="w-full max-w-[328px] rounded-lg overflow-hidden bg-wwwlorespressocomwild-sand border-none">
      <div className="relative">
        <div className="h-[262.69px] w-full bg-[url(/picture---pumpkin-spice-style---lots-de-50-capsules.png)] bg-cover bg-center" />
      </div>

      <div className="bg-[linear-gradient(270deg,rgba(214,214,214,0)_0%,rgba(214,214,214,1)_50%,rgba(214,214,214,0)_100%)]">
        <CardContent className="p-4 flex flex-col gap-2">
          <div className="py-3">
            <a
              className="block [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-2xl tracking-[-0.96px] leading-8"
              href="https://www.lorespresso.com/fr_fr/p/pumpkin-spice-style-multipack"
              rel="noopener noreferrer"
              target="_blank"
            >
              Pumpkin Spice Style - lots de
              <br />
              50 capsules
            </a>
          </div>

          <div className="flex items-center gap-2 py-1">
            <div className="flex">
              {stars.map((_, index) => (
                <StarIcon
                  key={index}
                  className="w-3.5 h-3.5 text-wwwlorespressocomronchi"
                />
              ))}
            </div>
            <span className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdusty-gray text-sm leading-[14px]">
              111 avis
            </span>
          </div>

          <div className="py-1">
            <p className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdove-gray text-base tracking-[-0.64px] leading-5">
              Intensité 8/13
            </p>
          </div>

          <div className="pt-4 flex items-end justify-between">
            <div className="pt-[0.89px]">
              <span className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-lg leading-8">
                25,75 €
              </span>
            </div>

            <Button
              className="w-8 h-8 rounded-2xl p-0 bg-[linear-gradient(90deg,rgba(217,170,70,1)_0%,rgba(255,215,123,1)_50%,rgba(217,170,70,1)_100%)] hover:bg-[linear-gradient(90deg,rgba(217,170,70,0.9)_0%,rgba(255,215,123,0.9)_50%,rgba(217,170,70,0.9)_100%)]"
              aria-label="Add to cart"
            >
              <div className="w-5 h-5" />
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const NewsletterSignupSection = (): JSX.Element => {
  // Star rating data
  const stars = Array(5).fill(null);

  return (
    <Card className="w-full max-w-[328px] rounded-lg overflow-hidden bg-wwwlorespressocomwild-sand border-none">
      <div className="relative w-full h-[262.69px]">
        <div className="w-full h-full bg-[url(/picture---extra-long-5---lot-de-50-capsules.png)] bg-cover bg-center" />
      </div>

      <div className="bg-[linear-gradient(270deg,rgba(214,214,214,0)_0%,rgba(214,214,214,1)_50%,rgba(214,214,214,0)_100%)]">
        <CardContent className="p-4 flex flex-col gap-2">
          <div className="py-[12.8px]">
            <a
              className="block [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-2xl tracking-[-0.96px] leading-8"
              href="https://www.lorespresso.com/fr_fr/p/extra-long-5-5-packs"
              rel="noopener noreferrer"
              target="_blank"
            >
              Extra Long 5 - lot de 50
              <br />
              Capsules
            </a>
          </div>

          <div className="flex items-center gap-2 pt-[2.5px] pb-[3px]">
            <div className="flex">
              {stars.map((_, index) => (
                <div key={`star-${index}`} className="w-3.5 h-3.5" />
              ))}
            </div>
            <span className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdusty-gray text-sm leading-[14px]">
              128 avis
            </span>
          </div>

          <div className="pt-1 pb-4">
            <p className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdove-gray text-base tracking-[-0.64px] leading-5">
              Intensité 5/13
            </p>
          </div>

          <div className="pt-4 flex items-end justify-between w-full">
            <div className="pt-[0.89px] pb-[0.5px]">
              <span className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-lg leading-8">
                26,95 €
              </span>
            </div>

            <Button
              className="w-8 h-8 rounded-2xl p-0 bg-[linear-gradient(90deg,rgba(217,170,70,1)_0%,rgba(255,215,123,1)_50%,rgba(217,170,70,1)_100%)] hover:bg-[linear-gradient(90deg,rgba(217,170,70,1)_0%,rgba(255,215,123,1)_50%,rgba(217,170,70,1)_100%)]"
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

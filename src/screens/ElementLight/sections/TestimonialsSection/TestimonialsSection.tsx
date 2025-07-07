import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsSection = (): JSX.Element => {
  // Star rating data
  const totalStars = 5;

  return (
    <Card className="w-full max-w-[328px] rounded-lg bg-wwwlorespressocomwild-sand overflow-hidden">
      <div className="relative">
        {/* Product image */}
        <div className="h-[262.69px] w-full bg-[url(/picture---pumpkin-spice-style.png)] bg-cover bg-center" />

        {/* Discount badge */}
        <div className="absolute top-0 left-0">
          <Badge className="rounded-[8px_0px_8px_0px] bg-wwwlorespressocomcod-gray text-wwwlorespressocomwhite [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-base px-2 py-0.5">
            -30 %
          </Badge>
        </div>
      </div>

      <div className="w-full bg-[linear-gradient(270deg,rgba(214,214,214,0)_0%,rgba(214,214,214,1)_50%,rgba(214,214,214,0)_100%)]">
        <CardContent className="p-4 flex flex-col gap-4">
          {/* Product title */}
          <div className="py-[12.8px]">
            <a
              className="block [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-2xl tracking-[-0.96px] leading-8"
              href="https://www.lorespresso.com/fr_fr/p/pumpkin-spice-style"
              rel="noopener noreferrer"
              target="_blank"
            >
              Pumpkin Spice Style
            </a>
          </div>

          {/* Ratings */}
          <div className="flex items-center gap-2 pt-[2.5px] pb-[3px]">
            <div className="flex">
              {Array.from({ length: totalStars }).map((_, index) => (
                <div key={`star-${index}`} className="w-3.5" />
              ))}
            </div>
            <span className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdusty-gray text-sm tracking-[0] leading-[14px]">
              111 avis
            </span>
          </div>

          {/* Product specifications */}
          <div className="pb-[19px]">
            <div className="pt-1">
              <p className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdove-gray text-base tracking-[-0.64px] leading-5">
                Tasses 10 | Intensité 8
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
            <div className="flex items-start gap-2 pt-[0.89px] pb-[0.5px]">
              <span className="font-www-lorespresso-com-avenir-next-regular-strikethrough font-[number:var(--www-lorespresso-com-avenir-next-regular-strikethrough-font-weight)] text-wwwlorespressocomdusty-gray text-[length:var(--www-lorespresso-com-avenir-next-regular-strikethrough-font-size)] tracking-[var(--www-lorespresso-com-avenir-next-regular-strikethrough-letter-spacing)] leading-[var(--www-lorespresso-com-avenir-next-regular-strikethrough-line-height)] line-through [font-style:var(--www-lorespresso-com-avenir-next-regular-strikethrough-font-style)]">
                5,15 €
              </span>
              <span className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-lg tracking-[0] leading-8">
                3,59 €
              </span>
            </div>
            <Button
              size="icon"
              className="w-8 h-8 rounded-2xl bg-[linear-gradient(90deg,rgba(217,170,70,1)_0%,rgba(255,215,123,1)_50%,rgba(217,170,70,1)_100%)]"
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

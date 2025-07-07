import { ShoppingCartIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Product data for mapping
const products = [
  {
    id: 1,
    title: "Extra Long 5 - lot de 50 Capsules",
    image: "/picture---extra-long-5---lot-de-50-capsules-1.png",
    reviews: "128 avis",
    intensity: "Intensité 5/13",
    price: "26,95 €",
    url: "https://www.lorespresso.com/fr_fr/p/extra-long-5-5-packs",
    discount: null,
    originalPrice: null,
    type: null,
  },
  {
    id: 2,
    title: "Maxi pack Decaffeinato x30",
    image: "/picture---maxi-pack-decaffeinato-x30.png",
    reviews: "126 avis",
    intensity: "Tasses 30 | Intensité 6",
    price: "7,24 €",
    url: "https://www.lorespresso.com/fr_fr/p/espresso-decaffeinato-30x",
    discount: "-20 %",
    originalPrice: "9,39 €",
    type: "Espresso",
  },
  {
    id: 3,
    title: "Lungo Estremo – Lot de 100 Capsules",
    image: "/picture---lungo-estremo---lot-de-100-capsules.png",
    reviews: "44 avis",
    intensity: "Intensité 10/13",
    price: "37,90 €",
    url: "https://www.lorespresso.com/fr_fr/p/estremo-10-packs",
    discount: null,
    originalPrice: null,
    type: null,
  },
  {
    id: 4,
    title: "Maxi pack Lungo Profondo x 50",
    image: "/picture---maxi-pack-lungo-profondo-x-50.png",
    reviews: "173 avis",
    intensity: "Tasses 50 | Intensité 8",
    price: "12,49 €",
    url: "https://www.lorespresso.com/fr_fr/p/lungo-profondo-50",
    discount: "-25 %",
    originalPrice: "16,69 €",
    type: "Lungo",
  },
  {
    id: 5,
    title: "Espresso Or Rose – Lot de 100 Capsules",
    image: "/picture---espresso-or-rose---lot-de-100-capsules.png",
    reviews: "51 avis",
    intensity: "Intensité 7/13",
    price: "37,90 €",
    url: "https://www.lorespresso.com/fr_fr/p/or-rose-10-packs",
    discount: null,
    originalPrice: null,
    type: null,
  },
  {
    id: 6,
    title: "Lungo Elegante – Lot de 100 Capsules",
    image: "/picture---lungo-elegante---lot-de-100-capsules.png",
    reviews: "24 avis",
    intensity: "Intensité 6/13",
    price: "37,90 €",
    url: "https://www.lorespresso.com/fr_fr/p/elegante-10-packs",
    discount: null,
    originalPrice: null,
    type: null,
  },
  {
    id: 7,
    title: "Espresso Fortissimo – Lot de 100 Capsules",
    image: "/picture---espresso-fortissimo---lot-de-100-capsules.png",
    reviews: "28 avis",
    intensity: "Intensité 10/13",
    price: "34,90 €",
    url: "https://www.lorespresso.com/fr_fr/p/fortissimo-10-packs",
    discount: null,
    originalPrice: null,
    type: null,
  },
  {
    id: 8,
    title: "Espresso Colombia – Lot de 100 Capsules",
    image: "/picture---espresso-colombia---lot-de-100-capsules.png",
    reviews: "62 avis",
    intensity: "Intensité 8/13",
    price: "34,90 €",
    url: "https://www.lorespresso.com/fr_fr/p/colombia-10-packs",
    discount: null,
    originalPrice: null,
    type: null,
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <section className="w-full py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Card
            key={product.id}
            className="bg-wwwlorespressocomwild-sand rounded-lg overflow-hidden"
          >
            <div className="relative">
              {product.discount && (
                <div className="absolute top-0 left-0 z-10">
                  <div className="relative w-20 h-[45px] top-[-11px]">
                    <div className="absolute w-[18px] h-[43px] top-px left-[51px] rounded-[0px_0px_7px_0px] border-t-[14px] border-r-[18px] rotate-[37deg] border-[none]" />
                    <Badge className="absolute top-[11px] left-0 min-w-10 h-[33px] px-2 py-0.5 bg-wwwlorespressocomcod-gray rounded-[8px_0px_8px_0px] text-wwwlorespressocomwhite [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-base leading-[27.2px]">
                      {product.discount}
                    </Badge>
                  </div>
                </div>
              )}
              <div className="pl-[32.66px] pr-[32.65px] pt-[72.66px] pb-[1.84px]">
                <div
                  className="w-full h-[262.69px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
              </div>
            </div>

            <CardContent className="p-0">
              <div className="flex flex-col items-start justify-between p-4 bg-[linear-gradient(270deg,rgba(214,214,214,0)_0%,rgba(214,214,214,1)_50%,rgba(214,214,214,0)_100%)]">
                <div className="w-full py-[12.8px]">
                  <a
                    className="block mt-[-1.00px] [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-2xl tracking-[-0.96px] leading-8"
                    href={product.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {product.title}
                  </a>
                </div>

                <div className="flex flex-wrap min-h-5 items-center gap-[0px_8px] pt-[2.5px] pb-[3px] w-full">
                  <div className="inline-flex items-start">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="relative self-stretch w-3.5" />
                    ))}
                  </div>
                  <div className="inline-flex items-start">
                    <div className="w-fit mt-[-1.00px] [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdusty-gray text-sm tracking-[0] leading-[14px] whitespace-nowrap">
                      {product.reviews}
                    </div>
                  </div>
                </div>

                <div className="w-full pt-1 pb-4">
                  <div className="mt-[-1.00px] [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdove-gray text-base tracking-[-0.64px] leading-5">
                    {product.intensity}
                  </div>

                  {product.type && (
                    <div className="pt-2">
                      <div className="flex items-center">
                        <div className="pr-2">
                          <div className="w-[25px]" />
                        </div>
                        <div className="mt-[-0.50px] [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdove-gray text-base tracking-[-0.64px] leading-5 whitespace-nowrap">
                          {product.type}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="w-full pt-4">
                  <div className="flex items-end justify-between">
                    <div className="inline-flex items-start gap-2 pt-[0.89px] pb-[0.5px]">
                      {product.originalPrice && (
                        <div className="w-fit mt-[-1.00px] font-www-lorespresso-com-avenir-next-regular-strikethrough font-[number:var(--www-lorespresso-com-avenir-next-regular-strikethrough-font-weight)] text-wwwlorespressocomdusty-gray text-[length:var(--www-lorespresso-com-avenir-next-regular-strikethrough-font-size)] tracking-[var(--www-lorespresso-com-avenir-next-regular-strikethrough-letter-spacing)] leading-[var(--www-lorespresso-com-avenir-next-regular-strikethrough-line-height)] line-through whitespace-nowrap [font-style:var(--www-lorespresso-com-avenir-next-regular-strikethrough-font-style)]">
                          {product.originalPrice}
                        </div>
                      )}
                      <div className="w-fit mt-[-1.00px] [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-lg tracking-[0] leading-8 whitespace-nowrap">
                        {product.price}
                      </div>
                    </div>

                    <Button
                      className="w-8 h-8 rounded-2xl bg-[linear-gradient(90deg,rgba(217,170,70,1)_0%,rgba(255,215,123,1)_50%,rgba(217,170,70,1)_100%)] p-0 flex items-center justify-center"
                      size="icon"
                    >
                      <ShoppingCartIcon className="w-5 h-5 text-wwwlorespressocomwhite" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

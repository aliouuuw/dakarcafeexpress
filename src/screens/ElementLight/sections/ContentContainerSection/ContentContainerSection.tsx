import { PlusIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ContentContainerSection = (): JSX.Element => {
  // Product data for mapping
  const products = [
    {
      id: "espresso-decaffeinato",
      name: "Espresso Decaffeinato",
      image: "/picture---capsules-espresso-decaffeinato.png",
      url: "https://www.lorespresso.com/fr_fr/p/espresso-decaffeinato-06",
      reviews: "276 avis",
      details: "Tasses 10 | Intensité 6",
      servingType: "Espresso",
      price: "3,49 €",
      isBestSeller: true,
      hasStars: true,
      hasIcon: true,
    },
    {
      id: "espresso-caramel",
      name: "Espresso Caramel",
      image: "/picture---espresso-caramel.png",
      url: "https://www.lorespresso.com/fr_fr/p/espresso-caramel",
      reviews: "497 avis",
      details: "Tasses 10 | Intensité 5",
      servingType: "Espresso",
      price: "3,79 €",
      isBestSeller: false,
      hasStars: true,
      hasIcon: true,
    },
    {
      id: "espresso-chocolat",
      name: "Espresso Chocolat",
      image: "/picture---espresso-chocolat.png",
      url: "https://www.lorespresso.com/fr_fr/p/espresso-chocolat",
      reviews: "359 avis",
      details: "Tasses 10 | Intensité 5",
      servingType: "Espresso",
      price: "3,79 €",
      isBestSeller: false,
      hasStars: false,
      hasIcon: false,
    },
    {
      id: "ristretto",
      name: "Ristretto",
      image: "/picture---ristretto.png",
      url: "https://www.lorespresso.com/fr_fr/p/ristretto-1",
      reviews: "1041 avis",
      details: "Tasses 10 | Intensité 11",
      servingType: "Ristretto",
      price: "3,49 €",
      isBestSeller: false,
      hasStars: false,
      hasIcon: false,
    },
  ];

  return (
    <section className="w-full py-6">
      <div className="container px-0">
        <h2 className="text-3xl font-normal tracking-[-1.28px] leading-10 [font-family:'Avenir_Next-Regular',Helvetica] text-wwwlorespressocomblack mb-8">
          Meilleures Ventes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="bg-wwwlorespressocomwild-sand rounded-lg overflow-hidden border-none"
            >
              <div className="relative">
                {product.isBestSeller && (
                  <div className="absolute top-0 left-0 z-10">
                    <div className="relative">
                      <Badge className="rounded-[8px_0px_8px_0px] bg-wwwlorespressocomcod-gray text-wwwlorespressocomwhite font-normal [font-family:'Avenir_Next-Regular',Helvetica] text-base py-0.5 px-2">
                        Meilleures ventes
                      </Badge>
                      <div className="absolute w-[18px] h-[43px] top-px left-[137px] rounded-[0px_0px_7px_0px] rotate-[37deg]" />
                    </div>
                  </div>
                )}
                <div
                  className="h-[262.69px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
              </div>

              <CardContent className="p-0">
                <div className="flex flex-col justify-between p-4 bg-[linear-gradient(270deg,rgba(214,214,214,0)_0%,rgba(214,214,214,1)_50%,rgba(214,214,214,0)_100%)]">
                  <div className="py-[12.8px]">
                    <a
                      href={product.url}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="block text-2xl font-normal tracking-[-0.96px] leading-8 [font-family:'Avenir_Next-Regular',Helvetica] text-wwwlorespressocomblack"
                    >
                      {product.name}
                    </a>
                  </div>

                  <div className="flex items-center gap-2 min-h-5 pt-[2.5px] pb-[3px]">
                    {product.hasStars && (
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="w-3.5 h-3.5 bg-[url(/muistar.svg)] bg-[100%_100%]"
                          />
                        ))}
                      </div>
                    )}
                    <div className="text-sm font-normal text-wwwlorespressocomdusty-gray [font-family:'Avenir_Next-Regular',Helvetica] leading-[14px]">
                      {product.reviews}
                    </div>
                  </div>

                  <div className="pb-4">
                    <div className="pt-1">
                      <div className="text-base font-normal text-wwwlorespressocomdove-gray [font-family:'Avenir_Next-Regular',Helvetica] tracking-[-0.64px] leading-5">
                        {product.details}
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="flex items-center">
                        {product.hasIcon && (
                          <div className="pr-2">
                            <div className="w-[25px] h-5 bg-[url(/bestservedas-espresso.svg)] bg-[100%_100%]" />
                          </div>
                        )}
                        <div className="text-base font-normal text-wwwlorespressocomdove-gray [font-family:'Avenir_Next-Regular',Helvetica] tracking-[-0.64px] leading-5">
                          {product.servingType}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <div className="flex items-end justify-between">
                      <div className="pt-[0.89px] pb-[0.5px]">
                        <div className="text-lg font-normal text-wwwlorespressocomblack [font-family:'Avenir_Next-Regular',Helvetica] leading-8">
                          {product.price}
                        </div>
                      </div>
                      <Button
                        className="w-8 h-8 rounded-2xl p-0 bg-[linear-gradient(90deg,rgba(217,170,70,1)_0%,rgba(255,215,123,1)_50%,rgba(217,170,70,1)_100%)]"
                        aria-label="Add to cart"
                      >
                        {product.hasIcon && (
                          <PlusIcon className="w-5 h-5 text-white" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            variant="outline"
            className="h-14 px-4 py-[17px] border border-solid border-[#3c3c3c] rounded font-normal [font-family:'Avenir_Next-Regular',Helvetica] text-base"
            asChild
          >
            <a
              href="https://www.lorespresso.com/fr_fr/capsules-de-cafe/bestsellers"
              rel="noopener noreferrer"
              target="_blank"
              className="flex items-center"
            >
              Voir tous les articles
              <div className="ml-2 w-[18px] h-[18px] bg-[url(/icon-6.svg)] bg-[100%_100%]" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

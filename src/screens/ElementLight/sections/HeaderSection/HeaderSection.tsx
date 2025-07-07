import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeaderSection = (): JSX.Element => {
  // Product data for mapping
  const products = [
    {
      id: 1,
      title: "Sélection Lungo",
      image: "/picture---s-lection-lungo.png",
      reviews: "4 avis",
      description: "Pack variétés de 120 capsules",
      price: "50,36 €",
      url: "https://www.lorespresso.com/fr_fr/p/selection-lungo-4059612",
      inStock: true,
    },
    {
      id: 2,
      title: "Sélection Origines",
      image: "/picture---s-lection-origines.png",
      reviews: "32 avis",
      description: "Pack variétés de 100 capsules",
      price: "38,15 €",
      url: "https://www.lorespresso.com/fr_fr/p/selection-origines",
      inStock: true,
    },
    {
      id: 3,
      title: "Sélection Passione Rossa",
      image: "/picture---s-lection-passione-rossa.png",
      reviews: "7 avis",
      description: "4 variétés - 80 capsules",
      price: "29,12 €",
      url: "https://www.lorespresso.com/fr_fr/p/selection-passione-rossa",
      inStock: true,
    },
    {
      id: 4,
      title: "Sélection Cafés aromatisés",
      image: "/picture---s-lection-caf-s-aromatis-s.png",
      reviews: "55 avis",
      description: "4 variétés - 80 capsules",
      price: "30,32 €",
      url: "https://www.lorespresso.com/fr_fr/p/pack-variete-capsules-aromatise-packvarietecollectionaromatises",
      inStock: true,
    },
    {
      id: 5,
      title: "Sélection XXL Intense",
      image: "/picture---s-lection-xxl-intense.png",
      reviews: "77 avis",
      description: "3 variétés - 80 capsules",
      url: "https://www.lorespresso.com/fr_fr/p/selection-intenses-capsule-double",
      inStock: false,
    },
    {
      id: 6,
      title: "Sélection Best Sellers",
      image: "/picture---s-lection-best-sellers.png",
      reviews: "260 avis",
      description: "8 variétés - 80 capsules",
      url: "https://www.lorespresso.com/fr_fr/p/coffret-bestsellers-l-or",
      inStock: false,
    },
    {
      id: 7,
      title: "Sélection Découverte",
      image: "/picture---s-lection-d-couverte.png",
      reviews: "33 avis",
      description: "8 variétés - 80 capsules",
      url: "https://www.lorespresso.com/fr_fr/p/selection-decouverte-pack-varietes-de-80-capsules-selectiondecouverte",
      inStock: false,
    },
    {
      id: 8,
      title: "Sélection Espressos",
      image: "/picture---s-lection-espressos.png",
      reviews: "7 avis",
      description: "9 variétés - 180 Capsules",
      url: "https://www.lorespresso.com/fr_fr/p/espresso-selection",
      inStock: false,
    },
  ];

  return (
    <section className="w-full py-6">
      <div className="container px-0">
        <h2 className="text-[32px] font-normal [font-family:'Avenir_Next-Regular',Helvetica] tracking-[-1.28px] leading-10 mb-8">
          Packs Variétés
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <Card
              key={product.id}
              className="flex flex-col bg-wwwlorespressocomwild-sand rounded-lg overflow-hidden"
            >
              <div className="px-[32.66px] pt-[72.66px] pb-[1.84px] bg-wwwlorespressocomwild-sand rounded-lg overflow-hidden">
                <div
                  className="h-[262.69px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
              </div>

              <CardContent className="flex flex-col justify-between p-4 bg-[linear-gradient(270deg,rgba(214,214,214,0)_0%,rgba(214,214,214,1)_50%,rgba(214,214,214,0)_100%)]">
                <div className="py-[12.8px]">
                  <a
                    href={product.url}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="block text-2xl [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack tracking-[-0.96px] leading-8"
                  >
                    {product.title}
                  </a>
                </div>

                <div className="flex items-center gap-2 min-h-5 pt-[2.5px] pb-[3px]">
                  <div className="flex">
                    {/* Star rating placeholders */}
                    <div className="w-3.5"></div>
                    <div className="w-3.5"></div>
                    <div className="w-3.5"></div>
                    <div className="w-3.5"></div>
                    <div className="w-3.5"></div>
                  </div>
                  <span className="text-sm [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdusty-gray leading-[14px]">
                    {product.reviews}
                  </span>
                </div>

                <div className="pt-1 pb-4">
                  <p className="text-base [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdove-gray tracking-[-0.64px] leading-5">
                    {product.description}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  {product.inStock ? (
                    <div className="text-lg [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack leading-8">
                      {product.price}
                    </div>
                  ) : (
                    <div className="text-sm [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomdove-gray leading-[23.8px]">
                      Bientôt de retour en stock
                    </div>
                  )}

                  <Button
                    className="w-8 h-8 rounded-2xl p-0 bg-[linear-gradient(90deg,rgba(217,170,70,1)_0%,rgba(255,215,123,1)_50%,rgba(217,170,70,1)_100%)]"
                    aria-label="Ajouter au panier"
                  >
                    <div
                      className={product.inStock ? "w-5 h-5" : "w-4 h-4"}
                    ></div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            className="h-14 px-4 py-[17px] border border-solid border-[#3c3c3c] rounded"
            asChild
          >
            <a
              href="https://www.lorespresso.com/fr_fr/capsules-de-cafe/varietes-de-cafe"
              rel="noopener noreferrer"
              target="_blank"
              className="flex items-center gap-2 text-base [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack"
            >
              Voir tous les articles
              <div className="w-[18px] h-[18px] bg-[url(/icon-6.svg)] bg-[100%_100%]" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

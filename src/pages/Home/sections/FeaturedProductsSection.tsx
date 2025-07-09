import React from "react";
import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";
import { StarIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import { CoffeeCupIcon } from "./CoffeeCupIcon";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  origin: string;
  description: string;
  price: number;
  originalPrice?: number;
  intensity: number;
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  rating: number;
  reviewCount: number;
  category: string;
}

const productData: Product[] = [
  {
    id: "1",
    name: "Arpeggio",
    origin: "Costa Rica & Guatemala",
    description: "Intense et crémeux avec des notes de cacao",
    price: 3500,
    originalPrice: 4000,
    intensity: 9,
    inStock: true,
    isNew: false,
    isBestSeller: true,
    rating: 4.8,
    reviewCount: 124,
    category: "Capsules",
  },
  {
    id: "2",
    name: "Ristretto",
    origin: "Colombie & Kenya",
    description: "Puissant et contrasté avec une touche fruitée",
    price: 3500,
    intensity: 10,
    inStock: true,
    isNew: true,
    isBestSeller: false,
    rating: 4.6,
    reviewCount: 89,
    category: "Capsules",
  },
  {
    id: "3",
    name: "Livanto",
    origin: "Brésil & Costa Rica",
    description: "Rond et équilibré avec des notes caramélisées",
    price: 3500,
    intensity: 6,
    inStock: false,
    isNew: false,
    isBestSeller: false,
    rating: 4.4,
    reviewCount: 67,
    category: "Capsules",
  },
  {
    id: "4",
    name: "Volluto",
    origin: "Brésil & Colombie",
    description: "Doux et léger avec des notes biscuitées",
    price: 3500,
    intensity: 4,
    inStock: true,
    isNew: false,
    isBestSeller: false,
    rating: 4.2,
    reviewCount: 45,
    category: "Capsules",
  },
];

const formatFCFA = (amount: number) => {
  return `${amount.toLocaleString("fr-FR")} FCFA`;
};

const getDiscountPercentage = (price: number, originalPrice: number) => {
  return Math.round(((originalPrice - price) / originalPrice) * 100);
};

export const FeaturedProductsSection: React.FC = () => {
  return (
    <section
      id="produits"
      className="py-24 bg-white relative z-[1]"
      style={{ zIndex: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-[#150A05] leading-tight">
            Nos Produits les Plus Vendus
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre sélection de capsules et machines compatibles
            Nespresso avec livraison rapide à Dakar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productData.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="relative aspect-square bg-gray-100 overflow-hidden">
                {/* Placeholder image */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#150A05] to-[#2A1410] flex items-center justify-center">
                  <CoffeeCupIcon className="w-16 h-16 opacity-20 text-white" />
                </div>

                {/* Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      Nouveau
                    </span>
                  )}
                  {product.isBestSeller && (
                    <span className="bg-[#B16631] text-white text-xs px-2 py-1 rounded-full font-semibold">
                      Best Seller
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      -
                      {getDiscountPercentage(
                        product.price,
                        product.originalPrice,
                      )}
                      %
                    </span>
                  )}
                  {!product.inStock && (
                    <span className="bg-gray-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      Rupture
                    </span>
                  )}
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow opacity-0 group-hover:opacity-100">
                  <HeartIcon className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
                </button>

                {/* Quick Add Button */}
                <div className="absolute inset-x-0 bottom-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Button
                    className="w-full rounded-none bg-[#B16631] hover:bg-[#8B4F26] text-white py-3"
                    disabled={!product.inStock}
                  >
                    <ShoppingCartIcon className="w-5 h-5 mr-2" />
                    {product.inStock ? "Ajouter au panier" : "Indisponible"}
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                {/* Category */}
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                  {product.category}
                </p>

                {/* Product Name */}
                <h3 className="font-semibold text-[#150A05] mb-2 line-clamp-1 group-hover:text-[#B16631] transition-colors">
                  <Link to={`/product/${product.id}`}>{product.name}</Link>
                </h3>

                {/* Origin */}
                <p className="text-xs text-[#B16631] font-medium uppercase tracking-wide mb-2">
                  {product.origin}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviewCount})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-xl font-bold text-[#150A05]">
                    {formatFCFA(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {formatFCFA(product.originalPrice)}
                    </span>
                  )}
                </div>

                {/* Intensity */}
                <div className="pt-3 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                      Intensité
                    </span>
                    <span className="text-xs text-[#B16631] font-semibold bg-[#B16631]/10 px-2 py-1 rounded-full">
                      {product.intensity}/10
                    </span>
                  </div>
                  <div className="relative">
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#B16631] to-[#8B4F26] transition-all duration-500 ease-out"
                        style={{ width: `${(product.intensity / 10) * 100}%` }}
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1 h-1 rounded-full transition-all duration-300 ${
                              i < Math.ceil(product.intensity / 2)
                                ? "bg-white shadow-sm"
                                : "bg-transparent"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { StarIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import { Product } from "../../index";
import { CoffeeCupIcon } from "../../../Home/sections/CoffeeCupIcon";

interface ProductGridProps {
  products: Product[];
  viewMode: "grid" | "list";
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  viewMode,
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-FR").format(price);
  };

  const getDiscountPercentage = (price: number, originalPrice: number) => {
    return Math.round((1 - price / originalPrice) * 100);
  };

  if (viewMode === "list") {
    return (
      <div className="space-y-4">
        {products.map((product) => (
          <Card
            key={product.id}
            className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col md:flex-row">
              {/* Product Image */}
              <div className="relative w-full md:w-64 h-64 md:h-48 bg-gray-100 flex-shrink-0">
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
                      Rupture de stock
                    </span>
                  )}
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
                  <HeartIcon className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
                </button>
              </div>

              {/* Product Info */}
              <div className="flex-1 p-6">
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    {/* Category */}
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                      {product.category}
                    </p>

                    {/* Product Name */}
                    <h3 className="text-xl font-semibold text-[#150A05] mb-2 hover:text-[#B16631] transition-colors">
                      <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-3">{product.description}</p>

                    {/* Tags */}
                    {product.tags && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {product.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

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
                        {product.rating} ({product.reviewCount} avis)
                      </span>
                    </div>
                  </div>

                  {/* Price and Actions */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-[#150A05]">
                        {formatPrice(product.price)} FCFA
                      </span>
                      {product.originalPrice && (
                        <span className="ml-2 text-lg text-gray-500 line-through">
                          {formatPrice(product.originalPrice)} FCFA
                        </span>
                      )}
                    </div>

                    <Button
                      className="bg-[#B16631] hover:bg-[#8B4F26] text-white"
                      disabled={!product.inStock}
                    >
                      <ShoppingCartIcon className="w-5 h-5 mr-2" />
                      {product.inStock ? "Ajouter au panier" : "Indisponible"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    );
  }

  // Grid View
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
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
                  -{getDiscountPercentage(product.price, product.originalPrice)}
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
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-[#150A05]">
                {formatPrice(product.price)} FCFA
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(product.originalPrice)} FCFA
                </span>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

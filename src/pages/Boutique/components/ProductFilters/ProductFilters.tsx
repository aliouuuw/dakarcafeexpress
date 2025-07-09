import React from "react";
import { Card } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

interface ProductFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  priceRange: { min: number; max: number };
  setPriceRange: (range: { min: number; max: number }) => void;
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
  productCount: number;
  totalProducts: number;
  onResetFilters?: () => void;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  selectedTags,
  setSelectedTags,
  productCount,
  totalProducts,
  onResetFilters,
}) => {
  const [expandedSections, setExpandedSections] = React.useState({
    category: true,
    price: true,
    tags: true,
  });

  const categories = [
    { id: "all", name: "Tous les produits", count: totalProducts },
    { id: "capsules", name: "Capsules", count: 10 },
    { id: "machines", name: "Machines", count: 3 },
    { id: "accessoires", name: "Accessoires", count: 3 },
  ];

  const priceRanges = [
    { label: "Moins de 5.000 FCFA", min: 0, max: 5000 },
    { label: "5.000 - 15.000 FCFA", min: 5000, max: 15000 },
    { label: "15.000 - 30.000 FCFA", min: 15000, max: 30000 },
    { label: "30.000 - 50.000 FCFA", min: 30000, max: 50000 },
    { label: "Plus de 50.000 FCFA", min: 50000, max: 100000 },
  ];

  const availableTags = [
    "Corsé",
    "Doux",
    "Équilibré",
    "Fruité",
    "Floral",
    "Décaféiné",
    "Arabica",
    "Compact",
    "Design",
    "Best Seller",
    "Nouveau",
    "Promotion",
  ];

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleTagToggle = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const clearAllFilters = () => {
    if (onResetFilters) {
      onResetFilters();
    } else {
      setSelectedCategory("all");
      setPriceRange({ min: 0, max: 100000 });
      setSelectedTags([]);
    }
  };

  const hasActiveFilters =
    selectedCategory !== "all" ||
    priceRange.min !== 0 ||
    priceRange.max !== 100000 ||
    selectedTags.length > 0;

  return (
    <Card className="p-6 sticky top-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-[#150A05]">Filtres</h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-[#B16631] hover:text-white hover:bg-[#B16631] transition-colors"
          >
            Réinitialiser
          </Button>
        )}
      </div>

      {/* Product Count */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <p className="text-sm text-gray-600">
          {productCount} produit{productCount > 1 ? "s" : ""} trouvé
          {productCount > 1 ? "s" : ""}
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection("category")}
          className="flex items-center justify-between w-full mb-4 hover:text-[#B16631] transition-colors"
        >
          <h4 className="font-semibold text-[#150A05]">Catégories</h4>
          {expandedSections.category ? (
            <ChevronUpIcon className="w-4 h-4" />
          ) : (
            <ChevronDownIcon className="w-4 h-4" />
          )}
        </button>

        {expandedSections.category && (
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    selectedCategory === category.id
                      ? "bg-[#B16631] text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{category.name}</span>
                    <span
                      className={`text-xs ${
                        selectedCategory === category.id
                          ? "text-white"
                          : "text-gray-500"
                      }`}
                    >
                      ({category.count})
                    </span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="border-t border-gray-200 my-6" />

      {/* Price Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection("price")}
          className="flex items-center justify-between w-full mb-4 hover:text-[#B16631] transition-colors"
        >
          <h4 className="font-semibold text-[#150A05]">Prix</h4>
          {expandedSections.price ? (
            <ChevronUpIcon className="w-4 h-4" />
          ) : (
            <ChevronDownIcon className="w-4 h-4" />
          )}
        </button>

        {expandedSections.price && (
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <label
                key={range.label}
                className="flex items-center cursor-pointer hover:bg-gray-50 px-3 py-2 rounded-lg"
              >
                <input
                  type="radio"
                  name="price"
                  checked={
                    priceRange.min === range.min && priceRange.max === range.max
                  }
                  onChange={() =>
                    setPriceRange({ min: range.min, max: range.max })
                  }
                  className="w-4 h-4 text-[#B16631] focus:ring-[#B16631] focus:ring-offset-0"
                />
                <span className="ml-3 text-sm text-gray-700">
                  {range.label}
                </span>
              </label>
            ))}

            {/* Custom Price Range */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm font-medium text-gray-700 mb-3">
                Prix personnalisé
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={priceRange.min || ""}
                  onChange={(e) =>
                    setPriceRange({
                      ...priceRange,
                      min: Number(e.target.value),
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#B16631]"
                />
                <span className="text-gray-500">-</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={priceRange.max || ""}
                  onChange={(e) =>
                    setPriceRange({
                      ...priceRange,
                      max: Number(e.target.value),
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#B16631]"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-gray-200 my-6" />

      {/* Tags Filter */}
      <div>
        <button
          onClick={() => toggleSection("tags")}
          className="flex items-center justify-between w-full mb-4 hover:text-[#B16631] transition-colors"
        >
          <h4 className="font-semibold text-[#150A05]">Caractéristiques</h4>
          {expandedSections.tags ? (
            <ChevronUpIcon className="w-4 h-4" />
          ) : (
            <ChevronDownIcon className="w-4 h-4" />
          )}
        </button>

        {expandedSections.tags && (
          <div className="flex flex-wrap gap-2">
            {availableTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagToggle(tag)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  selectedTags.includes(tag)
                    ? "bg-[#B16631] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-semibold text-gray-700">
              Filtres actifs:
            </h4>
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-red-600 hover:text-red-700 hover:bg-red-50 text-xs"
            >
              Tout supprimer
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedCategory !== "all" && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-[#B16631] bg-opacity-10 text-[#B16631]">
                {categories.find((c) => c.id === selectedCategory)?.name}
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="ml-2 hover:text-[#8B4F26] font-bold"
                >
                  ×
                </button>
              </span>
            )}
            {(priceRange.min !== 0 || priceRange.max !== 100000) && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-[#B16631] bg-opacity-10 text-[#B16631]">
                {new Intl.NumberFormat("fr-FR").format(priceRange.min)} -{" "}
                {new Intl.NumberFormat("fr-FR").format(priceRange.max)} FCFA
                <button
                  onClick={() => setPriceRange({ min: 0, max: 100000 })}
                  className="ml-2 hover:text-[#8B4F26] font-bold"
                >
                  ×
                </button>
              </span>
            )}
            {selectedTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-[#B16631] bg-opacity-10 text-[#B16631]"
              >
                {tag}
                <button
                  onClick={() => handleTagToggle(tag)}
                  className="ml-2 hover:text-[#8B4F26] font-bold"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
};

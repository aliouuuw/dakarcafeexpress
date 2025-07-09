import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { NavigationHeader } from "../Home/sections/NavigationHeader";
import { Footer } from "../Home/sections/Footer";
import { ProductGrid } from "./components/ProductGrid";
import { ProductFilters } from "./components/ProductFilters";
import { Button } from "../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  Squares2X2Icon,
  ListBulletIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: "capsules" | "machines" | "accessoires";
  subcategory?: string;
  image: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  tags?: string[];
}

export const Boutique: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");

  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("featured");

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState(
    categoryFromUrl || "all",
  );
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000 });
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Mock product data - in real app, this would come from an API
  useEffect(() => {
    const mockProducts: Product[] = [
      // Capsules
      {
        id: "1",
        name: "Capsules Dakar Intense",
        description:
          "Un café corsé aux notes de cacao, inspiré des traditions sénégalaises",
        price: 2500,
        originalPrice: 3000,
        category: "capsules",
        subcategory: "intense",
        image: "/images/products/dakar-intense.jpg",
        rating: 4.8,
        reviewCount: 124,
        inStock: true,
        isBestSeller: true,
        tags: ["Corsé", "Cacao", "Arabica"],
      },
      {
        id: "2",
        name: "Capsules Teranga Doux",
        description:
          "Mélange doux et équilibré, parfait pour commencer la journée",
        price: 2500,
        category: "capsules",
        subcategory: "doux",
        image: "/images/products/teranga-doux.jpg",
        rating: 4.6,
        reviewCount: 89,
        inStock: true,
        tags: ["Doux", "Équilibré", "Matinal"],
      },
      {
        id: "3",
        name: "Capsules Baobab Aromatique",
        description: "Notes fruitées et florales uniques d'Afrique de l'Ouest",
        price: 2800,
        category: "capsules",
        subcategory: "aromatique",
        image: "/images/products/baobab-aromatique.jpg",
        rating: 4.9,
        reviewCount: 156,
        inStock: true,
        isNew: true,
        tags: ["Fruité", "Floral", "Unique"],
      },
      {
        id: "4",
        name: "Capsules Sahel Décaféiné",
        description: "Tout le goût sans la caféine, parfait pour le soir",
        price: 2600,
        category: "capsules",
        subcategory: "decafeine",
        image: "/images/products/sahel-decafeine.jpg",
        rating: 4.5,
        reviewCount: 67,
        inStock: true,
        tags: ["Décaféiné", "Soir", "Léger"],
      },
      // Machines
      {
        id: "5",
        name: "Machine Essenza Mini",
        description: "Compacte et élégante, parfaite pour les espaces modernes",
        price: 45000,
        originalPrice: 55000,
        category: "machines",
        image: "/images/products/essenza-mini.jpg",
        rating: 4.7,
        reviewCount: 67,
        inStock: true,
        isBestSeller: true,
        tags: ["Compact", "Moderne", "Économique"],
      },
      {
        id: "6",
        name: "Machine Citiz",
        description: "Design rétro-moderne avec technologie avancée",
        price: 75000,
        category: "machines",
        image: "/images/products/citiz.jpg",
        rating: 4.8,
        reviewCount: 45,
        inStock: true,
        tags: ["Design", "Performant", "Durable"],
      },
      {
        id: "7",
        name: "Machine Pixie",
        description: "Ultra-rapide avec chauffe en 25 secondes",
        price: 65000,
        originalPrice: 75000,
        category: "machines",
        image: "/images/products/pixie.jpg",
        rating: 4.6,
        reviewCount: 89,
        inStock: false,
        tags: ["Rapide", "Efficient", "Populaire"],
      },
      // Accessoires
      {
        id: "8",
        name: "Mousseur à Lait Aeroccino",
        description: "Pour des cappuccinos et lattes parfaits",
        price: 25000,
        category: "accessoires",
        image: "/images/products/aeroccino.jpg",
        rating: 4.7,
        reviewCount: 112,
        inStock: true,
        isNew: true,
        tags: ["Mousse", "Latte", "Cappuccino"],
      },
      {
        id: "9",
        name: "Tasses Espresso Set de 6",
        description: "Tasses en porcelaine avec motifs africains",
        price: 15000,
        category: "accessoires",
        image: "/images/products/tasses-set.jpg",
        rating: 4.9,
        reviewCount: 78,
        inStock: true,
        tags: ["Porcelaine", "Artisanal", "Set"],
      },
      {
        id: "10",
        name: "Boîte de Rangement Capsules",
        description: "Élégante boîte en bois d'acacia pour 50 capsules",
        price: 12000,
        category: "accessoires",
        image: "/images/products/boite-rangement.jpg",
        rating: 4.5,
        reviewCount: 56,
        inStock: true,
        tags: ["Rangement", "Bois", "Pratique"],
      },
    ];

    // Simulate API call
    setTimeout(() => {
      setProducts(mockProducts);
      setIsLoading(false);
    }, 500);
  }, []);

  // Filter products based on selected filters
  useEffect(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Price range filter
    filtered = filtered.filter(
      (p) => p.price >= priceRange.min && p.price <= priceRange.max,
    );

    // Tags filter
    if (selectedTags.length > 0) {
      filtered = filtered.filter(
        (p) => p.tags && selectedTags.some((tag) => p.tags!.includes(tag)),
      );
    }

    // Sort products
    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        // 'featured' - show bestsellers first
        filtered.sort(
          (a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0),
        );
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, priceRange, selectedTags, sortBy]);

  // Reset all filters function
  const resetAllFilters = () => {
    setSelectedCategory("all");
    setPriceRange({ min: 0, max: 100000 });
    setSelectedTags([]);
  };

  // Check if any filters are active
  const hasActiveFilters =
    selectedCategory !== "all" ||
    priceRange.min !== 0 ||
    priceRange.max !== 100000 ||
    selectedTags.length > 0;

  // Count active filters
  const activeFiltersCount =
    (selectedCategory !== "all" ? 1 : 0) +
    (priceRange.min !== 0 || priceRange.max !== 100000 ? 1 : 0) +
    selectedTags.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationHeader />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#150A05] to-[#2A1410] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Notre Boutique
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Découvrez notre sélection premium de cafés, machines et
              accessoires
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <ProductFilters
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedTags={selectedTags}
              setSelectedTags={setSelectedTags}
              productCount={filteredProducts.length}
              totalProducts={products.length}
              onResetFilters={resetAllFilters}
            />
          </aside>

          {/* Products Section */}
          <main className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <p className="text-gray-600">
                    {filteredProducts.length} produit
                    {filteredProducts.length > 1 ? "s" : ""} trouvé
                    {filteredProducts.length > 1 ? "s" : ""}
                  </p>

                  {/* Reset Filters Button - Mobile friendly */}
                  {hasActiveFilters && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={resetAllFilters}
                      className="text-[#B16631] border-[#B16631] hover:bg-[#B16631] hover:text-white whitespace-nowrap"
                    >
                      <XMarkIcon className="w-4 h-4 mr-2" />
                      <span className="hidden sm:inline">
                        Réinitialiser les filtres
                      </span>
                      <span className="sm:hidden">Réinitialiser</span>
                      <span className="ml-1">({activeFiltersCount})</span>
                    </Button>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  {/* Sort Dropdown */}
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Trier par" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Mis en avant</SelectItem>
                      <SelectItem value="newest">Nouveautés</SelectItem>
                      <SelectItem value="price-asc">Prix croissant</SelectItem>
                      <SelectItem value="price-desc">
                        Prix décroissant
                      </SelectItem>
                      <SelectItem value="rating">Meilleures notes</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* View Mode Toggle */}
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`rounded-r-none ${viewMode === "grid" ? "bg-gray-100" : ""}`}
                      onClick={() => setViewMode("grid")}
                    >
                      <Squares2X2Icon className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`rounded-l-none ${viewMode === "list" ? "bg-gray-100" : ""}`}
                      onClick={() => setViewMode("list")}
                    >
                      <ListBulletIcon className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            {isLoading ? (
              <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#B16631]"></div>
              </div>
            ) : filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} viewMode={viewMode} />
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg mb-4">
                  Aucun produit ne correspond à vos critères.
                </p>
                <Button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedTags([]);
                    setPriceRange({ min: 0, max: 100000 });
                  }}
                  className="bg-[#B16631] hover:bg-[#8B4F26] text-white"
                >
                  Réinitialiser les filtres
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Boutique;

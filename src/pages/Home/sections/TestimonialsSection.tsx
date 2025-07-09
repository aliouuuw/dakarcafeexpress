import React from "react";
import { Button } from "../../../components/ui/button";
import { StarIcon } from "@heroicons/react/24/solid";
import { CoffeeCupIcon } from "./CoffeeCupIcon";

interface Testimonial {
  name: string;
  location: string;
  avatar: string;
  review: string;
  rating: number;
  product: string;
  verified: boolean;
  date: string;
}

export const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Aminata Diop",
      location: "Dakar, Plateau",
      avatar: "AD",
      review:
        "Livraison super rapide et les capsules sont exactement comme les originales. Le livreur était très professionnel.",
      rating: 5,
      product: "Capsules Arpeggio",
      verified: true,
      date: "Il y a 3 jours",
    },
    {
      name: "Moussa Kane",
      location: "Mermoz",
      avatar: "MK",
      review:
        "L'app est très facile à utiliser et le support WhatsApp répond rapidement. J'ai reçu ma commande en 30 minutes!",
      rating: 5,
      product: "Machine Essenza Mini",
      verified: true,
      date: "Il y a 1 semaine",
    },
    {
      name: "Fatou Ba",
      location: "Almadies",
      avatar: "FB",
      review:
        "Excellents prix et paiement à la livraison très pratique. La qualité des capsules est top, je recommande vivement!",
      rating: 5,
      product: "Pack Découverte",
      verified: true,
      date: "Il y a 2 semaines",
    },
  ];

  return (
    <section
      className="py-24 bg-white relative z-[1] overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 15c8.284 0 15 6.716 15 15s-6.716 15-15 15-15-6.716-15-15 6.716-15 15-15zm0 5c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10z' fill='%23B16631' fill-opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#B16631]/10 text-[#B16631] text-sm font-medium rounded-full mb-4">
            <StarIcon className="w-4 h-4 mr-2 fill-current" />
            Plus de 1000 clients satisfaits
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-[#150A05] leading-tight">
            Ce que disent nos clients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les expériences de nos clients fidèles à travers Dakar
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#B16631] to-[#8F4F26] rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#150A05]">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                {testimonial.verified && (
                  <div className="flex items-center text-green-600 text-xs">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Achat vérifié
                  </div>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="relative">
                      <CoffeeCupIcon
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? "text-[#B16631] fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  {testimonial.date}
                </span>
              </div>

              {/* Review */}
              <blockquote className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.review}"
              </blockquote>

              {/* Product */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="text-gray-500">A commandé:</span>
                    <span className="font-medium text-[#150A05] ml-1">
                      {testimonial.product}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Voir plus d'avis clients
          </Button>
        </div>
      </div>
    </section>
  );
};

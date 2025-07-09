import React from "react";
import { motion } from "framer-motion";
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
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative z-[1] overflow-hidden"
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
        <motion.div
          className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-[#B16631]/10 text-[#B16631] text-xs sm:text-sm font-medium rounded-full mb-3 sm:mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
            >
              <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 fill-current" />
            </motion.div>
            Plus de 1000 clients satisfaits
          </motion.div>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#150A05] leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Ce que disent nos clients
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Découvrez les expériences de nos clients fidèles à travers Dakar
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#B16631] to-[#8F4F26] rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + index * 0.1,
                      type: "spring",
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-[#150A05] text-sm sm:text-base">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                {testimonial.verified && (
                  <motion.div
                    className="flex items-center text-green-600 text-xs"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  >
                    <motion.svg
                      className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                    Achat vérifié
                  </motion.div>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1.5 sm:space-x-2 mb-2 sm:mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="relative"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.4 + index * 0.1 + i * 0.05,
                        type: "spring",
                      }}
                    >
                      <CoffeeCupIcon
                        className={`w-3 h-3 sm:w-4 sm:h-4 ${
                          i < testimonial.rating
                            ? "text-[#B16631] fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    </motion.div>
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-gray-500">
                  {testimonial.date}
                </span>
              </div>

              {/* Review */}
              <motion.blockquote
                className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                "{testimonial.review}"
              </motion.blockquote>

              {/* Product */}
              <div className="pt-3 sm:pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="text-xs sm:text-sm">
                    <span className="text-gray-500">A commandé:</span>
                    <span className="font-medium text-[#150A05] ml-1">
                      {testimonial.product}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              className="text-sm sm:text-base"
            >
              Voir plus d'avis clients
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

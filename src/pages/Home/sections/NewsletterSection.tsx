import React from "react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import {
  SparklesIcon,
  CurrencyDollarIcon,
  TruckIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";

export const NewsletterSection: React.FC = () => {
  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#150A05] to-[#2a1810] text-white relative z-[1] overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-[#B16631]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-[#B16631]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-[#B16631]/20 text-[#B16631] text-xs sm:text-sm font-medium rounded-full">
                <SparklesIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                Offre exclusive
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
                Rejoignez le Club Café
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                Plus de 1000 amateurs de café reçoivent nos offres exclusives
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#B16631]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CurrencyDollarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#B16631]" />
                </div>
                <p className="text-sm sm:text-base text-gray-300">
                  <span className="font-semibold text-white">
                    10% de réduction
                  </span>{" "}
                  sur votre première commande
                </p>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#B16631]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <TruckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#B16631]" />
                </div>
                <p className="text-sm sm:text-base text-gray-300">
                  <span className="font-semibold text-white">
                    Livraison gratuite
                  </span>{" "}
                  sur les commandes premium
                </p>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#B16631]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <GiftIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#B16631]" />
                </div>
                <p className="text-sm sm:text-base text-gray-300">
                  <span className="font-semibold text-white">
                    Accès anticipé
                  </span>{" "}
                  aux nouveaux produits
                </p>
              </div>
            </div>

            {/* Trust */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
              <span>✓ Pas de spam</span>
              <span>✓ Désabonnement facile</span>
              <span>✓ Données sécurisées</span>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-medium">
                Inscrivez-vous maintenant
              </h3>

              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#B16631] rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                    1
                  </div>
                  <span className="ml-1 sm:ml-2 text-xs sm:text-sm hidden sm:inline">
                    S'inscrire
                  </span>
                </div>
                <div className="flex-1 h-0.5 bg-white/20 mx-2"></div>
                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center text-white/60 font-bold text-xs sm:text-sm">
                    2
                  </div>
                  <span className="ml-1 sm:ml-2 text-xs sm:text-sm text-white/60 hidden sm:inline">
                    Confirmer
                  </span>
                </div>
                <div className="flex-1 h-0.5 bg-white/20 mx-2"></div>
                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center text-white/60 font-bold text-xs sm:text-sm">
                    3
                  </div>
                  <span className="ml-1 sm:ml-2 text-xs sm:text-sm text-white/60 hidden sm:inline">
                    Profiter
                  </span>
                </div>
              </div>

              {/* Form */}
              <div className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Votre prénom"
                    className="w-full bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-[#B16631] focus:ring-[#B16631]"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Votre adresse email"
                    className="w-full bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-[#B16631] focus:ring-[#B16631]"
                  />
                </div>
                <Button
                  variant="premium"
                  size="lg"
                  className="w-full bg-[#B16631] hover:bg-[#D4822A] text-white text-sm sm:text-base"
                >
                  Obtenir mon code -10%
                </Button>
              </div>

              {/* Discount Preview */}
              <div className="bg-[#B16631]/20 rounded-lg p-3 sm:p-4 text-center">
                <p className="text-xs sm:text-sm mb-2">
                  Votre code promo sera:
                </p>
                <div className="font-mono text-lg sm:text-2xl font-bold text-[#B16631]">
                  BIENVENUE10
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

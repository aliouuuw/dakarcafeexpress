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
      className="py-24 bg-gradient-to-br from-[#150A05] to-[#2a1810] text-white relative z-[1] overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B16631]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B16631]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-[#B16631]/20 text-[#B16631] text-sm font-medium rounded-full">
                <SparklesIcon className="w-4 h-4 mr-2" />
                Offre exclusive
              </div>
              <h2 className="text-4xl md:text-5xl font-light leading-tight">
                Rejoignez le Club Café
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Plus de 1000 amateurs de café reçoivent nos offres exclusives
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#B16631]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CurrencyDollarIcon className="w-5 h-5 text-[#B16631]" />
                </div>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">
                    10% de réduction
                  </span>{" "}
                  sur votre première commande
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#B16631]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <TruckIcon className="w-5 h-5 text-[#B16631]" />
                </div>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">
                    Livraison gratuite
                  </span>{" "}
                  sur les commandes premium
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#B16631]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <GiftIcon className="w-5 h-5 text-[#B16631]" />
                </div>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">
                    Accès anticipé
                  </span>{" "}
                  aux nouveaux produits
                </p>
              </div>
            </div>

            {/* Trust */}
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>✓ Pas de spam</span>
              <span>✓ Désabonnement facile</span>
              <span>✓ Données sécurisées</span>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="space-y-6">
              <h3 className="text-2xl font-medium">
                Inscrivez-vous maintenant
              </h3>

              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#B16631] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <span className="ml-2 text-sm">S'inscrire</span>
                </div>
                <div className="flex-1 h-0.5 bg-white/20 mx-2"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white/60 font-bold text-sm">
                    2
                  </div>
                  <span className="ml-2 text-sm text-white/60">Confirmer</span>
                </div>
                <div className="flex-1 h-0.5 bg-white/20 mx-2"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white/60 font-bold text-sm">
                    3
                  </div>
                  <span className="ml-2 text-sm text-white/60">Profiter</span>
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
                  className="w-full bg-[#B16631] hover:bg-[#D4822A] text-white"
                >
                  Obtenir mon code -10%
                </Button>
              </div>

              {/* Discount Preview */}
              <div className="bg-[#B16631]/20 rounded-lg p-4 text-center">
                <p className="text-sm mb-2">Votre code promo sera:</p>
                <div className="font-mono text-2xl font-bold text-[#B16631]">
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

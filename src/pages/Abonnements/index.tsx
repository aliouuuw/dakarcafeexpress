import React from "react";
import { NavigationHeader } from "../Home/sections/NavigationHeader";
import { Footer } from "../Home/sections/Footer";
import { FloatingWhatsApp } from "../Home/sections/FloatingWhatsApp";
import { Button } from "../../components/ui/button";
import { CheckIcon } from "@heroicons/react/24/solid";
import {
  SparklesIcon,
  TruckIcon,
  ArrowPathIcon,
  XMarkIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  period: string;
  features: string[];
  isPopular?: boolean;
  savings?: string;
}

const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: "basic",
    name: "Découverte",
    description: "Parfait pour découvrir nos cafés",
    price: 15000,
    period: "mois",
    features: [
      "10 capsules par mois",
      "1 variété au choix",
      "Livraison gratuite",
      "Possibilité de changer de variété",
      "Sans engagement",
    ],
  },
  {
    id: "premium",
    name: "Connaisseur",
    description: "Pour les amateurs réguliers",
    price: 35000,
    period: "mois",
    isPopular: true,
    savings: "Économisez 15%",
    features: [
      "30 capsules par mois",
      "3 variétés au choix",
      "Livraison gratuite prioritaire",
      "Accès aux éditions limitées",
      "10% sur les machines",
      "Support prioritaire",
      "Sans engagement",
    ],
  },
  {
    id: "family",
    name: "Famille & Bureau",
    description: "Idéal pour les grandes consommations",
    price: 65000,
    period: "mois",
    savings: "Économisez 25%",
    features: [
      "60 capsules par mois",
      "5 variétés au choix",
      "Livraison express gratuite",
      "Accès anticipé aux nouveautés",
      "15% sur les machines",
      "Gestionnaire de compte dédié",
      "Personnalisation complète",
      "Sans engagement",
    ],
  },
];

export const Abonnements: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavigationHeader />

      {/* Hero Section */}
      <section className="pb-16 bg-gradient-to-br from-[#150A05] to-[#2a1810] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-[#B16631]/20 backdrop-blur-sm text-[#B16631] text-sm font-medium rounded-full border border-[#B16631]/30">
              <SparklesIcon className="w-4 h-4 mr-2" />
              Nouveau: Premier mois à -50%
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              Votre café préféré,
              <br />
              <span className="font-medium text-[#B16631]">
                livré chaque mois
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Abonnez-vous et économisez jusqu'à 25% sur vos capsules favorites.
              Sans engagement, modifiable à tout moment.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-8 bg-[#B16631]/5 border-y border-[#B16631]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl mb-1">
                <TruckIcon className="w-6 h-6 text-[#B16631] mx-auto" />
              </div>
              <p className="text-sm font-medium text-[#150A05]">
                Livraison Gratuite
              </p>
            </div>
            <div>
              <div className="text-2xl mb-1">
                <ArrowPathIcon className="w-6 h-6 text-[#B16631] mx-auto" />
              </div>
              <p className="text-sm font-medium text-[#150A05]">
                Modifiable à tout moment
              </p>
            </div>
            <div>
              <div className="text-2xl mb-1">
                <XMarkIcon className="w-6 h-6 text-[#B16631] mx-auto" />
              </div>
              <p className="text-sm font-medium text-[#150A05]">
                Sans engagement
              </p>
            </div>
            <div>
              <div className="text-2xl mb-1">
                <CurrencyDollarIcon className="w-6 h-6 text-[#B16631] mx-auto" />
              </div>
              <p className="text-sm font-medium text-[#150A05]">Jusqu'à -25%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-[#150A05] mb-4">
              Choisissez votre formule
            </h2>
            <p className="text-lg text-gray-600">
              Des abonnements flexibles adaptés à votre consommation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {subscriptionPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                  plan.isPopular
                    ? "ring-2 ring-[#B16631] shadow-xl scale-105"
                    : "border border-gray-200 hover:shadow-lg"
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-[#B16631] text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                    Plus populaire
                  </div>
                )}

                {plan.savings && (
                  <div className="absolute top-0 left-0 bg-green-500 text-white px-4 py-1 text-sm font-medium rounded-br-lg">
                    {plan.savings}
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-[#150A05] mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-light text-[#150A05]">
                        {plan.price.toLocaleString("fr-FR")}
                      </span>
                      <span className="text-lg text-gray-600 ml-2">
                        FCFA/{plan.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.isPopular ? "premium" : "outline"}
                    size="lg"
                    className="w-full"
                  >
                    Choisir cette formule
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Plan CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-medium text-[#150A05] mb-4">
                Besoin d'une formule sur mesure ?
              </h3>
              <p className="text-gray-600 mb-6">
                Pour les entreprises ou les besoins spécifiques, nous créons des
                abonnements personnalisés.
              </p>
              <Button variant="default" size="lg">
                Contactez-nous
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-[#150A05] mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-lg text-gray-600">
              Votre café en 3 étapes simples
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#B16631]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-[#B16631]">1</span>
              </div>
              <h3 className="text-xl font-medium text-[#150A05] mb-3">
                Choisissez votre formule
              </h3>
              <p className="text-gray-600">
                Sélectionnez le nombre de capsules et les variétés qui vous
                conviennent
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#B16631]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-[#B16631]">2</span>
              </div>
              <h3 className="text-xl font-medium text-[#150A05] mb-3">
                Recevez chaque mois
              </h3>
              <p className="text-gray-600">
                Livraison automatique à votre domicile ou bureau, sans frais
                supplémentaires
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#B16631]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-[#B16631]">3</span>
              </div>
              <h3 className="text-xl font-medium text-[#150A05] mb-3">
                Gérez en ligne
              </h3>
              <p className="text-gray-600">
                Modifiez, pausez ou annulez votre abonnement à tout moment
                depuis votre compte
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-[#150A05] text-center mb-16">
            Questions fréquentes
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-medium text-[#150A05] mb-2">
                Puis-je changer ma sélection de café chaque mois ?
              </h3>
              <p className="text-gray-600">
                Oui, vous pouvez modifier votre sélection jusqu'à 5 jours avant
                votre prochaine livraison.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-medium text-[#150A05] mb-2">
                Y a-t-il des frais de livraison ?
              </h3>
              <p className="text-gray-600">
                Non, la livraison est gratuite pour tous nos abonnés dans la
                zone de Dakar.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-medium text-[#150A05] mb-2">
                Puis-je mettre mon abonnement en pause ?
              </h3>
              <p className="text-gray-600">
                Bien sûr ! Vous pouvez mettre en pause votre abonnement jusqu'à
                3 mois depuis votre espace client.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-medium text-[#150A05] mb-2">
                Comment fonctionne la garantie satisfaction ?
              </h3>
              <p className="text-gray-600">
                Si vous n'êtes pas satisfait de votre café, nous vous
                remboursons ou remplaçons votre commande.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

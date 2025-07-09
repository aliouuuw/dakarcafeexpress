import React from "react";
import { Button } from "../../../components/ui/button";
import {
  ShoppingCartIcon,
  DevicePhoneMobileIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export const QuickActionsSection: React.FC = () => {
  return (
    <section
      className="py-16 bg-gradient-to-b from-gray-50 to-white relative z-[1]"
      style={{ zIndex: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-medium text-[#150A05] mb-4">
            Commencez votre expérience café
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choisissez la méthode qui vous convient le mieux pour commander
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Quick Order */}
          <div className="group cursor-pointer">
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl hover:border-[#B16631]/30 transition-all duration-300">
              <div className="w-16 h-16 bg-[#B16631]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#B16631]/20 transition-colors">
                <ShoppingCartIcon className="w-8 h-8 text-[#B16631]" />
              </div>
              <h4 className="font-semibold text-[#150A05] mb-2">
                Commander Rapidement
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Parcourez notre catalogue et commandez en quelques clics
              </p>
              <Button variant="default" className="w-full">
                Voir le catalogue
              </Button>
            </div>
          </div>

          {/* Mobile App */}
          <div className="group cursor-pointer">
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl hover:border-[#B16631]/30 transition-all duration-300">
              <div className="w-16 h-16 bg-[#150A05]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#150A05]/20 transition-colors">
                <DevicePhoneMobileIcon className="w-8 h-8 text-[#150A05]" />
              </div>
              <h4 className="font-semibold text-[#150A05] mb-2">
                Application Mobile
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Téléchargez l'app pour une expérience optimale
              </p>
              <Button variant="premium" className="w-full">
                Télécharger l'app
              </Button>
            </div>
          </div>

          {/* WhatsApp Order */}
          <div className="group cursor-pointer">
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl hover:border-green-300 transition-all duration-300">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-colors">
                <ChatBubbleLeftRightIcon className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-[#150A05] mb-2">
                Commander par WhatsApp
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Envoyez-nous votre commande directement sur WhatsApp
              </p>
              <Button variant="whatsapp" className="w-full">
                <ChatBubbleLeftRightIcon className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Call Us */}
          <div className="group cursor-pointer">
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl hover:border-[#B16631]/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors">
                <PhoneIcon className="w-8 h-8 text-gray-700" />
              </div>
              <h4 className="font-semibold text-[#150A05] mb-2">
                Appelez-nous
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Pour les commandes urgentes ou personnalisées
              </p>
              <Button variant="outline" className="w-full">
                +221 77 XXX XX XX
              </Button>
            </div>
          </div>
        </div>

        {/* Popular Products Quick Access */}
        <div className="mt-12 bg-[#B16631]/5 rounded-2xl p-8">
          <h4 className="text-center text-lg font-medium text-[#150A05] mb-6">
            Accès rapide aux favoris
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="subtle" size="sm">
              Capsules Arpeggio
            </Button>
            <Button variant="subtle" size="sm">
              Machine Essenza Mini
            </Button>
            <Button variant="subtle" size="sm">
              Pack Découverte
            </Button>
            <Button variant="subtle" size="sm">
              Capsules Roma
            </Button>
            <Button variant="subtle" size="sm">
              Accessoires
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

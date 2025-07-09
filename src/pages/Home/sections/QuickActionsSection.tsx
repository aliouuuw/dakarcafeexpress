import React from "react";
import { motion } from "framer-motion";
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
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3
            className="text-2xl md:text-3xl font-medium text-[#150A05] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Commencez votre expérience café
          </motion.h3>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Choisissez la méthode qui vous convient le mieux pour commander
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {/* Quick Order */}
          <motion.div
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{ y: -5 }}
          >
            <motion.div
              className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl hover:border-[#B16631]/30 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="w-16 h-16 bg-[#B16631]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#B16631]/20 transition-colors"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <ShoppingCartIcon className="w-8 h-8 text-[#B16631]" />
              </motion.div>
              <h4 className="font-semibold text-[#150A05] mb-2">
                Commander Rapidement
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Parcourez notre catalogue et commandez en quelques clics
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="default" className="w-full">
                  Voir le catalogue
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Mobile App */}
          <motion.div
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{ y: -5 }}
          >
            <motion.div
              className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl hover:border-[#B16631]/30 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="w-16 h-16 bg-[#150A05]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#150A05]/20 transition-colors"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <DevicePhoneMobileIcon className="w-8 h-8 text-[#150A05]" />
              </motion.div>
              <h4 className="font-semibold text-[#150A05] mb-2">
                Application Mobile
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Téléchargez l'app pour une expérience optimale
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="premium" className="w-full">
                  Télécharger l'app
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* WhatsApp Order */}
          <motion.div
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{ y: -5 }}
          >
            <motion.div
              className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl hover:border-green-300 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-colors"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
              >
                <ChatBubbleLeftRightIcon className="w-8 h-8 text-green-600" />
              </motion.div>
              <h4 className="font-semibold text-[#150A05] mb-2">
                Commander par WhatsApp
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Envoyez-nous votre commande directement sur WhatsApp
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="whatsapp" className="w-full">
                  <ChatBubbleLeftRightIcon className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Call Us */}
          <motion.div
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.4,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{ y: -5 }}
          >
            <motion.div
              className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl hover:border-[#B16631]/30 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <PhoneIcon className="w-8 h-8 text-gray-700" />
              </motion.div>
              <h4 className="font-semibold text-[#150A05] mb-2">
                Appelez-nous
              </h4>
              <p className="text-sm text-gray-600 mb-4">
                Pour les commandes urgentes ou personnalisées
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" className="w-full">
                  +221 77 XXX XX XX
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Popular Products Quick Access */}
        <motion.div
          className="mt-12 bg-[#B16631]/5 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.h4
            className="text-center text-lg font-medium text-[#150A05] mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Accès rapide aux favoris
          </motion.h4>
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {[
              "Capsules Arpeggio",
              "Machine Essenza Mini",
              "Pack Découverte",
              "Capsules Roma",
              "Accessoires",
            ].map((text, index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="subtle" size="sm">
                  {text}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

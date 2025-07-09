import React from "react";
import { motion } from "framer-motion";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export const Footer: React.FC = () => {
  return (
    <footer
      className="bg-white border-t border-gray-200 py-8 sm:py-12 md:py-16 relative z-[1]"
      style={{ zIndex: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="space-y-4 sm:space-y-6 sm:col-span-2 md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.div
              className="flex items-center space-x-2 sm:space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-md flex items-center justify-center"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
              >
                <img
                  src="/logo.png"
                  alt="Dakar Café Express Logo"
                  className="w-full h-full"
                />
              </motion.div>
              <span className="text-lg sm:text-xl md:text-2xl font-semibold text-[#150A05]">
                DakarCafé Express
              </span>
            </motion.div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Votre passerelle vers l'authentique café d'Afrique de l'Ouest
            </p>
          </motion.div>

          <motion.div
            className="space-y-4 sm:space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-base sm:text-lg font-medium text-[#150A05] uppercase tracking-wide">
              Produits
            </h3>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
              {[
                "Capsules Nespresso",
                "Machines à Café",
                "Accessoires",
                "Promotions",
              ].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  className="block hover:text-[#B16631] transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="space-y-4 sm:space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-base sm:text-lg font-medium text-[#150A05] uppercase tracking-wide">
              Services
            </h3>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
              {[
                "Livraison Dakar",
                "Paiement Livraison",
                "Application Mobile",
                "Support WhatsApp",
              ].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  className="block hover:text-[#B16631] transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="space-y-4 sm:space-y-6 sm:col-span-2 md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-base sm:text-lg font-medium text-[#150A05] uppercase tracking-wide">
              Contact
            </h3>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
              <p>dakarcafeexpress@gmail.com</p>
              <p>WhatsApp: +221 77 XXX XX XX</p>
              <p>Dakar, Sénégal</p>
              <motion.div
                className="pt-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#B16631] hover:text-[#8F4F26]"
                >
                  <motion.div
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowDownTrayIcon className="w-4 h-4" />
                  </motion.div>
                  Télécharger sur iOS - Android
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-gray-200 mt-8 sm:mt-12 md:mt-16 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-xs sm:text-sm text-center md:text-left text-gray-500">
            © 2025 DakarCafé Express. Tous droits réservés.
          </p>
          <motion.div
            className="text-xs sm:text-sm flex space-x-4 sm:space-x-6 mt-3 sm:mt-4 md:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="#"
              className="text-gray-400 hover:text-[#B16631] transition-colors"
            >
              Conditions
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#B16631] transition-colors"
            >
              Confidentialité
            </a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

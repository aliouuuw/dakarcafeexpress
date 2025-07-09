import React from "react";
import { motion } from "framer-motion";
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
      <motion.div
        className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-[#B16631]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-[#B16631]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="space-y-4 sm:space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-[#B16631]/20 text-[#B16631] text-xs sm:text-sm font-medium rounded-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                >
                  <SparklesIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                </motion.div>
                Offre exclusive
              </motion.div>
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Rejoignez le Club Café
              </motion.h2>
              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Plus de 1000 amateurs de café reçoivent nos offres exclusives
              </motion.p>
            </motion.div>

            {/* Benefits */}
            <motion.div
              className="space-y-3 sm:space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                className="flex items-center space-x-2 sm:space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <motion.div
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-[#B16631]/20 rounded-full flex items-center justify-center flex-shrink-0"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8, type: "spring" }}
                >
                  <CurrencyDollarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#B16631]" />
                </motion.div>
                <p className="text-sm sm:text-base text-gray-300">
                  <span className="font-semibold text-white">
                    10% de réduction
                  </span>{" "}
                  sur votre première commande
                </p>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2 sm:space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <motion.div
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-[#B16631]/20 rounded-full flex items-center justify-center flex-shrink-0"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.9, type: "spring" }}
                >
                  <TruckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#B16631]" />
                </motion.div>
                <p className="text-sm sm:text-base text-gray-300">
                  <span className="font-semibold text-white">
                    Livraison gratuite
                  </span>{" "}
                  sur les commandes premium
                </p>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2 sm:space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <motion.div
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-[#B16631]/20 rounded-full flex items-center justify-center flex-shrink-0"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1, type: "spring" }}
                >
                  <GiftIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#B16631]" />
                </motion.div>
                <p className="text-sm sm:text-base text-gray-300">
                  <span className="font-semibold text-white">
                    Accès anticipé
                  </span>{" "}
                  aux nouveaux produits
                </p>
              </motion.div>
            </motion.div>

            {/* Trust */}
            <motion.div
              className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <span>✓ Pas de spam</span>
              <span>✓ Désabonnement facile</span>
              <span>✓ Données sécurisées</span>
            </motion.div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="space-y-4 sm:space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-xl sm:text-2xl font-medium">
                Inscrivez-vous maintenant
              </h3>

              {/* Progress Steps */}
              <motion.div
                className="flex items-center justify-between mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.div
                  className="flex items-center"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7, type: "spring" }}
                >
                  <motion.div
                    className="w-6 h-6 sm:w-8 sm:h-8 bg-[#B16631] rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    1
                  </motion.div>
                  <span className="ml-1 sm:ml-2 text-xs sm:text-sm hidden sm:inline">
                    S'inscrire
                  </span>
                </motion.div>
                <motion.div
                  className="flex-1 h-0.5 bg-white/20 mx-2"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  style={{ transformOrigin: "left" }}
                />
                <motion.div
                  className="flex items-center"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.9, type: "spring" }}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center text-white/60 font-bold text-xs sm:text-sm">
                    2
                  </div>
                  <span className="ml-1 sm:ml-2 text-xs sm:text-sm text-white/60 hidden sm:inline">
                    Confirmer
                  </span>
                </motion.div>
                <motion.div
                  className="flex-1 h-0.5 bg-white/20 mx-2"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1 }}
                  style={{ transformOrigin: "left" }}
                />
                <motion.div
                  className="flex items-center"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.1, type: "spring" }}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center text-white/60 font-bold text-xs sm:text-sm">
                    3
                  </div>
                  <span className="ml-1 sm:ml-2 text-xs sm:text-sm text-white/60 hidden sm:inline">
                    Profiter
                  </span>
                </motion.div>
              </motion.div>

              {/* Form */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                >
                  <Input
                    type="text"
                    placeholder="Votre prénom"
                    className="w-full bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-[#B16631] focus:ring-[#B16631]"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1 }}
                >
                  <Input
                    type="email"
                    placeholder="Votre adresse email"
                    className="w-full bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-[#B16631] focus:ring-[#B16631]"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="premium"
                    size="lg"
                    className="w-full bg-[#B16631] hover:bg-[#D4822A] text-white text-sm sm:text-base"
                  >
                    Obtenir mon code -10%
                  </Button>
                </motion.div>
              </motion.div>

              {/* Discount Preview */}
              <motion.div
                className="bg-[#B16631]/20 rounded-lg p-3 sm:p-4 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.2, type: "spring" }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(177, 102, 49, 0.2)",
                }}
              >
                <p className="text-xs sm:text-sm mb-2">
                  Votre code promo sera:
                </p>
                <motion.div
                  className="font-mono text-lg sm:text-2xl font-bold text-[#B16631]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    opacity: { duration: 0.5, delay: 1.3 },
                    scale: { duration: 2, repeat: Infinity, repeatDelay: 3 },
                  }}
                >
                  BIENVENUE10
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

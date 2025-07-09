import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../../components/ui/button";
export const FloatingWhatsApp: React.FC = () => {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-[9996]"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.5,
      }}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            variant="whatsapp"
            size="icon"
            className="w-12 h-12 rounded-full shadow-2xl relative overflow-hidden group"
            title="Contacter le support WhatsApp"
          >
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 2, opacity: 1 }}
              transition={{ duration: 0.6 }}
              style={{ borderRadius: "50%" }}
            />
            <motion.img
              src="./whatsapp.svg.png"
              alt="WhatsApp"
              className="w-8 h-8 relative z-10"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
          </Button>
        </motion.div>
      </motion.div>

      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0 rounded-full border-4 border-green-500"
        animate={{
          scale: [1, 1.3, 1.5],
          opacity: [0.5, 0.3, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
        style={{ pointerEvents: "none" }}
      />
    </motion.div>
  );
};

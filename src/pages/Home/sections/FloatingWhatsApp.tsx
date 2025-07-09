import React from "react";
import { Button } from "../../../components/ui/button";
export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[9996]">
      <Button
        variant="whatsapp"
        size="icon"
        className="w-12 h-12 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
        title="Contacter le support WhatsApp"
      >
       <img src="./whatsapp.svg.png" alt="WhatsApp" className="w-8 h-8" />
      </Button>
    </div>
  );
};

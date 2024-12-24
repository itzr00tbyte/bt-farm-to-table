import { MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/917893533766", "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-lg z-50 flex items-center justify-center"
    >
      <MessageSquare className="w-8 h-8 text-white" />
    </Button>
  );
};

export default WhatsAppButton;
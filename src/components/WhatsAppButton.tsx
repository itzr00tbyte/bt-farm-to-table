import { MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello, Can I Get More Information About BT Foods?");
    window.open(`https://wa.me/+917893533766?text=${message}`, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-8 right-8 rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 shadow-lg z-50 flex items-center justify-center"
    >
      <MessageSquare className="w-10 h-10 text-white" />
    </Button>
  );
};

export default WhatsAppButton;
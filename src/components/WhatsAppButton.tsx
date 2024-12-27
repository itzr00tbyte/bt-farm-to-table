import { Button } from "./ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello, Can I Get More Information About BT Foods?");
    window.open(`https://wa.me/+917893533766?text=${message}`, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-8 right-8 rounded-full w-16 h-16 p-0 shadow-lg z-50 flex items-center justify-center bg-transparent hover:bg-transparent"
    >
      <img 
        src="/Images/whatsapp-icon.png" 
        alt="WhatsApp"
        className="w-14 h-14"
      />
    </Button>
  );
};

export default WhatsAppButton;
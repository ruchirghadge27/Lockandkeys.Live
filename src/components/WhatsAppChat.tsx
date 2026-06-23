import { MessageCircle } from 'lucide-react';

const WhatsAppChat = () => {
  const whatsappNumber = "1234567890"; // Replace with actual WhatsApp number
  const message = encodeURIComponent("Hi LocknKey! I'm interested in your construction services. Can you help me with more information?");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-bounce-gentle"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppChat;
import { MessageCircle } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppChat = () => {
  const whatsappNumber = "9156679165"; // Replace with actual WhatsApp number
  const message = encodeURIComponent("Hi LockandKey! I'm interested in your construction services. Can you help me with more information?");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-bounce-gentle group"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="h-6 w-6" />
      <span className="absolute bottom-1/2 translate-y-1/2 right-full mr-3 whitespace-nowrap bg-gray-900 text-white text-sm px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
        Chat with us
        <span className="absolute top-1/2 -translate-y-1/2 left-full -ml-1 border-4 border-transparent border-l-gray-900" />
      </span>
    </a>
  );
};

export default WhatsAppChat;
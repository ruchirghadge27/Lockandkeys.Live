import { Phone } from 'lucide-react';

const CallButton = () => {
  return (
    <a
      href="tel:+1234567890"
      className="fixed bottom-6 left-6 z-50 md:hidden bg-primary hover:bg-primary-hover text-primary-foreground p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Call Now"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
};

export default CallButton;
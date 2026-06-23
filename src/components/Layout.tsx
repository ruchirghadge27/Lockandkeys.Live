import { ReactNode } from 'react';
import Navbar from './Navbar';
import MarqueeBar from './MarqueeBar';
import WhatsAppChat from './WhatsAppChat';
import CallButton from './CallButton';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <MarqueeBar />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppChat />
      <CallButton />
    </div>
  );
};

export default Layout;
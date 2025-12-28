import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '6281234567890';
  const message = encodeURIComponent(
    'Halo kidsy! Saya ingin bertanya tentang produk edukasi anak.'
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden sm:inline font-medium">Chat WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;

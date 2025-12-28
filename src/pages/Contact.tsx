import { MessageCircle, Mail, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">Ada pertanyaan? Kami siap membantu!</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl p-8 border border-border mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Chat via WhatsApp</h2>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                <MessageCircle className="h-5 w-5 mr-2" /> Hubungi via WhatsApp
              </Button>
            </a>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border mb-8">
            <h3 className="text-xl font-bold mb-4">Cara Pemesanan</h3>
            <ol className="space-y-3 text-muted-foreground">
              <li className="flex gap-3"><span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm shrink-0">1</span> Pilih produk yang diinginkan</li>
              <li className="flex gap-3"><span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm shrink-0">2</span> Klik tombol "Beli via WhatsApp"</li>
              <li className="flex gap-3"><span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm shrink-0">3</span> Konfirmasi pesanan & lakukan pembayaran</li>
              <li className="flex gap-3"><span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm shrink-0">4</span> Terima file produk dalam hitungan menit!</li>
            </ol>
          </div>

          <div className="flex justify-center gap-4">
            <a href="mailto:hello@kidsy.id" className="p-4 bg-card rounded-xl border border-border hover:border-primary transition-colors">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://instagram.com/kidsy.id" target="_blank" rel="noopener noreferrer" className="p-4 bg-card rounded-xl border border-border hover:border-primary transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

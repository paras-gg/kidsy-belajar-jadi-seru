import { Link } from 'react-router-dom';
import { MessageCircle, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">K</span>
              </div>
              <span className="text-2xl font-bold text-gradient">kidsy</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Belajar Jadi Seru, Anak Tumbuh Maju
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@kidsy.id"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/kidsy.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/kidsy.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Menu</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/tentang" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/produk" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Produk
                </Link>
              </li>
              <li>
                <Link to="/testimoni" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Testimoni
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Produk</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/produk?category=ebook" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Ebook Edukasi
                </Link>
              </li>
              <li>
                <Link to="/produk?category=worksheet" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Worksheet PDF
                </Link>
              </li>
              <li>
                <Link to="/produk?category=bundle" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Paket Bundle
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Bantuan</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/kontak" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Hubungi Kami
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} kidsy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, MessageCircle, FileText, Users, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getProductBySlug } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug || '');
  const { addToCart, isInCart } = useCart();
  const { toast } = useToast();

  if (!product) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Produk tidak ditemukan</h1>
          <Button asChild><Link to="/produk">Kembali ke Katalog</Link></Button>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);

  const handleAddToCart = () => {
    addToCart(product);
    toast({ title: 'Ditambahkan ke keranjang!', description: `${product.name} berhasil ditambahkan.` });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Halo kidsy! Saya ingin membeli:\n\n${product.name}\nHarga: ${formatPrice(product.price)}\n\nMohon informasi pembayarannya.`);
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <Link to="/produk" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" /> Kembali ke Katalog
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="relative">
            <img src={product.image} alt={product.name} className="w-full aspect-square object-cover rounded-2xl bg-secondary" />
            {discount > 0 && <Badge className="absolute top-4 left-4 bg-destructive text-destructive-foreground text-lg px-3 py-1">-{discount}%</Badge>}
          </div>

          <div>
            <Badge className="mb-4">{product.category === 'ebook' ? 'Ebook' : product.category === 'worksheet' ? 'Worksheet' : 'Bundle'}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-primary">{formatPrice(product.price)}</span>
              {product.originalPrice && <span className="text-xl text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>}
            </div>

            <p className="text-muted-foreground mb-6">{product.description}</p>

            <div className="flex gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1"><Users className="h-4 w-4" /> {product.ageRange}</span>
              <span className="flex items-center gap-1"><FileText className="h-4 w-4" /> {product.pageCount} halaman</span>
            </div>

            <div className="mb-8">
              <h3 className="font-semibold mb-3">Manfaat:</h3>
              <ul className="space-y-2">
                {product.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /> {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1" onClick={handleAddToCart} disabled={isInCart(product.id)}>
                <ShoppingCart className="h-5 w-5 mr-2" />
                {isInCart(product.id) ? 'Sudah di Keranjang' : 'Tambah ke Keranjang'}
              </Button>
              <Button size="lg" variant="outline" className="flex-1 bg-[#25D366] hover:bg-[#25D366]/90 text-white border-0" onClick={handleWhatsApp}>
                <MessageCircle className="h-5 w-5 mr-2" /> Beli via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

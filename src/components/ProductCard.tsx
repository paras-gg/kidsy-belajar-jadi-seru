import { Link } from 'react-router-dom';
import { ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, isInCart } = useCart();
  const { toast } = useToast();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getCategoryLabel = (category: Product['category']) => {
    switch (category) {
      case 'ebook':
        return 'Ebook';
      case 'worksheet':
        return 'Worksheet';
      case 'bundle':
        return 'Bundle';
    }
  };

  const getCategoryColor = (category: Product['category']) => {
    switch (category) {
      case 'ebook':
        return 'bg-kidsy-purple/20 text-kidsy-purple border-kidsy-purple/30';
      case 'worksheet':
        return 'bg-kidsy-orange/20 text-kidsy-orange border-kidsy-orange/30';
      case 'bundle':
        return 'bg-primary/20 text-primary border-primary/30';
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: 'Ditambahkan ke keranjang!',
      description: `${product.name} berhasil ditambahkan.`,
    });
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group overflow-hidden bg-card border-border card-hover">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {discount > 0 && (
          <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
            -{discount}%
          </Badge>
        )}
        <Badge className={`absolute top-3 right-3 ${getCategoryColor(product.category)}`}>
          {getCategoryLabel(product.category)}
        </Badge>
        {product.featured && (
          <Badge className="absolute bottom-3 left-3 bg-kidsy-yellow text-primary-foreground">
            ⭐ Unggulan
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <div className="mb-2">
          <span className="text-xs text-muted-foreground">{product.ageRange}</span>
        </div>
        <h3 className="font-semibold text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {product.shortDescription}
        </p>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold text-primary">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <Link to={`/produk/${product.slug}`}>
              <Eye className="h-4 w-4 mr-1" />
              Detail
            </Link>
          </Button>
          <Button
            size="sm"
            className="flex-1"
            onClick={handleAddToCart}
            disabled={isInCart(product.id)}
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            {isInCart(product.id) ? 'Di Keranjang' : 'Tambah'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

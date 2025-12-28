import { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import FilterBar from '@/components/FilterBar';

const Products = () => {
  const [category, setCategory] = useState('all');

  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(p => p.category === category);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Katalog Produk</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ebook & worksheet edukasi untuk anak usia 5-8 tahun
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <FilterBar selectedCategory={category} onCategoryChange={setCategory} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">Tidak ada produk dalam kategori ini</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;

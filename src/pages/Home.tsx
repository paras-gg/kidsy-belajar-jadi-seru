import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Sparkles, Heart, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getFeaturedProducts } from '@/data/products';
import { testimonials } from '@/data/testimonials';
import ProductCard from '@/components/ProductCard';
import TestimonialCard from '@/components/TestimonialCard';

const Home = () => {
  const featuredProducts = getFeaturedProducts();
  const featuredTestimonials = testimonials.slice(0, 3);

  const benefits = [
    { icon: BookOpen, title: 'Belajar Menyenangkan', desc: 'Metode yang membuat anak semangat belajar' },
    { icon: Sparkles, title: 'Stimulasi Kreatif', desc: 'Aktivitas yang mengembangkan kreativitas' },
    { icon: Heart, title: 'Dibuat dengan Cinta', desc: 'Dirancang khusus untuk anak Indonesia' },
    { icon: Award, title: 'Terbukti Efektif', desc: 'Dipercaya ribuan orang tua' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              ✨ Edukasi Anak Usia 6-8 Tahun
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Belajar Jadi{' '}
              <span className="text-gradient">Seru</span>,<br />
              Anak Tumbuh <span className="text-gradient">Maju</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Ebook & worksheet edukasi yang membuat belajar menyenangkan.
              Persiapkan anak Anda untuk sukses sejak dini.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link to="/produk">
                  Beli Sekarang <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link to="/tentang">Tentang Kami</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="text-center p-6 rounded-xl bg-secondary/50 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Produk Unggulan</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Pilihan terbaik untuk memulai perjalanan belajar anak</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button size="lg" variant="outline" asChild>
              <Link to="/produk">Lihat Semua Produk <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kata Orang Tua</h2>
            <p className="text-muted-foreground">Apa kata mereka tentang produk kidsy</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTestimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button size="lg" variant="outline" asChild>
              <Link to="/testimoni">Lihat Semua Testimoni</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap Memulai?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Bergabung dengan ribuan orang tua yang sudah mempercayakan edukasi anak mereka kepada kidsy
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <Link to="/produk">Beli Sekarang</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import { testimonials } from '@/data/testimonials';
import TestimonialCard from '@/components/TestimonialCard';

const Testimonials = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Testimoni</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">Apa kata orang tua yang sudah menggunakan produk kidsy</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

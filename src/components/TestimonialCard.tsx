import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <Card className="bg-card border-border card-hover h-full">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover bg-secondary"
          />
          <div>
            <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground">{testimonial.location}</p>
          </div>
        </div>

        <div className="flex gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < testimonial.rating
                  ? 'fill-kidsy-yellow text-kidsy-yellow'
                  : 'text-muted'
              }`}
            />
          ))}
        </div>

        <p className="text-foreground mb-4 leading-relaxed">
          "{testimonial.text}"
        </p>

        <div className="flex flex-wrap gap-2 text-xs">
          {testimonial.productName && (
            <span className="px-2 py-1 bg-primary/10 text-primary rounded-full">
              {testimonial.productName}
            </span>
          )}
          {testimonial.childAge && (
            <span className="px-2 py-1 bg-secondary text-muted-foreground rounded-full">
              Anak usia {testimonial.childAge}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;

import { Button } from '@/components/ui/button';
import { Product } from '@/types';

interface FilterBarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { value: 'all', label: 'Semua' },
  { value: 'ebook', label: 'Ebook' },
  { value: 'worksheet', label: 'Worksheet' },
  { value: 'bundle', label: 'Bundle' },
];

const FilterBar = ({ selectedCategory, onCategoryChange }: FilterBarProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Button
          key={category.value}
          variant={selectedCategory === category.value ? 'default' : 'outline'}
          size="sm"
          onClick={() => onCategoryChange(category.value)}
          className="rounded-full"
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
};

export default FilterBar;

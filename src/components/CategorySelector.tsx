import React from 'react';
import { Button } from '@/components/ui/button';
import { categories } from '@/data/categories';
import { Category } from '@/types';

interface CategorySelectorProps {
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {categories.map((category: Category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "default" : "outline"}
          className={`rounded-full px-6 py-3 transition-all duration-300 ${
            selectedCategory === category.id 
              ? 'bg-gradient-primary text-white shadow-glow' 
              : 'hover:scale-105'
          }`}
          onClick={() => onCategoryChange(category.id)}
        >
          <span className="mr-2 text-lg">{category.icon}</span>
          <span className="font-medium">{category.nameAr}</span>
        </Button>
      ))}
    </div>
  );
};

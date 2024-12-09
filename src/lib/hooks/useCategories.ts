import { EXPENSE_CATEGORIES } from '@/lib/constants/categories';

export function useCategories() {
  const getCategories = () => EXPENSE_CATEGORIES;
  
  const getCategoryLabel = (id: string) => {
    const category = EXPENSE_CATEGORIES.find(cat => cat.id === id);
    return category?.label || id;
  };

  return {
    categories: EXPENSE_CATEGORIES,
    getCategories,
    getCategoryLabel
  };
}
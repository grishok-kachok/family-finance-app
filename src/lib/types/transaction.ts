export interface Transaction {
  id: string;
  userId: string;
  familyId: string;
  category: string;
  amount: number;
  type: 'income' | 'expense';
  date: string;
  description: string;
}

export interface TransactionFormData {
  type: 'income' | 'expense';
  amount: number;
  category: string;
  description: string;
}
import { useState } from 'react';
import type { Transaction, TransactionFormData } from '@/lib/types/transaction';

export function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: "1",
      userId: "1",
      familyId: "1",
      date: "2024-03-20",
      description: "Покупка продуктов",
      category: "Продукты",
      amount: -120.50,
      type: "expense"
    },
    {
      id: "2",
      userId: "1",
      familyId: "1",
      date: "2024-03-19",
      description: "Зарплата",
      category: "Доход",
      amount: 3000.00,
      type: "income"
    }
  ]);

  const addTransaction = (data: TransactionFormData) => {
    const newTransaction: Transaction = {
      id: Date.now().toString(),
      userId: "1", // В реальном приложении брать из контекста auth
      familyId: "1", // В реальном приложении брать из контекста family
      date: new Date().toISOString(),
      ...data
    };
    setTransactions(prev => [newTransaction, ...prev]);
  };

  return {
    transactions,
    addTransaction
  };
}
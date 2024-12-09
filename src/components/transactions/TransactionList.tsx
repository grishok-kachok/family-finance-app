import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TransactionItem } from './TransactionItem';
import { useTransactions } from '@/lib/hooks/useTransactions';

export function TransactionList() {
  const { transactions } = useTransactions();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Дата</TableHead>
          <TableHead>Описание</TableHead>
          <TableHead>Категория</TableHead>
          <TableHead className="text-right">Сумма</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TransactionItem 
            key={transaction.id} 
            transaction={transaction} 
          />
        ))}
      </TableBody>
    </Table>
  );
}
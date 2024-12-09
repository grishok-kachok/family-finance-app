import { formatDate, formatCurrency } from '@/lib/utils';
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';
import { TableCell, TableRow } from '@/components/ui/table';
import type { Transaction } from '@/lib/types/transaction';

interface TransactionItemProps {
  transaction: Transaction;
}

export function TransactionItem({ transaction }: TransactionItemProps) {
  return (
    <TableRow>
      <TableCell>{formatDate(new Date(transaction.date))}</TableCell>
      <TableCell>{transaction.description}</TableCell>
      <TableCell>{transaction.category}</TableCell>
      <TableCell className="text-right">
        <span className={`flex items-center justify-end ${
          transaction.type === "income" ? "text-green-500" : "text-red-500"
        }`}>
          {transaction.type === "income" 
            ? <ArrowUpIcon className="mr-1 h-4 w-4" /> 
            : <ArrowDownIcon className="mr-1 h-4 w-4" />
          }
          {formatCurrency(Math.abs(transaction.amount))}
        </span>
      </TableCell>
    </TableRow>
  );
}
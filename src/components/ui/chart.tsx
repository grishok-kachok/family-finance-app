import { ResponsiveContainer } from 'recharts';

interface ChartProps {
  children: React.ReactNode;
  height?: number;
}

export function Chart({ children, height = 350 }: ChartProps) {
  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  );
}
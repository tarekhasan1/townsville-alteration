// components/StatsCard.tsx
'use client';

interface StatsCardProps {
  title: string;
  value: number;
  icon: string;
  color: string;
  trend?: number;
}

export default function StatsCard({ title, value, icon, color, trend }: StatsCardProps) {
  return (
    <div className={`${color} p-5 rounded-2xl shadow-sm border border-gray-200`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">{value}</p>
          {trend !== undefined && (
            <div className="flex items-center mt-2">
              <span className={`text-sm ${trend >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {trend >= 0 ? '↗' : '↘'} {Math.abs(trend)}%
              </span>
              <span className="text-xs text-gray-500 ml-2">from last month</span>
            </div>
          )}
        </div>
        <div className="text-3xl">{icon}</div>
      </div>
    </div>
  );
}
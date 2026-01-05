import { useDashboardStore } from '../store/useDashboardStore';

const MetricsCards = () => {
  const { data } = useDashboardStore();

  if (!data) return null;

  const metrics = [
    {
      title: 'CPU Usage',
      value: `${data.metrics.cpu.toFixed(1)}%`,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      trend: data.metrics.cpu > 80 ? 'high' : data.metrics.cpu > 50 ? 'medium' : 'low'
    },
    {
      title: 'Memory Usage',
      value: `${data.metrics.memory.toFixed(1)}%`,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      trend: data.metrics.memory > 80 ? 'high' : data.metrics.memory > 50 ? 'medium' : 'low'
    },
    {
      title: 'Network Traffic',
      value: `${data.metrics.network.toFixed(0)} MB/s`,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      trend: data.metrics.network > 800 ? 'high' : data.metrics.network > 400 ? 'medium' : 'low'
    },
    {
      title: 'Disk Usage',
      value: `${data.metrics.disk.toFixed(1)}%`,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      trend: data.metrics.disk > 80 ? 'high' : data.metrics.disk > 50 ? 'medium' : 'low'
    },
    {
      title: 'Active Users',
      value: data.users.toLocaleString(),
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      trend: 'normal'
    }
  ];

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'high':
        return 'text-red-600';
      case 'medium':
        return 'text-yellow-600';
      case 'low':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  const getIcon = (title) => {
    switch (title) {
      case 'CPU Usage':
        return '🖥️';
      case 'Memory Usage':
        return '🧠';
      case 'Network Traffic':
        return '🌐';
      case 'Disk Usage':
        return '💾';
      case 'Active Users':
        return '👥';
      default:
        return '📊';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {metrics.map((metric, index) => (
        <div key={index} className="metric-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">
                {metric.title}
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {metric.value}
              </p>
            </div>
            <div className={`p-3 rounded-lg ${metric.bgColor}`}>
              <span className="text-2xl">{getIcon(metric.title)}</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center text-sm">
              <span className={`font-medium ${getTrendColor(metric.trend)}`}>
                {metric.trend === 'high' ? 'High' : 
                 metric.trend === 'medium' ? 'Medium' : 
                 metric.trend === 'low' ? 'Low' : 'Normal'}
              </span>
              <div className={`ml-2 w-2 h-2 rounded-full ${getTrendColor(metric.trend).replace('text-', 'bg-')}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetricsCards; 
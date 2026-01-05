import { useDashboardStore } from '../store/useDashboardStore';

const MetricsChart = () => {
  const { getMetricsData } = useDashboardStore();
  const metricsData = getMetricsData();

  if (metricsData.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500">
        <div className="text-center">
          <div className="text-lg font-medium mb-2">No data available</div>
          <div className="text-sm">Waiting for live metrics...</div>
        </div>
      </div>
    );
  }

  const maxValue = 100;
  const chartHeight = 200;
  const chartWidth = 600;

  const createPath = (data, color) => {
    if (data.length < 2) return '';
    
    const points = data.map((item, index) => {
      const x = (index / (data.length - 1)) * chartWidth;
      const y = chartHeight - (item.value / maxValue) * chartHeight;
      return `${x},${y}`;
    });
    
    return `M ${points.join(' L ')}`;
  };

  const cpuData = metricsData.map(item => ({ value: item.cpu }));
  const memoryData = metricsData.map(item => ({ value: item.memory }));
  const networkData = metricsData.map(item => ({ value: item.network / 10 }));
  const diskData = metricsData.map(item => ({ value: item.disk }));

  return (
    <div className="h-80">
      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-900 mb-2">System Metrics Over Time</h3>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span>CPU</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <span>Memory</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500 rounded"></div>
            <span>Network</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded"></div>
            <span>Disk</span>
          </div>
        </div>
      </div>
      
      <div className="relative overflow-x-auto">
        <svg width={chartWidth} height={chartHeight} className="min-w-full">
          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map((value) => (
            <line
              key={value}
              x1="0"
              y1={chartHeight - (value / maxValue) * chartHeight}
              x2={chartWidth}
              y2={chartHeight - (value / maxValue) * chartHeight}
              stroke="#e5e7eb"
              strokeWidth="1"
            />
          ))}
          
          {/* CPU line */}
          <path
            d={createPath(cpuData)}
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          />
          
          {/* Memory line */}
          <path
            d={createPath(memoryData)}
            stroke="#22c55e"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          />
          
          {/* Network line */}
          <path
            d={createPath(networkData)}
            stroke="#a855f7"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          />
          
          {/* Disk line */}
          <path
            d={createPath(diskData)}
            stroke="#f97316"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          />
        </svg>
      </div>
      
      <div className="mt-4 text-center text-sm text-gray-500">
        <p>Real-time metrics visualization</p>
        <p className="mt-1">Data points: {metricsData.length}</p>
      </div>
    </div>
  );
};

export default MetricsChart; 
import { useDashboardStore } from '../store/useDashboardStore';

const ConnectionStatus = () => {
  const { isConnected, isConnecting, connectionError } = useDashboardStore();
  
  const getStatusConfig = () => {
    if (isConnected) {
      return {
        text: 'Connected',
        color: 'text-green-600',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        indicatorClass: 'bg-green-500'
      };
    }
    if (isConnecting) {
      return {
        text: 'Connecting...',
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-200',
        indicatorClass: 'bg-yellow-500'
      };
    }
    return {
      text: 'Disconnected',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      indicatorClass: 'bg-red-500'
    };
  };
  
  const config = getStatusConfig();
  
  return (
    <div className={`flex items-center gap-3 px-4 py-2 rounded-lg border ${config.bgColor} ${config.borderColor}`}>
      <div className={`w-3 h-3 rounded-full ${config.indicatorClass} ${isConnected ? 'animate-pulse' : ''}`} />
      <span className={`text-sm font-medium ${config.color}`}>
        {config.text}
      </span>
      {connectionError && (
        <span className="text-xs text-gray-500 ml-2">
          ({connectionError})
        </span>
      )}
    </div>
  );
};

export default ConnectionStatus; 
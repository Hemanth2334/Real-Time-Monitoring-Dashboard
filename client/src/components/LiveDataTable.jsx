import { useDashboardStore } from '../store/useDashboardStore';

const LiveDataTable = () => {
  const { data } = useDashboardStore();

  if (!data?.events) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500">
        <div className="text-center">
          <div className="text-lg font-medium mb-2">No events available</div>
          <div className="text-sm">Waiting for live events...</div>
        </div>
      </div>
    );
  }

  const getEventIcon = (type) => {
    switch (type) {
      case 'error':
        return '❌';
      case 'warning':
        return '⚠️';
      case 'info':
      default:
        return 'ℹ️';
    }
  };

  const getEventColor = (type) => {
    switch (type) {
      case 'error':
        return 'bg-red-50 border-red-200';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200';
      case 'info':
      default:
        return 'bg-blue-50 border-blue-200';
    }
  };

  const getEventTextColor = (type) => {
    switch (type) {
      case 'error':
        return 'text-red-800';
      case 'warning':
        return 'text-yellow-800';
      case 'info':
      default:
        return 'text-blue-800';
    }
  };

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">
          Recent Events ({data.events.length})
        </h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-xs text-gray-600">Info</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span className="text-xs text-gray-600">Warning</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span className="text-xs text-gray-600">Error</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-2 max-h-64 overflow-y-auto">
        {data.events.map((event, index) => (
          <div
            key={event.id || index}
            className={`p-3 rounded-lg border ${getEventColor(event.type)} animate-pulse`}
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <span className="text-lg">{getEventIcon(event.type)}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className={`text-sm font-medium ${getEventTextColor(event.type)}`}>
                  {event.message}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {formatTimestamp(event.timestamp)}
                </div>
              </div>
              <div className="flex-shrink-0">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getEventTextColor(event.type)} bg-white/50`}>
                  {event.type.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {data.events.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <div className="text-2xl mb-2">ℹ️</div>
          <div className="text-sm">No events to display</div>
        </div>
      )}
    </div>
  );
};

export default LiveDataTable; 
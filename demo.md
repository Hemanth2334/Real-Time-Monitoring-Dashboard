# 🎯 Dashboard Demo Guide

## Quick Demo

1. **Start the application:**
   ```bash
   npm run dev
   ```

2. **Open your browser** to `http://localhost:5173`

3. **Watch the magic happen!** 🎉

## What You'll See

### 🟢 Connection Status
- **Green pulsing dot** = Connected to WebSocket server
- **Yellow dot** = Connecting...
- **Red dot** = Connection error

### 📊 Live Metrics Cards
- **CPU Usage** 🖥️ - Real-time CPU percentage
- **Memory Usage** 🧠 - Live memory consumption
- **Network Traffic** 🌐 - Current network activity
- **Disk Usage** 💾 - Storage utilization
- **Active Users** 👥 - Number of connected users

### 📈 Interactive Charts
- **SVG-based line charts** showing historical data
- **4 different metrics** (CPU, Memory, Network, Disk)
- **Real-time updates** every 2 seconds
- **Smooth animations** and hover effects

### 📋 Live Events Table
- **Color-coded events** (Info, Warning, Error)
- **Real-time streaming** of system events
- **Timestamp formatting** for each event
- **Auto-scrolling** as new events arrive

## Testing Features

### 🔄 Auto-reconnection
1. Stop the server (`Ctrl+C`)
2. Watch the connection status turn red
3. Restart the server (`npm run dev`)
4. See the connection automatically reconnect

### 📱 Responsive Design
1. Resize your browser window
2. Open developer tools and toggle mobile view
3. Notice how the layout adapts beautifully

### ⚡ Real-time Updates
1. Watch the metrics cards update every 2 seconds
2. Observe the charts drawing new data points
3. See new events appear in the table

## API Testing

### Health Check
```bash
curl http://localhost:3001/health
```

### WebSocket Connection
```bash
# The dashboard automatically connects to:
# ws://localhost:3001
```

## Performance Features

- **Lightning-fast** Vite development server
- **Hot Module Replacement** for instant updates
- **Optimized builds** for production
- **Efficient state management** with Zustand
- **Robust WebSocket** with auto-reconnection

## Browser Compatibility

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

---

**Enjoy your real-time dashboard! 🚀** 
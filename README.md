# Real-time Dashboard with WebSocket

A modern MERN stack dashboard application that displays live system metrics and events using WebSocket connections. Built with React, Node.js, Express, Socket.io, and Tailwind CSS.

![Dashboard Preview](https://img.shields.io/badge/Status-Live%20Demo-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Socket.io](https://img.shields.io/badge/Socket.io-4.7.4-orange)

## ✨ Features

- 🚀 **Real-time Data**: Live system metrics and events via WebSocket
- 📊 **Interactive Charts**: Beautiful SVG-based charts with historical data
- 🎨 **Modern UI**: Clean, responsive design with Tailwind CSS
- 🔄 **Auto-reconnection**: Robust WebSocket connection with automatic reconnection
- 📱 **Responsive**: Works on desktop and mobile devices
- ⚡ **Fast**: Built with Vite for lightning-fast development
- 🎯 **Type-safe**: Modern JavaScript with proper error handling
- 🌐 **Live Status**: Real-time connection status indicator

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Zustand** - State management
- **Socket.io Client** - WebSocket communication

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **Socket.io** - WebSocket server
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
realtime-dashboard-websocket/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Dashboard.jsx
│   │   │   ├── MetricsCards.jsx
│   │   │   ├── MetricsChart.jsx
│   │   │   ├── LiveDataTable.jsx
│   │   │   └── ConnectionStatus.jsx
│   │   ├── store/         # Zustand store
│   │   │   └── useDashboardStore.js
│   │   ├── services/      # WebSocket service
│   │   │   └── websocketService.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
├── server/                 # Node.js backend
│   ├── src/
│   │   └── index.js       # Express + Socket.io server
│   └── package.json
├── package.json           # Root workspace config
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/falakthkr/realtime-dashboard-websocket.git
   cd realtime-dashboard-websocket
   ```

2. **Install dependencies:**
   ```bash
   npm run install:all
   ```

3. **Start the development servers:**
   ```bash
   npm run dev
   ```

   This will start both the backend (port 3001) and frontend (port 5173) servers concurrently.

4. **Open your browser:**
   Navigate to `http://localhost:5173` to view the dashboard.

### Manual Setup

If you prefer to run servers separately:

**Backend:**
```bash
cd server
npm install
npm run dev
```

**Frontend:**
```bash
cd client
npm install
npm run dev
```

## 📊 Dashboard Features

### 1. Connection Status
- Green pulsing dot for connected status
- Real-time connection monitoring
- Automatic reconnection logic

### 2. Metrics Cards
- CPU, Memory, Network, Disk usage
- Active users count
- Color-coded trend indicators (High/Medium/Low)

### 3. Interactive Charts
- SVG-based line charts with historical data
- Real-time updates every 2 seconds
- Multiple metrics visualization

### 4. Live Events Table
- Color-coded event types (info, warning, error)
- Real-time event streaming
- Timestamp formatting

## 🔌 WebSocket Events

The server emits the following events:

- `data`: System metrics and events (every 2 seconds)
- `connect`: Client connection established
- `disconnect`: Client disconnected

### Sample Data Structure
```javascript
{
  timestamp: "2025-06-28T19:12:06.045Z",
  metrics: {
    cpu: 45.2,
    memory: 67.8,
    network: 234.5,
    disk: 23.1
  },
  events: [
    {
      id: 1732834326123,
      type: "info",
      message: "System event 123",
      timestamp: "2025-06-28T19:12:06.045Z"
    }
  ],
  users: 1234,
  transactions: 5678
}
```

## 🛠️ Development

### Available Scripts

**Root:**
- `npm run dev` - Start both servers in development mode
- `npm run install:all` - Install dependencies for all workspaces

**Server:**
- `npm run dev:server` - Start server with nodemon
- `npm run start` - Start server in production mode

**Client:**
- `npm run dev:client` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### State Management (Zustand)

The dashboard uses Zustand for state management:

```javascript
{
  // Connection state
  isConnected: boolean,
  isConnecting: boolean,
  connectionError: string | null,
  
  // Data state
  data: object | null,
  lastUpdate: string | null,
  historicalData: array,
  
  // UI state
  isLoading: boolean,
  error: string | null
}
```

### WebSocket Service

The `websocketService` handles:
- Connection management
- Automatic reconnection with exponential backoff
- Event handling
- Error recovery

## 🌐 API Endpoints

### Health Check
- `GET /health` - Server health status

### WebSocket Events
- `data` - Receive live system data
- `requestData` - Request immediate data update

## 🚀 Production Deployment

### Build the Application

```bash
# Build frontend
cd client
npm run build

# Start production server
cd ../server
npm run start
```

### Environment Variables

Create a `.env` file in the server directory:

```env
NODE_ENV=production
PORT=3001
CLIENT_URL=https://your-domain.com
```

### Docker Deployment

```dockerfile
# Dockerfile for production
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3001

CMD ["npm", "start"]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Socket.io](https://socket.io/) for WebSocket functionality
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Zustand](https://github.com/pmndrs/zustand) for state management
- [Vite](https://vitejs.dev/) for build tooling

## 📞 Support

For issues and questions, please open an issue on GitHub.

---

⭐ **Star this repository if you found it helpful!** 

---

**Built by Falak Thackar**

I’m a full stack developer who builds clean, working products using React, Node.js, MongoDB, and React Native.  
Open to remote/hybrid roles and freelance MVP builds.

👉 [LinkedIn](https://linkedin.com/in/falakthackar) | [Email](mailto:falakthackar@gmail.com)

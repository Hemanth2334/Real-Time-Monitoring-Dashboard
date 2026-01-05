import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log(`Client connected: ${socket.id}`);
  
  // Send initial data
  socket.emit('data', generateMockData());
  
  // Handle client disconnection
  socket.on('disconnect', () => {
    console.log(`Client disconnected: ${socket.id}`);
  });
  
  // Handle client requests for data
  socket.on('requestData', () => {
    socket.emit('data', generateMockData());
  });
});

// Mock data generator for live dashboard
function generateMockData() {
  const now = new Date();
  const data = {
    timestamp: now.toISOString(),
    metrics: {
      cpu: Math.random() * 100,
      memory: Math.random() * 100,
      network: Math.random() * 1000,
      disk: Math.random() * 100
    },
    events: [
      {
        id: Date.now(),
        type: ['info', 'warning', 'error'][Math.floor(Math.random() * 3)],
        message: `System event ${Math.floor(Math.random() * 1000)}`,
        timestamp: now.toISOString()
      }
    ],
    users: Math.floor(Math.random() * 1000) + 100,
    transactions: Math.floor(Math.random() * 5000) + 1000
  };
  
  return data;
}

// Start periodic data emission
setInterval(() => {
  const data = generateMockData();
  io.emit('data', data);
}, 2000); // Emit data every 2 seconds

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 WebSocket server ready for connections`);
  console.log(`🔗 Health check: http://localhost:${PORT}/health`);
}); 
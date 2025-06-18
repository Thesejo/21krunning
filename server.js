const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Configuración del servidor
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Rutas básicas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Gestión de usuarios conectados
let connectedUsers = {};

// Configuración de Socket.io
io.on('connection', (socket) => {
    console.log('Nuevo usuario conectado:', socket.id);
    
    // Registrar nuevo usuario
    socket.on('register-user', (userData) => {
        connectedUsers[socket.id] = {
            id: socket.id,
            name: userData.name || `Corredor-${socket.id.substr(0, 5)}`,
            position: null,
            running: false
        };
        
        io.emit('users-updated', connectedUsers);
    });
    
    // Actualizar posición de carrera
    socket.on('update-position', (position) => {
        if (connectedUsers[socket.id]) {
            connectedUsers[socket.id].position = position;
            connectedUsers[socket.id].running = true;
            io.emit('user-position-updated', {
                userId: socket.id,
                position: position
            });
        }
    });
    
    // Iniciar carrera multijugador
    socket.on('start-multiplayer-run', (data) => {
        if (connectedUsers[socket.id]) {
            connectedUsers[socket.id].running = true;
            io.emit('multiplayer-run-started', {
                initiator: socket.id,
                route: data.route
            });
        }
    });
    
    // Desconexión de usuario
    socket.on('disconnect', () => {
        delete connectedUsers[socket.id];
        io.emit('users-updated', connectedUsers);
        console.log('Usuario desconectado:', socket.id);
    });
});

// Iniciar servidor
server.listen(PORT, () => {
    console.log(`Servidor 21KRunning corriendo en http://localhost:${PORT}`);
});￼Enter

// Módulo de comunicación en tiempo real
let socket = null;

function initSocketConnection() {
    // Conectar al servidor Socket.io
    socket = io();
    
    // Manejar eventos de conexión
    socket.on('connect', () => {
        console.log('Conectado al servidor');
        registerUser();
    });
    
    socket.on('disconnect', () => {
        console.log('Desconectado del servidor');
    });
    
    // Escuchar actualizaciones de otros usuarios
    socket.on('users-updated', (users) => {
        updateOpponentsList(users);
    });
    
    socket.on('user-position-updated', (data) => {
        updateOpponentPosition(data.userId, data.position);
    });
    
    socket.on('multiplayer-run-started', (data) => {
        startMultiplayerRace(data.route);
    });
}

function registerUser() {
    const userData = {
        name: localStorage.getItem('21kRunningProfile') 
            ? JSON.parse(localStorage.getItem('21kRunningProfile')).name 
            : 'Corredor Anónimo'
    };
    
    socket.emit('register-user', userData);
}

function updateOpponentsList(users) {
    // Actualizar lista de oponentes en el modo multijugador
    if (typeof updateMultiplayerOpponents === 'function') {
        updateMultiplayerOpponents(users);
    }
}

function updateOpponentPosition(userId, position) {
    // Actualizar posición de un oponente en el mapa
    if (typeof updateOpponentOnMap === 'function') {
        updateOpponentOnMap(userId, position);
    }
}

function startMultiplayerRace(route) {
    // Iniciar carrera multijugador
    if (typeof initializeMultiplayerRace === 'function') {
        initializeMultiplayerRace(route);
    }
}

// Funciones para emitir eventos
function emitPositionUpdate(position) {
    if (socket && socket.connected) {
        socket.emit('update-position', position);
    }
}

function emitStartRace(route) {
    if (socket && socket.connected) {
        socket.emit('start-multiplayer-run', { route });
    }
}

export { 
    initSocketConnection, 
    emitPositionUpdate, 
    emitStartRace 
};￼Enter

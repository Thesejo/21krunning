// Módulo de multijugador
let multiplayerState = {
    connected: false,
    currentRace: null,
    opponents: {},
    raceRoute: null
};

function initMultiplayer() {
    const multiplayerSection = document.getElementById('multiplayer-section');
    multiplayerSection.innerHTML = `
        <div class="multiplayer-container">
            <div id="multiplayer-map"></div>
            
            <div class="multiplayer-controls">
                <div class="connection-status">
                    <span id="connection-status-indicator" class="disconnected"></span>
                    <span id="connection-status-text">Desconectado</span>
                </div>
                
                <div id="race-lobby" class="hidden">
                    <h3>Sala de Carrera</h3>
                    <div id="opponents-list"></div>
                    
                    <div class="route-selection">
                        <h4>Seleccionar Ruta:</h4>
                        <select id="route-selector">
                            <option value="random">Ruta Aleatoria</option>
                            <option value="5k">5K Urbano</option>
                            <option value="10k">10K Parque</option>
                            <option value="21k">Media Maratón</option>
                        </select>
                    </div>
                    
                    <button id="start-race-btn" class="btn-primary">
                        <i class="fas fa-flag-checkered"></i> Iniciar Carrera
                    </button>
                </div>
                
                <button id="connect-multiplayer-btn" class="btn-primary">
                    <i class="fas fa-plug"></i> Conectar
                </button>
                
                <div id="race-in-progress" class="hidden">
                    <div class="race-metrics">
                        <div class="metric">
                            <span class="value" id="race-distance">0.00</span>
                            <span class="label">km</span>
                        </div>
                        <div class="metric">
                            <span class="value" id="race-position">-</span>
                            <span class="label">posición</span>
                        </div>
                    </div>
                    
                    <button id="quit-race-btn" class="btn-secondary">
                        <i class="fas fa-sign-out-alt"></i> Abandonar
                    </button>
                </div>
            </div>
        </div>
    `;
    
    setupMultiplayerEvents();
}

function setupMultiplayerEvents() {
    document.getElementById('connect-multiplayer-btn').addEventListener('click', connectToMultiplayer);
    document.getElementById('start-race-btn').addEventListener('click', startRace);
    document.getElementById('quit-race-btn').addEventListener('click', quitRace);
}

function connectToMultiplayer() {
    if (multiplayerState.connected) return;
    
    // Simular conexión (en producción usaría Socket.io)
    setTimeout(() => {
        multiplayerState.connected = true;
        updateConnectionStatus(true);
        
        document.getElementById('connect-multiplayer-btn').classList.add('hidden');
        document.getElementById('race-lobby').classList.remove('hidden');
        
        // Simular oponentes (en producción vendrían del servidor)
        multiplayerState.opponents = {
            'user1': { name: 'Corredor1', position: null, distance: 0 },
            'user2': { name: 'Corredor2', position: null, distance: 0 },
            'user3': { name: 'Corredor3', position: null, distance: 0 }
        };
// Módulo de multijugador
let multiplayerState = {
    connected: false,
    currentRace: null,
    opponents: {},
    raceRoute: null
};

function initMultiplayer() {
    const multiplayerSection = document.getElementById('multiplayer-section');
    multiplayerSection.innerHTML = `
        <div class="multiplayer-container">
            <div id="multiplayer-map"></div>
            
            <div class="multiplayer-controls">
                <div class="connection-status">
                    <span id="connection-status-indicator" class="disconnected"></span>
                    <span id="connection-status-text">Desconectado</span>
                </div>
                
                <div id="race-lobby" class="hidden">
                    <h3>Sala de Carrera</h3>
                    <div id="opponents-list"></div>
                    
                    <div class="route-selection">
                        <h4>Seleccionar Ruta:</h4>
                        <select id="route-selector">
                            <option value="random">Ruta Aleatoria</option>
                            <option value="5k">5K Urbano</option>
                            <option value="10k">10K Parque</option>
                            <option value="21k">Media Maratón</option>
                        </select>
                    </div>
                    
                    <button id="start-race-btn" class="btn-primary">
                        <i class="fas fa-flag-checkered"></i> Iniciar Carrera
                    </button>
                </div>
                
                <button id="connect-multiplayer-btn" class="btn-primary">
                    <i class="fas fa-plug"></i> Conectar
                </button>
                
                <div id="race-in-progress" class="hidden">
                    <div class="race-metrics">
                        <div class="metric">
                            <span class="value" id="race-distance">0.00</span>
                            <span class="label">km</span>
                        </div>
                        <div class="metric">
                            <span class="value" id="race-position">-</span>
                            <span class="label">posición</span>
                        </div>
                    </div>
                    
                    <button id="quit-race-btn" class="btn-secondary">
                        <i class="fas fa-sign-out-alt"></i> Abandonar
                    </button>
                </div>
            </div>
        </div>
    `;
    
    setupMultiplayerEvents();
}

function setupMultiplayerEvents() {
    document.getElementById('connect-multiplayer-btn').addEventListener('click', connectToMultiplayer);
    document.getElementById('start-race-btn').addEventListener('click', startRace);
    document.getElementById('quit-race-btn').addEventListener('click', quitRace);
}

function connectToMultiplayer() {
    if (multiplayerState.connected) return;
    
    // Simular conexión (en producción usaría Socket.io)
    setTimeout(() => {
        multiplayerState.connected = true;
        updateConnectionStatus(true);
        
        document.getElementById('connect-multiplayer-btn').classList.add('hidden');
        document.getElementById('race-lobby').classList.remove('hidden');
        
        // Simular oponentes (en producción vendrían del servidor)
        multiplayerState.opponents = {
            'user1': { name: 'Corredor1', position: null, distance: 0 },
            'user2': { name: 'Corredor2', position: null, distance: 0 },
            'user3': { name: 'Corredor3', position: null, distance: 0 }
        };
        
        renderOpponentsList();
    }, 1000);
}

function updateConnectionStatus(connected) {
    const indicator = document.getElementById('connection-status-indicator');
    const text = document.getElementById('connection-status-text');
    
    if (connected) {
        indicator.classList.remove('disconnected');
        indicator.classList.add('connected');
        text.textContent = 'Conectado';
    } else {
        indicator.classList.remove('connected');
        indicator.classList.add('disconnected');
        text.textContent = 'Desconectado';
    }
}

function renderOpponentsList() {
    const opponentsList = document.getElementById('opponents-list');
    opponentsList.innerHTML = '';
    
    Object.entries(multiplayerState.opponents).forEach(([id, opponent]) => {
        const opponentElement = document.createElement('div');
        opponentElement.className = 'opponent-item';
        opponentElement.innerHTML = `
            <div class="opponent-avatar"></div>
            <span class="opponent-name">${opponent.name}</span>
            <span class="opponent-status">Listo</span>
        `;
        opponentsList.appendChild(opponentElement);
    });
}

function startRace() {
    const routeType = document.getElementById('route-selector').value;
    multiplayerState.raceRoute = generateRoute(routeType);
    
    document.getElementById('race-lobby').classList.add('hidden');
    document.getElementById('race-in-progress').classList.remove('hidden');
    
    // Iniciar lógica de carrera
    multiplayerState.currentRace = {
        startTime: new Date(),
        positions: [],
        distance: 0
    };
    
    // En producción: emitir evento al servidor
    // socket.emit('start-race', { route: routeType });
}

function generateRoute(routeType) {
    // Lógica para generar diferentes rutas basadas en el tipo
    // En una aplicación real, esto vendría del servidor
    const baseCoords = [40.4168, -3.7038]; // Madrid
    
    switch(routeType) {
        case '5k':
            return generateCircularRoute(baseCoords, 1.5);
        case '10k':
            return generateCircularRoute(baseCoords, 2.5);
        case '21k':
            return generateLinearRoute(baseCoords, 10.5);
        default:
            return generateRandomRoute(baseCoords);
    }
}

function quitRace() {
    document.getElementById('race-in-progress').classList.add('hidden');
    document.getElementById('race-lobby').classList.remove('hidden');
    
    multiplayerState.currentRace = null;
}

export { initMultiplayer };￼Enter        
        renderOpponentsList();
    }, 1000);
}

function updateConnectionStatus(connected) {
    const indicator = document.getElementById('connection-status-indicator');
    const text = document.getElementById('connection-status-text');
    
    if (connected) {
        indicator.classList.remove('disconnected');
        indicator.classList.add('connected');
        text.textContent = 'Conectado';
    } else {
        indicator.classList.remove('connected');
        indicator.classList.add('disconnected');
        text.textContent = 'Desconectado';
    }
}

function renderOpponentsList() {
    const opponentsList = document.getElementById('opponents-list');
    opponentsList.innerHTML = '';
    
    Object.entries(multiplayerState.opponents).forEach(([id, opponent]) => {
        const opponentElement = document.createElement('div');
  opponentElement.className = 'opponent-item';
        opponentElement.innerHTML = `
            <div class="opponent-avatar"></div>
            <span class="opponent-name">${opponent.name}</span>
            <span class="opponent-status">Listo</span>
        `;
        opponentsList.appendChild(opponentElement);
    });
}

function startRace() {
    const routeType = document.getElementById('route-selector').value;
    multiplayerState.raceRoute = generateRoute(routeType);
    
    document.getElementById('race-lobby').classList.add('hidden');
    document.getElementById('race-in-progress').classList.remove('hidden');
    
    // Iniciar lógica de carrera
    multiplayerState.currentRace = {
        startTime: new Date(),
        positions: [],
        distance: 0
    };
    
    // En producción: emitir evento al servidor
    // socket.emit('start-race', { route: routeType });

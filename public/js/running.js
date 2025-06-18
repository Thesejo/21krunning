// Módulo de funcionalidad de carrera
let runState = {
    isRunning: false,
    startTime: null,
    timerInterval: null,
    positions: [],
    map: null,
    mapInitialized: false
};

function initRunning() {
    const runningSection = document.getElementById('running-section');
    runningSection.innerHTML = `
        <div class="running-container">
            <div id="running-map"></div>
            
            <div class="running-controls">
                <div class="metrics-container">
                    <div class="metric">
                        <span class="value" id="distance-value">0.00</span>
                        <span class="label">km</span>
                    </div>
                    <div class="metric">
                        <span class="value" id="time-value">00:00:00</span>
                        <span class="label">tiempo</span>
                    </div>
                    <div class="metric">
                        <span class="value" id="pace-value">--:--</span>
                        <span class="label">min/km</span>
                    </div>
                </div>
                
                <button id="start-run-btn" class="btn-run">
                    <i class="fas fa-play"></i> Comenzar
                </button>
                
                <button id="stop-run-btn" class="btn-stop hidden">
                    <i class="fas fa-stop"></i> Detener
                </button>
                
                <div class="run-actions hidden" id="post-run-actions">
                    <button id="save-run-btn" class="btn-primary">
                        <i class="fas fa-save"></i> Guardar
                    </button>
                    <button id="discard-run-btn" class="btn-secondary">
                        <i class="fas fa-trash"></i> Descartar
                    </button>
                </div>
            </div>
        </div>
    `;
    
    setupRunningEvents();
    initMap();
}

function initMap() {
    if (runState.mapInitialized) return;
    
    runState.map = L.map('running-map').setView([40.4168, -3.7038], 13); // Madrid por defecto
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(runState.map);
    
    runState.mapInitialized = true;
}

function setupRunningEvents() {
    const startBtn = document.getElementById('start-run-btn');
    const stopBtn = document.getElementById('stop-run-btn');
    
    startBtn.addEventListener('click', startRun);
    stopBtn.addEventListener('click', stopRun);
    
    document.getElementById('save-run-btn').addEventListener('click', saveRun);
    document.getElementById('discard-run-btn').addEventListener('click', discardRun);
}

function startRun() {
    if (runState.isRunning) return;
    
    runState = {
        ...runState,
        isRunning: true,
        startTime: new Date(),
        positions: [],
        timerInterval: setInterval(updateTimer, 1000)
    };
    
    document.getElementById('start-run-btn').classList.add('hidden');
    document.getElementById('stop-run-btn').classList.remove('hidden');
    
    // Iniciar seguimiento GPS
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
            position => trackPosition(position),
            error => handleGeoError(error),
            { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
        );
    }
}

function trackPosition(position) {
    if (!runState.isRunning) return;
    
    const { latitude, longitude } = position.coords;
    const newPosition = { lat: latitude, lng: longitude, timestamp: new Date() };
    
    runState.positions.push(newPosition);
    updateMap(newPosition);
    updateDistance();
}

function updateMap(position) {
    if (runState.positions.length === 1) {
        // Primer punto
        runState.map.setView([position.lat, position.lng], 15);
        L.marker([position.lat, position.lng]).addTo(runState.map)
            .bindPopup("Punto de inicio")
            .openPopup();
    } else {
        // Dibujar ruta
        if (runState.positions.length > 1) {
            const lastPos = runState.positions[runState.positions.length - 2];
            L.polyline(
                [[lastPos.lat, lastPos.lng], [position.lat, position.lng]],
                { color: '#FF6B00', weight: 5 }
            ).addTo(runState.map);
        }
    }
}

function updateDistance() {
    let totalDistance = 0;
    
    for (let i = 1; i < runState.positions.length; i++) {
        totalDistance += calculateDistance(
            runState.positions[i-1].lat, runState.positions[i-1].lng,
            runState.positions[i].lat, runState.positions[i].lng
        );
    }
    
    document.getElementById('distance-value').textContent = totalDistance.toFixed(2);
    updatePace(totalDistance);
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    // Fórmula Haversine para calcular distancia entre coordenadas
    const R = 6371; // Radio de la Tierra en km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

function updateTimer() {
    const now = new Date();
    const elapsed = new Date(now - runState.startTime);
    
    const hours = elapsed.getUTCHours().toString().padStart(2, '0');
    const minutes = elapsed.getUTCMinutes().toString().padStart(2, '0');
    const seconds = elapsed.getUTCSeconds().toString().padStart(2, '0');
    
    document.getElementById('time-value').textContent = `${hours}:${minutes}:${seconds}`;
}

function updatePace(distance) {
    if (distance === 0) return;
    
    const now = new Date();
    const elapsed = (now - runState.startTime) / 1000 / 60; // en minutos
    const pace = elapsed / distance;
    
    const paceMinutes = Math.floor(pace);
    const paceSeconds = Math.floor((pace % 1) * 60);
    
    document.getElementById('pace-value').textContent = 
        `${paceMinutes}:${paceSeconds.toString().padStart(2, '0')}`;
}

function stopRun() {
    if (!runState.isRunning) return;
    
    clearInterval(runState.timerInterval);
    runState.isRunning = false;
    
    document.getElementById('stop-run-btn').classList.add('hidden');
    document.getElementById('post-run-actions').classList.remove('hidden');
}

function saveRun() {
    const now = new Date();
    const elapsed = (now - runState.startTime) / 1000;
    const distance = parseFloat(document.getElementById('distance-value').textContent);
    
    // Actualizar perfil
    if (typeof updateProfileAfterRun === 'function') {
        updateProfileAfterRun(distance, elapsed);
    }
    
    resetRunUI();
}

function discardRun() {
    resetRunUI();
}

function resetRunUI() {
    document.getElementById('start-run-btn').classList.remove('hidden');
    document.getElementById('post-run-actions').classList.add('hidden');
    
    // Resetear valores
    document.getElementById('distance-value').textContent = '0.00';
    document.getElementById('time-value').textContent = '00:00:00';
    document.getElementById('pace-value').textContent = '--:--';
    
    // Resetear estado
    runState = {
        ...runState,
        isRunning: false,
        startTime: null,
        timerInterval: null,
        positions: []
    };
}

function handleGeoError(error) {
    console.error('Error de geolocalización:', error);
    alert('Error al obtener la ubicación. Asegúrate de tener activado el GPS.');
}

export { initRunning };

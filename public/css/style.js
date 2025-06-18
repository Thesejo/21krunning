/* ===== ESTILOS BASE ===== */
:root {
    --primary-color: #FF6B00;  /* Color principal naranja */
    --secondary-color: #333333; /* Color secundario */
    --light-color: #F8F9FA;    /* Fondo claro */
    --dark-color: #212529;     /* Fondo oscuro */
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', 'Roboto', sans-serif;
    background-color: var(--light-color);
    color: var(--dark-color);
    line-height: 1.6;
}

.hidden {
    display: none !important;
}

/* ===== PANTALLA DE INICIO ===== */
#splash-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--dark-color);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    flex-direction: column;
}

.splash-content {
    text-align: center;
    animation: fadeIn 1s ease-out;
}

.splash-logo {
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
}

.splash-title {
    color: white;
    font-size: 2.5rem;
    margin-bottom: 10px;
    font-weight: 700;
}

.splash-loader {
    width: 50px;
    height: 50px;
    border: 5px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    border-top-color: var(--primary-color);
    animation: spin 1s linear infinite;
    margin: 20px auto;
}

/* ===== ESTRUCTURA PRINCIPAL ===== */
#app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

/* Cabecera */
.app-header {
    background: var(--dark-color);
    color: white;
    padding: 15px 20px;
}

.header-content {
    display: flex;
    align-items: center;
    gap: 15px;
}

.header-logo {
    height: 40px;
}

.header-titles h1 {
    margin: 0;
    font-size: 1.5rem;
    color: var(--primary-color);
}

/* Menú principal */
.main-menu {
    display: flex;
    background: var(--secondary-color);
    padding: 10px;
    gap: 10px;
    overflow-x: auto;
}

.menu-item {
    padding: 12px 20px;
    color: white;
    text-align: center;
    border-radius: 5px;
    min-width: 120px;
    background: rgba(0, 0, 0, 0.3);
}

.menu-item.active {
    background: var(--primary-color);
}

/* Contenido principal */
#app-content {
    flex: 1;
    padding: 20px;
}

/* ===== SECCIÓN DE RUNNING (ESTILOS ORIGINALES CONSERVADOS) ===== */
#map {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
}

#controls {
    position: fixed;
    bottom: 10px;
    left: 10px;
    right: 10px;
    background: rgba(255,255,255,0.9);
/* ===== ESTILOS BASE ===== */
:root {
    --primary-color: #FF6B00;  /* Color principal naranja */
    --secondary-color: #333333; /* Color secundario */
    --light-color: #F8F9FA;    /* Fondo claro */
    --dark-color: #212529;     /* Fondo oscuro */
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', 'Roboto', sans-serif;
    background-color: var(--light-color);
    color: var(--dark-color);
    line-height: 1.6;
}

.hidden {
    display: none !important;
}

/* ===== PANTALLA DE INICIO ===== */
#splash-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--dark-color);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    flex-direction: column;
}

.splash-content {
    text-align: center;
    animation: fadeIn 1s ease-out;
}

.splash-logo {
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
}

.splash-title {
    color: white;
    font-size: 2.5rem;
    margin-bottom: 10px;
    font-weight: 700;
}

.splash-loader {
    width: 50px;
    height: 50px;
    border: 5px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    border-top-color: var(--primary-color);
    animation: spin 1s linear infinite;
    margin: 20px auto;
}

/* ===== ESTRUCTURA PRINCIPAL ===== */
#app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

/* Cabecera */
.app-header {
    background: var(--dark-color);
    color: white;
    padding: 15px 20px;
}

.header-content {
    display: flex;
    align-items: center;
    gap: 15px;
}

.header-logo {
    height: 40px;
}

.header-titles h1 {
    margin: 0;
    font-size: 1.5rem;
    color: var(--primary-color);
}

/* Menú principal */
.main-menu {
    display: flex;
    background: var(--secondary-color);
    padding: 10px;
    gap: 10px;
    overflow-x: auto;
}

.menu-item {
    padding: 12px 20px;
    color: white;
    text-align: center;
    border-radius: 5px;
    min-width: 120px;
    background: rgba(0, 0, 0, 0.3);
}

.menu-item.active {
    background: var(--primary-color);
}

/* Contenido principal */
#app-content {
    flex: 1;
    padding: 20px;
}

/* ===== SECCIÓN DE RUNNING (ESTILOS ORIGINALES CONSERVADOS) ===== */
#map {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
}

#controls {
    position: fixed;
    bottom: 10px;
    left: 10px;
    right: 10px;
    background: rgba(255,255,255,0.9);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    z-index: 1000;
}

.metric-box {
    background: var(--secondary-color);
    color: white;
    padding: 8px;
    border-radius: 8px;
    flex: 1;
    min-width: 80px;
    text-align: center;
}

.tracking-controls {
    display: flex;
    gap: 5px;
    width: 100%;
}

.tracking-controls button {
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    color: white;
}

#start-btn { background: #27ae60; }
#pause-btn { background: #f39c12; }
#stop-btn { background: #e74c3c; }

.player-marker {
    width: 20px;
    height: 20px;
    background: #e74c3c;
    border-radius: 50%;
    border: 2px solid white;
    box-shadow: 0 0 5px rgba(0,0,0,0.5);
}

/* ===== ANIMACIONES ===== */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes spin {
    100% { transform: rotate(360deg); }
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
    .header-content {
        flex-direction: column;
        text-align: center;
    }
    
    .main-menu {
        flex-wrap: wrap;
    }
    
    .menu-item {
        min-width: calc(50% - 10px);
    }
    
    #controls {
        flex-direction: column;
    }
    
    .tracking-controls button {
        width: 100%;
    }
}￼Enter    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    z-index: 1000;
}

.metric-box {
    background: var(--secondary-color);
    color: white;
    padding: 8px;
    border-radius: 8px;
    flex: 1;
    min-width: 80px;
    text-align: center;
}

.tracking-controls {
    display: flex;
    gap: 5px;
    width: 100%;
}

.tracking-controls button {
    flex: 1;
dding: 10px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    color: white;
}

#start-btn { background: #27ae60; }
#pause-btn { background: #f39c12; }
#stop-btn { background: #e74c3c; }

.player-marker {
    width: 20px;
    height: 20px;
    background: #e74c3c;
    border-radius: 50%;
    border: 2px solid white;
    box-shadow: 0 0 5px rgba(0,0,0,0.5);
}

/* ===== ANIMACIONES ===== */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}


// Configuración mejorada de la pantalla de inicio
class SplashScreen {
    constructor() {
        this.splashElement = document.getElementById('splash-screen');
        this.appContainer = document.getElementById('app-container');
        this.MIN_DISPLAY_TIME = 2500; // 2.5 segundos mínimo
        this.startTime = performance.now();
    }

    init() {
        this.addLoadingAnimation();
        this.handleSplashTransition();
    }

    addLoadingAnimation() {
        const loaderContainer = document.createElement('div');
        loaderContainer.className = 'loading-bar-container';
        loaderContainer.innerHTML = `
            <div class="loading-bar">
                <div class="loading-progress"></div>
            </div>
            <div class="loading-text">Cargando 0%</div>
        `;
        document.querySelector('.splash-content').appendChild(loaderContainer);
    }

    updateProgress(percent) {
        const progressBar = document.querySelector('.loading-progress');
        const progressText = document.querySelector('.loading-text');
        
        if (progressBar && progressText) {
            progressBar.style.width = `${percent}%`;
            progressText.textContent = `Cargando ${Math.min(100, Math.floor(percent))}%`;
            
            // Cambiar color cuando esté completo
            if (percent >= 100) {
                progressBar.style.backgroundColor = '#4CAF50';
            }
        }
    }

    handleSplashTransition() {
        // Simular progreso de carga
        let progress = 0;
        const progressInterval = setInterval(() => {
            progress += Math.random() * 15;
            this.updateProgress(progress);
            
            if (progress >= 100) {
                clearInterval(progressInterval);
                this.transitionToApp();
            }
        }, 300);

        // Forzar transición después del tiempo mínimo
        setTimeout(() => {
            clearInterval(progressInterval);
            this.updateProgress(100);
            this.transitionToApp();
        }, this.MIN_DISPLAY_TIME);
    }

    transitionToApp() {
        // Animación de desvanecimiento
        this.splashElement.style.opacity = '0';
        this.splashElement.style.transition = 'opacity 0.5s ease-out';
        
        setTimeout(() => {
            this.splashElement.classList.add('hidden');
            this.appContainer.classList.remove('hidden');
            
            // Inicializar la aplicación
            if (typeof init21KRunning === 'function') {
                init21KRunning();
            }
            
            // Evento personalizado para notificar que el splash ha terminado
            document.dispatchEvent(new Event('splash-complete'));
        }, 500);
    }
}

// Inicializar al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    const splash = new SplashScreen();
    splash.init();
});

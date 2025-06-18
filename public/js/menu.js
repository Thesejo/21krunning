// Menú modular mejorado
class MainMenu {
    constructor() {
        this.menuItems = [
            {
                id: 'profile',
                title: 'Mi Perfil',
                icon: 'fas fa-user',
                background: 'linear-gradient(135deg, #00A896, #02C39A)',
                badge: null
            },
            {
                id: 'running',
                title: 'Correr',
                icon: 'fas fa-running',
                background: 'linear-gradient(135deg, #FF6B00, #FF9500)',
                badge: 'Nuevo'
            },
            {
                id: 'multiplayer',
                title: 'Multijugador',
                icon: 'fas fa-users',
                background: 'linear-gradient(135deg, #05668D, #028090)',
                badge: 'Popular'
            },
            {
                id: 'about',
                title: '21KRunning',
                icon: 'fas fa-info-circle',
                background: 'linear-gradient(135deg, #333333, #555555)',
                badge: null
            }
        ];
        this.currentSection = 'running';
    }

    init() {
        this.renderMenu();
        this.setupEventListeners();
        this.checkNotifications();
    }

    renderMenu() {
        const menuContainer = document.getElementById('main-menu');
        menuContainer.innerHTML = '';
        
        this.menuItems.forEach(item => {
            const menuItem = document.createElement('a');
            menuItem.href = '#';
            menuItem.className = `menu-item ${this.currentSection === item.id ? 'active' : ''}`;
            menuItem.id = `${item.id}-btn`;
            menuItem.dataset.section = item.id;
            
            menuItem.innerHTML = `
                <div class="menu-item-content" style="background: ${item.background}">
                    <i class="${item.icon}"></i>
                    <span>${item.title}</span>
                    ${item.badge ? `<span class="menu-badge">${item.badge}</span>` : ''}
                </div>
            `;
            
            menuContainer.appendChild(menuItem);
        });
    }

    setupEventListeners() {
        document.addEventListener('click', (e) => {
            const menuItem = e.target.closest('.menu-item');
            if (menuItem) {
                e.preventDefault();
                const sectionId = menuItem.dataset.section;
                this.switchSection(sectionId);
            }
        });
        
        // Teclado accesible
        document.addEventListener('keydown', (e) => {
// Menú modular mejorado
class MainMenu {
    constructor() {
        this.menuItems = [
            {
                id: 'profile',
                title: 'Mi Perfil',
                icon: 'fas fa-user',
                background: 'linear-gradient(135deg, #00A896, #02C39A)',
                badge: null
            },
            {
                id: 'running',
                title: 'Correr',
                icon: 'fas fa-running',
                background: 'linear-gradient(135deg, #FF6B00, #FF9500)',
                badge: 'Nuevo'
            },
            {
                id: 'multiplayer',
                title: 'Multijugador',
                icon: 'fas fa-users',
                background: 'linear-gradient(135deg, #05668D, #028090)',
                badge: 'Popular'
            },
            {
                id: 'about',
                title: '21KRunning',
                icon: 'fas fa-info-circle',
                background: 'linear-gradient(135deg, #333333, #555555)',
                badge: null
            }
        ];
        this.currentSection = 'running';
    }

    init() {
        this.renderMenu();
        this.setupEventListeners();
        this.checkNotifications();
    }

    renderMenu() {
        const menuContainer = document.getElementById('main-menu');
        menuContainer.innerHTML = '';
        
        this.menuItems.forEach(item => {
            const menuItem = document.createElement('a');
            menuItem.href = '#';
            menuItem.className = `menu-item ${this.currentSection === item.id ? 'active' : ''}`;
            menuItem.id = `${item.id}-btn`;
            menuItem.dataset.section = item.id;
            
            menuItem.innerHTML = `
                <div class="menu-item-content" style="background: ${item.background}">
                    <i class="${item.icon}"></i>
                    <span>${item.title}</span>
                    ${item.badge ? `<span class="menu-badge">${item.badge}</span>` : ''}
                </div>
            `;
            
            menuContainer.appendChild(menuItem);
        });
    }

    setupEventListeners() {
        document.addEventListener('click', (e) => {
            const menuItem = e.target.closest('.menu-item');
            if (menuItem) {
                e.preventDefault();
                const sectionId = menuItem.dataset.section;
                this.switchSection(sectionId);
            }
        });
        
        // Teclado accesible
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && document.activeElement.classList.contains('menu-item')) {
                const sectionId = document.activeElement.dataset.section;
                this.switchSection(sectionId);
            }
        });
    }

    switchSection(sectionId) {
        if (this.currentSection === sectionId) return;
        
        // Actualizar menú
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('active');
        });
        document.getElementById(`${sectionId}-btn`).classList.add('active');
        
        // Ocultar todas las secciones
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
            section.classList.add('hidden');
        });
        
        // Mostrar sección seleccionada
        const section = document.getElementById(`${sectionId}-section`);
        if (section) {
            section.classList.remove('hidden');
            setTimeout(() => section.classList.add('active'), 10);
        }
        
        this.currentSection = sectionId;
        
        // Disparar evento personalizado
        document.dispatchEvent(new CustomEvent('section-changed', {
            detail: { sectionId }
        }));
    }

    checkNotifications() {
        // Simular notificaciones (en una app real vendrían del servidor)
        setTimeout(() => {
            const profileItem = document.getElementById('profile-btn');
            if (profileItem) {
                const notification = document.createElement('span');
                notification.className = 'menu-notification';
                notification.textContent = '3';
                profileItem.querySelector('.menu-item-content').appendChild(notification);
            }
        }, 10000);
    }

    updateBadge(itemId, badgeText) {
        const menuItem = document.getElementById(`${itemId}-btn`);
        if (menuItem) {
            let badge = menuItem.querySelector('.menu-badge');
            if (badge) {
                badge.textContent = badgeText;
            } else if (badgeText) {
                badge = document.createElement('span');
                badge.className = 'menu-badge';
                badge.textContent = badgeText;
                menuItem.querySelector('.menu-item-content').appendChild(badge);
            }
        }
    }
}

// Inicializar cuando el splash termine
document.addEventListener('splash-complete', () => {
    const mainMenu = new MainMenu();
    mainMenu.init();
    
    // Hacer el menú accesible
    document.getElementById('main-menu').setAttribute('role', 'navigation');
    document.querySelectorAll('.menu-item').forEach(item => {
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        item.setAttribute('aria-label', item.dataset.section);
    });
});￼Enter            if (e.key === 'Enter' && document.activeElement.classList.contains('menu-item')) {
                const sectionId = document.activeElement.dataset.section;
                this.switchSection(sectionId);
            }
        });
    }

    switchSection(sectionId) {
        if (this.currentSection === sectionId) return;
        
        // Actualizar menú
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('active');
        });
        document.getElementById(`${sectionId}-btn`).classList.add('active');
        
        // Ocultar todas las secciones
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
            section.classList.add('hidden');
        });
        
        // Mostrar sección seleccionada
        const section = document.getElementById(`${sectionId}-section`);
        if (section) {
            section.classList.remove('hidden');
      setTimeout(() => section.classList.add('active'), 10);
        }
        
        this.currentSection = sectionId;
        
        // Disparar evento personalizado
        document.dispatchEvent(new CustomEvent('section-changed', {
            detail: { sectionId }
        }));
    }

    checkNotifications() {
        // Simular notificaciones (en una app real vendrían del servidor)
        setTimeout(() => {
            const profileItem = document.getElementById('profile-btn');
            if (profileItem) {
                const notification = document.createElement('span');
                notification.className = 'menu-notification';
                notification.textContent = '3';
                profileItem.querySelector('.menu-item-content').appendChild(notification);
            }
        }, 10000);
    }

    updateBadge(itemId, badgeText) {
        const menuItem = document.getElementById(`${itemId}-btn`);

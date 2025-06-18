// Módulo de perfil de usuario
let userProfile = {
    name: "Corredor Anónimo",
    level: "Principiante",
    totalKm: 0,
    achievements: [],
    avatar: "default.jpg"
};

function initProfile() {
    loadProfileData();
    setupProfileEvents();
}

function loadProfileData() {
    const savedProfile = localStorage.getItem('21kRunningProfile');
    if (savedProfile) {
        userProfile = JSON.parse(savedProfile);
    }
    renderProfile();
}

function renderProfile() {
    const profileSection = document.getElementById('profile-section');
    profileSection.innerHTML = `
        <div class="profile-container">
            <div class="profile-header">
                <div class="avatar" style="background-image: url('img/avatars/${userProfile.avatar}')"></div>
                <h2>${userProfile.name}</h2>
                <span class="badge ${userProfile.level.toLowerCase()}">${userProfile.level}</span>
            </div>
            
            <div class="stats-container">
                <div class="stat-card">
                    <h3>Kilómetros Totales</h3>
                    <p class="stat-value">${userProfile.totalKm.toFixed(1)} km</p>
                </div>
                
                <div class="stat-card">
                    <h3>Sesiones</h3>
                    <p class="stat-value">${userProfile.achievements.length}</p>
                </div>
            </div>
            
            <div class="achievements-container">
                <h3>Logros</h3>
                ${renderAchievements()}
            </div>
            
            <div class="profile-actions">
                <button id="edit-profile-btn" class="btn-primary">
                    <i class="fas fa-user-edit"></i> Editar Perfil
                </button>
            </div>
        </div>
        
        <div id="edit-profile-modal" class="modal hidden">
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h2>Editar Perfil</h2>
                <form id="profile-form">
                    <div class="form-group">
                        <label for="profile-name">Nombre:</label>
                        <input type="text" id="profile-name" value="${userProfile.name}" required>
                    </div>
                    
                    <div class="form-group">
                        <label>Avatar:</label>
                        <div class="avatar-selector">
                            ${['default.jpg', 'runner1.jpg', 'runner2.jpg', 'runner3.jpg'].map(avatar => `
                                <div class="avatar-option ${userProfile.avatar === avatar ? 'selected' : ''}" 
                                     data-avatar="${avatar}">
                                    <img src="img/avatars/${avatar}" alt="${avatar.split('.')[0]}">
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
// Módulo de perfil de usuario
let userProfile = {
    name: "Corredor Anónimo",
    level: "Principiante",
    totalKm: 0,
    achievements: [],
    avatar: "default.jpg"
};

function initProfile() {
    loadProfileData();
    setupProfileEvents();
}

function loadProfileData() {
    const savedProfile = localStorage.getItem('21kRunningProfile');
    if (savedProfile) {
        userProfile = JSON.parse(savedProfile);
    }
    renderProfile();
}

function renderProfile() {
    const profileSection = document.getElementById('profile-section');
    profileSection.innerHTML = `
        <div class="profile-container">
            <div class="profile-header">
                <div class="avatar" style="background-image: url('img/avatars/${userProfile.avatar}')"></div>
                <h2>${userProfile.name}</h2>
                <span class="badge ${userProfile.level.toLowerCase()}">${userProfile.level}</span>
            </div>
            
            <div class="stats-container">
                <div class="stat-card">
                    <h3>Kilómetros Totales</h3>
                    <p class="stat-value">${userProfile.totalKm.toFixed(1)} km</p>
                </div>
                
                <div class="stat-card">
                    <h3>Sesiones</h3>
                    <p class="stat-value">${userProfile.achievements.length}</p>
                </div>
            </div>
            
            <div class="achievements-container">
                <h3>Logros</h3>
                ${renderAchievements()}
            </div>
            
            <div class="profile-actions">
                <button id="edit-profile-btn" class="btn-primary">
                    <i class="fas fa-user-edit"></i> Editar Perfil
                </button>
            </div>
        </div>
        
        <div id="edit-profile-modal" class="modal hidden">
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h2>Editar Perfil</h2>
                <form id="profile-form">
                    <div class="form-group">
                        <label for="profile-name">Nombre:</label>
                        <input type="text" id="profile-name" value="${userProfile.name}" required>
                    </div>
                    
                    <div class="form-group">
                        <label>Avatar:</label>
                        <div class="avatar-selector">
                            ${['default.jpg', 'runner1.jpg', 'runner2.jpg', 'runner3.jpg'].map(avatar => `
                                <div class="avatar-option ${userProfile.avatar === avatar ? 'selected' : ''}" 
                                     data-avatar="${avatar}">
                                    <img src="img/avatars/${avatar}" alt="${avatar.split('.')[0]}">
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <button type="submit" class="btn-primary">Guardar Cambios</button>
                </form>
            </div>
        </div>
    `;
}

function renderAchievements() {
    if (userProfile.achievements.length === 0) {
        return `<p class="empty-message">Aún no tienes logros. ¡Sal a correr!</p>`;
    }
    
    return `
        <div class="achievements-grid">
            ${userProfile.achievements.map(ach => `
                <div class="achievement-card">
                    <i class="fas fa-${ach.icon} ${ach.type}"></i>
                    <h4>${ach.title}</h4>
                    <p>${ach.date}</p>
                </div>
            `).join('')}
        </div>
    `;
}

function setupProfileEvents() {
    document.addEventListener('click', (e) => {
        if (e.target.id === 'edit-profile-btn') {
            document.getElementById('edit-profile-modal').classList.remove('hidden');
        }
        
        if (e.target.classList.contains('close-modal')) {
            document.getElementById('edit-profile-modal').classList.add('hidden');
        }
        
        if (e.target.classList.contains('avatar-option')) {
            document.querySelectorAll('.avatar-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            e.target.classList.add('selected');
        }
    });
    
    document.getElementById('profile-section').addEventListener('submit', (e) => {
        if (e.target.id === 'profile-form') {
            e.preventDefault();
            const selectedAvatar = document.querySelector('.avatar-option.selected').dataset.avatar;
            
            userProfile = {
                ...userProfile,
                name: document.getElementById('profile-name').value,
                avatar: selectedAvatar
            };
            
            localStorage.setItem('21kRunningProfile', JSON.stringify(userProfile));
            renderProfile();
            document.getElementById('edit-profile-modal').classList.add('hidden');
        }
    });
}

// Actualizar estadísticas después de una carrera
function updateProfileAfterRun(distance, duration) {
    userProfile.totalKm += distance;
    
    // Verificar logros
    checkAchievements(distance, duration);
    
    // Guardar cambios
    localStorage.setItem('21kRunningProfile', JSON.stringify(userProfile));
    renderProfile();
}

function checkAchievements(distance, duration) {
    // Lógica para verificar logros
    // ...
}

export { initProfile, updateProfileAfterRun };￼Enter                    <button type="submit" class="btn-primary">Guardar Cambios</button>
                </form>
            </div>
        </div>
    `;
}

function renderAchievements() {
    if (userProfile.achievements.length === 0) {
        return `<p class="empty-message">Aún no tienes logros. ¡Sal a correr!</p>`;
    }
    
    return `
        <div class="achievements-grid">
            ${userProfile.achievements.map(ach => `
                <div class="achievement-card">
                    <i class="fas fa-${ach.icon} ${ach.type}"></i>
                    <h4>${ach.title}</h4>
                    <p>${ach.date}</p>
                </div>
            `).join('')}
        </div>
    `;
}

function setupProfileEvents() {
cument.addEventListener('click', (e) => {
        if (e.target.id === 'edit-profile-btn') {
            document.getElementById('edit-profile-modal').classList.remove('hidden');
        }
        
        if (e.target.classList.contains('close-modal')) {
            document.getElementById('edit-profile-modal').classList.add('hidden');
        }
        
        if (e.target.classList.contains('avatar-option')) {
            document.querySelectorAll('.avatar-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            e.target.classList.add('selected');
        }
    });
    
    document.getElementById('profile-section').addEventListener('submit', (e) => {
        if (e.target.id === 'profile-form') {
            e.preventDefault();
            const selectedAvatar = document.querySelector('.avatar-option.selected').dataset.avatar;
            
            userProfile = {
                ...userProfile,
                name: document.getElementById('profile-name').value,
                avatar: selectedAvatar

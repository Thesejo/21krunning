// Módulo de información de la empresa
function initAbout() {
    const aboutSection = document.getElementById('about-section');
    aboutSection.innerHTML = `
        <div class="about-container">
            <div class="about-header">
                <img src="img/21krunning-logo.png" alt="21KRunning Logo" class="about-logo">
                <h2>21KRunning</h2>
                <p class="tagline">Conectando corredores, superando límites</p>
            </div>
            
            <div class="about-content">
                <div class="about-card">
                    <h3><i class="fas fa-history"></i> Nuestra Historia</h3>
                    <p>Fundada en 2023 por un grupo de apasionados corredores, 21KRunning nació con la misión de crear una comunidad donde los runners puedan conectarse, competir y mejorar juntos.</p>
                </div>
                
                <div class="about-card">
                    <h3><i class="fas fa-bullseye"></i> Misión</h3>
                    <p>Proporcionar herramientas innovadoras para que corredores de todos los niveles puedan entrenar de manera más efectiva, segura y divertida.</p>
                </div>
                
                <div class="about-card">
                    <h3><i class="fas fa-chart-line"></i> Estadísticas</h3>
                    <div class="stats-grid">
                        <div class="stat-item">
                            <span class="stat-number">15,000+</span>
                            <span class="stat-label">Usuarios</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">500,000+</span>
                            <span class="stat-label">Km recorridos</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">30+</span>
                            <span class="stat-label">Países</span>
                        </div>
                    </div>
                </div>
                
                <div class="about-card contact-card">
                    <h3><i class="fas fa-envelope"></i> Contacto</h3>
                    <p>¿Preguntas o sugerencias? Escríbenos:</p>
                    <ul class="contact-list">
                        <li><i class="fas fa-globe"></i> www.21krunning.com</li>
                        <li><i class="fas fa-envelope"></i> info@21krunning.com</li>
                        <li><i class="fas fa-phone"></i> +34 910 00 00 00</li>
                    </ul>
                    
                    <div class="social-links">
                        <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export { initAbout };￼Enter

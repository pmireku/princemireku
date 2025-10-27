// Theme Management
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        this.init();
    }

    init() {
        // Apply saved theme or default to dark
        this.applyTheme(this.currentTheme);
        
        // Create theme toggle button
        this.createThemeToggle();
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.currentTheme = theme;
        localStorage.setItem('theme', theme);
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(newTheme);
        this.updateToggleButton(newTheme);
    }

    createThemeToggle() {
        // Create toggle button
        const toggleButton = document.createElement('button');
        toggleButton.id = 'theme-toggle';
        toggleButton.innerHTML = this.currentTheme === 'dark' ? '🌙' : '☀️';
        toggleButton.className = 'fixed top-4 right-4 z-50 p-3 rounded-full bg-gray-800 text-white shadow-lg hover:bg-gray-700 transition-colors duration-200';
        toggleButton.setAttribute('aria-label', 'Toggle theme');
        toggleButton.onclick = () => this.toggleTheme();
        
        // Add button to body
        document.body.appendChild(toggleButton);
        
        // Initial button state
        this.updateToggleButton(this.currentTheme);
    }

    updateToggleButton(theme) {
        const button = document.getElementById('theme-toggle');
        if (button) {
            button.innerHTML = theme === 'dark' ? '🌙' : '☀️';
            button.className = theme === 'dark' 
                ? 'fixed top-4 right-4 z-50 p-3 rounded-full bg-gray-800 text-white shadow-lg hover:bg-gray-700 transition-colors duration-200'
                : 'fixed top-4 right-4 z-50 p-3 rounded-full bg-yellow-400 text-gray-900 shadow-lg hover:bg-yellow-500 transition-colors duration-200';
        }
    }
}

// Initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
});

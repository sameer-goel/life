// Ultra-simple password-based auth (client-side only)
class SimpleAuth {
    constructor() {
        this.adminPassword = 'your-admin-password'; // Change this!
        this.isLoggedIn = sessionStorage.getItem('adminLoggedIn') === 'true';
        this.updateUI();
    }

    login(password) {
        if (password === this.adminPassword) {
            this.isLoggedIn = true;
            sessionStorage.setItem('adminLoggedIn', 'true');
            this.updateUI();
            return true;
        }
        return false;
    }

    logout() {
        this.isLoggedIn = false;
        sessionStorage.removeItem('adminLoggedIn');
        this.updateUI();
    }

    updateUI() {
        const loginBtn = document.getElementById('loginBtn');
        const logoutBtn = document.getElementById('logoutBtn');
        const adminPanel = document.getElementById('adminPanel');
        
        if (this.isLoggedIn) {
            loginBtn.style.display = 'none';
            logoutBtn.style.display = 'inline-block';
            adminPanel.style.display = 'block';
        } else {
            loginBtn.style.display = 'inline-block';
            logoutBtn.style.display = 'none';
            adminPanel.style.display = 'none';
        }
    }
}

const simpleAuth = new SimpleAuth();
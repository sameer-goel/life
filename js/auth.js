class Auth {
    constructor() {
        this.user = null;
    }

    async checkAuth() {
        const { data: { user } } = await supabase.auth.getUser();
        this.user = user;
        this.updateUI();
    }

    async signIn(email, password) {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });
        if (error) throw error;
        this.user = data.user;
        this.updateUI();
        return data;
    }

    async signOut() {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        this.user = null;
        this.updateUI();
    }

    isAdmin() {
        return this.user !== null;
    }

    updateUI() {
        const loginBtn = document.getElementById('loginBtn');
        const logoutBtn = document.getElementById('logoutBtn');
        const adminPanel = document.getElementById('adminPanel');
        
        if (this.isAdmin()) {
            if (loginBtn) loginBtn.style.display = 'none';
            if (logoutBtn) logoutBtn.style.display = 'inline-block';
            if (adminPanel) adminPanel.style.display = 'block';
        } else {
            if (loginBtn) loginBtn.style.display = 'inline-block';
            if (logoutBtn) logoutBtn.style.display = 'none';
            if (adminPanel) adminPanel.style.display = 'none';
        }
        
        // Call global UI update if available
        if (typeof updateAuthUI === 'function') {
            updateAuthUI();
        }
    }
}

const auth = new Auth();
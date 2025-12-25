// Authentication Helper Functions

function checkAuth() {
    if (!DB.isAuthenticated()) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

function checkAdminAuth() {
    if (!DB.isAuthenticated()) {
        window.location.href = 'login.html';
        return false;
    }
    if (!DB.isAdmin()) {
        window.location.href = 'user-dashboard.html';
        return false;
    }
    return true;
}

function logout() {
    DB.logout();
    window.location.href = 'index.html';
}

function getCurrentUserInfo() {
    return DB.getCurrentUser();
}

function updateUserProfile(updates) {
    const user = DB.getCurrentUser();
    if (user) {
        const updatedUser = DB.updateUser(user.id, updates);
        if (updatedUser) {
            DB.setCurrentUser(updatedUser);
            return updatedUser;
        }
    }
    return null;
}

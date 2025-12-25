// User Dashboard Helper Functions

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function formatTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
        return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
}

function calculatePercentage(obtained, total) {
    if (total === 0) return 0;
    return Math.round((obtained / total) * 100);
}

function getUserProgress(userId, courseId) {
    const enrollments = DB.getUserEnrollments(userId);
    const enrollment = enrollments.find(e => e.courseId === courseId);
    return enrollment ? enrollment.progress : 0;
}

function updateProgress(userId, courseId, progress) {
    const enrollments = DB.getEnrollments();
    const enrollment = enrollments.find(e => e.userId === userId && e.courseId === courseId);
    if (enrollment) {
        enrollment.progress = Math.min(progress, 100);
        localStorage.setItem('enrollments', JSON.stringify(enrollments));
    }
}

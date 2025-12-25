// Local Storage Database Management
const DB = {
    // Initialize database with default data
    init() {
        if (!localStorage.getItem('users')) {
            localStorage.setItem('users', JSON.stringify([
                {
                    id: 1,
                    name: 'Admin User',
                    email: 'admin@amralsariti.com',
                    password: 'admin123',
                    role: 'admin',
                    createdAt: new Date().toISOString()
                },
                {
                    id: 2,
                    name: 'Demo Student',
                    email: 'student@example.com',
                    password: 'student123',
                    role: 'student',
                    createdAt: new Date().toISOString()
                }
            ]));
        }

        if (!localStorage.getItem('courses')) {
            localStorage.setItem('courses', JSON.stringify([
                {
                    id: 1,
                    title: 'Microeconomics Fundamentals',
                    description: 'Learn about supply and demand, market structures, and consumer behavior',
                    instructor: 'Amr Alsariti',
                    duration: '12 Hours',
                    lectures: 24,
                    enrolled: 1250,
                    rating: 4.8,
                    createdAt: new Date().toISOString()
                },
                {
                    id: 2,
                    title: 'Macroeconomics Essentials',
                    description: 'Understand GDP, inflation, unemployment, and monetary policy',
                    instructor: 'Amr Alsariti',
                    duration: '15 Hours',
                    lectures: 28,
                    enrolled: 1580,
                    rating: 4.9,
                    createdAt: new Date().toISOString()
                },
                {
                    id: 3,
                    title: 'International Economics',
                    description: 'Explore trade theory, exchange rates, and global economic policies',
                    instructor: 'Amr Alsariti',
                    duration: '10 Hours',
                    lectures: 20,
                    enrolled: 890,
                    rating: 4.7,
                    createdAt: new Date().toISOString()
                }
            ]));
        }

        if (!localStorage.getItem('quizzes')) {
            localStorage.setItem('quizzes', JSON.stringify([
                {
                    id: 1,
                    courseId: 1,
                    title: 'Supply and Demand Quiz',
                    duration: 15,
                    questions: [
                        {
                            id: 1,
                            question: 'What happens to the equilibrium price when demand increases and supply remains constant?',
                            options: [
                                'Price decreases',
                                'Price increases',
                                'Price remains the same',
                                'Price becomes zero'
                            ],
                            correctAnswer: 1
                        },
                        {
                            id: 2,
                            question: 'Which factor does NOT shift the demand curve?',
                            options: [
                                'Consumer income',
                                'Price of the product',
                                'Consumer preferences',
                                'Price of related goods'
                            ],
                            correctAnswer: 1
                        },
                        {
                            id: 3,
                            question: 'What is the law of supply?',
                            options: [
                                'As price decreases, quantity supplied increases',
                                'As price increases, quantity supplied increases',
                                'Supply is always constant',
                                'Supply depends only on demand'
                            ],
                            correctAnswer: 1
                        }
                    ]
                },
                {
                    id: 2,
                    courseId: 2,
                    title: 'GDP and Economic Indicators',
                    duration: 20,
                    questions: [
                        {
                            id: 1,
                            question: 'What does GDP stand for?',
                            options: [
                                'General Domestic Product',
                                'Gross Domestic Product',
                                'Government Debt Product',
                                'Global Distribution Product'
                            ],
                            correctAnswer: 1
                        },
                        {
                            id: 2,
                            question: 'Which is NOT a component of GDP?',
                            options: [
                                'Consumption',
                                'Investment',
                                'Imports',
                                'Government Spending'
                            ],
                            correctAnswer: 2
                        }
                    ]
                }
            ]));
        }

        if (!localStorage.getItem('assignments')) {
            localStorage.setItem('assignments', JSON.stringify([
                {
                    id: 1,
                    courseId: 1,
                    title: 'Market Analysis Assignment',
                    description: 'Analyze the market structure of a local business and identify its characteristics',
                    dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
                    points: 100,
                    status: 'active'
                },
                {
                    id: 2,
                    courseId: 2,
                    title: 'Economic Policy Research',
                    description: 'Research and write a report on recent monetary policy changes',
                    dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
                    points: 100,
                    status: 'active'
                }
            ]));
        }

        if (!localStorage.getItem('exams')) {
            localStorage.setItem('exams', JSON.stringify([
                {
                    id: 1,
                    courseId: 1,
                    title: 'Microeconomics Midterm Exam',
                    duration: 90,
                    totalQuestions: 50,
                    passingScore: 70,
                    startDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
                    status: 'upcoming'
                }
            ]));
        }

        if (!localStorage.getItem('videos')) {
            localStorage.setItem('videos', JSON.stringify([
                {
                    id: 1,
                    courseId: 1,
                    title: 'Introduction to Microeconomics',
                    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                    duration: '15:30',
                    description: 'Overview of microeconomic principles'
                },
                {
                    id: 2,
                    courseId: 1,
                    title: 'Supply and Demand Explained',
                    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                    duration: '22:45',
                    description: 'Deep dive into supply and demand curves'
                },
                {
                    id: 3,
                    courseId: 2,
                    title: 'Understanding GDP',
                    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                    duration: '18:20',
                    description: 'Comprehensive guide to GDP calculation'
                }
            ]));
        }

        if (!localStorage.getItem('pdfs')) {
            localStorage.setItem('pdfs', JSON.stringify([
                {
                    id: 1,
                    courseId: 1,
                    title: 'Microeconomics Study Guide',
                    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
                    pages: 45,
                    description: 'Comprehensive study materials'
                },
                {
                    id: 2,
                    courseId: 2,
                    title: 'Macroeconomics Lecture Notes',
                    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
                    pages: 60,
                    description: 'Complete lecture notes and examples'
                }
            ]));
        }

        if (!localStorage.getItem('enrollments')) {
            localStorage.setItem('enrollments', JSON.stringify([]));
        }

        if (!localStorage.getItem('submissions')) {
            localStorage.setItem('submissions', JSON.stringify([]));
        }

        if (!localStorage.getItem('quizResults')) {
            localStorage.setItem('quizResults', JSON.stringify([]));
        }

        if (!localStorage.getItem('examResults')) {
            localStorage.setItem('examResults', JSON.stringify([]));
        }
    },

    // User operations
    getUsers() {
        return JSON.parse(localStorage.getItem('users')) || [];
    },

    getUserById(id) {
        const users = this.getUsers();
        return users.find(user => user.id === id);
    },

    getUserByEmail(email) {
        const users = this.getUsers();
        return users.find(user => user.email === email);
    },

    addUser(user) {
        const users = this.getUsers();
        user.id = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
        user.createdAt = new Date().toISOString();
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        return user;
    },

    updateUser(id, updates) {
        const users = this.getUsers();
        const index = users.findIndex(user => user.id === id);
        if (index !== -1) {
            users[index] = { ...users[index], ...updates };
            localStorage.setItem('users', JSON.stringify(users));
            return users[index];
        }
        return null;
    },

    // Course operations
    getCourses() {
        return JSON.parse(localStorage.getItem('courses')) || [];
    },

    getCourseById(id) {
        const courses = this.getCourses();
        return courses.find(course => course.id === id);
    },

    addCourse(course) {
        const courses = this.getCourses();
        course.id = courses.length > 0 ? Math.max(...courses.map(c => c.id)) + 1 : 1;
        course.createdAt = new Date().toISOString();
        courses.push(course);
        localStorage.setItem('courses', JSON.stringify(courses));
        return course;
    },

    updateCourse(id, updates) {
        const courses = this.getCourses();
        const index = courses.findIndex(course => course.id === id);
        if (index !== -1) {
            courses[index] = { ...courses[index], ...updates };
            localStorage.setItem('courses', JSON.stringify(courses));
            return courses[index];
        }
        return null;
    },

    deleteCourse(id) {
        const courses = this.getCourses();
        const filtered = courses.filter(course => course.id !== id);
        localStorage.setItem('courses', JSON.stringify(filtered));
    },

    // Quiz operations
    getQuizzes() {
        return JSON.parse(localStorage.getItem('quizzes')) || [];
    },

    getQuizById(id) {
        const quizzes = this.getQuizzes();
        return quizzes.find(quiz => quiz.id === id);
    },

    getQuizzesByCourse(courseId) {
        const quizzes = this.getQuizzes();
        return quizzes.filter(quiz => quiz.courseId === courseId);
    },

    addQuiz(quiz) {
        const quizzes = this.getQuizzes();
        quiz.id = quizzes.length > 0 ? Math.max(...quizzes.map(q => q.id)) + 1 : 1;
        quizzes.push(quiz);
        localStorage.setItem('quizzes', JSON.stringify(quizzes));
        return quiz;
    },

    // Assignment operations
    getAssignments() {
        return JSON.parse(localStorage.getItem('assignments')) || [];
    },

    getAssignmentById(id) {
        const assignments = this.getAssignments();
        return assignments.find(assignment => assignment.id === id);
    },

    getAssignmentsByCourse(courseId) {
        const assignments = this.getAssignments();
        return assignments.filter(assignment => assignment.courseId === courseId);
    },

    addAssignment(assignment) {
        const assignments = this.getAssignments();
        assignment.id = assignments.length > 0 ? Math.max(...assignments.map(a => a.id)) + 1 : 1;
        assignments.push(assignment);
        localStorage.setItem('assignments', JSON.stringify(assignments));
        return assignment;
    },

    // Exam operations
    getExams() {
        return JSON.parse(localStorage.getItem('exams')) || [];
    },

    getExamById(id) {
        const exams = this.getExams();
        return exams.find(exam => exam.id === id);
    },

    getExamsByCourse(courseId) {
        const exams = this.getExams();
        return exams.filter(exam => exam.courseId === courseId);
    },

    addExam(exam) {
        const exams = this.getExams();
        exam.id = exams.length > 0 ? Math.max(...exams.map(e => e.id)) + 1 : 1;
        exams.push(exam);
        localStorage.setItem('exams', JSON.stringify(exams));
        return exam;
    },

    // Video operations
    getVideos() {
        return JSON.parse(localStorage.getItem('videos')) || [];
    },

    getVideosByCourse(courseId) {
        const videos = this.getVideos();
        return videos.filter(video => video.courseId === courseId);
    },

    addVideo(video) {
        const videos = this.getVideos();
        video.id = videos.length > 0 ? Math.max(...videos.map(v => v.id)) + 1 : 1;
        videos.push(video);
        localStorage.setItem('videos', JSON.stringify(videos));
        return video;
    },

    // PDF operations
    getPDFs() {
        return JSON.parse(localStorage.getItem('pdfs')) || [];
    },

    getPDFsByCourse(courseId) {
        const pdfs = this.getPDFs();
        return pdfs.filter(pdf => pdf.courseId === courseId);
    },

    addPDF(pdf) {
        const pdfs = this.getPDFs();
        pdf.id = pdfs.length > 0 ? Math.max(...pdfs.map(p => p.id)) + 1 : 1;
        pdfs.push(pdf);
        localStorage.setItem('pdfs', JSON.stringify(pdfs));
        return pdf;
    },

    // Enrollment operations
    getEnrollments() {
        return JSON.parse(localStorage.getItem('enrollments')) || [];
    },

    getUserEnrollments(userId) {
        const enrollments = this.getEnrollments();
        return enrollments.filter(enrollment => enrollment.userId === userId);
    },

    enrollUser(userId, courseId) {
        const enrollments = this.getEnrollments();
        const existing = enrollments.find(e => e.userId === userId && e.courseId === courseId);
        if (existing) return existing;

        const enrollment = {
            id: enrollments.length > 0 ? Math.max(...enrollments.map(e => e.id)) + 1 : 1,
            userId,
            courseId,
            enrolledAt: new Date().toISOString(),
            progress: 0
        };
        enrollments.push(enrollment);
        localStorage.setItem('enrollments', JSON.stringify(enrollments));
        return enrollment;
    },

    // Submission operations
    getSubmissions() {
        return JSON.parse(localStorage.getItem('submissions')) || [];
    },

    getUserSubmissions(userId) {
        const submissions = this.getSubmissions();
        return submissions.filter(submission => submission.userId === userId);
    },

    addSubmission(submission) {
        const submissions = this.getSubmissions();
        submission.id = submissions.length > 0 ? Math.max(...submissions.map(s => s.id)) + 1 : 1;
        submission.submittedAt = new Date().toISOString();
        submissions.push(submission);
        localStorage.setItem('submissions', JSON.stringify(submissions));
        return submission;
    },

    // Quiz results operations
    getQuizResults() {
        return JSON.parse(localStorage.getItem('quizResults')) || [];
    },

    getUserQuizResults(userId) {
        const results = this.getQuizResults();
        return results.filter(result => result.userId === userId);
    },

    addQuizResult(result) {
        const results = this.getQuizResults();
        result.id = results.length > 0 ? Math.max(...results.map(r => r.id)) + 1 : 1;
        result.completedAt = new Date().toISOString();
        results.push(result);
        localStorage.setItem('quizResults', JSON.stringify(results));
        return result;
    },

    // Exam results operations
    getExamResults() {
        return JSON.parse(localStorage.getItem('examResults')) || [];
    },

    getUserExamResults(userId) {
        const results = this.getExamResults();
        return results.filter(result => result.userId === userId);
    },

    addExamResult(result) {
        const results = this.getExamResults();
        result.id = results.length > 0 ? Math.max(...results.map(r => r.id)) + 1 : 1;
        result.completedAt = new Date().toISOString();
        results.push(result);
        localStorage.setItem('examResults', JSON.stringify(results));
        return result;
    },

    // Session management
    setCurrentUser(user) {
        sessionStorage.setItem('currentUser', JSON.stringify(user));
    },

    getCurrentUser() {
        const user = sessionStorage.getItem('currentUser');
        return user ? JSON.parse(user) : null;
    },

    logout() {
        sessionStorage.removeItem('currentUser');
    },

    isAuthenticated() {
        return this.getCurrentUser() !== null;
    },

    isAdmin() {
        const user = this.getCurrentUser();
        return user && user.role === 'admin';
    }
};

// Initialize database on load
DB.init();

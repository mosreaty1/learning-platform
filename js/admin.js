// Admin Dashboard JavaScript

// Check authentication
if (!checkAdminAuth()) {
    window.location.href = 'login.html';
}

// Initialize dashboard
const currentUser = getCurrentUserInfo();
document.getElementById('userName').textContent = currentUser.name;
document.getElementById('userAvatar').textContent = currentUser.name.charAt(0).toUpperCase();

function showSection(section) {
    // Hide all sections
    document.querySelectorAll('.section-content').forEach(sec => {
        sec.style.display = 'none';
    });

    // Remove active class from all menu items
    document.querySelectorAll('.sidebar-menu a').forEach(link => {
        link.classList.remove('active');
    });

    // Show selected section
    const sectionMap = {
        'overview': 'overviewSection',
        'courses': 'coursesSection',
        'students': 'studentsSection',
        'quizzes': 'quizzesSection',
        'assignments': 'assignmentsSection',
        'exams': 'examsSection',
        'content': 'contentSection'
    };

    const titleMap = {
        'overview': 'Admin Dashboard',
        'courses': 'Manage Courses',
        'students': 'Students',
        'quizzes': 'Quizzes',
        'assignments': 'Assignments',
        'exams': 'Exams',
        'content': 'Content Library'
    };

    document.getElementById(sectionMap[section]).style.display = 'block';
    document.getElementById('pageTitle').textContent = titleMap[section];
    event.target.classList.add('active');

    // Load section data
    loadSectionData(section);
}

function loadSectionData(section) {
    switch(section) {
        case 'overview':
            loadOverview();
            break;
        case 'courses':
            loadCourses();
            break;
        case 'students':
            loadStudents();
            break;
        case 'quizzes':
            loadQuizzes();
            break;
        case 'assignments':
            loadAssignments();
            break;
        case 'exams':
            loadExams();
            break;
        case 'content':
            loadContent();
            break;
    }
}

function loadOverview() {
    const courses = DB.getCourses();
    const users = DB.getUsers();
    const students = users.filter(u => u.role === 'student');
    const enrollments = DB.getEnrollments();
    const quizzes = DB.getQuizzes();

    document.getElementById('totalCourses').textContent = courses.length;
    document.getElementById('totalStudents').textContent = students.length;
    document.getElementById('totalEnrollments').textContent = enrollments.length;
    document.getElementById('totalQuizzes').textContent = quizzes.length;

    // Load recent enrollments
    const recentEnrollments = enrollments.slice(-5).reverse();
    const container = document.getElementById('recentEnrollments');

    if (recentEnrollments.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #6b7280; padding: 2rem;">No enrollments yet</p>';
        return;
    }

    let html = '<div class="table-container"><table><thead><tr><th>Student</th><th>Course</th><th>Date</th></tr></thead><tbody>';
    recentEnrollments.forEach(enrollment => {
        const student = DB.getUserById(enrollment.userId);
        const course = DB.getCourseById(enrollment.courseId);
        const enrollDate = new Date(enrollment.enrolledAt);

        html += `
            <tr>
                <td>${student ? student.name : 'N/A'}</td>
                <td>${course ? course.title : 'N/A'}</td>
                <td>${enrollDate.toLocaleDateString()}</td>
            </tr>
        `;
    });
    html += '</tbody></table></div>';
    container.innerHTML = html;
}

function loadCourses() {
    const courses = DB.getCourses();
    const container = document.getElementById('coursesList');

    if (courses.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #6b7280; padding: 2rem;">No courses available</p>';
        return;
    }

    let html = '<div class="table-container"><table><thead><tr><th>Title</th><th>Instructor</th><th>Lectures</th><th>Duration</th><th>Enrolled</th><th>Actions</th></tr></thead><tbody>';
    courses.forEach(course => {
        const enrollments = DB.getEnrollments().filter(e => e.courseId === course.id);
        html += `
            <tr>
                <td>${course.title}</td>
                <td>${course.instructor}</td>
                <td>${course.lectures}</td>
                <td>${course.duration}</td>
                <td>${enrollments.length}</td>
                <td>
                    <button class="btn btn-sm btn-secondary" onclick="editCourse(${course.id})">Edit</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteCourse(${course.id})">Delete</button>
                </td>
            </tr>
        `;
    });
    html += '</tbody></table></div>';
    container.innerHTML = html;
}

function loadStudents() {
    const users = DB.getUsers();
    const students = users.filter(u => u.role === 'student');
    const container = document.getElementById('studentsList');

    if (students.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #6b7280; padding: 2rem;">No students registered</p>';
        return;
    }

    let html = '<div class="table-container"><table><thead><tr><th>Name</th><th>Email</th><th>Enrolled Courses</th><th>Join Date</th></tr></thead><tbody>';
    students.forEach(student => {
        const enrollments = DB.getUserEnrollments(student.id);
        const joinDate = new Date(student.createdAt);

        html += `
            <tr>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${enrollments.length}</td>
                <td>${joinDate.toLocaleDateString()}</td>
            </tr>
        `;
    });
    html += '</tbody></table></div>';
    container.innerHTML = html;
}

function loadQuizzes() {
    const quizzes = DB.getQuizzes();
    const container = document.getElementById('quizzesList');

    if (quizzes.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #6b7280; padding: 2rem;">No quizzes available</p>';
        return;
    }

    let html = '<div class="table-container"><table><thead><tr><th>Title</th><th>Course</th><th>Questions</th><th>Duration</th><th>Actions</th></tr></thead><tbody>';
    quizzes.forEach(quiz => {
        const course = DB.getCourseById(quiz.courseId);
        html += `
            <tr>
                <td>${quiz.title}</td>
                <td>${course ? course.title : 'N/A'}</td>
                <td>${quiz.questions.length}</td>
                <td>${quiz.duration} min</td>
                <td>
                    <button class="btn btn-sm btn-secondary">Edit</button>
                    <button class="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>
        `;
    });
    html += '</tbody></table></div>';
    container.innerHTML = html;
}

function loadAssignments() {
    const assignments = DB.getAssignments();
    const container = document.getElementById('assignmentsList');

    if (assignments.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #6b7280; padding: 2rem;">No assignments available</p>';
        return;
    }

    let html = '<div class="table-container"><table><thead><tr><th>Title</th><th>Course</th><th>Due Date</th><th>Points</th><th>Submissions</th><th>Actions</th></tr></thead><tbody>';
    assignments.forEach(assignment => {
        const course = DB.getCourseById(assignment.courseId);
        const submissions = DB.getSubmissions().filter(s => s.assignmentId === assignment.id);
        const dueDate = new Date(assignment.dueDate);

        html += `
            <tr>
                <td>${assignment.title}</td>
                <td>${course ? course.title : 'N/A'}</td>
                <td>${dueDate.toLocaleDateString()}</td>
                <td>${assignment.points}</td>
                <td>${submissions.length}</td>
                <td>
                    <button class="btn btn-sm btn-secondary">Edit</button>
                    <button class="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>
        `;
    });
    html += '</tbody></table></div>';
    container.innerHTML = html;
}

function loadExams() {
    const exams = DB.getExams();
    const container = document.getElementById('examsList');

    if (exams.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #6b7280; padding: 2rem;">No exams scheduled</p>';
        return;
    }

    let html = '<div class="table-container"><table><thead><tr><th>Title</th><th>Course</th><th>Date</th><th>Duration</th><th>Questions</th><th>Status</th><th>Actions</th></tr></thead><tbody>';
    exams.forEach(exam => {
        const course = DB.getCourseById(exam.courseId);
        const startDate = new Date(exam.startDate);

        html += `
            <tr>
                <td>${exam.title}</td>
                <td>${course ? course.title : 'N/A'}</td>
                <td>${startDate.toLocaleDateString()}</td>
                <td>${exam.duration} min</td>
                <td>${exam.totalQuestions}</td>
                <td><span class="badge badge-primary">${exam.status}</span></td>
                <td>
                    <button class="btn btn-sm btn-secondary">Edit</button>
                    <button class="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>
        `;
    });
    html += '</tbody></table></div>';
    container.innerHTML = html;
}

function loadContent() {
    // Load videos
    const videos = DB.getVideos();
    const videosContainer = document.getElementById('videosList');

    if (videos.length === 0) {
        videosContainer.innerHTML = '<p style="text-align: center; color: #6b7280; padding: 2rem;">No videos available</p>';
    } else {
        let html = '<div class="table-container"><table><thead><tr><th>Title</th><th>Course</th><th>Duration</th><th>Actions</th></tr></thead><tbody>';
        videos.forEach(video => {
            const course = DB.getCourseById(video.courseId);
            html += `
                <tr>
                    <td>${video.title}</td>
                    <td>${course ? course.title : 'N/A'}</td>
                    <td>${video.duration}</td>
                    <td>
                        <button class="btn btn-sm btn-secondary">Edit</button>
                        <button class="btn btn-sm btn-danger">Delete</button>
                    </td>
                </tr>
            `;
        });
        html += '</tbody></table></div>';
        videosContainer.innerHTML = html;
    }

    // Load PDFs
    const pdfs = DB.getPDFs();
    const pdfsContainer = document.getElementById('pdfsList');

    if (pdfs.length === 0) {
        pdfsContainer.innerHTML = '<p style="text-align: center; color: #6b7280; padding: 2rem;">No PDF documents available</p>';
    } else {
        let html = '<div class="table-container"><table><thead><tr><th>Title</th><th>Course</th><th>Pages</th><th>Actions</th></tr></thead><tbody>';
        pdfs.forEach(pdf => {
            const course = DB.getCourseById(pdf.courseId);
            html += `
                <tr>
                    <td>${pdf.title}</td>
                    <td>${course ? course.title : 'N/A'}</td>
                    <td>${pdf.pages}</td>
                    <td>
                        <button class="btn btn-sm btn-secondary">Edit</button>
                        <button class="btn btn-sm btn-danger">Delete</button>
                    </td>
                </tr>
            `;
        });
        html += '</tbody></table></div>';
        pdfsContainer.innerHTML = html;
    }
}

// Modal functions
function showAddCourseModal() {
    document.getElementById('addCourseModal').classList.add('active');
}

function showAddQuizModal() {
    populateCourseSelect('quizCourseSelect');
    document.getElementById('addQuizModal').classList.add('active');
}

function showAddAssignmentModal() {
    populateCourseSelect('assignmentCourseSelect');
    document.getElementById('addAssignmentModal').classList.add('active');
}

function showAddExamModal() {
    populateCourseSelect('examCourseSelect');
    document.getElementById('addExamModal').classList.add('active');
}

function showAddVideoModal() {
    populateCourseSelect('videoCourseSelect');
    document.getElementById('addVideoModal').classList.add('active');
}

function showAddPDFModal() {
    populateCourseSelect('pdfCourseSelect');
    document.getElementById('addPDFModal').classList.add('active');
}

function populateCourseSelect(selectId) {
    const courses = DB.getCourses();
    const select = document.getElementById(selectId);
    select.innerHTML = '<option value="">Select a course</option>';
    courses.forEach(course => {
        select.innerHTML += `<option value="${course.id}">${course.title}</option>`;
    });
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Form submissions
document.getElementById('addCourseForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const course = {
        title: formData.get('title'),
        description: formData.get('description'),
        instructor: formData.get('instructor'),
        duration: formData.get('duration'),
        lectures: parseInt(formData.get('lectures')),
        enrolled: 0,
        rating: 0
    };
    DB.addCourse(course);
    closeModal('addCourseModal');
    e.target.reset();
    loadCourses();
    alert('Course added successfully!');
});

document.getElementById('addQuizForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const quiz = {
        title: formData.get('title'),
        courseId: parseInt(formData.get('courseId')),
        duration: parseInt(formData.get('duration')),
        questions: []
    };
    DB.addQuiz(quiz);
    closeModal('addQuizModal');
    e.target.reset();
    loadQuizzes();
    alert('Quiz added successfully!');
});

document.getElementById('addAssignmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const assignment = {
        title: formData.get('title'),
        description: formData.get('description'),
        courseId: parseInt(formData.get('courseId')),
        dueDate: new Date(formData.get('dueDate')).toISOString(),
        points: parseInt(formData.get('points')),
        status: 'active'
    };
    DB.addAssignment(assignment);
    closeModal('addAssignmentModal');
    e.target.reset();
    loadAssignments();
    alert('Assignment added successfully!');
});

document.getElementById('addExamForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const exam = {
        title: formData.get('title'),
        courseId: parseInt(formData.get('courseId')),
        duration: parseInt(formData.get('duration')),
        totalQuestions: parseInt(formData.get('totalQuestions')),
        passingScore: parseInt(formData.get('passingScore')),
        startDate: new Date(formData.get('startDate')).toISOString(),
        status: 'upcoming'
    };
    DB.addExam(exam);
    closeModal('addExamModal');
    e.target.reset();
    loadExams();
    alert('Exam added successfully!');
});

document.getElementById('addVideoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const video = {
        title: formData.get('title'),
        courseId: parseInt(formData.get('courseId')),
        url: formData.get('url'),
        duration: formData.get('duration'),
        description: formData.get('description')
    };
    DB.addVideo(video);
    closeModal('addVideoModal');
    e.target.reset();
    loadContent();
    alert('Video added successfully!');
});

document.getElementById('addPDFForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const pdf = {
        title: formData.get('title'),
        courseId: parseInt(formData.get('courseId')),
        url: formData.get('url'),
        pages: parseInt(formData.get('pages')),
        description: formData.get('description')
    };
    DB.addPDF(pdf);
    closeModal('addPDFModal');
    e.target.reset();
    loadContent();
    alert('PDF added successfully!');
});

function editCourse(id) {
    alert('Edit functionality coming soon!');
}

function deleteCourse(id) {
    if (confirm('Are you sure you want to delete this course?')) {
        DB.deleteCourse(id);
        loadCourses();
        alert('Course deleted successfully!');
    }
}

// Close modals when clicking outside
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
});

// Initial load
loadOverview();

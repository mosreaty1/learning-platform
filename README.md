# Amr Alsariti Economics Learning Platform

A comprehensive, professional learning management system (LMS) built with HTML, CSS, and JavaScript. This platform provides a complete e-learning experience with course management, video lectures, quizzes, assignments, and exams.

## 🌟 Features

### For Students
- **User Dashboard** - Track your progress, view enrolled courses, and monitor grades
- **Course Access** - Browse and enroll in available economics courses
- **Video Lectures** - Watch high-quality video content with embedded player
- **Study Materials** - Access and download PDF documents
- **Interactive Quizzes** - Test your knowledge with timed quizzes and instant feedback
- **Assignments** - Submit assignments and track submission status
- **Comprehensive Exams** - Take timed exams with detailed results
- **Progress Tracking** - Monitor your learning journey and grades

### For Administrators
- **Admin Dashboard** - Comprehensive overview of platform statistics
- **Course Management** - Create, edit, and delete courses
- **Student Management** - View all registered students and their progress
- **Content Library** - Manage videos and PDF documents
- **Quiz Builder** - Create and manage quizzes
- **Assignment Management** - Create assignments and track submissions
- **Exam Management** - Schedule and manage exams

### Technical Features
- **Local Storage Database** - All data persists in browser localStorage
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Professional UI/UX** - Modern, clean design with smooth animations
- **Authentication System** - Secure login and signup with role-based access
- **Session Management** - Persistent login sessions
- **No Backend Required** - Fully static, can be deployed on GitHub Pages

## 🚀 Live Demo

Visit the live platform: [GitHub Pages URL will be here after deployment]

## 📋 Demo Credentials

### Admin Account
- **Email:** admin@amralsariti.com
- **Password:** admin123

### Student Account
- **Email:** student@example.com
- **Password:** student123

## 📁 Project Structure

```
learning-platform/
├── index.html              # Landing page
├── login.html              # Login page
├── signup.html             # Sign up page
├── user-dashboard.html     # Student dashboard
├── admin-dashboard.html    # Admin dashboard
├── course.html             # Course content page
├── quiz.html               # Quiz page
├── assignment.html         # Assignment submission page
├── exam.html               # Exam page
├── css/
│   └── style.css          # All styles
├── js/
│   ├── database.js        # LocalStorage database management
│   ├── auth.js            # Authentication helpers
│   ├── admin.js           # Admin dashboard functionality
│   └── user.js            # User dashboard helpers
└── assets/                # Images and other assets
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Interactive functionality
- **LocalStorage API** - Client-side data persistence
- **Font Awesome** - Icons
- **Google Fonts** - Typography

## 💻 Installation & Setup

### Option 1: Direct Download
1. Download or clone this repository
2. Open `index.html` in your web browser
3. That's it! No build process or server required

### Option 2: GitHub Pages Deployment
1. Fork this repository
2. Go to repository Settings > Pages
3. Select the branch you want to deploy (usually `main`)
4. Click Save
5. Your site will be live at `https://yourusername.github.io/learning-platform/`

### Option 3: Local Development Server
If you prefer to use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📱 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 🎯 How to Use

### For Students

1. **Sign Up**
   - Go to the signup page
   - Fill in your details
   - Select "Student" as your role

2. **Explore Courses**
   - Browse available courses
   - Click "Enroll Now" to join a course

3. **Access Course Content**
   - Navigate to "My Courses" in your dashboard
   - Click "View Course" to access lectures, materials, quizzes, and assignments

4. **Take Quizzes**
   - Go to the Quizzes section
   - Start a quiz and answer questions within the time limit
   - Review your results and correct answers

5. **Submit Assignments**
   - Access assignments from your course page
   - Write your response
   - Submit before the due date

6. **Take Exams**
   - Navigate to the Exams section
   - Read instructions carefully
   - Complete the exam within the time limit

### For Administrators

1. **Login as Admin**
   - Use admin credentials to access the admin dashboard

2. **Manage Courses**
   - Add new courses with details
   - Edit or delete existing courses

3. **Add Content**
   - Upload video links (YouTube embeds or direct URLs)
   - Add PDF documents with URLs
   - Create quizzes with questions and answers
   - Create assignments with due dates
   - Schedule exams

4. **Monitor Students**
   - View all registered students
   - Track enrollment statistics
   - Monitor submission and completion rates

## 🔐 Security Notes

**Important:** This is a client-side application using localStorage for demonstration purposes. For production use, you should:

- Implement proper backend authentication
- Use HTTPS for all communications
- Hash and salt passwords
- Implement proper session management
- Add input validation and sanitization
- Use a real database system
- Implement CSRF protection
- Add rate limiting

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --accent-color: #3b82f6;
    /* ... other colors */
}
```

### Adding Your Logo
Replace the icon in the navigation with your logo image:

```html
<div class="logo">
    <img src="assets/your-logo.png" alt="Logo">
    <span>Your Platform Name</span>
</div>
```

### Modifying Content
All initial data is in `js/database.js`. Edit the `init()` function to customize:
- Default courses
- Quiz questions
- Assignments
- Exams
- Sample data

## 📊 Features Breakdown

### Dashboard Features
- Course enrollment statistics
- Quiz completion tracking
- Assignment status monitoring
- Grade overview
- Recent activity feed

### Quiz System
- Timed quizzes with countdown
- Multiple-choice questions
- Instant scoring
- Answer review with correct/incorrect highlighting
- Progress tracking

### Assignment System
- Text-based submissions
- Due date tracking
- Overdue detection
- Submission history

### Exam System
- Timed exams with strict time limits
- Auto-submission on timeout
- Passing score requirements
- Detailed results with statistics
- Pass/Fail status

## 🌐 Deployment on GitHub Pages

1. **Create a new repository** on GitHub
2. **Push your code** to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Learning Platform"
   git branch -M main
   git remote add origin https://github.com/yourusername/learning-platform.git
   git push -u origin main
   ```
3. **Enable GitHub Pages**:
   - Go to Settings > Pages
   - Source: Deploy from branch
   - Branch: main / (root)
   - Click Save
4. **Access your site** at `https://yourusername.github.io/learning-platform/`

## 📝 Future Enhancements

Potential features for future versions:
- Real-time notifications
- Discussion forums
- Live chat support
- Certificate generation
- Progress analytics dashboard
- Mobile app version
- Peer review system
- Collaborative assignments
- Video conferencing integration
- Payment gateway for premium courses

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💼 About

This learning platform was created for **Amr Alsariti Economics** to provide students with a comprehensive online learning experience in economics education.

## 📧 Contact

For questions or support, please contact:
- Email: info@amralsariti.com
- Website: [Your Website]

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- All the amazing open-source projects that made this possible

---

**Built with ❤️ for Economics Education**

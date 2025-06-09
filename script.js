// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hamburger menu functionality
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
});


 // Simple JavaScript to handle modal display
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            document.getElementById('projectModal').style.display = 'flex';
        });
    });
    document.querySelector('.modal-close').addEventListener('click', () => {
        document.getElementById('projectModal').style.display = 'none';
    });

     // Sample skills data - replace with your actual skills
        const skills = [
            { name: 'Web Development\n(Html/CSS)', level: 'Proficient' },
            { name: 'UI/UX Design', level: 'Intermediate' },
            { name: 'JavaScript', level: 'Advanced' },
            { name: 'React', level: 'Intermediate' },
            { name: 'Python', level: 'Advanced' },
            { name: 'Java', level: 'Intermediate' },
            { name: 'C++', level: 'Intermediate' },
            { name: 'Node.js', level: 'Beginner' }
        ];

        // Function to create skill cards
        function createSkillCards() {
            const skillsGrid = document.querySelector('.skills-grid');
            
            skills.forEach(skill => {
                const card = document.createElement('div');
                card.className = 'skill-card';
                
                const progressLevel = Math.random() * 100; // Random for demonstration
                const progressWidth = document.createElement('div');
                progressWidth.className = 'progress-fill';
                progressWidth.style.width = `${progressLevel}%`;
                
                const progressBar = document.createElement('div');
                progressBar.className = 'progress-bar';
                progressBar.appendChild(progressWidth);
                
                card.innerHTML = `
                    <h3 class="skill-name">${skill.name}</h3>
                    <p class="skill-level">${skill.level}</p>
                `;
                
                card.appendChild(progressBar);
                skillsGrid.appendChild(card);
            });
        }

        // Initialize skill cards when the section comes into view
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    createSkillCards();
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        observer.observe(document.querySelector('.skills-section'));

 // Contact Form
    document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    // Form Validation
    const validateForm = (formData) => {
        let isValid = true;

        // Name Validation
        if (formData.get('name').trim().length < 3) {
            isValid = false;
            showError('name', 'Name must be at least 3 characters');
        }

        // Email Validation
        const email = formData.get('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            isValid = false;
            showError('email', 'Please enter a valid email address');
        }

        // Message Validation
        if (formData.get('message').trim().length < 10) {
            isValid = false;
            showError('message', 'Message must be at least 10 characters');
        }

        return isValid;
    };

    // Show Error Message
    const showError = (fieldId, message) => {
        const field = document.getElementById(fieldId);
        const errorDiv = field.parentElement.querySelector('.error');
        
        if (errorDiv) {
            errorDiv.textContent = message;
        }
    };

    // Handle Form Submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        
        // Reset messages
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';

        if (validateForm(formData)) {
            // Here you would typically send the form data to your server
            // For now, we'll just show the success message
            successMessage.style.display = 'block';
            contactForm.reset();
            
            // Reset button state
            submitBtn.innerHTML = 'Send Message';
            submitBtn.disabled = false;
        } else {
            errorMessage.style.display = 'block';
        }
    });

    // Add form field validation on input
    contactForm.querySelectorAll('input, textarea').forEach(field => {
        field.addEventListener('input', () => {
            // Reset any previous error messages
            const errorDiv = field.parentElement.querySelector('.error');
            if (errorDiv) {
                errorDiv.textContent = '';
            }
        });
    });
});


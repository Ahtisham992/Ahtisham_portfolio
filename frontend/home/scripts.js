const API_BASE = 'https://ahtisham-portfolio-five.vercel.app/api';
        let portfolioData = {};
        let lastUpdateTime = 0;
        let refreshInterval;

        // Initialize the portfolio
        document.addEventListener('DOMContentLoaded', function () {
            loadPortfolioData();
            // Set up auto-refresh every 10 seconds
            refreshInterval = setInterval(checkForUpdates, 10000);
        });

        async function checkForUpdates() {
            try {
                // Simple check by fetching profile and comparing timestamp or data
                const response = await fetch(`${API_BASE}/profile`);
                if (response.ok) {
                    const currentData = await response.json();
                    // If data changed, reload everything
                    if (JSON.stringify(currentData) !== JSON.stringify(portfolioData.profile)) {
                        showRefreshIndicator();
                        await loadPortfolioData();
                        hideRefreshIndicator();
                    }
                }
            } catch (error) {
                console.log('Background refresh failed:', error);
            }
        }

        function showRefreshIndicator() {
            const indicator = document.getElementById('refreshIndicator');
            if (indicator) {
                indicator.style.display = 'block';
            }
        }

        function hideRefreshIndicator() {
            const indicator = document.getElementById('refreshIndicator');
            if (indicator) {
                indicator.style.display = 'none';
            }
        }

        async function loadPortfolioData() {
            try {
                // Show loading if this is the first load
                const isFirstLoad = !portfolioData.profile;

                // Fetch all data in parallel
                const [profileRes, skillsRes, projectsRes, experienceRes, certificatesRes] = await Promise.all([
                    fetch(`${API_BASE}/profile`),
                    fetch(`${API_BASE}/skills`),
                    fetch(`${API_BASE}/projects`),
                    fetch(`${API_BASE}/experience`),
                    fetch(`${API_BASE}/certificates`)
                ]);

                const newData = {
                    profile: await profileRes.json(),
                    skills: await skillsRes.json(),
                    projects: await projectsRes.json(),
                    experience: await experienceRes.json(),
                    certificates: await certificatesRes.json()
                };

                // Update global data
                portfolioData = newData;
                lastUpdateTime = Date.now();

                // Render all sections
                renderProfile();
                renderSkills();
                renderProjects();
                renderExperience();
                renderCertificates();

                // Hide loading screen only on first load
                if (isFirstLoad) {
                    document.getElementById('loadingScreen').style.display = 'none';
                }

            } catch (error) {
                console.error('Error loading portfolio data:', error);
                if (!portfolioData.profile) {
                    document.getElementById('loadingScreen').innerHTML = `
                        <div class="text-center">
                            <i class="fas fa-exclamation-triangle text-red-500 text-4xl mb-4"></i>
                            <p class="text-red-600">Failed to load portfolio data</p>
                            <button onclick="location.reload()" class="mt-4 bg-red-600 text-white px-4 py-2 rounded">Retry</button>
                        </div>
                    `;
                }
            }
        }

        // Add manual refresh function
        function refreshPortfolio() {
            showRefreshIndicator();
            loadPortfolioData().then(() => {
                hideRefreshIndicator();
            });
        }

        // Add keyboard shortcut for refresh (Ctrl+R or F5)
        document.addEventListener('keydown', function (e) {
            if ((e.ctrlKey && e.key === 'r') || e.key === 'F5') {
                e.preventDefault();
                refreshPortfolio();
            }
        });

        function renderProfile() {
            const profile = portfolioData.profile;
            if (!profile) return;

            // Update page title
            document.getElementById('pageTitle').textContent = `${profile.name} - ${profile.title}`;

            // Update navigation
            const navName = document.getElementById('navName');
            if (navName) navName.textContent = profile.name;

            // Update hero section
            const heroName = document.getElementById('heroName');
            if (heroName) {
                heroName.innerHTML = profile.name.replace(' ', '<br><span class="text-yellow-400">') + '</span>';
            }

            const heroDescription = document.getElementById('heroDescription');
            if (heroDescription) heroDescription.textContent = profile.description;

            // Update profile image
            if (profile.profileImage) {
                const profileImg = document.getElementById('profileImage');
                if (profileImg) {
                    profileImg.src = `${API_BASE.replace('/api', '')}${profile.profileImage}`;
                    profileImg.style.display = 'block';
                    profileImg.onload = () => {
                        const fallback = document.getElementById('profileFallback');
                        if (fallback) fallback.style.display = 'none';
                    };
                }
            } else {
                const fallbackName = document.getElementById('fallbackName');
                const fallbackTitle = document.getElementById('fallbackTitle');
                if (fallbackName) fallbackName.textContent = profile.name;
                if (fallbackTitle) fallbackTitle.textContent = profile.title;
            }

            // Update social links
            renderSocialLinks('socialLinks', profile.socialLinks);
            renderSocialLinks('contactSocialLinks', profile.socialLinks);
            renderSocialLinks('footerSocialLinks', profile.socialLinks);

            // Update contact info
            renderContactInfo(profile);

            // Update footer
            const footerName = document.getElementById('footerName');
            const footerDescription = document.getElementById('footerDescription');
            const copyrightName = document.getElementById('copyrightName');

            if (footerName) footerName.textContent = profile.name;
            if (footerDescription) footerDescription.textContent = profile.title + ' passionate about creating innovative solutions and delivering exceptional user experiences.';
            if (copyrightName) copyrightName.textContent = profile.name;

            // Update about section
            const aboutDescription = document.getElementById('aboutDescription');
            if (aboutDescription) aboutDescription.textContent = profile.description;

            // Start typing animation
            startTypingAnimation(profile.title);
        }

        function renderSocialLinks(containerId, socialLinks) {
            const container = document.getElementById(containerId);
            if (!container || !socialLinks) return;

            const links = [];
            if (socialLinks.linkedin) {
                links.push(`<a href="${socialLinks.linkedin}" target="_blank" class="text-white hover:text-yellow-400 transition-all transform hover:scale-110"><i class="fab fa-linkedin text-2xl"></i></a>`);
            }
            if (socialLinks.github) {
                links.push(`<a href="${socialLinks.github}" target="_blank" class="text-white hover:text-yellow-400 transition-all transform hover:scale-110"><i class="fab fa-github text-2xl"></i></a>`);
            }
            if (socialLinks.instagram) {
                links.push(`<a href="${socialLinks.instagram}" target="_blank" class="text-white hover:text-yellow-400 transition-all transform hover:scale-110"><i class="fab fa-instagram text-2xl"></i></a>`);
            }

            container.innerHTML = links.join('');
        }

        function renderContactInfo(profile) {
            const contactInfo = document.getElementById('contactInfo');
            if (!contactInfo) return;

            contactInfo.innerHTML = `
                <div class="flex items-center">
                    <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                        <i class="fas fa-envelope text-white"></i>
                    </div>
                    <div>
                        <p class="font-semibold text-gray-800">Email</p>
                        <a href="mailto:${profile.email}" class="text-purple-600 hover:text-purple-700">${profile.email}</a>
                    </div>
                </div>
                ${profile.phone ? `
                <div class="flex items-center">
                    <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                        <i class="fas fa-phone text-white"></i>
                    </div>
                    <div>
                        <p class="font-semibold text-gray-800">Phone</p>
                        <p class="text-gray-600">${profile.phone}</p>
                    </div>
                </div>
                ` : ''}
                ${profile.location ? `
                <div class="flex items-center">
                    <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                        <i class="fas fa-map-marker-alt text-white"></i>
                    </div>
                    <div>
                        <p class="font-semibold text-gray-800">Location</p>
                        <p class="text-gray-600">${profile.location}</p>
                    </div>
                </div>
                ` : ''}
            `;
        }

        function renderSkills() {
            const skills = portfolioData.skills || [];

            // Group skills by category
            const skillsByCategory = skills.reduce((acc, skill) => {
                if (!acc[skill.category]) acc[skill.category] = [];
                acc[skill.category].push(skill);
                return acc;
            }, {});

            // Render skills grid (icons)
            const skillsGrid = document.getElementById('skillsGrid');
            if (skillsGrid) {
                skillsGrid.innerHTML = skills.map(skill => `
                    <div class="tech-icon bg-white p-6 rounded-2xl shadow-lg text-center card-hover">
                        <i class="${skill.icon || 'fas fa-code'} text-4xl text-purple-500 mb-2"></i>
                        <div class="font-semibold text-gray-700">${skill.name}</div>
                    </div>
                `).join('');
            }

            // Render skill bars
            const skillsBars = document.getElementById('skillsBars');
            if (skillsBars) {
                const categories = Object.keys(skillsByCategory);

                skillsBars.innerHTML = categories.map((category, index) => {
                    const categorySkills = skillsByCategory[category];
                    const isLeft = index % 2 === 0;

                    return `
                        <div class="animate-${isLeft ? 'fadeInLeft' : 'fadeInRight'}">
                            <h3 class="text-2xl font-bold text-gray-800 mb-6 capitalize">${category}</h3>
                            <div class="space-y-4">
                                ${categorySkills.map((skill, skillIndex) => `
                                    <div>
                                        <div class="flex justify-between mb-2">
                                            <span class="font-semibold text-gray-700">${skill.name}</span>
                                            <span class="text-gray-600">${skill.percentage}%</span>
                                        </div>
                                        <div class="bg-gray-200 rounded-full h-2">
                                            <div class="skill-bar bg-purple-500 h-2 rounded-full" 
                                                 style="animation-delay: ${(index * 0.2) + (skillIndex * 0.2)}s; width: ${skill.percentage}%;"></div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;
                }).join('');
            }
        }

        function renderProjects() {
            const projects = portfolioData.projects || [];
            const projectsGrid = document.getElementById('projectsGrid');

            if (projectsGrid) {
                projectsGrid.innerHTML = projects.map(project => `
                    <div class="card-hover bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div class="bg-gradient-to-br ${project.gradient || 'from-purple-400 to-pink-600'} p-6">
                            <i class="${project.icon || 'fas fa-code'} text-4xl text-white mb-4"></i>
                            <h3 class="text-xl font-bold text-white">${project.title}</h3>
                        </div>
                        <div class="p-6">
                            <p class="text-gray-600 mb-4">${project.description}</p>
                            <div class="flex flex-wrap gap-2 mb-4">
                                ${(project.technologies || []).map(tech =>
                    `<span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">${tech}</span>`
                ).join('')}
                            </div>
                            <ul class="text-sm text-gray-600 space-y-1">
                                ${(project.features || []).map(feature =>
                    `<li>• ${feature}</li>`
                ).join('')}
                            </ul>
                            ${project.projectUrl || project.githubUrl ? `
                                <div class="mt-4 flex gap-2">
                                    ${project.projectUrl ? `<a href="${project.projectUrl}" target="_blank" class="text-purple-600 hover:text-purple-700 text-sm">View Project</a>` : ''}
                                    ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" class="text-gray-600 hover:text-gray-700 text-sm">GitHub</a>` : ''}
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `).join('');
            }

            // Update GitHub link
            const githubLink = document.getElementById('githubLink');
            const profile = portfolioData.profile;
            if (githubLink && profile && profile.socialLinks?.github) {
                githubLink.innerHTML = `
                    <a href="${profile.socialLinks.github}" target="_blank" class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg transition-all transform hover:scale-105">
                        <i class="fab fa-github mr-2"></i>
                        View More Projects on GitHub
                    </a>
                `;
            }
        }

        function renderExperience() {
            const experiences = portfolioData.experience || [];
            const workExperience = experiences.filter(exp => exp.type === 'experience');
            const education = experiences.filter(exp => exp.type === 'education');

            // Render work experience
            const experienceTimeline = document.getElementById('experienceTimeline');
            if (experienceTimeline) {
                experienceTimeline.innerHTML = workExperience.map(exp => `
                    <div class="timeline-item mb-8">
                        <div class="bg-white p-6 rounded-2xl shadow-lg">
                            <div class="flex items-start justify-between mb-4">
                                <div>
                                    <h4 class="text-xl font-bold text-gray-800">${exp.title}</h4>
                                    <p class="text-purple-600 font-semibold">${exp.company}</p>
                                    ${exp.location ? `<p class="text-gray-600">${exp.location}</p>` : ''}
                                </div>
                                <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                                    ${exp.startDate}${exp.endDate ? ` - ${exp.endDate}` : exp.current ? ' - Present' : ''}
                                </span>
                            </div>
                            <ul class="text-gray-600 space-y-2">
                                ${(exp.description || []).map(desc => `
                                    <li class="flex items-start">
                                        <i class="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                                        ${desc}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                `).join('');
            }

            // Render education
            const educationTimeline = document.getElementById('educationTimeline');
            educationTimeline.innerHTML = education.map(edu => `
                <div class="timeline-item mb-6">
                    <div class="bg-white p-6 rounded-2xl shadow-lg">
                        <div class="flex items-start justify-between mb-4">
                            <div>
                                <h4 class="text-xl font-bold text-gray-800">${edu.title}</h4>
                                <p class="text-purple-600 font-semibold">${edu.company}</p>
                                ${edu.location ? `<p class="text-gray-600">${edu.location}</p>` : ''}
                            </div>
                            <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                ${edu.startDate}${edu.endDate ? ` - ${edu.endDate}` : edu.current ? ' - Present' : ''}
                            </span>
                        </div>
                        ${edu.description && edu.description.length > 0 ? `
                            <ul class="text-gray-600 space-y-1">
                                ${edu.description.map(desc => `<li>• ${desc}</li>`).join('')}
                            </ul>
                        ` : ''}
                    </div>
                </div>
            `).join('');
        }

        function renderCertificates() {
            const certificates = portfolioData.certificates;
            const certificatesList = document.getElementById('certificatesList');

            certificatesList.innerHTML = certificates.map(cert => `
                <div class="bg-white p-4 rounded-xl shadow-md flex items-center">
                    <i class="${cert.icon || 'fas fa-certificate'} text-2xl text-blue-600 mr-4"></i>
                    <div class="flex-1">
                        <p class="font-semibold text-gray-800">${cert.title}</p>
                        <p class="text-sm text-gray-600">${cert.issuer}</p>
                        ${cert.date ? `<p class="text-xs text-gray-500">${cert.date}</p>` : ''}
                    </div>
                    ${cert.url ? `
                        <a href="${cert.url}" target="_blank" class="text-purple-600 hover:text-purple-700">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                    ` : ''}
                </div>
            `).join('');
        }

        function startTypingAnimation(text) {
            const typingElement = document.getElementById('heroTitle');
            const texts = [text, 'Full Stack Developer', 'Flutter Developer', 'Software Engineer', 'Problem Solver'];
            let textIndex = 0;
            let charIndex = 0;
            let isDeleting = false;

            function typeWriter() {
                const currentText = texts[textIndex];

                if (isDeleting) {
                    typingElement.textContent = currentText.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    typingElement.textContent = currentText.substring(0, charIndex + 1);
                    charIndex++;
                }

                if (!isDeleting && charIndex === currentText.length) {
                    setTimeout(() => isDeleting = true, 2000);
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                }

                setTimeout(typeWriter, isDeleting ? 50 : 100);
            }

            typeWriter();
        }

        // Mobile menu toggle
        function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            mobileMenu.classList.toggle('open');
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Scroll progress indicator
        window.addEventListener('scroll', function () {
            const scrollIndicator = document.getElementById('scrollIndicator');
            if (scrollIndicator) {
                const scrollTop = window.pageYOffset;
                const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollPercent = (scrollTop / documentHeight) * 100;
                scrollIndicator.style.width = scrollPercent + '%';
            }
        });

        // Contact form handling
        document.getElementById('contactForm').addEventListener('submit', function (e) {
            e.preventDefault();

            const form = this;
            const submitBtn = document.getElementById('submitBtn');
            const submitText = document.getElementById('submitText');
            const successMessage = document.getElementById('successMessage');
            const errorMessage = document.getElementById('errorMessage');

            // Hide previous messages
            successMessage.style.display = 'none';
            errorMessage.style.display = 'none';

            // Show loading state
            submitBtn.disabled = true;
            submitText.textContent = 'Sending...';

            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            // Submit to backend
            fetch(`${API_BASE}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => {
                    if (response.ok) {
                        successMessage.style.display = 'block';
                        form.reset();
                        // Scroll to success message
                        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    } else {
                        throw new Error('Form submission failed');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    errorMessage.style.display = 'block';
                    // Scroll to error message
                    errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                })
                .finally(() => {
                    // Reset button state
                    submitBtn.disabled = false;
                    submitText.textContent = 'Send Message';
                });
        });

        // Add animation classes when elements come into view
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.animate-fadeInUp, .animate-fadeInLeft, .animate-fadeInRight').forEach(el => {
            observer.observe(el);
        });
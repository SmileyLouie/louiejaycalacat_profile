// Initialize Lucide icons
lucide.createIcons();

// Scroll Navbar Effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) {
    nav.classList.add('bg-black/90', 'backdrop-blur-sm', 'border-b', 'border-white/10');
    nav.classList.remove('bg-transparent');
  } else {
    nav.classList.remove('bg-black/90', 'backdrop-blur-sm', 'border-b', 'border-white/10');
    nav.classList.add('bg-transparent');
  }
});

// Smooth Scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Typewriter Effect
const phrases = ['Frontend Developer', 'System Developer', 'UI Designer', 'Problem Solver'];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterElement = document.getElementById('typewriter');

function typeWriter() {
  const currentPhrase = phrases[phraseIndex];
  typewriterElement.textContent = currentPhrase.substring(0, charIndex);

  if (!isDeleting) {
    charIndex++;
    if (charIndex > currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeWriter, 2000);
      return;
    }
  } else {
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  setTimeout(typeWriter, isDeleting ? 50 : 100);
}
typeWriter();

// Intersection Observers for Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const els = entry.target.querySelectorAll('.animate-on-scroll');
      els.forEach((el, index) => {
        el.classList.remove('opacity-0');
        if (el.classList.contains('slide-up')) el.classList.add('animate-slide-up');
        if (el.classList.contains('slide-left')) el.classList.add('animate-slide-left');
        if (el.classList.contains('slide-right')) el.classList.add('animate-slide-right');
        el.style.animationDelay = `${index * 0.1}s`;
      });

      if (entry.target.id === 'skills') {
        setTimeout(animateSkills, 300);
      }
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.observe-me').forEach(el => observer.observe(el));

// Render Skills
const skillsList = [
  { name: 'HTML5', level: 95, icon: 'devicon-html5-plain' },
  { name: 'CSS3', level: 90, icon: 'devicon-css3-plain' },
  { name: 'JavaScript', level: 85, icon: 'devicon-javascript-plain' },
  { name: 'React', level: 80, icon: 'devicon-react-original' },
  { name: 'PHP', level: 75, icon: 'devicon-php-plain' },
  { name: 'MySQL', level: 80, icon: 'devicon-mysql-plain' },
  { name: 'Java', level: 70, icon: 'devicon-java-plain' },
  { name: 'Git', level: 85, icon: 'devicon-git-plain' },
  { name: 'Python', level: 80, icon: 'devicon-python-plain' },
  { name: 'C#', level: 75, icon: 'devicon-csharp-plain' },
  { name: 'C++', level: 75, icon: 'devicon-cplusplus-plain' },
  { name: 'Rust', level: 65, icon: 'devicon-rust-original' },
  { name: 'Go', level: 70, icon: 'devicon-go-original-wordmark' },
  { name: 'TypeScript', level: 85, icon: 'devicon-typescript-plain' },
  { name: 'Swift', level: 60, icon: 'devicon-swift-plain' }
];
const skillsContainer = document.getElementById('skills-container');
skillsList.forEach((skill, idx) => {
  skillsContainer.innerHTML += `
        <div class="cyber-panel p-6 animate-on-scroll opacity-0 slide-up" style="animation-delay: ${idx * 0.1}s">
          <div class="flex justify-between items-center mb-3">
            <div class="flex items-center gap-3">
              <i class="${skill.icon} text-2xl text-white/80"></i>
              <span class="font-mono text-lg">${skill.name}</span>
            </div>
            <span class="font-mono text-sm text-white/70">${skill.level}%</span>
          </div>
          <div class="relative h-2 bg-white/10 overflow-hidden">
            <div id="skill-bar-${idx}" class="absolute top-0 left-0 h-full bg-white transition-all duration-1000 ease-out skill-bar-glow" style="width: 0%;"></div>
          </div>
        </div>
      `;
});
function animateSkills() {
  skillsList.forEach((skill, idx) => {
    const bar = document.getElementById(`skill-bar-${idx}`);
    if (bar) bar.style.width = `${skill.level}%`;
  });
}

// Render Projects
const projectsList = [
  { title: 'Barbershop Booking System', desc: 'Online booking system with barber accounts and scheduling functionality', tech: ['PHP', 'MySQL', 'JavaScript', 'CSS'] },
  { title: 'Payroll Management System', desc: 'Automated employee salary system with comprehensive database integration', tech: ['Java', 'MySQL', 'Swing UI'] },
  { title: 'Flower Shop System', desc: 'Online ordering system with flower accounts and scheduling functionality', tech: ['Html', 'Css', 'JavaScript'] }
];
const projectsContainer = document.getElementById('projects-container');
const infiniteProjects = [...projectsList, ...projectsList];
infiniteProjects.forEach((proj, idx) => {
  const techSpans = proj.tech.map(t => `<span class="font-mono text-xs px-3 py-1 border border-white/20 bg-white/5">${t}</span>`).join('');
  const buttons = `
        <div class="flex gap-3 mt-4">
          <a href="https://github.com/example/barbershop" target="_blank" class="cyber-button px-6 py-2 text-xs flex-1 text-center hover-glitch">
            <i data-lucide="github" class="w-4 h-4 inline mr-1"></i>SOURCE
          </a>
          <a href="https://example.com/barbershop-demo" target="_blank" class="cyber-button-outline px-6 py-2 text-xs flex-1 text-center hover-glitch">
            <i data-lucide="external-link" class="w-4 h-4 inline mr-1"></i>LIVE DEMO
          </a>
        </div>
      `;
  projectsContainer.innerHTML += `
        <div class="cyber-panel p-6 hover-lift w-[calc(100vw-3rem)] md:w-[350px] lg:w-[394px] shrink-0">
          <div class="flex items-start justify-between mb-4">
            <i data-lucide="code" class="text-white/70 w-6 h-6"></i>
            <i data-lucide="external-link" class="text-white/50 w-5 h-5"></i>
          </div>
          <h3 class="font-mono text-lg md:text-xl mb-3">${proj.title}</h3>
          <p class="font-mono text-sm text-white/70 mb-4 leading-relaxed">${proj.desc}</p>
          <div class="flex flex-wrap gap-2 mb-4">${techSpans}</div>
          ${buttons}
        </div>
      `;
});
lucide.createIcons(); // re-init icons for dynamic content

// Particle Background
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2,
    speedX: (Math.random() - 0.5) * 0.5,
    speedY: (Math.random() - 0.5) * 0.5,
  });
}

function animateParticles() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Grid
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
  ctx.lineWidth = 1;
  for (let x = 0; x < canvas.width; x += 50) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
  }
  for (let y = 0; y < canvas.height; y += 50) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
  }

  particles.forEach(p => {
    p.x += p.speedX; p.y += p.speedY;
    if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
    if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fillRect(p.x, p.y, p.size, p.size);
  });

  requestAnimationFrame(animateParticles);
}
animateParticles();
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

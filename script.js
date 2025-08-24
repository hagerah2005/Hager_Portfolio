function toggleRead() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btn = document.getElementById("readBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btn.innerHTML = "Read More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btn.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}
// Animate Progress Bars
document.querySelectorAll('.progress').forEach(bar => {
    const width = bar.getAttribute('data-width');
    setTimeout(() => {
        bar.style.width = width;
    }, 300);
});

// Animate Circle Progress
document.querySelectorAll('.circle-progress').forEach(circle => {
    const percent = circle.getAttribute('data-percent');
    const valueEl = circle.querySelector('.progress-value');
    let current = 0;
    const interval = setInterval(() => {
        if(current >= percent) clearInterval(interval);
        valueEl.textContent = `${current}%`;
        circle.style.background = `conic-gradient(var(--main-color) 0% ${current}%, rgba(0,238,238,0.2) ${current}% 100%)`;
        current++;
    }, 15);
});
// بيانات المشاريع (لنفترض أن لديك 8 مشاريع)
const projectsData = [
    {
        title: "Click&Cook",
        image: "files/img.png",
        description: "Click & Cook is a user-friendly recipe finder website that connects food lovers! Users can browse and search for recipes, follow step-by-step instructions, leave reviews, and manage favorite dishes. Admins have full control over the recipe database, making it easy to manage and curate recipe content.",
        technologies: ['HTML', 'CSS', 'JavaScript','Django', 'SQLite3'],
        demoLink: "https://clickandcook.pythonanywhere.com",
        githubLink: "https://github.com/hagerah2005/Click-Cook?tab=readme-ov-file#-live-demo"
    },
    {
        title: "Photoshop-Application",
        image: "files/photoshop-2.jpg",
        description: "A simple image editing application implementing 15 different filters, allowing users to apply various \n" +
            "effects and transformations to images.",
        technologies: ["C++","vscode"],
        demoLink: "https://github.com/hagerah2005/Photoshop-Application",
        githubLink: "https://github.com/hagerah2005/Photoshop-Application"
    },
    {
        title: "SortGenius",
        image: "files/img_1.png",
        description: "This C++ application allows users to input a dataset, ensuring all elements are of the same type (int, double, or string). Users can then choose from various sorting algorithms to sort the dataset. Additionally, users can run pre-defined test cases from a file.",
        technologies: ["C++", "Predefined Test Cases", "Dataset Validation"],
        demoLink: "https://github.com/hagerah2005/SortGenius",
        githubLink: "#https://github.com/hagerah2005/SortGenius"
    },
    {
        title: "ERQ",
        image: "files/img_2.jpeg",
        description: "A C++ console application that simulates an Emergency Room using a Max Heap to prioritize patient treatment based on severity and arrival time. The system allows hospital staff to manage patients, update severities, track treatment history, and save/load data across sessions.",
        technologies: ["C++"],
        demoLink: "https://github.com/hagerah2005/ERQ",
        githubLink: "https://github.com/hagerah2005/ERQ"
    },
    {
        title: "FinTrack",
        image: "files/img_3.jpg",
        description: "A personal finance management system that tracks income, expenses, budgets, and goals with notifications and persistent storage. ",
        technologies: ["Java", "javaDoc", "SRS", "SDS", "Design Patterns"],
        demoLink: "https://github.com/hagerah2005/FinTrack",
        githubLink: "https://github.com/hagerah2005/FinTrack"
    },
    {
        title: "Tic-Tac-Domination ",
        image: "files/img4.png",
        description: "This project provides a C++ console-based application for managing and playing various board games with multiple types of players, including human players, random computer players, and AI-driven smart players. The project features include a game manager, board representation, and player management to facilitate smooth gameplay across different board game variants along with input validation.",
        technologies: ["oop", "C++"],
        demoLink: "https://github.com/hagerah2005/Tic-Tac-Domination",
        githubLink: "https://github.com/hagerah2005/Tic-Tac-Domination"
    },
    {
        title: "Vole_Machine_Simulator",
        image: "files/img5.png",
        description: "A simple machine code simulator with custom memory and registers, executing instructions through \n" +
            "the Fetch–Decode–Execute cycle. Supports arithmetic, data transfer, and control flow operations with \n" +
            "a modular design (CPU, Memory, Register). ",
        technologies: ["C++", "Classes&OOP"],
        demoLink: "https://github.com/hagerah2005/Vole-Machine",
        githubLink: "https://github.com/hagerah2005/Vole-Machine"
    },
    {
        title: "Text-Cipher-Decipher",
        image: "files/img6.png",
        description: "The main idea of this program is to use mathematical or logical operations to transform plaintext (readable data) into ciphertext (unreadable data) and vice versa.",
        technologies: ["c++"],
        demoLink: "https://github.com/hagerah2005/Text-Cipher-Decipher",
        githubLink: "https://github.com/hagerah2005/Text-Cipher-Decipher"
    }
];

let currentSlide = 0;
const projectsPerSlide = 4;


function renderProjects() {
    const projectsContainer = document.querySelector('.projects-container');
    projectsContainer.innerHTML = '';

    const startIndex = currentSlide * projectsPerSlide;
    const endIndex = Math.min(startIndex + projectsPerSlide, projectsData.length);

    const circlesWrapper = document.createElement('div');
    circlesWrapper.className = 'circles-wrapper';

    if (endIndex - startIndex > 1) {
        for (let i = 0; i < endIndex - startIndex - 1; i++) {
            const connector = document.createElement('div');
            connector.className = `connector connector-${i+1}`;
            circlesWrapper.appendChild(connector);

            const arrow = document.createElement('div');
            arrow.className = `arrow arrow-${i+1}`;
            arrow.innerHTML = '<i class="bx bx-chevron-right"></i>';
            circlesWrapper.appendChild(arrow);
        }
    }

    for (let i = startIndex; i < endIndex; i++) {
        const projectIndex = i;
        const project = projectsData[projectIndex];

        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';

        const projectCircle = document.createElement('div');
        projectCircle.className = 'project-circle';
        projectCircle.onclick = () => showProjectDetails(projectIndex);
        projectCircle.innerHTML = `<img src="${project.image}" alt="${project.title}">`;

        const circleTitle = document.createElement('div');
        circleTitle.className = 'circle-title';
        circleTitle.textContent = project.title;

        projectItem.appendChild(projectCircle);
        projectItem.appendChild(circleTitle);
        circlesWrapper.appendChild(projectItem);
    }

    projectsContainer.appendChild(circlesWrapper);

    const navArrows = document.createElement('div');
    navArrows.className = 'nav-arrows';

    if (currentSlide > 0) {
        const leftArrow = document.createElement('div');
        leftArrow.className = 'nav-arrow left-arrow';
        leftArrow.innerHTML = '<i class="bx bx-chevron-left"></i>';
        leftArrow.onclick = () => navigateProjects('prev');
        navArrows.appendChild(leftArrow);
    }

    if ((currentSlide + 1) * projectsPerSlide < projectsData.length) {
        const rightArrow = document.createElement('div');
        rightArrow.className = 'nav-arrow right-arrow';
        rightArrow.innerHTML = '<i class="bx bx-chevron-right"></i>';
        rightArrow.onclick = () => navigateProjects('next');
        navArrows.appendChild(rightArrow);
    }

    projectsContainer.appendChild(navArrows);

    const pageIndicator = document.createElement('div');
    pageIndicator.className = 'page-indicator';
    pageIndicator.textContent = `${currentSlide + 1} / ${Math.ceil(projectsData.length / projectsPerSlide)}`;
    projectsContainer.appendChild(pageIndicator);
}

function navigateProjects(direction) {
    if (direction === 'next' && (currentSlide + 1) * projectsPerSlide < projectsData.length) {
        currentSlide++;
    } else if (direction === 'prev' && currentSlide > 0) {
        currentSlide--;
    }

    renderProjects();
}

function showProjectDetails(projectIndex) {
    const project = projectsData[projectIndex];
    const modal = document.getElementById('projectModal');

    document.getElementById('modalImg').src = project.image;
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;

    const technologiesList = document.getElementById('modalTechnologies');
    technologiesList.innerHTML = '';
    project.technologies.forEach(tech => {
        const li = document.createElement('li');
        li.textContent = tech;
        technologiesList.appendChild(li);
    });

    document.getElementById('demoLink').href = project.demoLink;
    document.getElementById('githubLink').href = project.githubLink;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeProjectDetails() {
    document.getElementById('projectModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

document.addEventListener('DOMContentLoaded', function() {
    renderProjects();

    window.onclick = function(event) {
        const modal = document.getElementById('projectModal');
        if (event.target === modal) {
            closeProjectDetails();
        }
    };

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeProjectDetails();
        }
    });
});
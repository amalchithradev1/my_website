document.addEventListener("DOMContentLoaded", function() {
    const caseCards = document.querySelectorAll(".case-card");

    caseCards.forEach(card => {
        const video = card.querySelector(".case-video");

        card.addEventListener("mouseenter", function() {
            video.play(); // Play video on hover
        });

        card.addEventListener("mouseleave", function() {
            video.pause(); // Pause video when mouse leaves
            video.currentTime = 0; // Reset to start
        });
    });
});

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const homeSection = document.querySelector("#home");

    const homeHeight = homeSection.offsetHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50 && scrollPosition < homeHeight / 2) {
        navbar.classList.add("scrolled"); // White background before halfway
    } else {
        navbar.classList.remove("scrolled"); // Transparent again after halfway
    }
});



document.addEventListener("DOMContentLoaded", function() {
    const homeSection = document.querySelector("#home");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                homeSection.classList.add("active"); // Trigger animation
            } else {
                homeSection.classList.remove("active"); // Reset when out of view
            }
        });
    }, { threshold: 0.5 }); // Adjust threshold for better timing

    observer.observe(homeSection);
});


document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("animated-text");
    const words = textElement.innerText.split(" ");
    textElement.innerHTML = ""; 

    words.forEach((word, index) => {
        let span = document.createElement("span");
        span.innerText = word;
        span.style.animation = `fadeInUp 0.5s ease forwards`;
        span.style.animationDelay = `${index * 0.05}s`; 
        textElement.appendChild(span);
        textElement.appendChild(document.createTextNode("\u00A0")); // Adds spacing
    });
});

/* About section */

document.addEventListener("DOMContentLoaded", function () {
    const aboutDesc = document.querySelector(".about-description");
    const text = aboutDesc.innerHTML;
    
    aboutDesc.innerHTML = ""; // Clear existing text

    // Split the text while keeping spaces intact
    const words = text.split(/(\s+)/); // Split by spaces while keeping spaces

    words.forEach((word) => {
        let span = document.createElement("span");
        span.innerHTML = word; // Keep spaces intact
        span.classList.add("fade-in-word-about-section");
        aboutDesc.appendChild(span);
    });

    function fadeInWords() {
        const words = document.querySelectorAll(".fade-in-word-about-section");
        const aboutSection = document.querySelector("#about");
        const sectionTop = aboutSection.offsetTop;
        const sectionHeight = aboutSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        
        // Make fade-in start a little later by adjusting the threshold
        const offset = window.innerHeight * 0.01; // Adjust this value for more delay
        const progress = Math.min(1.3, (scrollPosition - sectionTop - offset) / sectionHeight);

        // Increase the denominator (e.g., 2.5) to slow down the word reveal speed
        const visibleWords = Math.floor(progress * words.length * 0.8); 

        words.forEach((span, index) => {
            if (index < visibleWords) {
                span.classList.add("visible");
            } else {
                span.classList.remove("visible"); // Hide when scrolling back up
            }
        });
    }

    window.addEventListener("scroll", fadeInWords);
});


document.addEventListener("DOMContentLoaded", function () {
    const skillsSection = document.querySelector("#skills");
    const skillContainers = document.querySelectorAll(".skills-container");
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= window.innerHeight * 0.75 &&
            rect.bottom >= 0
        );
    }
    
    function animateSkills() {
        if (isInViewport(skillsSection)) {
            skillContainers.forEach(container => {
                container.classList.add("active");
            });
        }
    }
    
    // Intersection Observer for better performance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillContainers.forEach((container, index) => {
                    // Staggered animation
                    setTimeout(() => {
                        container.classList.add("active");
                    }, index * 100);
                });
            }
        });
    }, { threshold: 0.1 });
    
    observer.observe(skillsSection);
    
    // Initial check in case section is already visible
    animateSkills();
});











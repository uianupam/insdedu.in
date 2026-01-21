// Dark mode
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
    document.body.classList.toggle("dark");
};

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.15 });

reveals.forEach(r => observer.observe(r));

// Offcanvas logic
const openBtn = document.getElementById("openPanel");
const closeBtn = document.getElementById("closePanel");
const offcanvas = document.getElementById("offcanvas");
const backdrop = document.getElementById("backdrop");

openBtn.onclick = () => {
    offcanvas.classList.add("active");
    backdrop.classList.add("active");
};

closeBtn.onclick = closeBackdrop;
backdrop.onclick = closeBackdrop;

function closeBackdrop() {
    offcanvas.classList.remove("active");
    backdrop.classList.remove("active");
}

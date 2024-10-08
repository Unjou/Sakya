document.addEventListener("DOMContentLoaded", function () {
    const viewAllMenuBtn = document.querySelector("#viewAllMenuBtn");
    const menuItems = document.querySelectorAll(".menu-item");
    const preloader = document.querySelector(".preload");
    const scrollTopBtn = document.querySelector("#scrollTopBtn");
    const sidebarToggleBtn = document.querySelector("#menu-btn");
    const sidebar = document.querySelector("#sidebar");
    const closeBtn = document.querySelector("#close-btn");

    
    window.addEventListener("load", function () {
        if (preloader) {
            preloader.classList.add("loaded"); 
            setTimeout(() => {
                preloader.style.display = "none"; 
            }, 800);
        }
    });

    
    viewAllMenuBtn?.addEventListener("click", function () {
        menuItems.forEach(item => item.classList.remove("hidden"));
        viewAllMenuBtn.classList.add("hidden");
    });

    
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.remove("hidden");
        } else {
            scrollTopBtn.classList.add("hidden");
        }
    });

    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

   
    sidebarToggleBtn.addEventListener("click", function () {
        sidebar.classList.toggle("-translate-x-full"); 
    });

    closeBtn.addEventListener("click", function () {
        sidebar.classList.add("-translate-x-full"); 
    });

   
    const slides = ['slide1', 'slide2', 'slide3'];
    const texts = [
        { title: "Selamat Datang di Sakya", description: "Restoran Ayam Khas yang Menggugah Selera" },
        { title: "Home Sweet Home", description: "Cocok Untuk Kumpul Bareng Keluarga & Teman" },
        { title: "Rasakan Cita Rasanya", description: "Setiap Gigitan Menciptakan Kenangan" }
    ];

    let currentSlide = 0;

    function changeSlide() {
        slides.forEach(slide => document.getElementById(slide)?.classList.add('hidden'));
        document.getElementById(slides[currentSlide])?.classList.remove('hidden');

        document.querySelector('#text-container h1').innerText = texts[currentSlide].title;
        document.querySelector('#text-container p').innerText = texts[currentSlide].description;

        currentSlide = (currentSlide + 1) % slides.length;
    }
    
    setInterval(changeSlide, 5000); 
});

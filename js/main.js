// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Copy contract address functionality
    const copyButton = document.getElementById('copy-address');
    const contractAddress = document.getElementById('contract-address');
    const copyMessage = document.getElementById('copy-message');

    if (copyButton && contractAddress && copyMessage) {
        copyButton.addEventListener('click', function() {
            // Add button click animation
            this.classList.add('btn-click');
            
            // Copy the text
            const textToCopy = contractAddress.textContent;
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Show success message
                copyMessage.style.opacity = '1';
                copyMessage.classList.add('copy-success');
                
                // Hide message after animation
                setTimeout(() => {
                    copyMessage.style.opacity = '0';
                    copyMessage.classList.remove('copy-success');
                }, 2000);
            });
            
            // Remove button animation class
            setTimeout(() => {
                this.classList.remove('btn-click');
            }, 300);
        });
    }

    // Mobile navigation toggle
    const mobileNavToggle = document.createElement('div');
    mobileNavToggle.className = 'mobile-nav-toggle';
    mobileNavToggle.innerHTML = '<i class="fas fa-bars"></i>';
    
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    
    if (header && nav) {
        header.appendChild(mobileNavToggle);
        
        mobileNavToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.innerHTML = nav.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }

    // Add scroll event for header
    window.addEventListener('scroll', function() {
        if (header) {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
});

// Preload images
function preloadImages() {
    const imageSources = [
        'assets/images/marvin-logo.png',
        'assets/images/marvin-pet.png',
        'assets/images/elon-marvin.png',
        'assets/images/pancakeswap.png',
        'assets/images/uniswap.png',
        'assets/images/1inch.png',
        'assets/images/wwf.png',
        'assets/images/aspca.png',
        'assets/images/best-friends.png',
        'assets/images/humane-society.png',
        'assets/images/local-shelters.png'
    ];
    
    imageSources.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Call preload function
preloadImages();
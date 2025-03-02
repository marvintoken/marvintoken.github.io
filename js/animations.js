// Additional animations using GSAP
document.addEventListener('DOMContentLoaded', function() {
    // Hero section animations
    gsap.from('.hero-content h1', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.2
    });
    
    gsap.from('.hero-content h2', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.4
    });
    
    gsap.from('.hero-content p', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.6
    });
    
    gsap.from('.hero-content .btn', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.8
    });

    // Tokenomics chart animation
    const chartSegments = document.querySelectorAll('.chart-segment');
    if (chartSegments.length > 0) {
        gsap.from(chartSegments, {
            duration: 1,
            scale: 0,
            opacity: 0,
            stagger: 0.2,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: '.tokenomics-chart',
                start: 'top 80%'
            }
        });
    }

    // Partner logos animation
    const partnerLogos = document.querySelectorAll('.partner-logo');
    if (partnerLogos.length > 0) {
        gsap.from(partnerLogos, {
            duration: 0.8,
            y: 50,
            opacity: 0,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.partner-logos',
                start: 'top 80%'
            }
        });
    }

    // Buy steps animation
    const buySteps = document.querySelectorAll('.step');
    if (buySteps.length > 0) {
        gsap.from(buySteps, {
            duration: 0.8,
            y: 50,
            opacity: 0,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.buy-steps',
                start: 'top 80%'
            }
        });
    }

    // Add hover animations for interactive elements
    const interactiveElements = document.querySelectorAll('.btn, .social-icon, .partner-logo, .step');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            gsap.to(this, {
                duration: 0.3,
                y: -5,
                ease: 'power2.out'
            });
        });
        
        element.addEventListener('mouseleave', function() {
            gsap.to(this, {
                duration: 0.3,
                y: 0,
                ease: 'power2.out'
            });
        });
    });

       // Create floating animation for specific elements
    function createFloatingAnimation() {
        const floatingElements = document.querySelectorAll('.floating');
        
        floatingElements.forEach(element => {
            gsap.to(element, {
                y: -15,
                duration: 1.5,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true
            });
        });
    }
    
    createFloatingAnimation();

    // Add scroll-triggered animations for sections
    function initScrollAnimations() {
        // Origin section
        gsap.from('.origin-image', {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.origin-content',
                start: 'top 80%'
            }
        });
        
        gsap.from('.origin-text', {
            x: 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.origin-content',
                start: 'top 80%'
            }
        });

        // Roadmap timeline animation
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        timelineItems.forEach((item, index) => {
            const direction = index % 2 === 0 ? -50 : 50;
            
            gsap.from(item, {
                x: direction,
                opacity: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%'
                }
            });
        });

        // Contract address container animation
        gsap.from('.contract-address', {
            scale: 0.9,
            opacity: 0,
            duration: 0.8,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: '.contract-address',
                start: 'top 80%'
            }
        });
    }
    
    // Initialize scroll animations if ScrollTrigger is available
    if (gsap.plugins && gsap.plugins.ScrollTrigger) {
        initScrollAnimations();
    } else {
        console.warn('ScrollTrigger plugin not available. Some animations will not work.');
    }

    // Add pulse animation to important buttons
    const pulseButtons = document.querySelectorAll('.primary-btn');
    
    pulseButtons.forEach(button => {
        gsap.to(button, {
            scale: 1.05,
            duration: 0.8,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    });

    // Add special animation for the copy address button
    const copyAddressBtn = document.getElementById('copy-address');
    
    if (copyAddressBtn) {
        copyAddressBtn.addEventListener('mouseenter', function() {
            gsap.to(this, {
                backgroundColor: '#8ac926',
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        copyAddressBtn.addEventListener('mouseleave', function() {
            gsap.to(this, {
                backgroundColor: '#1982c4',
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    }

    // Add animation for section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    
    sectionTitles.forEach(title => {
        gsap.from(title, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: title,
                start: 'top 85%'
            }
        });
    });

    // Create a simple parallax effect for background sections
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        if (section.classList.contains('hero') || 
            section.classList.contains('tokenomics') || 
            section.classList.contains('buy')) {
            
            gsap.to(section, {
                backgroundPosition: '50% 30%',
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });
        }
    });
});
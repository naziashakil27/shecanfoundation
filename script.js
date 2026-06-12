// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

window.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. LOGO SPINNING ANIMATION
    // ==========================================
    // Slow entry spin
    gsap.from("#logo", {
        rotation: -720,
        opacity: 0,
        scale: 0.2,
        duration: 2.5,
        ease: "power3.out"
    });

    // Continuous slow loop spin
    gsap.to("#logo", {
        rotation: 360,
        duration: 25,
        ease: "none",
        repeat: -1,
        delay: 2.5 // Start continuous spin after page load entry
    });


    // ==========================================
    // 2. PAGE LOAD ENTRANCE ANIMATION (Hero)
    // ==========================================
    // Setup timeline for synchronized page load entry
    const entryTimeline = gsap.timeline();

    // Staggered fall-in from above (y: -100)
    entryTimeline.from(".nav-container", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    entryTimeline.from("#ngo-name", {
        y: -200,
        opacity: 0,
        scale: 0.5,
        duration: 1.2,
        ease: "bounce.out"
    }, "-=0.4");

    // Heading text reveal
    entryTimeline.from("#hero-heading", {
        y: -150,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
    }, "-=0.8");

    entryTimeline.from(".hero-subtext", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=0.8");

    entryTimeline.from("#hero-cta", {
        y: -100,
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        ease: "elastic.out(1, 0.4)"
    }, "-=0.7");

    // Decorative doodles fall-in from space
    entryTimeline.from(".doodle", {
        y: -250,
        opacity: 0,
        stagger: 0.15,
        duration: 1.5,
        ease: "power2.out"
    }, "-=1.2");


    // ==========================================
    // 3. CONTINUOUS FLOAT LOOPS (Anti-Gravity Effect)
    // ==========================================
    // Make each card float uniquely (unsynced) for organic feel
    document.querySelectorAll('.floating-card').forEach((card, index) => {
        // Subtle offset based on index
        const delay = index * 0.4;
        
        gsap.to(card, {
            y: "random(-12, 12)",
            x: "random(-6, 6)",
            rotation: "random(-1.5, 1.5)",
            duration: "random(4.5, 7.5)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: delay
        });
    });

    // Make the volunteer image float gently
    gsap.to("#volunteer-photo", {
        y: -18,
        x: 6,
        rotation: 0.5,
        duration: 5.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // Make background doodles drift floatingly
    document.querySelectorAll('.doodle').forEach((doodle, index) => {
        gsap.to(doodle, {
            y: "random(-35, 35)",
            x: "random(-20, 20)",
            rotation: "random(-45, 45)",
            duration: "random(7, 12)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.3
        });
    });


    // ==========================================
    // 4. SCROLL-TRIGGERED REVEALS & INTERACTIONS
    // ==========================================
    // About Section Card reveal and Scroll Bobbing
    gsap.from("#about-card", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 75%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        scale: 0.9,
        y: 120,
        rotation: -4,
        duration: 1.5,
        ease: "power3.out"
    });

    // Subtly connect about card bobbing with scroll speed/position
    gsap.to("#about-card", {
        scrollTrigger: {
            trigger: "#about",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        },
        y: -30,
        rotation: 1
    });

    // Impact Section reveals
    gsap.from("#impact .section-title", {
        scrollTrigger: {
            trigger: "#impact",
            start: "top 80%"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out"
    });

    gsap.from("#impact-info", {
        scrollTrigger: {
            trigger: "#impact",
            start: "top 75%"
        },
        opacity: 0,
        x: -100,
        rotation: -3,
        duration: 1.4,
        ease: "power3.out"
    });

    gsap.from("#impact-image-wrapper", {
        scrollTrigger: {
            trigger: "#impact",
            start: "top 75%"
        },
        opacity: 0,
        x: 100,
        rotation: 3,
        duration: 1.4,
        ease: "power3.out"
    });

    // Join Section card reveal
    gsap.from("#join-card", {
        scrollTrigger: {
            trigger: "#join",
            start: "top 75%"
        },
        opacity: 0,
        scale: 0.92,
        y: 100,
        rotation: -2,
        duration: 1.4,
        ease: "power4.out"
    });

    // Footer Card reveal
    gsap.from("#footer .footer-card", {
        scrollTrigger: {
            trigger: "#footer",
            start: "top 92%"
        },
        opacity: 0,
        y: 60,
        rotation: 1,
        duration: 1.2,
        ease: "power2.out"
    });


    // ==========================================
    // 5. BUTTON HOVER INTERACTIVE BOUNCE
    // ==========================================
    const hoverElements = document.querySelectorAll('.btn, .social-icon-btn, .button-nav');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            // Elastic scale bounce up
            gsap.to(element, {
                scale: 1.1,
                ease: "elastic.out(1, 0.3)",
                duration: 0.8,
                overwrite: "auto"
            });
        });
        
        element.addEventListener('mouseleave', () => {
            // Return to base size smoothly
            gsap.to(element, {
                scale: 1.0,
                ease: "power2.out",
                duration: 0.5,
                overwrite: "auto"
            });
        });
    });

    // Add extra bounce click effect for triggers
    document.querySelectorAll('.trigger-bounce').forEach(btn => {
        btn.addEventListener('click', () => {
            gsap.to(btn, {
                scale: 0.9,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                ease: "power1.inOut"
            });
        });
    });

});

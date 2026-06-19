console.clear();

document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".counter");

    const easeOutQuart = (t) => {
        return 1 - Math.pow(1 - t, 4);
    };

    const startCounter = (counter) => {

        const target = parseInt(counter.dataset.target);

        const duration = 2500;

        const startTime = performance.now();

        const animate = (currentTime) => {

            const elapsed = currentTime - startTime;

            const progress = Math.min(elapsed / duration, 1);

            const easedProgress = easeOutQuart(progress);

            const value = Math.floor(
                easedProgress * target
            );

            counter.textContent = value;

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                counter.textContent = target + "+";
            }
        };

        requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    startCounter(entry.target);

                    observer.unobserve(entry.target);
                }
            });

        },
        {
            threshold: 0.5
        }
    );

    counters.forEach(counter => {
        observer.observe(counter);
    });

});

/* FAQ ACCORDION */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question =
    item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});
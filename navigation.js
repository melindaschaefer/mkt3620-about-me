document.addEventListener("DOMContentLoaded", function () {

    const navigationLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const targetSection = document.querySelector(targetId);

            if (targetSection) {

                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* Highlight the section currently being viewed */

    const sections = document.querySelectorAll(
        "main section[id]"
    );

    const navLinks = document.querySelectorAll(
        '.side-navigation a, .top-navigation a'
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    navLinks.forEach(function (link) {
                        link.classList.remove("active");
                    });

                    const activeLinks = document.querySelectorAll(
                        'a[href="#' + entry.target.id + '"]'
                    );

                    activeLinks.forEach(function (link) {
                        link.classList.add("active");
                    });

                }

            });

        },
        {
            threshold: 0.3
        }
    );


    sections.forEach(function (section) {
        observer.observe(section);
    });

});

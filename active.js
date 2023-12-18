(function () {
    {
        document.addEventListener("DOMContentLoaded", () => {

            console.log(window.location.href);

            const navLinks = document.querySelectorAll('.nav-container ul li a');

            for (let link of navLinks) {

                if (link.href === window.location.href) {
                    link.classList.add("active");
                }
            }
        });
    }
})();
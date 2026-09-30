    const glow = document.createElement("div");
    glow.classList.add("cursor-glow");
    document.body.appendChild(glow);

    const dot = document.createElement("div");
    dot.classList.add("cursor-dot");
    document.body.appendChild(dot);


    document.addEventListener("mousemove", function (event) {

        glow.style.left = event.clientX + "px";
        glow.style.top = event.clientY + "px";

        dot.style.left = event.clientX + "px";
        dot.style.top = event.clientY + "px";


        const trail = document.createElement("div");

        trail.classList.add("cursor-trail");

        trail.style.left = event.clientX + "px";
        trail.style.top = event.clientY + "px";

        document.body.appendChild(trail);


        setTimeout(function () {
            trail.remove();
        }, 600);

    });


    document.addEventListener("click", function (event) {

        const ripple = document.createElement("div");

        ripple.classList.add("ripple");

        ripple.style.left = event.clientX + "px";
        ripple.style.top = event.clientY + "px";

        document.body.appendChild(ripple);

        setTimeout(function () {
            ripple.remove();
        }, 700);

    });

    const languageButton = document.getElementById("language-btn");

let currentLanguage = "en";

languageButton.addEventListener("click", function () {

    if (currentLanguage === "en") {

        currentLanguage = "th";

        document.documentElement.lang = "th";

        languageButton.textContent = "EN";

    } else {

        currentLanguage = "en";

        document.documentElement.lang = "en";

        languageButton.textContent = "TH";
    }

    const elements = document.querySelectorAll("[data-en]");

    elements.forEach(function (element) {

        element.textContent = element.dataset[currentLanguage];

    });

});

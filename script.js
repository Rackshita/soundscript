document.addEventListener("DOMContentLoaded", function() {
    const subtitleElement = document.getElementById("subtitle");
    const text = "Introducing";
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            subtitleElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    subtitleElement.innerHTML = ""; // Clear the initial text
    typeWriter();

    const arrowContainer = document.querySelector(".arrow-container");
    const secondPage = document.querySelector(".second-page");
    const ropeContainer = document.querySelector(".rope-container");
    const rope = document.querySelector(".rope");
    const ropeKnot = document.querySelector(".rope-knot");

    let isDragging = false;
    let startY;

    arrowContainer.addEventListener("click", () => {
        secondPage.style.bottom = "0";
    });

    arrowContainer.addEventListener("mousedown", (e) => {
        isDragging = true;
        startY = e.clientY;
    });

    document.addEventListener("mousemove", (e) => {
        if (isDragging) {
            const diff = startY - e.clientY;
            if (diff > 50) { // Adjust threshold as needed
                secondPage.style.bottom = "0";
                isDragging = false;
            }
        }
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
    });

    ropeContainer.addEventListener("mousedown", (e) => {
        isDragging = true;
        startY = e.clientY;
    });

    document.addEventListener("mousemove", (e) => {
        if (isDragging) {
            const diff = e.clientY - startY;
            if (diff > 0) {
                rope.style.height = `${100 + diff}px`;
                ropeKnot.style.transform = `translateY(${diff}px)`;
            }
            if (diff > 100) { // Adjust threshold as needed
                secondPage.style.bottom = "-100vh";
                isDragging = false;
                setTimeout(() => {
                    rope.style.height = "100px";
                    ropeKnot.style.transform = "translateY(0)";
                }, 700); // Smooth transition back
            }
        }
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        setTimeout(() => {
            rope.style.height = "100px";
            ropeKnot.style.transform = "translateY(0)";
        }, 700); // Smooth transition back
    });
});

function goToMainPage() {
    document.querySelector('.second-page').style.bottom = '-100vh';
}

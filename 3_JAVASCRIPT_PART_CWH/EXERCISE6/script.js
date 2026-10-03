function delay() {
    return (Math.floor(Math.random() * 7) + 1) * 1000;
}

// attach dots to a specific line
function startBlinking(nextToElement) {
    const dots = document.createElement("span");
    dots.classList.add("dots");
    nextToElement.appendChild(dots);

    let i = 0;
    const interval = setInterval(() => {
        dots.textContent = ".".repeat((i % 3) + 1);
        i++;
    }, 500);

    return { element: dots, stop: () => clearInterval(interval) }; 
}

function addLine(lineText) {
    return new Promise((resolve) => {
        const p = document.createElement("p");
        p.textContent = lineText + " "; // text + space before dots
        document.querySelector(".container").appendChild(p);

        // start blinking dots beside this line
        const blink = startBlinking(p);

        setTimeout(() => {
            blink.stop();
            blink.element.remove(); // remove dots when next line appears
            resolve();
        }, delay());
    });
}

async function texter(line1, line2, line3, line4, line5) {
    await addLine(line1);
    await addLine(line2);
    await addLine(line3);
    await addLine(line4);
    await addLine(line5);
}


texter("Initializing Hacking", "Reading Your Files", "Passwords Files Detected",
     "Sending all your Passwords and Personal Files to the Server", "Cleaning Up");

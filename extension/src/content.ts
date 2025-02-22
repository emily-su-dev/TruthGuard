if (!(window as any).__misinfo_detector_loaded) {
    (window as any).__misinfo_detector_loaded = true; // Prevent duplicate execution

    console.log("Content script injected!");

    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach((p) => {
        p.style.backgroundColor = "yellow"; // Example: Highlight text
    });
}

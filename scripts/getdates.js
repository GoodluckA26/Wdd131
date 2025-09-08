// getdates.js
document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer');

    if (footer) {
        const paragraphs = footer.getElementsByTagName('p');

        // Set the current year in the first paragraph
        if (paragraphs[0]) {
            const currentYear = new Date().getFullYear();
            paragraphs[0].textContent = `© ${currentYear}`;
        }

        // Set the last modified date in the second paragraph
        if (paragraphs[1]) {
            const lastModified = document.lastModified;
            paragraphs[1].textContent = `Last modified: ${lastModified}`;
        }
    }
});// End of DOMContentLoaded event listener
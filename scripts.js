// Add interactivity or functionality as needed
// For example, a function to open tool details in a new page
function openToolDetails(toolName) {
    const toolDetailsUrl = `https://your-website.com/tool-details-page?tool=${toolName}`;
    window.open(toolDetailsUrl, '_blank');
}

// Event listeners for tool cards
document.querySelectorAll('.tool-card').forEach(card => {
    card.addEventListener('click', () => {
        const toolName = card.querySelector('.tool-name').textContent;
        openToolDetails(toolName);
    });
});

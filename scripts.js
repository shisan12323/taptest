const tools = [
    {
        id: 1,
        name: "Idea-Hunt 创意探寻",
        description: "Idea-Hunt - Innovative Idea Generation and Collaborative Brainstorming Platform for Creative Solutions...",
        image: "https://via.placeholder.com/300x200.png?text=Idea-Hunt",
        tags: ["Idea Generation", "Brainstorming", "Creativity"],
        features: ["Collaborative platform", "Idea voting system", "Integration with project management tools"]
    },
    {
        id: 2,
        name: "Flux AI Online Flux人工智能在线",
        description: "Flux AI Online - Free Next-Generation AI Image Generator and Open-Source Model",
        image: "https://via.placeholder.com/300x200.png?text=Flux+AI+Online",
        tags: ["AI", "Image Generation", "Open Source"],
        features: ["Advanced algorithms", "High-quality image generation", "Intuitive interface", "Open-source foundation"]
    },
    // Add more tools here
];

function displayTools() {
    const toolsGrid = document.getElementById('tools-grid');
    tools.forEach(tool => {
        const toolCard = createToolCard(tool);
        toolsGrid.appendChild(toolCard);
    });
}

function createToolCard(tool) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.innerHTML = `
        <img src="${tool.image}" alt="${tool.name}">
        <div class="tool-info">
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
            <div class="tool-tags">
                ${tool.tags.map(tag => `<span>${tag}</span>`).join('')}
            </div>
        </div>
    `;
    card.addEventListener('click', () => {
        window.location.href = `tool-detail.html?id=${tool.id}`;
    });
    return card;
}

function displayToolDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const toolId = parseInt(urlParams.get('id'));
    const tool = tools.find(t => t.id === toolId);

    if (tool) {
        document.getElementById('tool-name').textContent = tool.name;
        document.getElementById('tool-image').src = tool.image;
        document.getElementById('tool-image').alt = tool.name;
        document.getElementById('tool-description').innerHTML = `<h2>Description</h2><p>${tool.description}</p>`;
        document.getElementById('tool-features').innerHTML = `
            <h2>Features</h2>
            <ul>
                ${tool.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        `;
    }
}

// Run the appropriate function based on the current page
if (document.getElementById('tools-grid')) {
    displayTools();
} else if (document.getElementById('tool-detail')) {
    displayToolDetail();
}

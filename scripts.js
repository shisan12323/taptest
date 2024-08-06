const tools = [
    {
        id: 1,
        name: "Idea-Hunt 创意探寻",
        description: "Idea-Hunt - Innovative Idea Generation and Collaborative Brainstorming Platform for Creative Solutions...",
        image: "https://via.placeholder.com/300x200.png?text=Idea-Hunt",
        tags: ["Idea Generation", "Brainstorming", "Creativity"],
    },
    {
        id: 2,
        name: "Flux AI Online Flux人工智能在线",
        description: "Flux AI Online - Free Next-Generation AI Image Generator and Open-Source Model",
        image: "https://via.placeholder.com/300x200.png?text=Flux+AI+Online",
        tags: ["AI", "Image Generation", "Open Source"],
    },
    {
        id: 3,
        name: "AI Navs Site 人工智能导航网站",
        description: "AI Navs Site - 2024 Best and Latest AI Tools for Autonomous Vessel Navigation and GNSS Data Analysis...",
        image: "https://via.placeholder.com/300x200.png?text=AI+Navs+Site",
        tags: ["AI", "Navigation", "Data Analysis"],
    },
    {
        id: 4,
        name: "Online Tally Counter 在线理货计数器",
        description: "Online Tally Counter - Free Digital Tally Counter Tool for Events and Counting",
        image: "https://via.placeholder.com/300x200.png?text=Online+Tally+Counter",
        tags: ["Counting", "Events", "Digital Tool"],
    },
    {
        id: 5,
        name: "HappyPages AI - AI Coloring Page Generator",
        description: "HappyPages AI - AI Coloring Page Generator: Discover HappyPages AI, the ultimate AI content creation platform designed to unleash creativity and...",
        image: "https://via.placeholder.com/300x200.png?text=HappyPages+AI",
        tags: ["AI", "Coloring", "Creativity"],
    },
    {
        id: 6,
        name: "Escape the Algorithm - Achieve...",
        description: "Escape the Algorithm - Escape the Algorithm empowers you to take control of your online experience by eliminating...",
        image: "https://via.placeholder.com/300x200.png?text=Escape+the+Algorithm",
        tags: ["Algorithm", "Online Experience", "Control"],
    },
    {
        id: 7,
        name: "Cookie Checker - ComplyDog...",
        description: "Complydog.com: ComplyDog offers an easy-to-use Cookie Checker that simplifies GDPR compliance for software companies. Ensure...",
        image: "https://via.placeholder.com/300x200.png?text=Cookie+Checker",
        tags: ["GDPR", "Compliance", "Cookie"],
    },
    {
        id: 8,
        name: "Minduck - Official Minduck...",
        description: "Official minduck.com: Discover Minduck, the official platform for innovative mind-mapping solutions. Our Minduck services include...",
        image: "https://via.placeholder.com/300x200.png?text=Minduck",
        tags: ["Mind Mapping", "Productivity", "Innovation"],
    },
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
            <div class="tool-stats">
                <span>👁 --</span>
            </div>
        </div>
    `;
    card.addEventListener('click', () => {
        window.location.href = `tool-detail.html?id=${tool.id}`;
    });
    return card;
}

displayTools();

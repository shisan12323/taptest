// 在 script.js 文件中

function displayTools() {
    const toolsGrid = document.getElementById('tools-grid');
    toolsGrid.innerHTML = ''; // 清空现有内容
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
    return card;
}

// 确保在页面加载完成后调用 displayTools 函数
document.addEventListener('DOMContentLoaded', displayTools);

function rearrangeBlocks() {
    const redBlock = document.querySelector('.red');
    const greenBlock = document.querySelector('.green');
    const yellowBlock = document.querySelector('.yellow');

    if (window.innerWidth <= 768) {
        redBlock.parentNode.insertBefore(yellowBlock, greenBlock);
    } else {
        const mainContent = document.querySelector('.main-content');
        mainContent.appendChild(yellowBlock);
    }
}

window.addEventListener('load', rearrangeBlocks);
window.addEventListener('resize', rearrangeBlocks);
// Select elements
var left = document.getElementById('drag-left');
var right = document.getElementById('drag-right');
var bar = document.getElementById('dragbar');

// Function to handle drag
const drag = (e) => {
    document.selection ? document.selection.empty() : window.getSelection().removeAllRanges();

    // Calculate widths
    var barWidth = bar.offsetWidth / 2;
    var leftWidth = e.pageX - barWidth;

    // Limit the minimum width of left and right elements
    if (leftWidth < 100) {
        leftWidth = 100; // Adjust this value as needed
    } else if (leftWidth > window.innerWidth - barWidth * 2) {
        leftWidth = window.innerWidth - barWidth * 2; // Adjust this value as needed
    }

    // Set widths to elements
    left.style.width = leftWidth + 'px';
    right.style.width = `calc(100% - ${leftWidth}px - ${barWidth}px)`;
}

// Event listeners for mouse down and up on the dragbar
bar.addEventListener('mousedown', () => {
    document.addEventListener('mousemove', drag);
});

document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', drag);
});

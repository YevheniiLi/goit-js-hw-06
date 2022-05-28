const inputRef = document.getElementById('font-size-control');
const spanRef = document.getElementById('text');

inputRef.addEventListener('input', onSizeChanged)

function onSizeChanged(event) {
    text.style.fontSize = `${event.currentTarget.value}px`;
}
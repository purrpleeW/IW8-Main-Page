const downloadBtn = document.getElementById('downloadBtn');

const downloadURL = 'https://discord.gg/WVSErUvBbj';

downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = downloadURL;
});
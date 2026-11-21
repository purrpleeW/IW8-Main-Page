const downloadBtn = document.getElementById('downloadBtn');

const downloadURL = 'https://discord.gg/demonware';

downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = downloadURL;
});

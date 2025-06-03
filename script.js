function goBack() {
    document.getElementById('resultPage').classList.remove('active');
    document.getElementById('homePage').classList.add('active');
}

document.getElementById('validationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const code = document.getElementById('diplomaCode').value.trim().toUpperCase();
    const loading = document.getElementById('loading');
    const error = document.getElementById('errorMessage');
    error.style.display = 'none';
    loading.style.display = 'block';

    setTimeout(() => {
        loading.style.display = 'none';
        if (code === '298.298.45FC10485046') {
            document.getElementById('homePage').classList.remove('active');
            document.getElementById('resultPage').classList.add('active');
        } else {
            error.style.display = 'block';
        }
    }, 1500);
});

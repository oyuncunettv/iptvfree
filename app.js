// PWA Install Prompt (Opsiyonel)
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Önceden yüklenmiş olabilecek herhangi bir prompt'u engelle
    e.preventDefault();
    // Kullanıcının PWA'yı yükleme isteğini daha sonra göster
    deferredPrompt = e;
    // Yükleme butonunu göster
    const installButton = document.getElementById('installButton');
    installButton.style.display = 'block';

    installButton.addEventListener('click', () => {
        // Kullanıcı PWA'yı yüklemeyi onayladığında prompt'u göster
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the A2HS prompt');
                } else {
                    console.log('User dismissed the A2HS prompt');
                }
                deferredPrompt = null;
            });
        }
    });
});

// Example Functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log('App is ready');
    // Diğer JavaScript işlevlerini buraya ekleyebilirsin
});

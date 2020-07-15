self.addEventListener('push', function (e) {

    const promise = self.registration.showNotification('Astuce RGPD', {
        body: 'Pour protéger vos données arretez de mettre le nom de votre animal de compagnie en mot de passe',
        icon: 'images/icon.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {
                action: 'explore', title: 'Explore this new world',
                icon: 'images/checkmark.png'
            },
            {
                action: 'close', title: 'Close',
                icon: 'images/xmark.png'
            },
        ]
    });
    e.waitUntil(promise);
});

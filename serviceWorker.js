self.addEventListener('push', () => {
    self.registration.sendNotification('testMessage', {})
})
var push = require('web-push')

// generated
let VAPIDKeys = {
    publicKey: 'BJjQgg1oiByCeljKIr5jJxOtA2grQsUh7mINCrRnSwPT3K0dGmgdjZrwHMaiSgqpdNCQ0zQYGuO3gEZzrQzp9vs',
    privateKey: 'R_m0coRmmQ5zAkylOk3HwbDpwzKqvGsfjLYLi8McxdA'
}

push.setVapidDetails('subject', VAPIDKeys.publicKey, VAPIDKeys.privateKey)

let sub = {}; // from database

push.sendNotification(sub, 'test notification')
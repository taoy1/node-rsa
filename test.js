var NodeRSA = require('./node-rsa');

var key = new NodeRSA({b: 512});
 
var text = 'vocal sleep aunt blame jewel toy lizard day bid swim cry law south select brother silly miss federal unique scissors doctor only piece leave';

var randomSeeds = [];
var encrypted = key.encrypt(text, randomSeeds, 'base64');
console.log('random seeds: ', randomSeeds);
console.log('encrypted: ', encrypted);
var decrypted = key.decrypt(encrypted, 'utf8');
console.log('decrypted: ', decrypted);


var encrypted = key.encrypt(text, randomSeeds, 'base64');
console.log('random seeds: ', randomSeeds);
console.log('encrypted: ', encrypted);
var decrypted = key.decrypt(encrypted, 'utf8');
console.log('decrypted: ', decrypted);
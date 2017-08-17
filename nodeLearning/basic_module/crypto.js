'use strict';

const crypto = require('crypto');

// -----------------------------------------------------------------------------
/**
 * [MD5和SHA1]
 * @type {[type]}
 */
const hash = crypto.createHash('md5');

// 可任意多次调用update():
hash.update('Hello, world!');
hash.update('Hello, nodejs!');

console.log(hash.digest('hex'));// 7e1977739c748beac0c0fd14fd26a544

// update()方法默认字符串编码为UTF-8，也可以传入Buffer。
//
// 如果要计算SHA1，只需要把'md5'改成'sha1'，就可以得到SHA1的结果1f32b9c9932c02227819a4151feed43e131aca40。
//
// 还可以使用更安全的sha256和sha512。
// 
// crypto.createHash(algorithm)
// 创建并返回一个hash对象，它是一个指定算法的加密hash，用于生成hash摘要。
// 参数algorithm可选择系统上安装的OpenSSL版本所支持的算法。例如：'sha1', 'md5', 'sha256', 'sha512'等。
// 在近期发行的版本中，openssl list-message-digest-algorithms会显示这些可用的摘要算法。
//
// hash.update(data)
// 更新hash的内容为指定的data。当使用流数据时可能会多次调用该方法。
//
// hash.digest(encoding='binary')
// 计算所有传入数据的hash摘要。参数encoding（编码方式）可以为'hex', 'binary' 或者'base64'。
//
// crypto.createHmac(algorithm, key)
// 创建并返回一个hmac对象，它是一个指定算法和密钥的加密hmac。
// 参数algorithm可选择OpenSSL支持的算法 - 参见上文的createHash。参数key为hmac所使用的密钥。
//
// hmac.update(data)
// 更新hmac的内容为指定的data。当使用流数据时可能会多次调用该方法。
//
// hmac.digest(encoding='binary')
// 计算所有传入数据的hmac摘要。参数encoding（编码方式）可以为'hex', 'binary' 或者'base64'。

// -----------------------------------------------------------------------------
/**
 * [Hmac]
 * @type {[type]}
 */
const hmac = crypto.createHmac('sha256', 'secret-key');

hmac.update('Hello, world!');
hmac.update('Hello, nodejs!');

console.log(hmac.digest('hex')); // 80f7e22570...
// 只要密钥发生了变化，那么同样的输入数据也会得到不同的签名，因此，可以把Hmac理解为用随机数“增强”的哈希算法。

// -----------------------------------------------------------------------------
/**
 * [AES]
 * @type {[type]}
 */
function aesEncrypt(data, key) {
    const cipher = crypto.createCipher('aes192', key);
    var crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

function aesDecrypt(encrypted, key) {
    const decipher = crypto.createDecipher('aes192', key);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

const data = 'Hello, this is a secret message!';
const key = 'Password!';
const encrypted = aesEncrypt(data, key);
const decrypted = aesDecrypt(encrypted, key);

console.log('Plain text: ' + data);
console.log('Encrypted text: ' + encrypted);
console.log('Decrypted text: ' + decrypted);
// 注意到AES有很多不同的算法，如aes192，aes-128-ecb，aes-256-cbc等，
// AES除了密钥外还可以指定IV（Initial Vector），不同的系统只要IV不同，
// 用相同的密钥加密相同的数据得到的加密结果也是不同的。
// 加密结果通常有两种表示方法：hex和base64，这些功能Nodejs全部都支持，
// 但是在应用中要注意，如果加解密双方一方用Nodejs，另一方用Java、PHP等其它语言，
// 需要仔细测试。如果无法正确解密，要确认双方是否遵循同样的AES算法，字符串密钥和IV是否相同，
// 加密后的数据是否统一为hex或base64格式。

// -----------------------------------------------------------------------------
/**
 * [Diffie-Hellman]
 * @type {[type]}
 */
// xiaoming's keys:
let ming = crypto.createDiffieHellman(512);
let ming_keys = ming.generateKeys();

let prime = ming.getPrime();
let generator = ming.getGenerator();

console.log('Prime: ' + prime.toString('hex'));
console.log('Generator: ' + generator.toString('hex'));

// xiaohong's keys:
let hong = crypto.createDiffieHellman(prime, generator);
let hong_keys = hong.generateKeys();

// exchange and generate secret:
let ming_secret = ming.computeSecret(hong_keys);
let hong_secret = hong.computeSecret(ming_keys);

// print secret:
console.log('Secret of Xiao Ming: ' + ming_secret.toString('hex'));
console.log('Secret of Xiao Hong: ' + hong_secret.toString('hex'));


// -----------------------------------------------------------------------------
/**
 *  [证书]
 *  crypto模块也可以处理数字证书。数字证书通常用在SSL连接，也就是Web的https连接。
 *  一般情况下，https连接只需要处理服务器端的单向认证，如无特殊需求（例如自己作为Root给客户发认证证书），
 *  建议用反向代理服务器如Nginx等Web服务器去处理证书。
 */

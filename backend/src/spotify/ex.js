clientID = "d83202f09a5344d0b1286a8941856a58"
clientSecret = "c4419e0d0594455589ce7cb4253dc590"


const credentials = `${clientID}:${clientSecret}`;
const base64Credentials = Buffer.from(credentials).toString("base64");
console.log(base64Credentials);
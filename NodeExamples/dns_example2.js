//example of lookupService().
//lookupService(address, port, callback)
const dns = require('dns');
const { hostname } = require('os');

dns.lookupService('127.0.0.1', 22, (err, hostname, service) =>{
    console.log(hostname, service);
})



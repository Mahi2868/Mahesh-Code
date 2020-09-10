// example of resolve4() and reverse() function

const dns = require('dns');

dns.resolve4('www.javatpoint.com', (err, addresses) =>{
    if(err)
    throw err;
    console.log(`addresses: ${JSON.stringify(addresses)}`);
    addresses.forEach((a) =>{
        dns.reverse(a, (err, hostname) =>{
            console.log(`reverse of ${a} : ${JSON.stringify(hostname)}`);
        });
    });
});
//The Node.js DNS module contains methods to get information of given hostname.
//dns.getServers()
//dns.setServers(servers)
//dns.lookup(hostname, callback)
//dns.lookupService(address, port, callback)
//dns.resolve(hostname [, rrtype], callback)
//dns.reverse(ip, callback)

const dns = require('dns');

dns.lookup('www.javatpoint.com', (err, addresses, family) =>{
    if(err)
    console.error(err);
    console.log("addresses:", addresses);
    console.log("family:", family);
});
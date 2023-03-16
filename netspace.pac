// proxy.pac file for eduProxy
// For version: 1.5-34.el8
// Generated on host: 7805prx01

function FindProxyForURL(url, host) {
    // Normalize the URL for pattern matching
    url = url.toLowerCase();
    host = host.toLowerCase();
    
    // Send plain hostnames out directly
    if (isPlainHostName(host)) return "DIRECT";
    
    // Send requests for myself directly to myself
    if (shExpMatch(host, "eduproxy") || shExpMatch(host, "7805prx01") || shExpMatch(host, "7805prx01.services.education.vic.gov.au")) return "DIRECT";
    
    // Force requests for eduSTAR CDN through eduProxy, regardless of IP detection checks
    if (shExpMatch(host, "cdn.edustar.vic.edu.au")) return "PROXY 10.122.0.19:8080";
    
    // If the user has entered something that looks like an IP address, go direct
    reip = /^\d+\.\d+\.\d+\.\d+$/g;
    if (reip.test(host)) {
    if (isInNet(host, "10
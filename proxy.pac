function FindProxyForURL(url, host) {
    PROXY = "PROXY 192.168.1.43:8118"

    // Nutanix Internal via proxy
    if (isPlainHostName(host) || 
        shExpMatch(host, "*.nutanix.com") || 
        if (isInNet(myIpAddress(), "10.10.1.0", "255.255.255.0"))  || 
        return PROXY;
    }
    // Everything else directly!
    return "DIRECT";
}

function FindProxyForURL(url, host) {
    PROXY = "PROXY 192.168.1.43:8118"

    // Apple.com via proxy
    if (shExpMatch(host,"*.nutanix.com")) {
        return PROXY;
    }
    // Everything else directly!
    return "DIRECT";
}

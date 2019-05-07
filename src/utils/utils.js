export function trunc(string, n, useWordBoundary) {
    if (string.length <= n) {
        return string
    }
    const subString = string.substr(0, n - 1);
    return `${useWordBoundary
        ? subString.substr(0, subString.lastIndexOf(' '))
        : subString} ... `;
}

export function getCoinId(chainId) {
    switch (chainId) {
        case 1:
            return 60   // Ethereum
        case 60:
            return 6060 // Go Chain
        case 61:
            return 61   // Ethereum Classic
        case 74:
            return 818  // VeChain
        case 88:
            return 889  // TomoChain
        case 99:
            return 178  // POA Network
        case 108:
            return 1001 // ThunderCore
        case 700:
            return 700  // xDai
        case 820:
            return 820  // Callisto Network
        default:
            return 60
    }
}
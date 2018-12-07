export function trunc(string, n, useWordBoundary) {
    if (string.length <= n) {
        return string
    }
    const subString = string.substr(0, n - 1);
    return `${useWordBoundary
        ? subString.substr(0, subString.lastIndexOf(' '))
        : subString} ... `;
}

export function getNetworkName({networkId, chainId}) {
    if (networkId === 1 && chainId === 63) {
        return 'Ethereum'
    } else if (networkId === 820 && chainId === 63) {
        return 'Callisto'
    } else if (networkId === 61 && chainId === 63) {
        return 'Ethreum Classic'
    } else if (networkId === 60 && chainId === 60) {
        return 'GoChain'
    } else {
        return 'Unknown'
    }
}
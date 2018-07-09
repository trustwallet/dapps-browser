export const getTrsutBrowserVersion = () => {
    const userAgent = window.navigator.userAgent
    const match = "Trust/"
    const versionString = userAgent.substr(userAgent.search(match) + match.length, userAgent.length)
    const versionFloat = parseFloat(versionString)

    return versionFloat
}
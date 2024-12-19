const replaceSpaceWithDash = (str) => {
    return str.trim().replace(/ /g, "-").toLowerCase();
}

export default {
    replaceSpaceWithDash,
}
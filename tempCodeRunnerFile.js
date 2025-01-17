var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";
    let char = "";
    for (let index = 0; index < strs.length; index++) {
        for (let j = 0; j < strs[index].length; j++) {
            if (strs[index + 1][j] && strs[index][j] === strs[index + 1][j]) {
                char += strs[index][j];
            }
        }
    }
};
longestCommonPrefix(["flower", "flow", "flight"]);

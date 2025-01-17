const longestCommonPrefix = (strs)=>{
    if(!strs.length) return "";
    let prefix = "";
    let char = strs[0];
    for (let index = 0; index < char.length; index++) {
        for (let j = 1; j < strs.length; j++) {
            if(char[index] !== strs[j][index]) return prefix;
        }
        prefix += char[index];
    }
    return prefix;
    
}
const result =    longestCommonPrefix(["flower", "flow", "flight"])
console.log(result);

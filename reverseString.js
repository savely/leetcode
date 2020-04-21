/*
* @param {character[]} s
* @return {void} Do not return anything, modify s in-place instead.
*/
var reverseString = function (s) {
    const rs = function (i, chars) {
        if (i === 0)
            return chars;
        const char = chars.pop();
        return [char].concat(rs(i - 1, chars));
    };
    s = rs(s.length, s);
};
var reverseString2 = function (s) {
    const swapRec = function (i, k, chars) {
        if (i >= k)
            return;
        let c = chars[i];
        chars[i] = chars[k];
        chars[k] = c;
        swapRec(i + 1, k - 1, chars);
    };
    swapRec(0, s.length - 1, s);
};
let str = ['h', 'e', 'l', 'l', 'o'];
reverseString2(str);
console.log(str);
//# sourceMappingURL=reverseString.js.map
/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function (N, K) {
    if (K > Math.pow(2, N))
        throw new Error(`N=${N}, K=${K}s`);
    if (N === 1 && K === 1)
        return 0;
    if (N === 2 && K === 1)
        return 0;
    if (N === 2 && K === 2)
        return 1;
    return (K % 2 === 1) ? kthGrammar(N, (K + 1) / 2) : kthGrammar(N - 1, K / 2);
};
var kthG = function (N, K) {
    if (N === 1) {
        return K - 1;
    }
    let half = Math.pow(2, (N - 1));
    if (K <= half) {
        return kthG(N - 1, K);
    }
    else {
        return 1 ^ kthG(N - 1, K - half);
    }
};
const p = [2, 3];
console.log([kthGrammar.apply(null, p), kthG.apply(null, p)]);
//# sourceMappingURL=kthgrammar.js.map
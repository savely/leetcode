/**
 * @param {number} N
 * @return {number}
 */
var fib = function (n) {
    const cache = new Map([[0, 0], [1, 1]]);
    const fibRec = function (m) {
        if (cache.has(m))
            return cache.get(m);
        cache.set(m, fibRec(m - 1) + fibRec(m - 2));
        return cache.get(m);
    };
    return fibRec(n);
};
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const steps = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        steps[i] = steps[i - 1] + steps[i - 2];
    }
    return steps[n];
};
//# sourceMappingURL=fib.js.map
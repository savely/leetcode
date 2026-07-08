/*
#3756. Concatenate Non-Zero Digits and Multiply by Sum II

You are given a string s of length m consisting of digits. You are also given a 2D integer array queries, where queries[i] = [li, ri].

For each queries[i], extract the s[li..ri]. Then, perform the following:

    Form a new integer x by concatenating all the non-zero digits from the substring in their original order. If there are no non-zero digits, x = 0.
    Let sum be the sum of digits in x. The answer is x * sum.

Return an array of integers answer where answer[i] is the answer to the ith query.

Since the answers may be very large, return them modulo 109 + 7.

 

Example 1:

Input: s = "10203004", queries = [[0,7],[1,3],[4,6]]

Output: [12340, 4, 9]

Explanation:

    s[0..7] = "10203004"
        x = 1234
        sum = 1 + 2 + 3 + 4 = 10
        Therefore, answer is 1234 * 10 = 12340.
    s[1..3] = "020"
        x = 2
        sum = 2
        Therefore, the answer is 2 * 2 = 4.
    s[4..6] = "300"
        x = 3
        sum = 3
        Therefore, the answer is 3 * 3 = 9.

Example 2:

Input: s = "1000", queries = [[0,3],[1,1]]

Output: [1, 0]

Explanation:

    s[0..3] = "1000"
        x = 1
        sum = 1
        Therefore, the answer is 1 * 1 = 1.
    s[1..1] = "0"
        x = 0
        sum = 0
        Therefore, the answer is 0 * 0 = 0.

Example 3:

Input: s = "9876543210", queries = [[0,9]]

Output: [444444137]

Explanation:

    s[0..9] = "9876543210"
        x = 987654321
        sum = 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 45
        Therefore, the answer is 987654321 * 45 = 44444444445.
        We return 44444444445 modulo (109 + 7) = 444444137.

 

Constraints:

    1 <= m == s.length <= 105
    s consists of digits only.
    1 <= queries.length <= 105
    queries[i] = [li, ri]
    0 <= li <= ri < m

*/

var sumAndMultiply = function(s, queries) {
    const n = s.length;
    const MOD = 1000000007n;
    
    // Prefix arrays (1-indexed to easily handle l=0)
    const prefNum = new Array(n + 1).fill(0n);
    const nzCount = new Array(n + 1).fill(0);
    const prefSum = new Array(n + 1).fill(0n);
    
    // Precompute powers of 10 modulo 10^9 + 7
    const pow10 = new Array(n + 1).fill(1n);
    for (let i = 1; i <= n; i++) {
        pow10[i] = (pow10[i - 1] * 10n) % MOD;
    }

    let currentNum = 0n;
    let currentCount = 0;
    let currentSum = 0n;

    // Build the prefix arrays
    for (let i = 0; i < n; i++) {
        if (s[i] !== '0') {
            const d = BigInt(s[i]);
            currentNum = (currentNum * 10n + d) % MOD;
            currentCount++;
            currentSum += d;
        }
        prefNum[i + 1] = currentNum;
        nzCount[i + 1] = currentCount;
        prefSum[i + 1] = currentSum;
    }

    // Process queries in O(1) time each
    return queries.map(([l, r]) => {
        const k = nzCount[r + 1] - nzCount[l];
        
        // If there are no non-zero digits in the range, the answer is 0
        if (k === 0) return 0;

        const sumX = prefSum[r + 1] - prefSum[l];
        
        // Extract the number x using prefix logic: pref[r+1] - (pref[l] * 10^k)
        let x = (prefNum[r + 1] - (prefNum[l] * pow10[k]) % MOD) % MOD;
        
        // Handle negative results from modulo subtraction
        if (x < 0n) {
            x += MOD;
        }

        return Number((x * sumX) % MOD);
    });
};
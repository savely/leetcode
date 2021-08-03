/*
#273. Integer to English Words

Convert a non-negative integer num to its English words representation.

 

Example 1:

Input: num = 123
Output: "One Hundred Twenty Three"
Example 2:

Input: num = 12345
Output: "Twelve Thousand Three Hundred Forty Five"
Example 3:

Input: num = 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
Example 4:

Input: num = 1234567891
Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"
 

Constraints:

0 <= num <= 231 - 1
*/

/**
 * @param {number} num
 * @return {string}
 */
 var numberToWords = function(num) {

    if(num === 0) return 'Zero';
    
    const ones = {1:"One",2:"Two",3:"Three",4:"Four",5:"Five",6:"Six",7:"Seven",8:"Eight",9:"Nine"};
    const tens = {1:"Ten",2:"Twenty",3:"Thirty",4:"Forty",5:"Fifty",6:"Sixty",7:"Seventy",8:"Eighty",9:"Ninety"};
    const teens = {11:"Eleven",12: "Twelve",13:"Thirteen",14:"Fourteen",15:"Fifteen",16:"Sixteen",17:"Seventeen",18:"Eighteen",19:"Nineteen"};
    const thousands = {1000:"Thousand", 1000000:"Million",1000000000:"Billion"};

    const fromTriple = ([h,t,o]) => {

        let ans = [];

        const teen = +t * 10 + (+o);

        if(h > 0) ans.push(`${ones[h]} Hundred`);

        if(teens[teen] !== undefined) {

            ans.push(teens[teen]);

            return ans.join(' ');
        }

        if(t > 0) ans.push(tens[t]);

        if(o > 0) ans.push(ones[o]);

        return ans.join(' ');
    };


    let t = 1, ans = [];

    while(num > 0) {

        const triple = (num % 1000).toString().split('').reverse(), s = fromTriple([triple[2] || 0, triple[1] || 0, triple[0] || 0]);

        if(s.length) ans.push(t > 1 ? `${s} ${thousands[t]}` : s);

        t *= 1000;

        num = (num / 1000) >> 0;
    }

    return ans.reverse().join(' ');
};
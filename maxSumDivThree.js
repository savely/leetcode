/*
#1262. Greatest Sum Divisible by Three

Given an array nums of integers, we need to find the maximum possible sum of elements of the array such that it is divisible by three.

 

Example 1:

Input: nums = [3,6,5,1,8]
Output: 18
Explanation: Pick numbers 3, 6, 1 and 8 their sum is 18 (maximum sum divisible by 3).
Example 2:

Input: nums = [4]
Output: 0
Explanation: Since 4 is not divisible by 3, do not pick any number.
Example 3:

Input: nums = [1,2,3,4,4]
Output: 12
Explanation: Pick numbers 1, 3, 4 and 4 their sum is 12 (maximum sum divisible by 3).
 

Constraints:

1 <= nums.length <= 4 * 10^4
1 <= nums[i] <= 10^4
*/

var maxSumDivThree = function(nums) {
    
    let sum = 0, fst1 = Infinity, snd1 = Infinity, fst2 = Infinity, snd2 = Infinity;

    for(let i = 0; i < nums.length; i++) {

        let el = nums[i];

        sum += el;

        if(el % 3 === 1) {
            if(el < fst1) {
                snd1 = fst1;
                fst1 = el;
            } else if(el < snd1) {
                snd1 = el;
            }
        }

        if(el % 3 === 2) {
            if(el < fst2) {
                snd2 = fst2;
                fst2 = el;
            } else if(el < snd2) {
                snd2= el;
            }
        }        
    }
    
    if(sum % 3 === 0) return sum;

    if(sum % 3 === 1) {
        return Math.max(sum - fst1, sum - fst2 - snd2, 0);
    } 

    return Math.max(sum - fst2, sum - fst1 - snd1, 0);
};

 let  nums = [3559,2808,2566,7157,1653,1310,380,2669,3775,7709,2790,8738,2784,4730,3815,2537,9112,6404,8823,1415,5354,3631,2743,8824,9151,3747,4656,4323,7978,4258,113,2285,1775,2193,1420,507,5845,7734,1611,8875,6521,5121,8195,8534,1048,5199,8330,2519,6739,7260,8986,2376,4384,4693,1420,1506,7898,2124,1275,975,9187,9529,1295,6963,5131,8508,2830,4929,1504,8405,5999,9708,5884,3157,7720,2513,3600,7779,1771,3950,4583,1286,7799,6982,5027,2790,3228,1284,9187,5564,4145,1666,6451,936,8944,9113,8320,1293,9698,8511,5986,1524,1173,6119,4729,6846,1186,9655,4448,6167,9227,3720,4673,331,6353,2876,7096,7610,4311,9213,5514,6242,3822,252,1615,8329,2506,2683,3108,8031,4734,5032,9443,3226,1284,3795,8053,8654,3269,2074,474,2047,155,5408,2553,3102,1539,327,3666,345,6789,6575,4711,171,7922,6242,5979,9484,7015,3816,7646,6269,84,6850,6295,4306,4559,3030,4873,5184,9981,9234,4358,5964,7366,882,7318,8909,589,5349,2423,2888,2744,2072,8429,5970,3565,8801,2884,8102,9920,1195,1918,217,6766,3634,3631,4158,3738,5875,7310,871,2410,1907,1378,7564,1596,3302,3145,864,9894,2305,2315,7062,1716,9229,1816,6181,7349,1281,2008,5038,7687,5794,8241,1546,861,7283,1709,9352,619,9437,6192,3817,111,6780,5098,9304,1436,1386,7778,2839,7757,3136,1596,7909,7401,246,2467,5993,2309,129,7012,2278,7858,374,3662,7597,8875,4195,7550,3914,6430,2168,1097,2524,8200,787,7197,5838,8095,2633,3371,9432,9609,2776,3623,7786,5212,5982,2326,3788,2548,1855,3414,1221,9679,5094,4187,5234,3758,4219,4991,4581,132,6471,5811,5393,5592,4084,5214,441,8304,8911,9645,4835,9567,7458,6528,2672,77,2171,2375,9115,7597,2437,1115,1769,8526,1237,8702,7393,6362,84,1120,2715,978,9319,839,1312,9361,5481,9393,8831,2393,9397,3749,2541,7275,6412,3827,686,3316,2269,3119,4666,2877,9674,502,9294,1194,6675,6024,511,7257,7246,3011,8973,9123,6925,247,5474,7712,7993,9691,3199,5156,1220,4649,1254,4520,766,5391,3874,4608,9003,4145,5480,553,5844,4482,4510,8790,240,4606,6964,893,7937,3811,4538,9494,8778,9726,911,3300,4872,7345,5517,9621,9515,695,1235,1943,4250,2203,7469,1572,92,1125,5518,1528,396,2895,3664,7990,2116,7607,4607,9355,8824,6117,1879,1487,9023,7982,43,7636,8957,7010,553,6709,6352,3368,2816,9127,4581,2606,5300,5937,1316,4327,833,5389,3910,1335,4973,3942,9899,3925,9494,6418,9080,6853,8757,5779,62,308,5057,9016,4080,7106,3937,1013,5093,5117,3706,9150,6538,6262,8328,1948,8535,5019,896,6470,1075,5921,4791,3318,2733,2709,49,5507,4707,6597,9153,3820,6693,6043,3220,8408,6816,3762,8160,3528,3191,4869,447,2146,5737,3139,6363,4847,3275,1016,2495,48,1233,9478,847,3883,5978,1307,6257,5496,5213,8860,8273,5359,1082,3541,9413,9302,2007,6164,1546,541,8408,36,4058,6951,3298,4558,2823,6701,5911,3513,9050,755,3900,1239,145,9708,5611,5255,829,6430,8182,7955,5983,4044,5642,1157,1877,2028,1821,198,8806,8628,9944,9652,3422,4908,8452,4884,647,3606,820,2554,2216,1383,3457,4564,3220,9267,1630,4026,3538,9286,4948,9122,4541,822,1755,3101,1472,4773,6085,9931,1944,9812,5557,6846,9750,5398,6819,3663,6906,877,7444,7850,8756,9021,2986,1652,9457,1053,2209,9892,9657,4719,4210,5808,8289,8510,3261,8373,6770,1370,1603,2177,1305,4980,4247,3203,5376,8011,432,7479,4908,4830,4897,6672,2847,5415,755,786,7260,5839,7789,4053,4074,9314,1796,435,6076,6591,8309,6522,9791,7568,4642,1389,2685,1087,2449,7394,2826,2477,6105,5859,8050,3962,174,9069,7065,3989,5812,9491,2826,8108,7603,3903,9899,254,9975,6643,3400,3552,7623,8041,3881,6063,6856,8118,3564,4396,1103,2731,2009,4412,6683,1514,2302,5907,3587,4829,9165,6881,9627,2005,5459,8003,1821,2840,1054,2694,8811,2343,1963,5185,1472,749,2215,2336,8266,5885,596,6307,4418,8102,9622,3715,3554,2762,4694,2314,8732,5716,9469,9913,7947,5690,4333,5996,4960,6271,6558,1809,5540,7550,6688,5179,4761,7440,4322,5636,5839,5758,6953,6218,3360,9514,2054,482,4481,4057,8105,9431,6899,9391,7950,2658,7107,2390,7740,7919,6694,4200,4293,1538,3597,4080,1085,9112,6102,8419,3771,6332,3963,309,2117,4224,3166,692,2163,7940,5873,3233,4865,4552,6383,144,7476,1111,1361,79,3597,8252,4154,9677,3370,427,3545,8340,721,9811,4997,7304,6094,1867,606,1192,113,1150,1621,3144,8538,2105,2590,8381,4478,4204,4183,5524,6902,4156,6739,5156,9457,7517,3532,2784,1991,9378,8086,9433,6630,9031,1221,6432,6023,6162,2266,4278,7626,2927,114,9514,1929,4768,8811,1751,2322,141,6042,7439,1914,6690,7737,4718,6079,3228,3541,2275,6260,6558,4655,6745,3606,2055,4093,9119,4175,2013,9,4685,1550,8040,5014,541,871,8725,4488,4011,843,9633,2644,9251,8547,6145,2207,6544,3313,2430,8876,6970,6064,343,1925,5530,520,6086,8934,9305,4946,1745,3319,222,3427,8255,4183,9835,8906,6994,7131,2357,5816,5322,6562,1567,9817,4267,5384,3008,8777,4483,3213,9009,4949,6388,7579,2031,1716,8933,4673,7217,3976,2373,8478,5493,5961,9444,112,1533,9211,509,1846,1597,2553,236,8887,4342,366,6764,7269,7528,1651,7801,137,2221,9330,7778,5000,5015,7941,3552,336,5582,5254,2657,1802,6275,2249,3909,3153,8351,7795,8565,7571,7891,1922,7277,9690,7194,1488,6566,1843,1814,7991,8869,8121,1317,5393,2795,381,3356,340,3188,2511];

 nums = [2,6,2,2,7];

 console.log(maxSumDivThree(nums));

/*
  #875. Koko Eating Bananas

  Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. 
  The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. 
If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.
*/


/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
 var minEatingSpeed = function(piles, h) {
    
    let maxHours = 0, minHours = piles.length, minBananas = 1, maxBananas = 0

    for(let i = 0; i < piles.length; i++) {
        maxHours += piles[i]
        maxBananas = Math.max(maxBananas, piles[i])
    }

    if(h === minHours) return maxBananas

    if(h === maxHours) return minBananas

    while(maxBananas > minBananas) {

        const mid = minBananas + Math.floor(( maxBananas - minBananas) / 2 )


        let hours = 0

        for(let i = 0; i < piles.length; i++) {
            hours += Math.ceil(piles[i] / mid)
        }

        if(maxBananas - minBananas === 1)  {
            return maxBananas * hours >= h ? maxBananas : minBananas
        }


        if(hours === h) return mid;

        if(hours < h) maxBananas = mid - 1;

        if(hours > h) minBananas = mid + 1;        
    }

    return minBananas
};

let piles = [3,6,7,11], h = 8;

//piles =[30,11,23,4,20]
//h = 5

//piles = [30,11,23,4,20]
//h = 6
//piles = [312884470]
//h = 312884469
//h = 968709470
piles = [1000000000]
h = 2

console.log(minEatingSpeed(piles, h))
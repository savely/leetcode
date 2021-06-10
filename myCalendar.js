/*
#729. My Calendar I

mplement a MyCalendar class to store your events. A new event can be added if adding the event will not cause a double booking.

Your class will have the method, book(int start, int end). Formally, this represents a booking on the half open interval [start, end), the range of real numbers x such that start <= x < end.

A double booking happens when two events have some non-empty intersection (ie., there is some time that is common to both events.)

For each call to the method MyCalendar.book, return true if the event can be added to the calendar successfully without causing a double booking. Otherwise, return false and do not add the event to the calendar.
Your class will be called like this: MyCalendar cal = new MyCalendar(); MyCalendar.book(start, end)

Example 1:

MyCalendar();
MyCalendar.book(10, 20); // returns true
MyCalendar.book(15, 25); // returns false
MyCalendar.book(20, 30); // returns true
Explanation: 
The first event can be booked.  The second can't because time 15 is already booked by another event.
The third event can be booked, as the first event takes every time less than 20, but not including 20.

 

Note:

    The number of calls to MyCalendar.book per test case will be at most 1000.
    In calls to MyCalendar.book(start, end), start and end are integers in the range [0, 10^9].

*/

var MyCalendar = function() {
    
    this.bookings = [];
};

MyCalendar.prototype.closest = function (time, before = true, from = 0) {
            
    let lo = from, hi = this.bookings.length - 1;
            
    while (hi >= lo){
                
        const mid = Math.floor((hi + lo) / 2), [start, end] = this.bookings[mid];

        if(before && end === time 
           || (!before && start === time)) return mid;
                
        if(start <= time && time <= end)   return -1; //already booked
                
        if(time < start) {
            hi = mid -1;
        } else {
            lo = mid + 1;
        }
    }
    return before ? hi : (lo < this.bookings.length ? lo :-1);   
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    
    if(!this.bookings.length 
       || this.bookings[this.bookings.length -1][1] < start) {
        this.bookings.push([start,end]);
        return true;
    }
     
    if( this.bookings[this.bookings.length -1][1] === start) {
        this.bookings[this.bookings.length -1][1] = end;
        return true;
    }
    
    if(end < this.bookings[0][0]) {
        this.bookings.unshift([start, end])
        return true;
    }

    if(this.bookings[0][0]  === end) {
        this.bookings[0][0] = start;
        return true;
    }
    
    const prev = this.closest(start);
    
    if(prev < 0) return false;
    
    const succ = this.closest(end, false, prev);
    
    if(succ < 0 || succ - prev !== 1) return false; // end are inside some interval or there are intervals between

    const [pStart, pEnd] = this.bookings[prev], [sStart, sEnd] = this.bookings[succ];

    if(pEnd === start && sStart === end) {
        this.bookings.splice(prev, 2, [pStart, sEnd]);
    } else if(pEnd === start) {
        this.bookings[prev] = [pStart, end];
    } else if(sStart === end) {
        this.bookings[succ] =  [start, sEnd];
    } else {
        this.bookings.splice(succ, 0, [start, end])
    }

    return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */

const cal = new MyCalendar();
/*cal.book(10,20);
cal.book(15,15);
cal.book(20,30);
//cal.book(0,5);
cal.book(5,10);
*/

[[10,20],[25,30],[40,45], [50,55], [40, 46]].map(([s,e]) => cal.book(s,e))

console.table(cal.bookings);
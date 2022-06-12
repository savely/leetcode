/*
#2299. Strong Password Checker II

A password is said to be strong if it satisfies all the following criteria:

    It has at least 8 characters.
    It contains at least one lowercase letter.
    It contains at least one uppercase letter.
    It contains at least one digit.
    It contains at least one special character. The special characters are the characters in the following string: "!@#$%^&*()-+".
    It does not contain 2 of the same character in adjacent positions (i.e., "aab" violates this condition, but "aba" does not).

Given a string password, return true if it is a strong password. Otherwise, return false.

*/

var strongPasswordCheckerII = function(password) {
    
    if(password.length < 8) return false;
    
    let hasLower = false, hasUpper = false, hasSpecial = false, hasDigit = false;
    
    for(let i = 0; i < password.length; i++) {
        
        if(i > 0 && password[i] === password[i - 1]) return false;
        
        hasLower |= "abcdefghijklmnopqrstuvwxyz".indexOf(password[i]) > -1;
        hasUpper |= "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(password[i]) > -1;
        hasSpecial |= "!@#$%^&*()-+".indexOf(password[i]) > -1;
        hasDigit |= "1234567890".indexOf(password[i]) > -1;
    }
    
    return hasLower && hasUpper && hasSpecial && hasDigit;
};

let password = "12-&advsBBA";

console.log(strongPasswordCheckerII(password));
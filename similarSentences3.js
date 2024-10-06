/*
#1813. Sentence Similarity III

A sentence is a list of words that are separated by a single space with no leading or trailing spaces. 
For example, "Hello World", "HELLO", "hello world hello world" are all sentences. Words consist of only uppercase and lowercase English letters.

Two sentences sentence1 and sentence2 are similar if it is possible to insert an arbitrary sentence (possibly empty) inside one of these sentences 
such that the two sentences become equal.
 For example, sentence1 = "Hello my name is Jane" and sentence2 = "Hello Jane" can be made equal by inserting 
 "my name is" between "Hello" and "Jane" in sentence2.

Given two sentences sentence1 and sentence2, return true if sentence1 and sentence2 are similar. Otherwise, return false.

 

Example 1:

Input: sentence1 = "My name is Haley", sentence2 = "My Haley"
Output: true
Explanation: sentence2 can be turned to sentence1 by inserting "name is" between "My" and "Haley".
Example 2:

Input: sentence1 = "of", sentence2 = "A lot of words"
Output: false
Explanation: No single sentence can be inserted inside one of the sentences to make it equal to the other.
Example 3:

Input: sentence1 = "Eating right now", sentence2 = "Eating"
Output: true
Explanation: sentence2 can be turned to sentence1 by inserting "right now" at the end of the sentence.
Example 4:

Input: sentence1 = "Luky", sentence2 = "Lucccky"
Output: false
 

Constraints:

1 <= sentence1.length, sentence2.length <= 100
sentence1 and sentence2 consist of lowercase and uppercase English letters and spaces.
The words in sentence1 and sentence2 are separated by a single space.
*/

/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
 var areSentencesSimilar = function(sentence1, sentence2) {

    if(sentence2.length > sentence1.length) {
        [sentence1, sentence2] = [sentence2, sentence1];
    }

    words1 = sentence1.split(" "), words2 = sentence2.split(" ");

    let prefix = 0, i = 0;

    while(i < words2.length && words1[i] === words2[i]) {
        prefix++;
        i++;
    }

    const diff = words1.length - words2.length
    let suffix = 0; 
    i = words1.length - 1;

    while (i >= 0 && (i - diff >= prefix) && words1[i] === words2[i - diff]) {
        suffix++;
        i--;
    }

    return prefix === words2.length || suffix === words2.length || prefix + suffix === words2.length;
};


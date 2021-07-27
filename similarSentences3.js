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

   let i = 0, prefix = 0;

   while(i < sentence2.length && sentence2[i] === sentence1[i]) {
       if(sentence2[i] === " ")  prefix = i;   

       if(i === sentence2.length - 1 && (i === sentence1.length - 1 || sentence1[i + 1] === " "))  {
           prefix = i + 1;
       }
       i++;
   };

   if(prefix ===  sentence2.length) true;

   i = sentence1.length - 1;

   let diff = sentence1.length - sentence2.length, suffix = 0;

   while(i >= 0 && sentence2[i - diff] === sentence1[i]) {

    if(sentence1[i] === " ")  suffix = sentence2.length - (i - diff); 

    if(i - diff === 0 && (i === 0 || sentence1[i - 1] === " "))  {
        suffix = sentence2.length;
        break;
    }
    i--;
   };

   return suffix === sentence2.length || suffix + prefix === sentence2.length;
};
/*

Censor Words from List

Create a function that takes a string txt and censors any word from a given list lst. The text removed must be replaced by the given character char.

Examples
censor_string("Today is a Wednesday!", ["Today", "a"], "-") ➞ "----- is - Wednesday!"

censor_string("The cow jumped over the moon.", ["cow", "over"], "*"), "The *** jumped **** the moon.")

censor_string("Why did the chicken cross the road?", ["Did", "chicken", "road"], "*") ➞ "Why *** the ******* cross the ****?"

*/






//#############################################################
//#  SOLUTION 1 
//#############################################################


def censor_string(txt, lst, character):
    for word in lst:
    txt = txt.replace(word, character * len(word))
return txt



//#############################################################
//#  SOLUTION 2  
//#############################################################


def censor_string(txt, lst, char):
    return ' '.join(char * len(word) if word in lst
        else word
        for word in txt.split())




//#############################################################
//#  SOLUTION 3
//#############################################################


def censor_string(txt, lst, char):
    for i in lst:
    txt = txt.replace(i, char * len(i))
return txt



//#############################################################
//#  SOLUTION 4
//#############################################################


def censor_string(txt, lst, char):
    words, res = txt.split(), []
for word in words:
    if word in lst: res.append(char * len(word))
else :res.append(word)
return " ".join(res)
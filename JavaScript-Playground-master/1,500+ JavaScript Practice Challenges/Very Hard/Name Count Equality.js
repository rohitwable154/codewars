/*  


Name Count Equality

Create a function that counts the embedded names in the string and determines the equality. The names are embedded in a string of mixed special symbols and characters. The names to be counted to are adjoined with the ampersand symbol & and as the second parameter. See the following examples for more details.

Examples
equalCount("Peter!@#$Paul&*#Peter!--@|#$Paul#$Peter@|Paul$%^^Peter++Paul%$%^Peter++Paul#$#$#Peter@|Paul", "Peter&Paul")
➞ {"Peter":6, "Paul": 6, "equality": true}

equalCount("Elliot!@#$Sam!--@|#$Elliot@|Sam++Elliot$%^Elliot@|Sam!@#Elliot!@#$Sam!--@|#$Elliot", "Sam&Elliot")
➞ {"Sam": 4, "Elliot": 6, "equality": false, "difference": 2}
// "difference" key is added to the object if count is not equal.

equalCount("Tim!@#$Kit&&*#Tim!--@|#$Kit#$%Tim@|Kit$%^^Tim++Kit%$%^Tim++Kit#$#$#Tim@|Kit", "Ken&Tom")
➞ {"Ken": 0, "Tom": 0, "equality": true}


Notes
Make sure to return the result as an object with the corresponding keys seen in the above examples and the difference key when needed.

*/




//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


function equalCount(str, names) {
    let [n1, n2] = names.split('&')
    let c1 = [...str.matchAll(n1)].length
    let c2 = [...str.matchAll(n2)].length
    let equality = c1 === c2
    let result = {
        [n1]: c1,
        [n2]: c2,
        equality
    }
    if (!equality) result.difference = Math.abs(c1 - c2)
    return result
}





//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################



function equalCount(str, names) {
    const [name1, name2] = names.split("&");
    const count1 = str.split(name1).length - 1;
    const count2 = str.split(name2).length - 1;

    if (count1 === count2)
        return {
            [name1]: count1,
            [name2]: count2,
            "equality": true
        };
    else
        return {
            [name1]: count1,
            [name2]: count2,
            "equality": false,
            "difference": Math.abs(count1 - count2)
        };
}



//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################



function equalCount(str, names) {
    const theNames = names.split('&');


    let arr = str.match(/\w{1,}/g).filter(el =>
        el == theNames[0] || el == theNames[1]);

    (arr.length == 0) ? arr = 0: arr.sort((a, b) => {
        if (a == theNames[0]) return -1;
        if (a == theNames[1]) return 1;

    });




    const obj = (arr == 0) ?
        theNames.reduce((obj, el) => { obj[el] = obj[el] + 1 || 0; return obj }, {}) :
        arr.reduce((obj, el) => { obj[el] = obj[el] + 1 || 1; return obj }, {});



    const check = Object.values(obj).reduce((sum, el) => sum -= el);

    if (check == 0) {

        obj.equality = true;
    } else {

        obj.equality = false;
        obj.difference = Math.abs(check);
    }

    return obj;
}
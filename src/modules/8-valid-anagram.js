
export default function ValidAnagram() {
    console.log("===========bai08========");
    /**
  * @param {string} s
  * @return {boolean}
  */
    var isValidAnagram = function (s, t) {

        let result = false

        let arrS = s.split("").sort((a, b) => a.localeCompare(b))
        // console.log({ arrS }, JSON.stringify(arrS));

        let arrT = t.split("").sort((a, b) => a.localeCompare(b))
        // console.log({ arrT });

        if (JSON.stringify(arrS) === JSON.stringify(arrT)) {
            result = true
        }

        return result
    };

    console.log('bai08-case1 : "anagram & nagaram" -> ', isValidAnagram("anagram", "nagaram"))  //output: true
    console.log('bai08-case2 : "rat & car" -> ', isValidAnagram("rat", "car"))  //output: false

    console.log("===========END========");
}
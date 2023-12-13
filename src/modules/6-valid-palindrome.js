export default function ValidPalindrome() {
    console.log("===========bai06========");
    /**
  * @param {string} s
  * @return {boolean}
  */
    var isPalindrome = function (s) {
        s = s.split(' ').map(e => e.replace(',', '')).map(e => e.replace(':', ''));
        let result = '', isFinalCheck = false;
        for (let i = 0; i < s.length; i++) {
            result += s[i]
        }

        result = result.toLowerCase()
        // console.log({ result });
        for (let i = 0; i < result.length; i++) {
            console.log('i', result[i]);
            for (let j = result.length-1; j > 0; j--) {
                console.log('j', result[j]);
                // console.log('xxx', result[i], result[j]);
                if (result[i] == result[j]) {
                    isFinalCheck = true
                }
            }
        }

        return isFinalCheck
    };

    // console.log('bai06-case1 : "A man, a plan, a canal: Panama" -> ', isPalindrome("A man, a plan, a canal: Panama"))  //output: true
    console.log('bai06-case2 : "race a car" -> ', isPalindrome("race a car"))  //output: false
    // console.log('bai06-case2 : " " -> ', isPalindrome(" "))  //output: true

    console.log("===========END========");
}
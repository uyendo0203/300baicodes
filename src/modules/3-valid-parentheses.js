export default function ValidParentheses(){
    console.log("===========Bai03========");


    /**
     * @name : Valid Parentheses
     * @param {string} s
     * @return {boolean}
     */
    var isValid = function (s) {
        let result = [];
        for (let i = 0; i < s.length; i++) {
            if(s[i] == "("){
                result.push(")")
            }else if(s[i] == "["){
                result.push("]")
            }else if(s[i] == "{"){
                result.push("}")
            }else if (result.pop() != s.charAt(i)){
                return false;
            }else{
                return true
            }
        }
        return result
    };

    console.log('bai03-case1 : () -> ', isValid("()")) //Output: true
    console.log('bai03-case2 : ()[]{} -> ', isValid("()[]{}")) //Output: true
    console.log('bai03-case3 : (] -> ', isValid("(]")) //Output: false
    
    console.log("===========END========");
}
export default function OneOther(){
console.log("===========input: AAAABBBCDDDA; output: 4A3B1C3D1A========");
const bai0 = () => {
    let str = 'AAAABBBCDDDA'
    let count = 1;
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            count++;
        } else {
            result += (count++) + str[i]
            count = 1;
        }
    }
    console.log({ result });
}
// bai0()

console.log("===========END========");
}
export default function BestTimeToBuyAndSellStock() {
    console.log("===========bai05========");
    /**
     * @name : Valid Parentheses
     * @param {string} s
     * @return {boolean}
     */
    var maxProfit = function (prices) {
        let max = 0;
        for (let i = 0; i < prices.length; i++) {
            for (let j = i + 1; j < prices.length; j++) {
                if ((prices[j] - prices[i]) > max) {
                    max = prices[j] - prices[i]
                }
            }
        }
        return max
    };

    console.log('bai05-case1 : [7,1,5,3,6,4] -> ', maxProfit([7, 1, 5, 3, 6, 4]))  //output: 5
    console.log('bai05-case2 : [7,6,4,3,1] -> ', maxProfit([7, 6, 4, 3, 1]))  //output: 0

    console.log("===========END========");
}
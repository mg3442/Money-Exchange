
module.exports = function makeExchange(currency) {
    if(currency>10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if(currency==0) return {};

    var res={};
    var sum=currency;

    if(currency>0 || currency <=10000){
       if(sum>=50){
           res.H = parseInt(sum/50);
           sum=sum-res.H * 50;

       }
       if(sum>=25){
           res.Q = parseInt(sum/25);
           sum=sum-res.Q*25;

       }
       if(sum>=10){
           res.D = parseInt(sum/10);
           sum = sum-res.D*10;

       }
       if(sum>=5){
           res.N = parseInt(sum/5);
           sum = sum-res.N*5;

       }
       if(sum>=1){
           res.P = parseInt(sum);
       }
       return res;
    }
}

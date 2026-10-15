let bonus : number = 1; 
let money : number = 0 ;

for (let i=1 ; i<=30 ; i++){
    money = i*bonus;
    console.log("วันที่",i,"เก็บ",bonus,"บาท",money);
}
console.log("ขอแสดงความยินดี คุณเก็บเงินได้ครบ 30 วัน ได้รับเงิน", money , "บาท");
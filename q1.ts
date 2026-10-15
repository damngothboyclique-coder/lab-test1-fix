class Major {
    age : number ;
    disc : boolean;
    constructor (age: number, disc: boolean){
        this.age = age;
        this.disc = disc;
    }
    show(): void {
        let price : number = 0;
        if(this.age<12){
            price = 60;
        } else if (this.age >= 12 && this.age <=59){
            price = 120;
        } else{
            price = 100;
        }
        let discount : number ;
        if (this.disc){
            discount = 10;
        } else{
            discount = 0;
        }
    }
    let netprice = price - (price * discount /100);
    console.log(`คุณอายุ ${this.age} ปี`);
    console.log(`ราคาตั๋วปกติ ${this.price} บาท`);
    console.log(`คุณได้รับส่วนลด ${this.discount}% `);
    console.log(`ราคาสุทธิ${this.netprice} บาท`);
}
let person 1 = new Major(10,true);
let person 1 = new Major(20, false);
let person 1 = new Major(65,true);

person1.slow();
person2.slow();
person3.slow();
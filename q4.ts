let fitness: {name: string,age: number , disc : boolean}[]= [
    { name : "อนันต์",age: 25,disc:false},
    { name : "เจนจิรา",age: 35,disc:true},
    { name : "ชาคริต",age: 25,disc:true},
    { name : "รุ่งโรจน์",age: 25,disc:false},
    { name : "สามารถ",age: 25,disc:false},
]
function showinfo(tuple : {nane:string, age: number , disc: booleand}){
    let status:string = tuple.disc ? "ยังไม่ชำระค่าสมาชิก": "ชำระเงินแล้ว";
    console.log(`คุณ ${tuple.name }อายุ ${tuple.age}ปี ${status}`);
}
let person1 = fitness[0];
let person2 = fitness[1];
let person3 = fitness[2];
let person4 = fitness[3];
let person5 = fitness[4];

showinfo(person1);
showinfo(person2);
showinfo(person3);
showinfo(person4);
showinfo(person5);
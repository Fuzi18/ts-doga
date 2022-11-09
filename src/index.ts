let title=/[a-zA-Z ,  ]{1}/;
let year=/[0-9]{0,2022}/;
let price=/[1-9]/;
let height=/[0-9]{10}/;


interface Artwork{
    title:string;
    year:Date;
    price:number;
}

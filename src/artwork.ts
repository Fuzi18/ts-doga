

class Statue implements Artwork{
    title: string;
    year: Date;
    price:number;
    #height:number;
    constructor(title:string,year:Date, price:number, height:number){
        this.title=title;
        this.year=year;
        this.price=price;
        this.#height=height;
    }
   
        
}
document.addEventListener('DOMContentLoaded',()=>{

    let nev=(document.getElementById("nev") as HTMLInputElement).value;
    let ev=((document.getElementById("ev") as HTMLInputElement).value);
    let ar=parseInt((document.getElementById("ar") as HTMLInputElement).value);
    let magassag=parseInt((document.getElementById("magassag") as HTMLInputElement).value);

    if(nev.length<1){
        alert("Nem megfelelő a megadott név!")
    }else if(ev.length<1){
        alert("Nem jó a megadott év!")
    }else if(ar<1){
        alert("Nem jó a megadott ár!")
    }else if(magassag<10){
        alert("Nem megfelelő a megadott magasság!")
    }

    
})


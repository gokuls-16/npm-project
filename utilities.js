import xhr from "xhr2";
const add=(a,b)=>{
    return a+b;
}
const sub=(a,b)=>{
    return a-b;
}
const getAllCountries = async => {
    const req = new xhr ();
    req.open("GET", "https://restcountries.com/v3.1/all");
    req.send();

    req.onload=function (){
        const data= JSON.parse(req.reponseText);
        console.log(data);
    };
};


export {add,sub,getAllCountries};
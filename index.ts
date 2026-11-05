const Bmibtn = document.getElementById("bmiBtn");
const ageBtn = document.getElementById("ageBtn");
const currencyBtn = document.getElementById("currencyBtn");
const discountBtn = document.getElementById("discountBtn");
const result = document.getElementById("result");
const calculateBtn = document.getElementById("calculateBtn");
const label1 = document.getElementById("label1")
const label2 = document.getElementById("label2")
const input1 = document.getElementById("input1") as HTMLInputElement;
const input2 = document.getElementById("input2") as HTMLInputElement;


// BMI calculator 
function BMIcalc(
    weight:number,height :number, 
):number{
    if (weight <= 0 || height <= 0){
        throw new Error("Invalid weight or height");
    }
        const BMI = weight / (height *height);
    return BMI;
}

Bmibtn?.addEventListener("click",()=>{
    if (label1){
        label1.textContent ="Height (cm)";
    } 
    if (label2){
        label2.textContent ="Weight (Kg)";
    } 
    input1.value ="";
    input2.value ="";

    if(result){
        result.textContent ="Your BMI result will appear here.";
    }
});
calculateBtn?.addEventListener("click",() =>{
    const height = Number(input1.value)/100;
    const wieght =Number (input2.value);

    try {
        const BMI = BMIcalc(wieght,height);
        if (result){
            result.textContent =`Your BMI is ${BMI.toFixed(2)}`;
        }
    } catch (error){
        if (result){
            result.textContent ="Please enter fvalid height or weight";
        }
    }
})

//AGE calculator

function Agecalc(
    birthYear:number, currentYear:number
):number{
        if (birthYear <= 0 || currentYear <= 0){
        throw new Error("Invalid birth year or curretn year");
        } 
        const Age = birthYear - currentYear;
        return Age
}
ageBtn?.addEventListener("click",()=>{
    if (label1){
        label1.textContent ="Current Year";
    } 
    if (label2){
        label2.textContent ="Birth Year";
    } 
    input1.value ="";
    input2.value ="";

    if(result){
        result.textContent ="Your Age  will appear here.";
    }
});
calculateBtn?.addEventListener("click",() =>{
    const currentYear = Number(input1.value);
    const birthYear =Number (input2.value);

    try {
        const Age = Agecalc(currentYear,birthYear);
        if (result){
            result.textContent =`Your Age is ${Age}`;
        }
    } catch (error){
        if (result){
            result.textContent ="Please enter valid years";
        }
    }
})

//Current Convo

function Currencyconvo(
    startamount:number, rate:number
): number {
    const  Amount = startamount * rate;
    return Amount;
}
currencyBtn?.addEventListener("click",()=>{
    if (label1){
        label1.textContent ="Start Amount";
    } 
    if (label2){
        label2.textContent ="Amount Rate";
    } 
    input1.value ="";
    input2.value ="";

    if(result){
        result.textContent ="Your convo  will appear here.";
    }
});
calculateBtn?.addEventListener("click",() =>{
    const startAmount = Number(input1.value);
    const amountrate =Number (input2.value);

    try {
        const Amount = Currencyconvo(startAmount,amountrate);
        if (result){
            result.textContent =`Your Currency is $ ${Amount}`;
        }
    } catch (error){
        if (result){
            result.textContent ="Please enter valid rates";
        }
    }
})
 //DISCOUNT CALCULATOR
function DiscountCalc(
    OGprice :number, discountrate:number
): number {
    const DiscountAmount = OGprice * discountrate /100;
    const finalprice = OGprice -DiscountAmount;
    return finalprice;
}
discountBtn?.addEventListener("click",()=>{
    if (label1){
        label1.textContent ="Price";
    } 
    if (label2){
        label2.textContent ="Discount Rate";
    } 
    input1.value ="";
    input2.value ="";

    if(result){
        result.textContent ="Your convo  will appear here.";
    }
});
calculateBtn?.addEventListener("click",() =>{
    const OGprice = Number(input1.value);
    const discountrate =Number (input2.value);

    try {
        const final = DiscountCalc(OGprice,discountrate);

        if (result){
            result.textContent =`Your total price is  ${final}`;
        }
    } catch (error){
        if (result){
            result.textContent ="Please enter valid rates";
        }
    }
})
const cards=document.querySelectorAll(".card");

let titleCount=1;
let totalPrice=0

for(let index=0;index<cards.length;index++){
    const card=cards[index];
    card.addEventListener("click", function(){

        const title=card.querySelector("h3").innerText;
        const price=parseFloat(
            card.querySelector("span").innerText.split(" ")[1]
        );

        const titleContainer=document.getElementById("title-container");
        const p=document.createElement("p");
        p.innerText=titleCount + ". " + title;
        titleContainer.appendChild(p);

        titleCount++;

        // Calculate price
        totalPrice+=price;
        document.getElementById('totalPrice').innerText=totalPrice.toFixed(2);

    })
}


const btn=document.getElementById("apply-btn")
btn.addEventListener("click",function(){
    const couponElement=document.getElementById("input-field").value;
    const couponCode=couponElement.split(" ").join("").toUpperCase();

    if(totalPrice >= 200){
        if(couponCode==="SELL200"){
            // discount calculation
            const discountElement=document.getElementById("discountPrice");
            const discountAmount=totalPrice*0.2;
            discountElement.innerText=discountAmount.toFixed(2);

            // rest total calculation
            const restTotal=document.getElementById("total");
            restTotal.innerText=totalPrice-discountAmount.toFixed(2);
            document.getElementById("input-field").value="";

        }else{
            document.getElementById("input-field").value="";
            alert("invalid Coupon")
        }
    }
    else{
        document.getElementById("input-field").value="";
        alert('sala fokir')
    }
})
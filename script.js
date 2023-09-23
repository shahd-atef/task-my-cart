const add_To_cart =document.querySelector(".plus");
const Remove_from_cart=document.querySelector(".minus");
const display_content= document.querySelector(".content");

let counter=1;
add_To_cart.addEventListener("click",function()
{ 
    if(counter <9)
    {
        counter++;
    }

display_content.textContent=counter;
})

Remove_from_cart.addEventListener("click",function()
{
    if(counter>1)
    {
        counter--;
    }
    display_content.textContent=counter;
})
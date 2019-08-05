function OrderPizza(sizes,crusts,prices,toppings,delivery){
    this.size=sizes;
    this.crust=crusts;
    this.price=prices
    this.topping=toppings;
    this.deliver=delivery;
}

OrderPizza.prototype.pizza=function(){
    return this.size + this.crust + this.topping + this.deliver;
}

$(document).ready(function(){
    
    $("button").click(function(){
        event.preventDefault();
        var newPizza;
        if($("#small").prop("checked")){
            $("#medium").prop("checked",false);
            $("#large").prop("checked",false);
            var sizeofpizza=$("#small").val();
            console.log("small"+sizeofpizza)            
        }
        else if($("#medium").prop("checked")){
            $("#small").prop("checked",false);
            $("#large").prop("checked",false);
            var sizeofpizza=$("#medium").val();
            console.log(sizeofpizza)            
        }
        else if($("#large").prop("checked")){
            $("#small").prop("checked",false);
            $("#medium").prop("checked",false);
            var sizeofpizza=$("#large").val();
            console.log(sizeofpizza)            
        }
        
        if($("#crispy").prop("checked")){           
            $("#stuffed").prop("checked",false);
            $("#gluten").prop("checked",false);
            var crustofpizza=$("#crispy").val();
            console.log(crustofpizza)            
        }
        else if($("#stuffed").prop("checked")){           
            $("#crispy").prop("checked",false);
            $("#gluten").prop("checked",false);
            var crustofpizza=$("#stuffed").val();
            console.log(crustofpizza)            
        }
        else if($("#gluten").prop("checked")){
            $("#crispy").prop("checked",false);
            $("#stuffed").prop("checked",false);
            var crustofpizza=$("#gluten").val();
            console.log(crustofpizza)            
        }
        var toppingofpizza=[];
        
        $("input[type=checkbox]:checked").each(function(){
            toppingofpizza.push($(this).val());
            
            console.log(toppingofpizza)
        }); 

        var priceofpizza=0;
        for(var i=0; i<toppingofpizza.length;i++){
            if(toppingofpizza[i]==="Pepperoni"){
                priceofpizza+=1000
                console.log(priceofpizza)
            }
            else if(toppingofpizza[i]==="Sausage"){
                priceofpizza+=1000
                console.log(priceofpizza)
            }
            else if(toppingofpizza[i]==="Onions"){
                priceofpizza+=1000
                console.log(priceofpizza)
            }
            else if(toppingofpizza[i]==="Mushrooms"){
                priceofpizza+=1000
                console.log(priceofpizza)
            }
            else if(toppingofpizza[i]==="Extra Cheese"){
                priceofpizza+=1000
                console.log(priceofpizza)
            }
        }

        if($("#yes").prop("checked")){
            $("#no").prop("checked",false);
            var delivery=$("#yes").val();
            console.log(delivery)            
        }
        else if($("#no").prop("checked")){
            $("#yes").prop("checked",false);
            var delivery=$("#no").val();
            console.log(delivery)
        }
        


        var newPizza=new OrderPizza(sizeofpizza,crustofpizza,toppingofpizza,priceofpizza,delivery);

        console.log(newPizza)
        $("#displayOrder").show();
        $("#displayOrder").append("<p>"+newPizza.size+"<p>")
        $("#displayOrder").append("<p>"+newPizza.crust+"<p>")
        $("#displayOrder").append("<p>"+newPizza.price+"<p>")
        $("#displayOrder").append("<p>"+newPizza.deliver+"<p>")

        var total=parseInt(newPizza.size)+parseInt(newPizza.crust)+parseInt(newPizza.deliver)
         
        var nprice = newPizza.price

        for(var a=0; a < nprice.length; a++){

            total+=parseInt(nprice[a])
            console.log(parseInt(nprice[a]))
        }
        // +parseInt(newPizza.price);
        

        // $("#displayOrder").append("<p>"+""+total+"<p>")
        alert("The total price is "+total);

    });

});
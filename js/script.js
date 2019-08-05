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
            var sizeofpizza=$("#small").val()+": 1000";
            console.log(sizeofpizza)            
        }
        else if($("#medium").prop("checked")){
            $("#small").prop("checked",false);
            $("#large").prop("checked",false);
            var sizeofpizza=$("#medium").val()+": 2000";
            console.log(sizeofpizza)            
        }
        else if($("#large").prop("checked")){
            $("#small").prop("checked",false);
            $("#medium").prop("checked",false);
            var sizeofpizza=$("#large").val()+": 3000";
            console.log(sizeofpizza)            
        }
        
        if($("#cripsy").prop("checked")){           
            $("#stuffed").prop("checked",false);
            $("#gluten").prop("checked",false);
            var crustofpizza=$("#crispy").val()+": 4000";
            console.log(crustofpizza)            
        }
        else if($("#stuffed").prop("checked")){           
            $("#crispy").prop("checked",false);
            $("#gluten").prop("checked",false);
            var crustofpizza=$("#stuffed").val()+": 5000";
            console.log(crustofpizza)            
        }
        else if($("#gluten").prop("checked")){
            $("#crispy").prop("checked",false);
            $("#stuffed").prop("checked",false);
            var crustofpizza=$("#gluten").val()+": 6000";
            console.log(crustofpizza)            
        }

        var toppingofpizza=[];
        
        $("input[type=checkbox]:checked").each(function(){
            toppingofpizza.push($(this).val());
            
        }); 
        console.log(toppingofpizza)

        var priceofpizza=0;
        for(var i=0; i<toppingofpizza.length;i++){
            if(toppingofpizza[i]==="Pepperoni"){
                toppingofpizza=$("#pepperoni").val()
                priceofpizza +=1000;
                console.log(priceofpizza)
            }
            else if(toppingofpizza[i]==="Sausage"){
                priceofpizza +=2000;
                console.log(priceofpizza)
            }
            else if(toppingofpizza[i]==="Onions"){
                priceofpizza +=3000;
                console.log(priceofpizza)
            }
            else if(toppingofpizza[i]==="Mushrooms"){
                priceofpizza +=4000;
                console.log(priceofpizza)
            }
            else if(toppingofpizza[i]==="Extra Cheese"){
                priceofpizza +=5000;
                console.log(priceofpizza)
            }
        }


        var newPizza=new OrderPizza(sizeofpizza,crustofpizza,toppingofpizza,priceofpizza);

        console.log(newPizza)
        $("#displayOrder").show();
        $("#displayOrder").append(newPizza.size)
        $("#displayOrder").append(newPizza.crust)
        $("#displayOrder#pizzaTopping").append(newPizza.topping)
    });

});
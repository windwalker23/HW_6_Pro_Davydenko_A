do {
    period = prompt(`winter or summer period?`);
    if(period != null) {
        period = period.replaceAll(" ", "").toLowerCase();
    } 
    console.log(period);
} while(!(period == `summer` || period == `winter` || !period));

// 

if(!period){
    alert(`You have canceled the order`);
} else {
    do {
        category = prompt(`Choose category in which you want to buy products: vegetables or fruits`);
        if(category != null) {
            category = category.replaceAll(" ", "").toLowerCase();
        }
        console.log(category);
    } while(!(category == `vegetables` || category == `fruits` || !category));

    if(!category){
        alert(`You have canceled the order`);
    }
}

// 

products = [{name: `cabbage`, cost: 8, img: "images/vegetables/cabbage.svg"}, 
            {name: `avocado`, cost: 30, img: "images/vegetables/avocado.svg"}, 
            {name: `tomato`,cost: 10, img: "images/vegetables/tomato.svg"}, 
            {name:`grapes`, cost:20, img: "images/fruits/grapes.svg"}, 
            {name:`raspberry`, cost: 25, img: "images/fruits/raspberry.svg"}, 
            {name: `coconut`, cost: 50, img: "images/fruits/coconut.svg"}];
            
// 

if(category == `vegetables`) {
    do {
        product = prompt(`Choose product from category vegetables: cabbage, avocado, tomato`);
        if(product != null) {
            product = product.replaceAll(" ", "").toLowerCase();
        }
        console.log(product);
    } while(!(product == `cabbage` || product == `avocado` || product == `tomato` || !product));

} else if(category == `fruits`) {
    do {
        product = prompt(`Choose product from category fruits: grapes, raspberry, coconut`);
        if(product != null) {
            product = product.replaceAll(" ", "").toLowerCase();
        }
        console.log(product);
    } while(!(product == `grapes` || product == `raspberry` || product == `coconut` || !product));
}

if(!product) {
    alert(`You have canceled the order`);
}

for(i = 0; i <= products.length; i++) {
    if(product == products[i].name) {
        break;
    }
}
console.log(product == products[i].name);

// 

do {
    count = parseInt(prompt(`Enter count of ${product}`));
} while(count < 1 || isNaN(count));
console.log(count);

if(period == `summer`) {
    periodCoeff = 0.8;
} else if(period == `winter`) {
    periodCoeff = 2;
}

total = count * products[i].cost * periodCoeff;
document.write(`<div class="product" align="center">
                    <img src="${products[i].img}" alt="${products[i].name}" width="100" height="100">
                    <p>Selected product: <b>${products[i].name}</b></p>
                    <p>Count of ${products[i].name}: <b>${count}</b></p>
                    <p>Selected period: <b>${period}</b></p>
                    <p>Selected category: <b>${category}</b></p>
                    <p>Final sum: <b>${total} UAH</b></p>
                </div>`)
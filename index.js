const todoList = document.querySelector(".listItem");
const cartItem = document.querySelector(".cart__list-item");
const totalMoney = document.querySelector(".cart__checkout-total");
const countProductListCart = document.querySelector(".header__menu-navbar--count");
const cartHearderCount = document.querySelector(".cart__hearder-count");
const account = document.querySelector(".my-account");
let profile = JSON.parse(localStorage.getItem("profile"));
if (profile !== null) {
    account.innerText = `Hi ${profile.userName}`
} else {
    account.innerHTML = `<a href='./Login.html' class="header__menu-account">Account</a>`
}

let listArray = [
    {
        id: 1,
        name: 'Brownberry/Arnold Wheat Buns 8 ct',
        image: ' https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09083546/Soft-Bread5.jpg',
        price: 10,
        amount: 1,
    },
    {
        id: 2,
        name: 'Barney Chocolate Butter Blend 284g',
        image: ' https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09160718/Butter2-300x300.jpg',
        price: 5,
        amount: 1,
    },
    {
        id: 3,
        name: 'Beyond Meat Hot Italian Sausages 14 ct',
        image: ' https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09195308/Packet-meat5-300x300.jpg',
        price: 6,
        amount: 1,
    },
    {
        id: 4,
        name: 'Buitoni is Mixed Cheese Tortellini 550g',
        image: ' https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09182134/pasta3-2-300x300.jpg',
        price: 8,
        amount: 1,
    },
    {
        id: 5,
        name: 'Clarence Court Free Range Eggs 6pcs',
        image: ' https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09154933/egg6-3-300x300.jpg',
        price: 7,
        amount: 1,
    },
    {
        id: 6,
        name: 'Columbus Italian Dry Salami Salmon 12 oz',
        image: ' https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09194714/Packet-meat2-300x300.jpg',
        price: 3,
        amount: 1,
    },
    {
        id: 7,
        name: 'Conille Rose Hydrate Honey 250 ml',
        image: 'https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/23094210/Honey-1-3.jpg',
        price: 22,
        amount: 1,
    },
    {
        id: 8,
        name: 'Creminelli Fine Meats Sliced Prosciutto 2 oz',
        image: ' https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09191838/Cutted-Meat2-300x300.jpg',
        price: 5,
        amount: 1,
    },
    {
        id: 9,
        name: 'Cucumber Greenhouse Grown, 1.5 lbs Bag',
        image: ' https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09061841/vegetables7-4.jpg',
        price: 4,
        amount: 1,
    },
    {
        id: 10,
        name: 'Daisy Minyak Jagung Corn Oil 500ml',
        image: ' https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09164223/Oil-2-300x300.jpg',
        price: 7,
        amount: 1,
    },
    {
        id: 11,
        name: 'Dannon Low Fat Strawberry Yogurt 500g',
        image: ' https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09085957/Yogurt-2.jpg',
        price: 11,
        amount: 1,
    },
    {
        id: 12,
        name: 'Dannon Lowfat Vanila Yogurt 900g',
        image: ' https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09083606/Yogurt-1.jpg',
        price: 11,
        amount: 1,
    },
    {
        id: 13,
        name: 'Organic Blueberries Package 6 oz Container',
        image: 'https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09064303/fresh-fruits2.jpg',
        price: 6,
        amount: 1,
    },
    {
        id: 14,
        name: 'Sicar Farms Organic Limes, 5 lbs',
        image: ' https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09072528/fresh-fruits11.jpg',
        price: 5,
        amount: 1,
    },
    {
        id: 15,
        name: 'Doritos Nacho Cheese Chips Party Size 425g',
        image: '  https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09210905/snacks7-4-300x300.jpg',
        price: 8,
        amount: 1,
    },
    {
        id: 16,
        name: 'Oroweat Organic  Wheat Bread 27 oz',
        image: ' https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09085231/Soft-Bread6.jpg',
        price: 7,
        amount: 1,
    },
    {
        id: 17,
        name: 'Kitkat Crisp Wafers In Milk Chocolate',
        image: ' https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/21151349/Chocolates-2-300x300.jpg',
        price: 3,
        amount: 1,
    },
    {
        id: 18,
        name: 'Lay is Barbecue Chips Party Size 418g',
        image: ' https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09213250/snacks4-300x300.jpg',
        price: 2,
        amount: 1,
    },
    {
        id: 19,
        name: 'Evolution Fresh Organic Defense Up',
        image: '  https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/21145235/juice-1-300x300.jpg',
        price: 11,
        amount: 1,
    },
    {
        id: 20,
        name: 'Evolution Fresh Organic Super Fruit Greens',
        image: ' https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/21144020/juice-3-300x300.jpg',
        price: 3,
        amount: 1,
    },
    {
        id: 21,
        name: 'Dr. Mc Dougall is Vegan Ramen  50g',
        image: ' https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09175508/noodles6-2-300x300.jpg',
        price: 55,
        amount: 1,
    },
    {
        id: 22,
        name: 'French is Classic Yellow Mustard 226g',
        image: ' https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09183814/sauses3-2-2-300x300.jpg',
        price: 8,
        amount: 1,
    },
    {
        id: 23,
        name: 'Organic Peeled Carrots, 2 x 2 lbs',
        image: ' https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/09062732/vegetables11-4.jpg',
        price: 4,
        amount: 1,
    },
]

showProduct()
function showProduct() {
    let getLocalStorageData = JSON.parse(localStorage.getItem("cart"));

    let newLiTag = "";
    listArray.forEach((element, index) => {
        newLiTag += `<div class="col l-2-4 m-3 c-6">`;
        newLiTag += ` <div class="app_container__products-item">`;
        newLiTag += ` <div class="app_container__products-link">`;
        newLiTag += ` <div class="app_container__products-sale">Sale</div>`;
        newLiTag += `<img class="app_container__products-img" src=${element.image} alt="" />`;
        newLiTag += `<h3 class="app_container__products-title" >${element.name}</h3>`;
        newLiTag += `</div>`;
        newLiTag += ` <div class="app_container__products-price">`;
        newLiTag += `<p class="products-real-cost">${element.price}$</p>`;
        newLiTag += `</div>`;
        if (getLocalStorageData !== null) {
            let findIdbtn = getLocalStorageData.find((item) => {
                return item.id == element.id
            })
            if (findIdbtn) {
                newLiTag += `<div class="app_container__products-item-counter">`;
                newLiTag += `<button onclick="increasingNumber(${element.id})" class="app_container__products-item-counter-update">-</button>`;
                newLiTag += `<p class="app_container__products-item-counter-value">${findIdbtn.amount}</p>`
                newLiTag += `<button onclick="addToCart(${element.id})" class="app_container__products-item-counter-update ">+</button>`;
                newLiTag += `</div>`;
            } else {
                newLiTag += `<button class="app_container__products-add" onclick="addToCart(${element.id})">Add to cart</button>`;
            }
        }
        else {
            newLiTag += `<button class="app_container__products-add" onclick="addToCart(${element.id})">Add to cart</button>`;
        }
        newLiTag += `</div >`;
        newLiTag += `</div>`;
    });
    todoList.innerHTML = newLiTag;
}
showProductInCart()
function showProductInCart() {
    let getLocalStorageData = JSON.parse(localStorage.getItem("cart"));
    if (getLocalStorageData !== null) {
        if (getLocalStorageData.length > 0) {
            let newItemCart = "";
            getLocalStorageData.forEach((element, index) => {
                newItemCart += `<div class="cart__list-product">`;
                newItemCart += `<div class="cart__list-product-count">`;
                newItemCart += `<button onclick="increasingNumber(${element.id})" class="cart__list-product-count-update">-</button>`;
                newItemCart += `<p class="cart__list-product-value">${element.amount}</p>`;
                newItemCart += `<button onclick="addToCart(${element.id})" class="cart__list-product-count-update">+</button>`;
                newItemCart += `</div>`;
                newItemCart += `<img class="cart__list-product-img" src=${element.image} alt="" />`;
                newItemCart += `<div class="cart__list-product-title">${element.name}</div>`;
                newItemCart += `<div class="cart__list-product-total">${element.amount * element.price}$</div>`;
                newItemCart += `<i onclick="deleteItemInCart(${element.id})" class="fas fa-times cart__list-product--close"></i>`;
                newItemCart += `</div>`;
            });
            cartItem.innerHTML = newItemCart;
            let total = getLocalStorageData.reduce((accumulator, item, index) => {
                return accumulator += item.price * item.amount;
            }, 0)
            totalMoney.innerText = `${total}$`;
            countProductListCart.innerText = getLocalStorageData.length
            cartHearderCount.innerText = `${getLocalStorageData.length} item`

        }
        else {
            let newItemCart = "";
            newItemCart += `<div>`;
            newItemCart += `</div>`;
            newItemCart += `<div class="cart__list-no-item">`;
            newItemCart += `<img class="cart__list-no-item-img" src="https://cartsy.redq.io/baby-care/wp-content/themes/cartsy/assets/images/not-found-alt.svg" alt="" />`;
            newItemCart += `<p class="cart__list-no-item-text">No products in the cart.</p>`;
            newItemCart += `</div>`;
            cartItem.innerHTML = newItemCart;
            let total = getLocalStorageData.reduce((accumulator, item, index) => {
                return accumulator += item.price * item.amount;
            }, 0)
            totalMoney.innerText = `${total}$`;
            countProductListCart.innerText = 0
            cartHearderCount.innerText = '0 item'

        }
    }
}

function addToCart(id) {
    const findItemInArr = listArray.find(item => item.id == id)
    let getLocalStorageData = JSON.parse(localStorage.getItem("cart"));
    if (getLocalStorageData == null) {
        getLocalStorageData = []
    }
    const listproductInCart = getLocalStorageData.some(item => {
        return item.id === id;
    });
    if (listproductInCart) {
        const newCart = getLocalStorageData.map(item => {
            return {
                ...item,
                amount: item.id === id ? item.amount += 1 : item.amount
            };
        });
        localStorage.setItem("cart", JSON.stringify(newCart))
        showProductInCart()
    }
    else {
        getLocalStorageData.push(findItemInArr)
        localStorage.setItem("cart", JSON.stringify(getLocalStorageData))
        showProductInCart()
    }
    showProduct()
}
function increasingNumber(id) {
    let getLocalStorageData = JSON.parse(localStorage.getItem("cart"));
    const newCart = getLocalStorageData.map(item => {
        return {
            ...item,
            amount: item.id === id ? item.amount -= 1 : item.amount
        };
    });

    const findProductAmountZero = newCart.find(item => item.amount == 0)
    if (findProductAmountZero) {
        deleteItemInCart(findProductAmountZero.id)
    } else {
        localStorage.setItem("cart", JSON.stringify(newCart))
        showProductInCart()
    }
    showProduct()
}
function deleteItemInCart(id) {
    let getLocalStorageData = JSON.parse(localStorage.getItem("cart"));
    const updateCart = getLocalStorageData.filter(item => item.id !== id)
    console.log(updateCart);
    localStorage.setItem("cart", JSON.stringify(updateCart))
    showProductInCart()
    showProduct()
}
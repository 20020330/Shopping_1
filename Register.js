

const fullName = document.getElementById('fullName')
const userName = document.getElementById('userName')
const email = document.getElementById('email')
const phoneNumber = document.getElementById('phoneNumber')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')

const form = document.getElementById('form')
const errorElement = document.getElementById('error')
////////////////////////////////////////////////////////
const fullNameError = document.querySelector('.fullNameError')
const userNameError = document.querySelector('.userNameError')
const emailError = document.querySelector('.emailError')
const phoneNumberError = document.querySelector('.phoneNumberError')
const passwordError = document.querySelector('.passwordError')
const cfpasswordError = document.querySelector('.cfpasswordError')

let profileList = [
    {
        fullName: 'Nguyễn Hoàng Giang Trường',
        userName: 'Truong',
        email: 'truongnguyen@gmail.com',
        phoneNumber: '0329509999',
        password: 'truongnguyen',
    }
]
let getataCheck = JSON.parse(localStorage.getItem("profileList"));
if (getataCheck == null) {
    localStorage.setItem("profileList", JSON.stringify(profileList))
}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const profile = {
        fullName: fullName.value,
        userName: userName.value,
        email: email.value,
        phoneNumber: phoneNumber.value,
        password: password.value,
    }


    if (fullName.value === '') {
        fullNameError.innerText = 'Full Name invalid'
    }
    else {
        fullNameError.innerText = ''
    }
    if (userName.value === '') {
        userNameError.innerText = 'User Name invalid'
    }
    else {
        userNameError.innerText = ''
    }
    if (email.value === '') {
        emailError.innerText = 'Email invalid'
    }
    else {
        emailError.innerText = ''
    }
    if (phoneNumber.value === '') {
        phoneNumberError.innerText = 'Phone invalid'
    }
    else {
        phoneNumberError.innerText = ''
    }
    if (password.value === '') {
        passwordError.innerText = 'Password invalid'
    } else if (password.value.length < 7) {
        passwordError.innerText = 'Password must have at least 8 characters'

    } else {
        passwordError.innerText = ''
    }
    if (confirmPassword.value === '') {

        cfpasswordError.innerText = 'Password invalid'
    } else {
        if (password.value !== confirmPassword.value) {
            cfpasswordError.innerText = 'The passwords do not match'
        } else {
            cfpasswordError.innerText = ''
        }

    }
    if (fullName.value !== '' && userName.value !== '' &&
        email.value !== '' && phoneNumber.value !== '' && password.value !== '' && confirmPassword.value !== '') {
        let getata = JSON.parse(localStorage.getItem("profileList"));
        console.log(profile);
        getata.push(profile)
        localStorage.setItem("profileList", JSON.stringify(getata))
        alert('đăng ký thành công')
        window.open("./Login.html", "_self");

    }
})
////////////////////////////////////////////////////////////////////////////////
const cartItem = document.querySelector(".cart__list-item");
const totalMoney = document.querySelector(".cart__checkout-total");
const countProductListCart = document.querySelector(".header__menu-navbar--count");
const cartHearderCount = document.querySelector(".cart__hearder-count");
const account = document.querySelector(".my-account");
let profiles = JSON.parse(localStorage.getItem("profile"));
if (profiles !== null) {
    console.log('b');
    account.innerText = `Hi ${profiles.userName}`
} else {
    account.innerHTML = `<a href='./Login.html' class="header__menu-account">Account</a>`
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
}
function deleteItemInCart(id) {
    let getLocalStorageData = JSON.parse(localStorage.getItem("cart"));
    const updateCart = getLocalStorageData.filter(item => item.id !== id)
    console.log(updateCart);
    localStorage.setItem("cart", JSON.stringify(updateCart))
    showProductInCart()
}
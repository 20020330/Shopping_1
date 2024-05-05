const totalItem = document.querySelector(".checkout-right__order-subtotal--left");
const subtotal = document.querySelector(".checkout-right__order-subtotal--right");
const todoList = document.querySelector(".checkout-right__order-Total--right");
const fullName = document.querySelector(".checkout-right__info--right");
const phone = document.querySelector(".checkout-right__info-phone--right");
const email = document.querySelector(".checkout-right__info-email--right");
const form = document.getElementById('form')
const address = document.getElementById('address')
const addressError = document.querySelector('.checkout-right__info-address--left')
const checkoutBtn = document.querySelector('.checkout-btn')


let profiles = JSON.parse(localStorage.getItem("profile"));
if (profiles !== null) {
    fullName.innerText = profiles.fullName;
    phone.innerText = profiles.phoneNumber;
    email.innerText = profiles.email;
}


let getLocalStorageData = JSON.parse(localStorage.getItem("cart"));
if (getLocalStorageData !== null && getLocalStorageData.length > 0) {
    let total = getLocalStorageData.reduce((accumulator, item, index) => {
        return accumulator += item.price * item.amount;
    }, 0)
    subtotal.innerText = `${total}$`
    todoList.innerText = `${total}$`
    totalItem.innerText = `Sub Total (${getLocalStorageData.length} item):`
    checkoutBtn.innerText = 'Proceed to checkout'

}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (getLocalStorageData.length < 1) {
        window.open("/index.html", "_self");
    } else {
        if (address.value.length < 1) {
            addressError.style.color = 'red'
        } else {
            alert('mua hàng thành công')
            localStorage.setItem("cart", JSON.stringify([]))
            window.open("/index.html", "_self");
        }
    }
})
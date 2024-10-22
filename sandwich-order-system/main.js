// Gets dynamic elements from HTML
const orderForm = document.getElementById('orderForm');
const submitBTN = document.getElementById('submit');
const ordersGreen = document.getElementById('ordersGreen');
const ordersYellow = document.getElementById('ordersYellow');
const ordersRed = document.getElementById('ordersRed');
const complete = document.getElementById('complete');
const completeNum = document.getElementById('completedNum');
const completedOutput = document.getElementById('completed');
const error1 = document.getElementById('error1');
const order = new Order(new Sandwich, new Drink, new Sides, null, null, null);

// Stores pecies of data used througout the app
let orderNum = 0;
let orders = [];
let completed = [];

// Defines the three statuses
const STATUS_GREEN = 'green';
const STATUS_YELLOW = 'yellow';
const STATUS_RED = 'red';

// Event listener for the form (updates confirmation at every change)
orderForm.addEventListener("change", () => {
    updateData();
    output.innerHTML = order.getConfirmation();
});

// Event listener for the submit button. 
// Handles logic associated with getting the full order and displaying the fulfillment card.
submitBTN.addEventListener("click", () => {
    updateData();
    if (order.sandwich.isSandwich()) {
        orderNum++;
        const newSandwich = new Sandwich(order.sandwich.size, order.sandwich.bread, order.sandwich.meat, order.sandwich.cheese, [...order.sandwich.toppings]);
        const newDrink = new Drink(order.drink.size, order.drink.variety);
        const newSides = new Sides([...order.sides.sides]);
        const submitOrder = new Order(newSandwich, newDrink, newSides, Date.now(), orderNum, STATUS_GREEN);
        orders.push(submitOrder);
        updateOrders();
        orderForm.reset();
        updateData();
        output.innerHTML = "";
        setTimer(submitOrder);
    } else {
        output.innerHTML = order.getConfirmation();
        output.innerHTML += `<p class="error">Please Order a complete sandwich</p>`;
    }
});

// Event listener for the complete order button. Calls completeOrder to complete the order.
complete.addEventListener("click", () => {
    const orderToComplete = getOrderFromInp();
    if (orderToComplete) {
        completeOrder(orderToComplete);
        error1.innerHTML = "<br>";
    }
});

// This does the same as the above button except is triggered when user clicks enter.
// This also handles the removing of the error messages related to user input.
completeNum.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const orderToComplete = getOrderFromInp();
        if (orderToComplete) {
            completeOrder(orderToComplete);
            error1.innerHTML = "<br>";
        }
    } else {
        error1.innerHTML = "<br>";
    }
});

// Event listeners for the doubleclick functionality.
ordersGreen.addEventListener('dblclick', handleDoubleClick);
ordersYellow.addEventListener('dblclick', handleDoubleClick);
ordersRed.addEventListener('dblclick', handleDoubleClick);

// Sets a 30 second timer and changes the status to more urgent every cycle.
function setTimer(currentOrder) {
    const interval = setInterval(() => {
        if (currentOrder.status === STATUS_GREEN) {
            currentOrder.status = STATUS_YELLOW;
        } else if (currentOrder.status === STATUS_YELLOW) {
            currentOrder.status = STATUS_RED;
        } else {
            clearInterval(interval);
        }
        updateOrders();
    }, 30000); // change to 5000 for testing
}

// Called to complete the orders. 
// Adds the order to the completed list and removes the order from the fulfillment screen.
function completeOrder(currentOrder) {
    const index = orders.findIndex(o => o.number === currentOrder.number);
    if (index !== -1) {
        orders.splice(index, 1);
        completed.push(currentOrder);
        completedOutput.innerHTML = currentOrder.getCompleteRecord() + completedOutput.innerHTML;
        updateOrders();
    }
}

// Simply returns the order represented by the user input at the time it was called.
function getOrderFromInp() {
    if (completeNum.value > 0) {
        const completedNum = parseInt(completeNum.value);
        const completedOrder = orders.find(order => order.number === completedNum);
        if (completedOrder) {
            return completedOrder;
        } else {
            error1.innerHTML = "Order not found.";
        }
    } else {
        error1.innerHTML = "Please enter a valid order number.";
    }
    return null;
}

// Updates the order fulfillment screen showing cards in the appropriate locations.
// Called each time there MAY be updates to the screen to make sure it is always giving accurate info.
function updateOrders() {
    ordersGreen.innerHTML = '';
    ordersYellow.innerHTML = '';
    ordersRed.innerHTML = '';
    orders.forEach(currentOrder => {
        const orderCard = currentOrder.getOrderedCard();
        if (currentOrder.status === STATUS_GREEN) {
            ordersGreen.innerHTML += orderCard;
        } else if (currentOrder.status === STATUS_YELLOW) {
            ordersYellow.innerHTML += orderCard;
        } else if (currentOrder.status === STATUS_RED) {
            ordersRed.innerHTML += orderCard;
        }
    });
}

// Calls the completeOrder when the doubleclick event happens
function handleDoubleClick(event) {
    const orderCard = event.target.closest('.orderCard');
    if (orderCard) {
        const orderNumber = parseInt(orderCard.id.replace('order', ''));
        const currentOrder = orders.find(o => o.number === orderNumber);
        if (currentOrder) {
            completeOrder(currentOrder);
            clearInterval(currentOrder.interval);
            error1.innerHTML = "<br>";
        }
    }
}

// Updates the default order from information in the order form.
function updateData() {
    const formData = new FormData(orderForm);
    order.sandwich.size = formData.get("size");
    order.sandwich.bread = formData.get("bread");
    order.sandwich.meat = formData.get("meat") || null;
    order.sandwich.cheese = formData.get("cheese");
    order.sandwich.toppings = formData.getAll("toppings");
    order.drink.size = formData.get("drinkSize") || null;
    order.drink.variety = formData.get("drink") || null;
    order.sides.sides = formData.getAll("sides");
}
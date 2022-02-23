const moreSearchInputWrapper = document.querySelector('.moreSearchInput-Wrapper')
const destination = document.querySelector('#destination')
const dateStart = document.querySelector('#dateStart')
const dateEnd = document.querySelector('#dateEnd')
const roomGuests = document.querySelector('.roomGuests-input')
const roomGuestsDetailBox = document.querySelector('.roomGuestsDetail-Box')
const specialRates = document.querySelector('#special-rates')
const specialRatesOptions = document.querySelector('.specialRates-Options')

destination.addEventListener('click', (evt) => {
    moreSearchInputWrapper.style.display = "flex";
})

dateStart.addEventListener('click', (evt) => {
    moreSearchInputWrapper.style.display = "flex";
})
dateEnd.addEventListener('click', (evt) => {
    moreSearchInputWrapper.style.display = "flex";
})

roomGuests.addEventListener('click', (evt) => {
    roomGuestsDetailBox.classList.toggle('show');
    const classes = specialRatesOptions.classList;
    classes.forEach((value) => {
        if (value === 'show') {
            classes.remove('show')
        }
    })
})

specialRates.addEventListener('click', (evt) => {
    specialRatesOptions.classList.toggle('show');
    const classes = roomGuestsDetailBox.classList;
    classes.forEach((value) => {
        if (value === 'show') {
            classes.remove('show')
        }
    })
})

const menuIcon = document.querySelector('.menuIcon-Container')
const closeMenu = document.querySelector('.closeMenu-Container')
const mainNavBar = document.querySelector('.mainNavBar')

menuIcon.addEventListener('click', () => {
    mainNavBar.classList.toggle('show-flex');
    closeMenu.classList.toggle('show')
    menuIcon.classList.toggle('hide')
})

closeMenu.addEventListener('click', () => {
    menuIcon.classList.remove('hide');
    mainNavBar.classList.remove('show-flex');
    closeMenu.classList.remove('show')
})
const closeRGdetails = document.querySelector('.close-RGDetails')

closeRGdetails.addEventListener('click', () => {
    roomGuestsDetailBox.classList.remove('show')
})

const addRoom = document.querySelector(".add-room")
const minusRoom = document.querySelector(".minus-room")
const room_numDisplay = document.querySelector("#rooms")

let hired_rooms = 1;

function displayResult(numDisplay, hiredNum, catString) {
    if (catString === "Children") {
        if (hiredNum === 0) {
            numDisplay.value = `none`
        } else if (hiredNum === 1) {
            numDisplay.value = `${hiredNum} Child`
        } else {
            numDisplay.value = `${hiredNum} ${catString}`
        }
    } else {
        if (hiredNum === 1) {
            numDisplay.value = `${hiredNum} ${catString}`
        } else {
            numDisplay.value = `${hiredNum} ${catString}` + 's'
        }
    }
}

displayResult(room_numDisplay, hired_rooms, 'Room')
minusRoom.classList.add('disabled')
addRoom.addEventListener('click', () => {
    if (hired_rooms < 8) {
        hired_rooms++;
        displayResult(room_numDisplay, hired_rooms, 'Room');
        minusRoom.classList.remove('disabled')
    } else if (hired_rooms === 8) {
        addRoom.classList.add('disabled')
    }
})
minusRoom.addEventListener('click', () => {
    if (hired_rooms > 1) {
        hired_rooms--;
        displayResult(room_numDisplay, hired_rooms, 'Room')
        addRoom.classList.remove('disabled')
    }
    if (hired_rooms === 1) {
        minusRoom.classList.add('disabled')
    }
})

const addAdult = document.querySelector('.add-adult')
const minusAdult = document.querySelector('.minus-adult')
const adult_numDisplay = document.querySelector('#adults')

let adult_guests = 1;

displayResult(adult_numDisplay, adult_guests, 'Adult')
minusAdult.classList.add('disabled')
addAdult.addEventListener('click', () => {
    adult_guests++;
    displayResult(adult_numDisplay, adult_guests, 'Adult')
    minusAdult.classList.remove('disabled')
})
minusAdult.addEventListener('click', () => {
    if (adult_guests > 1) {
        adult_guests--;
        displayResult(adult_numDisplay, adult_guests, 'Adult')
    }
    if (adult_guests === 1) {
        minusAdult.classList.add('disabled')
    }
})

const addChild = document.querySelector('.add-child')
const minusChild = document.querySelector('.minus-child')
const child_numDisplay = document.querySelector('#children')

let child_guests = 0;

displayResult(child_numDisplay, child_guests, 'Children');
minusChild.classList.add('disabled')
addChild.addEventListener('click', () => {
    child_guests++;
    displayResult(child_numDisplay, child_guests, 'Children');
    minusChild.classList.remove('disabled')
})
minusChild.addEventListener('click', () => {
    if (child_guests >= 1) {
        child_guests--;
        displayResult(child_numDisplay, child_guests, 'Children');
    }
    if (child_guests === 0) {
        minusChild.classList.add('disabled')
    }

})

const applyRG_btn = document.querySelector('.applyRG-btn')

applyRG_btn.addEventListener('click', () => {
    const room_data = room_numDisplay.value
    const adult_data = adult_numDisplay.value
    const child_data = child_numDisplay.value
    if (child_data === "none") {
        roomGuests.textContent = `${room_data}: ${adult_data}/Room`;
    } else {
        roomGuests.textContent = `${room_data}: ${adult_data}, ${child_data}/Room`;
    }
    roomGuestsDetailBox.classList.remove('show')
})

const No_SpR = document.querySelector("#NOSpR")
const Gov_SpR = document.querySelector("#GovMilSpR")
const AAASpR = document.querySelector("#AAASpR")
const SeniorSpR = document.querySelector("#SeniorSpR")
const PromoSpR = document.querySelector("#PromoSpR")
const SpR_input = document.querySelector("#special-rates")

SpR_input.value = No_SpR.textContent

No_SpR.addEventListener("click", () => {
    const NoSpR_data = No_SpR.textContent;
    SpR_input.value = NoSpR_data;
    specialRatesOptions.classList.remove('show');
})

Gov_SpR.addEventListener("click", () => {
    const GovSpR_data = Gov_SpR.textContent;
    SpR_input.value = GovSpR_data;
    specialRatesOptions.classList.remove('show');
})

AAASpR.addEventListener("click", () => {
    const AAASpR_data = AAASpR.textContent;
    SpR_input.value = AAASpR_data;
    specialRatesOptions.classList.remove('show');
})

SeniorSpR.addEventListener("click", () => {
    const SeniorSpR_data = SeniorSpR.textContent;
    SpR_input.value = SeniorSpR_data;
    specialRatesOptions.classList.remove('show');
})

PromoSpR.addEventListener("click", () => {
    const PromoSpR_data = PromoSpR.textContent;
    SpR_input.value = PromoSpR_data;
    specialRatesOptions.classList.remove('show');
})
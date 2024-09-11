const monitorCompetitor = document.getElementById("monitorCompetitor")
const chooseCurrency = document.getElementById("select");
const currency = document.querySelectorAll('#currency')
const increment = document.getElementById("increment")
const decrement = document.getElementById("decrement")
const accordion = document.getElementById("accordion")
const expandContent = document.getElementById("expand")
const collapseContent = document.getElementById("collapse")
const hideContent = document.querySelector(".hideContent")
const totalRangesLength = document.querySelectorAll('input[type=range]').length
const showRangeLength = document.querySelectorAll('.showRangeValue').length
const productsPerDay = document.getElementById('range1')
const competitors = document.getElementById('range2')
const monitorCompetitorProducts = document.getElementById('range3')
const range4 = document.getElementById('range4')
const productWithCompetitors = document.getElementById('range5')
const manuallyMonitoringProduct = document.getElementById('range9')
const payPerHour = document.getElementById('range13')
const showResultCost = document.getElementById('cost1')
const showCost1 = document.getElementById('cost2')
const showCost2 = document.getElementById('cost3')
const showCost3 = document.getElementById('cost4')
const showCost4 = document.getElementById('cost5')
const showCost5 = document.getElementById('cost6')
const showCost7 = document.getElementById('cost7')
const showCost8 = document.getElementById('cost8')
const showCost9 = document.getElementById('cost9')
const showCost10 = document.getElementById('cost10')
const showCost11 = document.getElementById('cost11')
const showCost12 = document.getElementById('cost12')
const showCost13 = document.getElementById('cost13')
const showCost14 = document.getElementById('cost14')
const showCost15 = document.getElementById('cost15')
let ChooseYourCurrency = 'de-DE'

document.querySelectorAll("*").forEach((item) => {
    item.classList.remove('blur')
})

// Define numberWithCommas function
function numberWithCommas(x) {
    const formattedNumber = x.toLocaleString(ChooseYourCurrency, {
        style: 'currency',
        currency: ChooseYourCurrency === "de-DE" ? 'EUR' : 'USD', // Change currency to EUR for Euro
    });
    return formattedNumber;
}


const testChooseCurrency = () => {
    // formula's 
    const regularMonitorProduct = (parseFloat(range2.value) * parseFloat(range3.value) * parseFloat(range5.value) * parseFloat(range9.value)) / 100
    const acquirePricingData = (parseFloat(range2.value) * parseFloat(range3.value) * parseFloat(range5.value) * parseFloat(range7.value) * parseFloat(range11.value)) / 100
    const regularlyMonitorTopSellerProduct = (parseFloat(range2.value) * parseFloat(range4.value) * parseFloat(range6.value) * parseFloat(range10.value))
    const acquirePricingTopSellerData = (parseFloat(range2.value) * parseFloat(range4.value) * parseFloat(range6.value) * parseFloat(range8.value) * parseFloat(range12.value))

    // cost-1 : identifying competitor cost

    const cost_1 = (((parseFloat(monitorCompetitor.value) * 60) * 2) / 60)
    const finalCost_1 = cost_1 * parseInt(payPerHour.value)
    showCost1.textContent = numberWithCommas(finalCost_1)

    // cost-2 : monitoring product cost
    const cost_2 = (((parseFloat(monitorCompetitor.value) * regularMonitorProduct) * 2) / 60)
    const finalCost_2 = parseFloat(cost_2 * parseInt(payPerHour.value))
    console.log(parseFloat(finalCost_2), 'final cost 2');
    showCost2.textContent = numberWithCommas(finalCost_2)

    // cost-3 : Acquire pricing data
    const cost_3 = ((2 * acquirePricingData) * parseFloat(monitorCompetitor.value)) / 60
    const finalCost_3 = (cost_3 * parseInt(payPerHour.value)) / 100
    showCost3.textContent = numberWithCommas(finalCost_3)

    // cost-4 : regularly monitor product changes
    const cost_4 = ((2 * regularlyMonitorTopSellerProduct) * parseFloat(monitorCompetitor.value)) / 60
    const finalCost_4 = (cost_4 * parseInt(payPerHour.value) / 100)
    showCost4.textContent = numberWithCommas(finalCost_4)

    // cost-5 : regularly monitor product changes
    const cost_5 = ((2 * parseFloat(monitorCompetitor.value)) * acquirePricingTopSellerData) / 60
    const finalCost_5 = ((cost_5 * parseInt(payPerHour.value) / 100) / 100)
    showCost5.textContent = numberWithCommas(finalCost_5)

    // cost-7 : analyze that data (part portfolio)
    const cost_7 = parseFloat(monitorCompetitor.value) * 4 * parseInt(payPerHour.value)
    const finalCost_7 = cost_7
    showCost7.textContent = numberWithCommas(finalCost_7)

    // cost-8 : analyze that data
    const cost_8 = (((parseFloat(monitorCompetitor.value) * 240) * 2) / 60)
    const finalCost_8 = parseFloat((cost_8 * parseInt(payPerHour.value)))
    showCost8.textContent = numberWithCommas(finalCost_8)

    // cost-9 : sum of total costs
    const total_tasks_cost = parseFloat(finalCost_1) + parseFloat(finalCost_2) + parseFloat(finalCost_3) + parseFloat(finalCost_4) + parseFloat(finalCost_5) + finalCost_7 + finalCost_8
    showCost9.textContent = numberWithCommas(total_tasks_cost)

    // cost-10 : identify competitor 
    const cost_10 = (((parseFloat(monitorCompetitor.value) * 5) * 2) / 60)
    const finalCost_10 = cost_10 * parseInt(payPerHour.value)
    showCost10.textContent = numberWithCommas(finalCost_10)

    // cost-11 : monitoring product
    const cost_11 = (((parseFloat(monitorCompetitor.value) * 0) * 2) / 60)
    const finalCost_11 = cost_11 * parseInt(payPerHour.value)
    showCost11.textContent = numberWithCommas(finalCost_11)

    // cost-12 : acq pricing data
    const cost_12 = ((parseFloat(monitorCompetitor.value) * 10) / 60) * payPerHour.value
    const finalCost_12 = parseFloat(cost_12)
    showCost12.textContent = numberWithCommas(finalCost_12)

    // cost-13 : analyze that data
    const cost_13 = ((parseFloat(monitorCompetitor.value) * 30) / 60) * payPerHour.value
    const finalCost_13 = parseFloat(cost_13)
    showCost13.textContent = numberWithCommas(finalCost_13)

    // total cost per-month 
    let total_cost_per_month;
    if (parseInt(range3.value) < 101) {
        total_cost_per_month = 99
    } else if (parseInt(range3.value) < 251) {
        total_cost_per_month = 199
    } else if (parseInt(range3.value) < 501) {
        total_cost_per_month = 349
    } else if (parseInt(range3.value) < 1001) {
        total_cost_per_month = 399
    } else if (parseInt(range3.value) < 5001) {
        total_cost_per_month = 1500
    } else {
        total_cost_per_month = 3000
    }

    // cost-14 : total cost per month
    showCost14.textContent = numberWithCommas(total_cost_per_month)

    // getting result of saving per month
    const x = finalCost_10 + finalCost_11 + finalCost_12 + finalCost_13
    const y = total_tasks_cost - (x + total_cost_per_month)
    const savingEveryMonth = y
    showResultCost.textContent = numberWithCommas(savingEveryMonth)

    // total savings over one year : cost-15
    const totalOfOneYear = savingEveryMonth * 12
    showCost15.textContent = numberWithCommas(totalOfOneYear)

}

testChooseCurrency()


//  ======================================= event handlers ============================================
expandContent.addEventListener("click", () => {
    accordion.classList.remove('hide')
    collapseContent.classList.remove('hide')
    hideContent.classList.add('hide')
})

collapseContent.addEventListener("click", () => {
    accordion.classList.add('hide')
    collapseContent.classList.add('hide')
    hideContent.classList.remove('hide')
})

chooseCurrency.addEventListener("change", () => {
    const { value } = chooseCurrency
    ChooseYourCurrency = value
    testChooseCurrency()

});

productsPerDay.addEventListener('input', () => {
    const range3Tooltip = document.getElementById('showRangeValue3')
    const range4Tooltip = document.getElementById('showRangeValue4')
    const maxRangeValue3 = monitorCompetitorProducts.getAttribute('max')
    const minRangeValue3 = monitorCompetitorProducts.getAttribute('min')
    const maxRangeValue4 = range4.getAttribute('max')
    const minRangeValue4 = range4.getAttribute('min')

    // for range 3
    if (parseInt(productsPerDay.value)) {
        monitorCompetitorProducts.value = parseInt(productsPerDay.value) * (10 / 100)
        range3Tooltip.style.left = `${(monitorCompetitorProducts.value - minRangeValue3) / (maxRangeValue3 - minRangeValue3) * 99.5}%`
        range3Tooltip.textContent = monitorCompetitorProducts.value
    } else {
        monitorCompetitorProducts.value = 0
        range3Tooltip.textContent = minRangeValue3
    }

    // for range 4
    if (parseInt(productsPerDay.value)) {
        range4.value = parseInt(productsPerDay.value) * (2 / 100)
        console.log('value', range4.value);

        range4Tooltip.style.left = `${(monitorCompetitorProducts.value - minRangeValue4) / (maxRangeValue4 - minRangeValue4) * 17}%`
        range4Tooltip.textContent = range4.value
    } else {
        monitorCompetitorProducts.value = 0
        range4Tooltip.textContent = minRangeValue4
    }


})

monitorCompetitor.addEventListener("change", () => {
    testChooseCurrency()
});

// for range and tooltip
for (let i = 1; i <= totalRangesLength; i++) {
    const range = document.getElementById(`range${i}`);
    const showRangeValue = document.getElementById(`showRangeValue${i}`)
    const maxRangeValue = range.getAttribute('max')
    const minRangeValue = range.getAttribute('min')
    showRangeValue.textContent = range.value
    showRangeValue.style.left = `${(range.value - minRangeValue) / (maxRangeValue - minRangeValue) * 99.5}%`


    range.addEventListener("input", () => {
        testChooseCurrency()

        //         // for moving range tooltip
        showRangeValue.textContent = range.value
        showRangeValue.style.left = `${(range.value - minRangeValue) / (maxRangeValue - minRangeValue) * 99.5}%`
        if (range.value == minRangeValue) {
            showRangeValue.style.left = `${0}%`
        }
        //     }
        // }
    });
}



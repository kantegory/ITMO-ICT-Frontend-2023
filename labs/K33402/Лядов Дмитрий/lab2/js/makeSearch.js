async function search(inputValue, checkbox,sales) {
    
    for (i = 0; i < checkbox.length; i++) {
        if (checkbox[i]) {
            if(sales){
                loadSales(`type=${i + 1}&q=${inputValue}`)
            }
            else{
                loadProducts(`type=${i + 1}&q=${inputValue}`)
            }
            
        }
    }
}
async function makeSearch(sales=false) {
    checks = []
    for (i = 1; i < 5; i++)
        checks.push(document.getElementById(`checkbox${i}`).checked)
    search(document.getElementById('searchbox').value, checks,sales)
}

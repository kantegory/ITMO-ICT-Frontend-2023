
async function search(inputValue, checkbox) {

    for (i = 0; i < checkbox.length; i++) {
        if (checkbox[i]) {
            console
            loadServices(`Group=${i + 1}&q=${inputValue}`)
        }
    }
}
async function makeSearch() {

    checks = []
    for (i = 1; i < 4; i++)
        checks.push(document.getElementById(`checkbox${i}`).checked)

    search(document.getElementById('searchbox').value, checks)
}



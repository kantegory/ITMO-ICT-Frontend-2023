const search = function () {
    // const searchInput = document.getElementById('search-input')
    // console.log(searchInput.value)
    let i = 0
    for (const searchInputElement of document.querySelectorAll(".search-form")) {
        console.log(i)
        i++
        console.log(searchInputElement)
        console.log(searchInputElement.type)
        const text = searchInputElement.value
        console.log(text)
    }
}

const clear = function () {
    const searchInput = document.getElementById('search-input')
    searchInput.clear()
    console.log('input cleared!')
}
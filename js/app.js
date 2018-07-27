const titleDOM = document.getElementById('title')
title.innerHTML = 'What will you do today?'

const inputDOM = document.getElementById('input')
const buttonDOM = document.getElementById('add')
const listsDOM = document.getElementById('lists')

const localStorage = window.localStorage

const render = function () {
    const listItems = JSON.parse(localStorage.getItem('lists'))

    listsDOM.innerHTML = listItems.map(function (val, index) {
        return `<li onclick='deleteItem(${index})' class='list-item'>${val}</li>`
    }).join('')
}

const getItems = function () {
    return JSON.parse(localStorage.getItem('lists'))
}

const addItem = function (val) {
    if (localStorage.getItem('lists') == null) {
        localStorage.setItem('lists', JSON.stringify([]))
    }
    if (val != '') {
        const storedData = getItems()
        storedData.unshift(val)
        localStorage.setItem('lists', JSON.stringify(storedData))
    }
}

const deleteItem = function (index) {
    const data = getItems()
    delete data[index]
    filteredData = data.filter(function (x) { return data != null })
    localStorage.setItem('lists', JSON.stringify(filteredData))

    render()
}

const printDOM = document.getElementById('print')

printDOM.addEventListener('click', function() {
    window.print()
})

buttonDOM.addEventListener('click', function() {
    addItem(inputDOM.value)

    inputDOM.value = ''
    inputDOM.focus()

    render()
})

render()
const listsContainer = document.querySelector('[data-lists]')

let lists = [{
    id: 1,
    name: 'name'
}, {
    id: 2,
    name: 'todo'
}]


function render() {
    // <li class="list-name">Work</li>
     clearElement(listsContainer)
     lists.forEach(list => {
        const listElement = documenet.createElement('li')
        listElement.classList.add("list-name")
        listElement.innerText = list
        listsContainer.appendChild(listElement)
     })
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}


render()
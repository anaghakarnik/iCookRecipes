const getElement = (selector) => {
    const element = document.querySelector(selector)
    if (element) return element;
    throw Error(
        'Please double check your class names, there is no ${selector} class'
    )
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', () => {
    links.classList.toggle('show-links')
})

const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear

const liItem = document.querySelectorAll('.filter ul li')
const card = document.querySelectorAll('.recipe-ft')

liItem.forEach(li => {
    li.onclick = function () {
        //active
        liItem.forEach(li => {
            li.className = ""
        })
        li.className = "active"

        // filter
        const value = li.textContent
        card.forEach(cd => {
            cd.style.display = 'none'
            const str = cd.getAttribute('data-filter')
            if (str.includes(value.toLowerCase()) || value == 'all') {
                if(value == 'vegetarian' && str.includes('nonvegetarian'))
                {
                    cd.style.display = 'none'
                }
                else
                {
                    cd.style.display = 'block'
                }
            }
        })
    }
})
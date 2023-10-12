// Define variables
const tabLabels = document.querySelectorAll('.tabs li')
const tabPanes = document.getElementsByClassName('tab-contents')

async function activateTab (e) {
    e.preventDefault()

    // Deactivate all tabs
    tabLabels.forEach(function (label, index) {
        label.classList.remove('active')
        label.classList.add('disabled')
    })

    await new Promise(resolve => {
        const activeTabPanel = [...tabPanes].find(panel => panel.classList.contains('active'))
        activeTabPanel.classList.add('fade-out')
        activeTabPanel.addEventListener('animationend', () => {
            activeTabPanel.classList.remove('active', 'fade-out')
            resolve()
        }, { once: true })
    })
    // Activate current tab
    e.target.closest('li').classList.add('active')
    const clickedTab = e.target.closest('a').getAttribute('href')
    document.querySelector(clickedTab).classList.add('active')
    tabLabels.forEach(label => label.classList.remove('disabled'))
}

// Apply event listeners
tabLabels.forEach(function (label, index) {
    label.addEventListener('click', activateTab)
})

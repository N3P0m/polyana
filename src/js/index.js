// Define variables
const tabLabels = document.querySelectorAll('.tabs li')
const tabPanes = document.getElementsByClassName('tab-contents')

function activateTab (e) {
  e.preventDefault()

  // Deactivate all tabs
  tabLabels.forEach(function (label, index) {
    label.classList.remove('active')
  });
  [].forEach.call(tabPanes, function (pane, index) {
    pane.classList.remove('active')
  })

  // Activate current tab
  e.target.closest('li').classList.add('active')
  const clickedTab = e.target.closest('a').getAttribute('href')
  document.querySelector(clickedTab).classList.add('active')
}

// Apply event listeners
tabLabels.forEach(function (label, index) {
  label.addEventListener('click', activateTab)
})

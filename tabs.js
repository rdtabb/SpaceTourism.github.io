const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel)
});

function changeTabPanel(e) {
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");

    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode

    mainContainer.querySelectorAll('[role="tabpanel"]').forEach((panel) =>
        panel.setAttribute('hidden', true))

    mainContainer.querySelector(`#${targetPanel}`).removeAttribute('hidden')


    console.log(mainContainer)
}
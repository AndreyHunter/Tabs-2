const tabsButtons = document.querySelectorAll('.tabs__button');
const tabsContent = document.querySelectorAll('.tabs__content');

tabsButtons.forEach((tabButton) => {
    tabButton.addEventListener('click', () => {
        let tabId = tabButton.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if (!tabButton.classList.contains('active')) {
            tabsButtons.forEach((tabButton) => {
                tabButton.classList.remove('active');
            });

            tabsContent.forEach((tabsItem) => {
                tabsItem.classList.remove('active');
            });
           
            tabButton.classList.add('active');
            currentTab.classList.add('active');
        };
    });
});

document.querySelector('.tabs__button').click();
function createTabs(wrapper, item, content) {

    let tabWrapper = document.querySelector(wrapper),
        tabItem = document.querySelectorAll(item),
        tabContent = document.querySelectorAll(content),
        strSrch = item.slice(1);

    function hideTabContent(a = 1) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent();

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    tabWrapper.addEventListener('click', function(e) {
        let target = e.target;

        if (target && target.classList.contains(strSrch)) {
            for(let i = 0; i < tabItem.length; i++) {
                if (target == tabItem[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
}
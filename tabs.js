document.addEventListener("DOMContentLoaded", function() { 
  var tabHeaders = document.getElementsByClassName('tabs__header');
  var tabContent = document.getElementsByClassName('tabs__content');

  function openTab(tabId) {
    for (i = 0; i < tabHeaders.length; i++) {
      tabHeaders[i].classList.remove('tabs__header--active');
    }

    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].classList.remove('tabs__content--active');
    }

    event.target.classList.add('tabs__header--active');

    document.getElementById('tabs__content--' + tabId).classList.add('tabs__content--active');
  }

  for (i = 0; i < tabHeaders.length; i++) {
    tabHeaders[i].addEventListener('click', function() {
      openTab(this.innerHTML.replace(/\s+/g, '-').toLowerCase());
    });
  }
});

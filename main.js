var allButtons = document.querySelectorAll('button');
var globalListener = document.querySelector('body');
var allTabs = document.querySelectorAll('.all-tabs-js');
var allCoursesTab = document.querySelector('.all-courses-tab-js');
var collectionsTab = document.querySelector('.collections-tab-js');
var wishlistTab = document.querySelector('.wishlist-tab-js');
var archivedTab = document.querySelector('.archived-tab-js');

globalListener.addEventListener('click', clickHandler);

function clickHandler () {
  if (event.target.classList.contains('ac-button-js')) {
    selectTab(allCoursesTab);
  }
  else if (event.target.classList.contains('link-ac-tab-js')) {
    selectTab(allCoursesTab);
  }
  else if (event.target.classList.contains('c-button-js')) {
    selectTab(collectionsTab);
  }
  else if (event.target.classList.contains('w-button-js')) {
    selectTab(wishlistTab);
  }
  else if (event.target.classList.contains('a-button-js')) {
    selectTab(archivedTab);
  }
  else if (event.target.classList.contains('close-banner')) {
    closeBanner();
  }
}

function selectTab(chosenTab) {
  changeSelected();
  removeOtherTabs();
  chosenTab.classList.remove('hidden');
}

function changeSelected () {
  for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function removeOtherTabs () {
  for (var i = 0; i < allTabs.length; i++) {
    allTabs[i].classList.add('hidden');
  }
}

function closeBanner() {
  var parent = event.target.closest('.all-courses-tab');
  parent.remove();
}

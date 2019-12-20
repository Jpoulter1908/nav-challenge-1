var allButtons = document.querySelectorAll('button');
var globalListener = document.querySelector('body');
var allTabs = document.querySelectorAll('.all-tabs');
var allCoursesTab = document.querySelector('.all-courses-tab');
var collectionsTab = document.querySelector('.collections-tab');

globalListener.addEventListener('click', clickHandler);
globalListener.addEventListener('click', tabHandler);

function clickHandler () {
  if (event.target.classList.contains('button-option')) {
    changeSelected();
  }
  else if (event.target.classList.contains('close-banner')) {
    closeBanner();
  }
}

function changeSelected () {
  for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function closeBanner() {
  var parent = event.target.closest('.all-courses-tab');
  parent.remove();
}

function tabHandler () {
  if (event.target.classList.contains('ac-tab')) {
    removeTheTabs();
    allTabs.classList.remove('hidden');

  }
  else if (event.target.classList.contains('c-tab')) {

  }
  else if (event.target.classList.contains('w-tab')) {

  }
  else if (event.target.classList.contains('a-tab')) {

  }
}

function removeTheTabs () {
  for (var i = 0; i < allTabs.length; i++) {
    allTabs[i].classList.add('hidden');
  }
}

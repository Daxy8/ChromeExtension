document.addEventListener('DOMContentLoaded', function(event) {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.query({"active": true, "lastFocusedWindow": true}, function (tabs) {
      
      var elem = document.getElementById("sideNav");
      elem.parentNode.removeChild(elem);
      console.log("It is working");

    });
  }, false);
}, false);

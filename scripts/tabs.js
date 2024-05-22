// This javascript implementation will allow for tab content to be displayed and hidden - NOT CODESTITCH, independent

// tabID will be the ID of the content
// element will tbe the tab button element that was clicked
function showTab(tabId, element) {


    // TAB CONTENT:
    // First selects all elements with the class tab-content and puts them in tabs variable that is under constant variable which never changes
    const tabs = document.querySelectorAll('.tab-content');
    // Then iterates over each element in the list of tabs with content and removes the 'active' class one, hiding all the tab contents.
    tabs.forEach(tab => tab.classList.remove('active'));

    // Secondly, selects the tab content element with the id tabId and stores it in the selected tab variable
    const selectedTab = document.getElementById(tabId);
    // Then checks if the selected tab is not empty
    if (selectedTab) {
        // If not, it will add the active class to the selected tab element
        selectedTab.classList.add('active');
    }


    // TAB BUTTON:
    // Thirdly, it will select all elements with the class 'tab-button' and stores them in the buttons variable
    const buttons = document.querySelectorAll('.tab-button');
    // Then iterates over each element in the list of buttons and removes the selected class from each
    buttons.forEach(button => button.classList.remove('selected'));

    // Finally, adds the selected class to the tab button that was clicked, highlighting it
    element.classList.add('selected');
}


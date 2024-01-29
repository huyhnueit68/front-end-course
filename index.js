// defind list tabs
var listTabs = [
    {
        titleGroup: "USER SETTING",
        apps: [
            "USER",
            "USER ROLE",
            "PROJECT", 
            "OPEN API"
        ]
    },
    {
        titleGroup: "OTHER SETTING",
        apps: [
            "BLOCK,LEVEL,UNIT",
            "UNIT, LAYOUT TYPE",
            "COST CODE",
            "COST CENTER",
            "COMPANIES"
        ]
    },
    {
        titleGroup: "APP SETTING",
        apps: [
            "APP MAIN",
            "DEMS"
        ]
    }
];

var currentTabs = 'USER';
var isOpenSideBar = true;

/**
 * Func set current tabs
 * @param {*} tabName 
 * CreatedBy: PQ Huy (26.01.2024)
 */
function handActiveTab(tabName) {
    currentTabs = tabName;
}


/**
 * Func display side bar tabs
 * @param {*} array list tabs
 * CreatedBy: PQ Huy (25.01.2024)
 */
function displayListTabs(array) {
    const outputDiv = document.getElementById('page__sidebar');
    
    outputDiv.innerHTML = `
        <div class="page__sidebar--btn-arrow">
            <div class="btn-arrow__icon"></div>
        </div>
    `;

    array.forEach((item, index) => {
        let  appsHTML = '';

        item.apps.forEach(app => {
            appsHTML = `${appsHTML} 
                <div class='group-tabs__app ${currentTabs == app && 'group-tabs__app--active'}'>
                    ${app}
                </div> 
            `;
        })

        // create div tag by js
        const listItem = document.createElement('div');
        const hor_bar = `<div class='group-hor--bar'></div>`

        listItem.innerHTML = `
            <div class='group-tabs'>
                <div class='group-tabs__title'>${item.titleGroup}</div>
                ${appsHTML}
                ${(index + 1) == array?.length ? '' : hor_bar}
            </div>
        `;
        
        outputDiv.appendChild(listItem);
    });

    setEventTabs();


    // set is open side bar
    var currentClass = outputDiv.className;
    const divContent = document.getElementsByClassName('setting-page__content');
    
    if(!isOpenSideBar) {
        outputDiv.className =  `${currentClass} side-bar--close`;

        if(divContent?.length > 0) {
            divContent[0].className = `${divContent[0].className} content-full`;
        }
    } else {
        outputDiv.className =  `${currentClass}`.replace('side-bar--close', '');

        if(divContent?.length > 0) {
            divContent[0].className = `${divContent[0].className}`.replace('content-full', '');
        }
    }
}

// Call the function to display the array
displayListTabs(listTabs);



// set event click active tag
function setEventTabs() {
    var lstTabs = document.getElementsByClassName('group-tabs__app');
    for (let index = 0; index < lstTabs.length; index++) {
        lstTabs[index]?.addEventListener('click', function (event) {
            handActiveTab(event?.srcElement?.innerText);
            displayListTabs(listTabs);
        });
    }

    document.getElementsByClassName('page__sidebar--btn-arrow')[0]
        .addEventListener('click', function(event) {
            isOpenSideBar = !isOpenSideBar;
            displayListTabs(listTabs);

        });
}

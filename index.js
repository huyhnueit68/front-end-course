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

/**
 * Func display side bar tabs
 * @param {*} array list tabs
 * CreatedBy: PQ Huy (25.01.2024)
 */
function displayListTabs(array) {
    const outputDiv = document.getElementById('page__sidebar');
    
    array.forEach((item, index) => {
        let  appsHTML = '';

        item.apps.forEach(app => {
            appsHTML =  `${appsHTML} <div class='group-tabs__app'>${app}</div> `;
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
}

// Call the function to display the array
displayListTabs(listTabs);

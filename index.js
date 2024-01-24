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


function displayListTabs(array) {
    const outputDiv = document.getElementById('page__sidebar');
    array.forEach(item => {
        let  appsHTML = '';

        item.apps.forEach(app => {
            appsHTML =  `${appsHTML} 
            <div class='group-tabs__app'>${app}</div> `;
        })

        const listItem = document.createElement('div');
        listItem.innerHTML = `
            <div class='group-tabs'>
                <div class='group-tabs__title'>${item.titleGroup}</div>
                ${appsHTML}
            </div>
        `;
        
        outputDiv.appendChild(listItem);
    });
}

// Call the function to display the array
displayListTabs(listTabs);

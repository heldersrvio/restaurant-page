export default function createMainFrame(clear, tab1, tab2, tab3){
    const content = document.querySelector('#content');

    const getSelectedTab = function(){
        return selectedTab;
    };

    const createRestaurantNameAndButtons = function(){
        const variableContent = document.createElement('div');
        variableContent.id = "variable-content";

        const restaurantNameDiv = document.createElement('div');
        restaurantNameDiv.id = 'restaurant-name';
        const h1 = document.createElement('h1');
        h1.textContent = "ネバーランド喫茶店";
        restaurantNameDiv.appendChild(h1);

        content.appendChild(restaurantNameDiv);

        const buttonsSection = document.createElement('div');
        buttonsSection.id = "buttons-section";
        const homeTabButton = document.createElement('button');
        homeTabButton.textContent = "ホーム";
        homeTabButton.classList.add("tab-button");
        homeTabButton.id = "home-tab-button";
        homeTabButton.addEventListener('click', e => {
            clear();
            tab1();
        });
        buttonsSection.appendChild(homeTabButton);
        const menuTabButton = document.createElement('button');
        menuTabButton.textContent = "御品書き";
        menuTabButton.classList.add("tab-button");
        menuTabButton.id = "menu-tab-button";
        menuTabButton.addEventListener('click', e => {
            clear();
            tab2();
        });
        buttonsSection.appendChild(menuTabButton);
        const contactTabButton = document.createElement('button');
        contactTabButton.textContent = "メッセージ";
        contactTabButton.classList.add("tab-button");
        contactTabButton.id = "contact-tab-button";
        contactTabButton.addEventListener('click', e => {
            clear();
            tab3();
        });
        buttonsSection.appendChild(contactTabButton);

        content.appendChild(buttonsSection);

        content.appendChild(variableContent);

    }();

    return {
        getSelectedTab,
    };
};
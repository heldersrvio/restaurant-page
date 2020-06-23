export default function createMenu(){
    const content = document.querySelector('#variable-content');

    const createMenuDiv = function(){
        const menu = document.createElement('div');
        menu.id = "menu";

        const section1 = document.createElement('h3');
        section1.id = "section1";
        section1.textContent = "珈琲"
        menu.appendChild(section1)

        menu.appendChild(document.createElement('br'));

        const coffeeList = document.createElement('ul');
        coffeeList.id = "coffee-list";
        const cLOption1 = document.createElement('li');
        cLOption1.textContent = "米国珈琲・２７５円";
        coffeeList.appendChild(cLOption1);
        const cLOption2 = document.createElement('li');
        cLOption2.textContent = "カフェラテ・３４０円";
        coffeeList.appendChild(cLOption2);
        const cLOption3 = document.createElement('li');
        cLOption3.textContent = "カプチーノ・１５０円";
        coffeeList.appendChild(cLOption3);
        const cLOption4 = document.createElement('li');
        cLOption4.textContent = "エスプレッソ・１００円";
        coffeeList.appendChild(cLOption4);
        const cLOption5 = document.createElement('li');
        cLOption5.textContent = "フラットホワイト・３００円";
        coffeeList.appendChild(cLOption5);
        menu.appendChild(coffeeList);

        menu.appendChild(document.createElement('br'));

        const section2 = document.createElement('h3');
        section2.id = "section2";
        section2.textContent = "茶";
        menu.appendChild(section2);

        menu.appendChild(document.createElement('br'));

        const teaList = document.createElement('ul');
        teaList.id = "tea-list";
        const tLOption1 = document.createElement('li');
        tLOption1.textContent = "温かい御抹茶・１３０円";
        teaList.appendChild(tLOption1);
        const tLOption2 = document.createElement('li');
        tLOption2.textContent = "アイス御抹茶・９０円";
        teaList.appendChild(tLOption2);
        const tLOption3 = document.createElement('li');
        tLOption3.textContent = "紅茶・１３０円";
        teaList.appendChild(tLOption3);
        const tLOption4 = document.createElement('li');
        tLOption4.textContent = "烏龍茶・１５０円";
        teaList.appendChild(tLOption4);
        const tLOption5 = document.createElement('li');
        tLOption5.textContent = "緑茶・１５０円";
        teaList.appendChild(tLOption5);
        menu.appendChild(teaList);

        menu.appendChild(document.createElement('br'));

        const section3 = document.createElement('h3');
        section3.id = "section3";
        section3.textContent = "和菓子";
        menu.appendChild(section3);

        menu.appendChild(document.createElement('br'));

        const sweetList = document.createElement('ul');
        sweetList.id = "sweet-list";
        const sLOption1 = document.createElement('li');
        sLOption1.textContent = "苺パフェ・１５００円";
        sweetList.appendChild(sLOption1);
        const sLOption2 = document.createElement('li');
        sLOption2.textContent = "餡蜜・８００円";
        sweetList.appendChild(sLOption2);
        const sLOption3 = document.createElement('li');
        sLOption3.textContent = "お餅・６７０円";
        sweetList.appendChild(sLOption3);
        const sLOption4 = document.createElement('li');
        sLOption4.textContent = "団子・６００円";
        sweetList.appendChild(sLOption4);
        const sLOption5 = document.createElement('li');
        sLOption5.textContent = "冷製善哉・１０００円";
        sweetList.appendChild(sLOption5);
        menu.appendChild(sweetList);

        content.appendChild(menu);

    }();
};
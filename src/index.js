import createMainFrame from "./main-frame";
import createHomePage from "./home-page";
import createMenu from './menu';
import createContactPage from './contact';

const clear = function(){
    const variableContent = document.querySelector('#variable-content');
    while (variableContent.hasChildNodes()){
        variableContent.removeChild(variableContent.firstChild);
    }
};


createMainFrame(clear, createHomePage, createMenu, createContactPage);
createHomePage();
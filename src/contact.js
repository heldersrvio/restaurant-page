export default function createContactPage(){
    const content = document.querySelector('#variable-content');

    const createContactPageDiv = function(){
        const contactPage = document.createElement('div');
        contactPage.id = "contact";

        const header = document.createElement('h2');
        header.textContent = "連絡";
        contactPage.appendChild(header);

        const form = document.createElement('form');
        form.appendChild(document.createElement('br'));
        const emailInput = document.createElement('input');
        emailInput.type = "text";
        emailInput.placeholder = "メールアドレス";
        emailInput.name = "email";
        emailInput.id = "email";
        form.appendChild(emailInput);
        form.appendChild(document.createElement('br'));
        const message = document.createElement('textarea');
        message.placeholder = "メッセージ";
        message.id = "message";
        message.cols = "60";
        message.rows = "10";
        form.appendChild(message);
        form.appendChild(document.createElement('br'));
        const submitButton = document.createElement('input');
        submitButton.type = "submit";
        submitButton.value = "送信";
        submitButton.id = "submit";
        form.appendChild(submitButton);
        contactPage.append(form);

        content.append(contactPage);

    }();
};
export default function createHomePage(){
    const content = document.querySelector('#variable-content');

    const createMainImage = function(){
        let mainImageDiv = document.createElement('div');
        mainImageDiv.id = 'main-image';
        let img = document.createElement('img');
        img.src = "../images/coffee-shop.jpg";
        mainImageDiv.appendChild(img);

        content.appendChild(mainImageDiv);
    }();

    const createDescription = function(){
        let description = document.createElement('div');
        description.id = 'description';

        let p1 = document.createElement('p');
        p1.textContent = "ネバーランドへようこそ！弊店は小さく心地良い喫茶店で誰でも歓迎致します。お客様のお好みと欲望は弊店の優先でございます。";
        description.appendChild(p1);

        let p2 = document.createElement('p');
        p2.textContent = "毎月、弊店のバリスタ達は新鮮なレシピとコーヒーを御品書きに載せるように頑張っています。ですからどうぞ弊店の御品書きをご覧下さい。";
        description.appendChild(p2);

        let p3 = document.createElement('p');
        p3.textContent = "何か問題があったらどうぞ連絡頁で弊店の管理人にメールをお送りください。";
        description.appendChild(p3);

        content.appendChild(description);
    }();
};


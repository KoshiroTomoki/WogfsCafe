//定義する順番に注意
// サムネイル
const swiperThumbnail = new Swiper(".swiper-thumbnail", {
    spaceBetween: 0, //スライド感の余白
    slidesPerView: 6, //一度に表示するスライド枚数
    watchSlidesProgress: true //スライダーの動きにスライドを追従させる
});
// スライダー
const slider = new Swiper(".slider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    loop: true,
    thumbs: {
        swiper: swiperThumbnail //連動したいスライダー（swiperThumbnailを指定する）
    }
});



const fadeInTarget = document.querySelectorAll('.fadeInTarget');

function observation() {
    // 各要素に対して処理を繰り返す
    fadeInTarget.forEach(function (target) {
        // 要素の位置情報を取得
        const targetRect = target.getBoundingClientRect();

        // 画面内に入っているかどうかを判定
        if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
            // 画面内に入った場合、クラスを付与
            target.classList.add('animate__fadeIn'); // yourClassNameは付与したいクラス名に置き換えてください
        } else {
            // 画面外に出た場合、クラスを除去
            target.classList.remove('animate__fadeIn');
        }
    });
};

// スクロールイベントを追加
window.addEventListener('scroll', observation);








/* JS_drawer v1.0.0 ,2022 */
/* create by syo motoyama,2022*/

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggleButton');
    const drawerMenu = document.getElementById('drawerMenu');

    // トグルボタンをクリックした際の処理
    toggleButton.addEventListener('click', function (event) {
        event.stopPropagation(); // クリックイベントが親要素に伝播しないようにします
        drawerMenu.classList.toggle('open');
        toggleButton.classList.toggle('close');
    });

    // ドキュメント内のアンカーリンクを取得します
    const anchorLinks = document.querySelectorAll('a');
    for (let i = 0; i < anchorLinks.length; i++) {
        // アンカーリンクがクリックされた際の処理
        anchorLinks[i].addEventListener('click', function () {
            drawerMenu.classList.remove('open');
            toggleButton.classList.remove('close');
        });
    }

    // ドキュメント内をクリックした際の処理
    document.addEventListener('click', function (event) {
        const targetElement = event.target;

        // ドロワーメニューが開いている場合に限り、ドロワーメニュー外をクリックで閉じます
        if (drawerMenu.classList.contains('open') && !drawerMenu.contains(targetElement) && targetElement !== toggleButton) {
            drawerMenu.classList.remove('open');
            toggleButton.classList.remove('close');
        }
    });
});
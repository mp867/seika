/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

// ページの内容が読み込まれた後に実行されるイベントリスナーを追加
window.addEventListener('DOMContentLoaded', event => {

    // ナビバーを縮小する関数
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav'); // ナビバーの要素を取得
        if (!navbarCollapsible) {
            return; // ナビバーがない場合は処理を終了
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink') // スクロール位置がトップの場合、クラスを削除
        } else {
            navbarCollapsible.classList.add('navbar-shrink') // スクロール位置がトップ以外の場合、クラスを追加
        }
    };

    // ページ読み込み時にナビバーを縮小
    navbarShrink();

    // ページがスクロールされたときにナビバーを縮小する処理を実行
    document.addEventListener('scroll', navbarShrink);

    // Bootstrapのscrollspy機能をメインナビバーに適用
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%', // ルートマージンの設定
        });
    };

    // レスポンシブナビバーのトグルが表示されているときに、リンクをクリックするとナビバーを閉じる
    const navbarToggler = document.body.querySelector('.navbar-toggler'); // ナビバートグルの要素を取得
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link') // 全てのナビリンクを取得
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click(); // トグルが表示されている場合、トグルをクリック
            }
        });
    });

});

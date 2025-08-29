$(function () {
    //ボタンをクリック
    $("a").click(function () {
        //テキスト内容を取得
        let dis = $(this/**a要素を取得 */).html() - 1;
        /**disが1の場合1-1=0になる、disが2の場合2-1=1,... */

        //コンテンツ位置までのアニメーション
        $("#sections").animate({
            "left": dis * -700 + "px"
        }, 300);/** left is moving left,dis * -700 is "when dis is 0,0*-700,so there is no move.when dis is 1,moving.When dis is 2,movingどんどん倍となる"*/

        //背景画像のアニメーション
        $("body").css(
            "background-position", dis * -20 + "px 100%"
        );
        $("#bg1").css(
            "background-position", dis * -150 + "px 100%"
        );
        $("#bg2").css(
            "background-position", dis * -700 + "px 100%"
        );

        //ボタンのスタイル変更
        $(".current").removeClass("current");
        $(this).addClass("current");

        return false;/**(click)tag使う度にこれを書く */
    });
});
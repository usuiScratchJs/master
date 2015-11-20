


$(function(){

    /*クリックしたときのファンクションをまとめて指定*/
    $('.tabBlock li').click(function() {

        /*.index()を使いクリックされたタブが何番目かを調べ、
        indexという変数に代入。*/
        var index = $('.tabBlock li').index(this);
		
        /*tabInnerとp（文章）を一度すべて非表示にし、*/
        $('.tabInner p')
		.css('display','none');

       /*クリックされたタブと同じ順番のコンテンツを表示。
	   （HTMLの順番のような気がする）*/
        $('.tabInner p')
		.eq(index)
		.css('display','block');

       /*一度タブについているクラスselectを消し※selectにドットはいらない！*/
        $('.tabBlock li').removeClass('select');

        /*クリックされたタブのみにクラスselectをつけます。*/
        $(this).addClass('select');

    });

});




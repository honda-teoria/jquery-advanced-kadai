$(function(){
  //ボタンアニメーション
  $('.button-more').on('mouseover',function(){
    $(this).animate({
      opacity: 0.5,
      marginLeft: 20,
    }, 100);
  });
  $('.button-more').on('mouseout',function(){
    $(this).animate({
      opacity: 1.0,
      marginLeft: 0,
    }, 100);
  });
  //カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
  });

  //送信ボタンクリック時の処理
  $('#submit').on('click',function(event){
    //formタグによる送信を拒否
    event.preventDefault();
    //入力チェックした結果をresultに格納
    let result = inputCheck();
    //エラー判定とメッセージを取得
    let error = result.error;
    let message = result.message;

    //エラーがなかったらフォームを送信する
    if(error == false) {
      //フォーム送信は実際には行わず、送信成功メッセージのみ表示
      alert('お問い合わせを送信しました。')
    } else {
      //エラーメッセージの表示
      alert(message);
    }
  });

  //フォーカスが外れたとき（blur）にフォームの入力チェクする
  $('#name').blur(function(){
    inputCheck();
  });
  $('#furigana').blur(function(){
    inputCheck();
  });
  $('#email').blur(function(){
    inputCheck();
  });
  $('#tel').blur(function(){
    inputCheck();
  });
  $('#message').blur(function(){
    inputCheck();
  });
  $('#agree').blur(function(){
    inputCheck();
  });
  $('#prefecture').blur(function(){
    inputCheck();
  });

  //お問い合わせフォームの入力チェック
  function inputCheck(){
    //エラーのチェック
    let result;
    //エラーメッセージのテキスト
    let message = '';
    //エラーがなければfalse、エラーがあればtrue
    let error = false;

    //お名前チェック
    if($('#name').val()==''){
      //
      $('#name').css('background-color','#f79999');
      error = true;
      message += 'お名前を入力してください。\n';
    } else {
      //エラーなし
      $('#name').css('background-color', '#fafafa');
    }

    //フリガナチェック
    if($('#furigana').val()==''){
      //
      $('#furigana').css('background-color','#f79999');
      error = true;
      message += 'フリガナを入力してください。\n';
    } else {
      //エラーなし
      $('#furigana').css('background-color', '#fafafa');
    }

    //お問い合わせチェック
    if($('#message').val()==''){
      //エラーあり
      $('#message').css('background-color','#f79999');
      error = true;
      message += 'お問い合わせ内容を入力してください。\n';
    } else {
      //エラーなし
      $('#message').css('background-color', '#fafafa');
    }

    //メアドチェック
    if($('#email').val()=='' || $('#email').val().indexOf('@') == -1 || $('#email').val().indexOf('.') == -1){
      //
      $('#email').css('background-color','#f79999');
      error = true;
      message += 'メールアドレスが未記入、または「@」「.」が含まれていません。\n';
    } else {
      //エラーなし
      $('#email').css('background-color', '#fafafa');
    }

    //電話番号チェック
    if($('#tel').val() !='' && $('#tel').val().indexOf('-') == -1){
      //
      $('#tel').css('background-color','#f79999');
      error = true;
      message += '電話番号に「-」が含まれていません。\n';
    } else {
      //エラーなし
      $('#tel').css('background-color', '#fafafa');
    }

    //都道府県チェック
    if($('#prefecture').val() == "" ) {
      $('#prefecture').css('background-color','#f79999');
      error = true;
      message += '都道府県を選択して下さい。\n'
    } else {
      $('#prefecture').css('background-color', '#fafafa');
    }

    //個人情報のチェックボックスのチェック
    if($('#agree').prop('checked') == false) {
      error = true;
      message += '個人情報の取り扱いについてご同意いただける場合は、チェックボックスにチェックして下さい。\n'
    }

    //エラーの有無で送信ボタンを切り替え
    if(error == true){
      $('#submit').attr('src','images/button-submit.png');
    } else {
      $('#submit').attr('src','images/button-submit-blue.png');
    }

    //オブジェクトでエラー判定とメッセージを返す
    result = {
      error: error,
      message: message
    }

    //戻り値としてエラーがあるかどうかを返す
    return result;

  }
});


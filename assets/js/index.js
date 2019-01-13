  /**
  * STEP.1 元となるコンテナを用意。画面に描画される要素は全てこの下にぶら下がる
  */
 var stage = new PIXI.Container();

 /**
  * STEP.2 描画するためのレンダラーを用意。引数は描画領域の幅、高さ、オプション
  */
 var renderer = PIXI.autoDetectRenderer(640, 360, {
   antialias:        true,     // アンチエイリアスをONに
   backgroundColor : 0x00ffd4, // 背景色
   //  transparent:      true,     // 背景を透過にしたい場合はこちらを指定
 });

 /**
  * STEP.3 #stage のDOM要素に view を追加
  */
 document.getElementById('stage').appendChild(renderer.view);

 /**
  * animation関数を定義
  */
 var animation = function () {
   // 再帰的に次のアニメーションフレームで animation関数を呼び出す
   requestAnimationFrame(animation);

   // 描画
   renderer.render(stage);
 };

 /**
  * animation関数を呼び出す
  */
 animation();

  /**
   * 画像パスを指定し、テクスチャを生成する
   */
  var ttrGirl = PIXI.Texture.fromImage('../pixi01/assets/img/char.png');
  
  /**
   * テクスチャからスプライトを生成する
   */
  var sprGirl = new PIXI.Sprite(ttrGirl);

  /**
   * スプライトを、コンテナであるstageの子要素として追加する
   */
  stage.addChild(sprGirl);
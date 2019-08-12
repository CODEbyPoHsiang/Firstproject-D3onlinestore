// 一組定義好的JSON格式，裡面存放神奇寶貝的名稱和對照的圖片檔名
var list = '{ "pokemon" : [' +
    '{ "name":"李奧瑞克的王冠" , "imgsrc":"a01","text":"頭盔"},' +
    '{ "name":"塔斯克與西歐" , "imgsrc":"a02" ,"text":"手套"},' +
    '{ "name":"怒濤之心" , "imgsrc":"a03","text":"胸甲" },' +
    '{ "name":"深淵挖掘褲" , "imgsrc":"a04","text":"褲子" },' +
    '{ "name":"拉斯瑪的骨靴" , "imgsrc":"a05","text":"鞋" },' +
    '{ "name":"不死鳥之羽" , "imgsrc":"a06","text":"頭盔" },' +
    '{ "name":"昇靈護腕" , "imgsrc":"a07","text":"護腕" },' +
    '{ "name":"地獄貓護腰" , "imgsrc":"a08","text":"腰帶" },' +
    '{ "name":"莫度盧的承諾" , "imgsrc":"b01","text":"斧" },' +
    '{ "name":"神聖裂斧" , "imgsrc":"b02","text":"斧" },' +
    '{ "name":"壞滅" , "imgsrc":"b03","text":"釘錘" },' +
    '{ "name":"詆誹者" , "imgsrc":"b04","text":"劍" },' +
    '{ "name":"觀靈符" , "imgsrc":"c01","text":"護身符" },' +
    '{ "name":"孫悟空的戲法" , "imgsrc":"c02","text":"護身符" },' +
    '{ "name":"克己" , "imgsrc":"c03","text":"戒指" },' +
    '{ "name":"布里葛斯之怒" , "imgsrc":"c04","text":"戒指" },' +
    '{ "name":"設計圖:牧牛仗" , "imgsrc":"d01","text":"鐵匠設計圖" },' +
    '{ "name":"亞瑞特之戰掛氈" , "imgsrc":"d02","text":"製作材料" },' +
    '{ "name":"太極" , "imgsrc":"d03","text":"寶石" },' +
    '{ "name":"卡爾蒂姆夜蝶" , "imgsrc":"d04","text":"製作材料" },' +
    '{ "name":"無盡混沌藥水" , "imgsrc":"e01","text":"藥水" },' +
    '{ "name":"無盡增強藥水" , "imgsrc":"e02","text":"藥水" },' +
    '{ "name":"無盡殘殺藥水" , "imgsrc":"e03","text":"藥水" },' +
    '{ "name":"生命藥水" , "imgsrc":"e04","text":"藥水" } ]}';

// 透過 JSON.parse() 方法，將JSON字串轉換成 物件
var obj = JSON.parse(list);
// console.log(obj);
// console.log(obj.pokemon);
// console.log(obj.pokemon[0]);
// console.log(obj.pokemon[0].name);
// console.log(obj.pokemon[0].imgsrc);


// 搜尋按鈕點下的時候，進行資料搜尋，並且將符合的資料帶入到畫面上
$("button").click(function() {
    // 清空查詢結果的畫面
    $(".row").empty();

    // 結果的字串
    var result = '';
    var temp = $("input").prop("value");
    console.log(temp);

    // 跑 for 迴圈 逐一讀出 obj 裡面的 name 和 imgsrc
    for (var i = 0; i < obj.pokemon.length; i++) {

        console.log(obj.pokemon[i].name);
        console.log(obj.pokemon[i].imgsrc);

        // 判斷 神奇寶貝 是不是可以加入字串中
        // 網頁上面的查詢文字 ==>  $().prop("value")
        //  indexOf()
        var pokemonName = String(obj.pokemon[i].name);

        //  妙蛙種子.indexOf(妙) ====>  0
        //  小火龍.indexOf(妙)   ====> -1

        if (pokemonName.indexOf(temp) > -1) {
            // 直接把六張卡片都帶出來
            result += `
                    <div class="col-12 col-sm-6 col-md-3 ">
        <div href="" class="card mb-3 ">
            <img class="card-img-top " src="img/product/${obj.pokemon[i].imgsrc}.jpg">
            <div class="card-body ">
                <h4 class="card-title text-center ">${obj.pokemon[i].name}</h4>
                <p class="card-text text-center">
                        ${obj.pokemon[i].text}
                </p>
                <h5 class="card-text text-danger ">
                    <small class="text-secondary mr-2 text-center ">
                             </small> $&nbsp;50000
                </h5>
                <a href="(網址)連到商品網頁 " class="btn btn-dark btn-block ">商品詳情</a>
                <input type="number" min="0" class="form-control amount">
                <button class="btn btn-info btn-block add_cart" data-price="5000">加到購物車</button>
            </div>
        </div>
    </div>
                        `;
        }
    }

    // 把結果 放到畫面上
    $(".row").append(result);
});
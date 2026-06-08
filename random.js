'use strict';
const situations = ["雨降る","晴れた","曇った","雪降る","霧の立ち込めた","風の強い",
"嵐の","吹雪の","雷の鳴り響く","夏の","春の","梅雨の","秋の","冬の","春一番の吹いた"];
const events = ["クリスマス","ハロウィン","エイプリルフール","七夕","イースター",'バレンタイン','初雪',
'初霜','儀式','地震','令和','平成','明治時代','江戸時代','氷河期'];
const times = ["朝","夜","夕暮れ","真っ昼間","昼過ぎ","昼","黄昏時","宵","夕方","晩","真夜中",'正午'];
const places = ["海","山","氷山","地上","都会","砂漠","田舎","草原","川","廃墟","森",
"遺跡","深海","空",'丘','砂丘','谷','夢の中','渋谷','秋田','東京','学校','中国',
'ブラジル','北極','南極','サバンナ','ハワイ','アメリカ','カラオケ','ホテル','病院','村','街','町',
'火山','洞窟','ホワイトハウス','動物園','水族館','遊園地','サーカス','大富豪の家','路上','月','檻の中',];
const adverbs = ['はじめて','さみしく','丁寧に','静かに','厳かに','楽しく','なんとなく','何度も',
'ゆっくり','急いで','ひたむきに','おとなしく','激しく','すばやく','少しだけ','一生懸命に','上手に',
'きちんと','自由に','遠慮なく','最後に','慌てて','勇ましく','ひそかに'];
const adjectives = ['ゆかいな','静かな','にぎやかな','きれいな','さわやかな','騒がしい',
'やさしい','あたたかい','涼しい','寒い','さみしい','ゆたかな','貧しい','美しい','おごそかな','輝く',
'煌めく','完璧な','おもしろい','危ない','慌ただしい','ふるめかしい','ものさびしい','ものたりない']
const animals = ['魚','くじら','猫','りす','とかげ','恐竜', '妖精','悪魔',
'はりねずみ','アリ','蝶','しまうま','くま','コアラ','パンダ','イグアナ','イルカ','ネズミ','天使',
'フラミンゴ','トラ','ミーアキャット','ホトトギス','カラス','スズメ','ユニコーン','象',
'ライオン','チーター','ナマケモノ','カタツムリ','ダチョウ','カエル','ブタ','ウシ','ペンギン','アザラシ',
'狼','ロボット','ゴリラ','カンガルー','クジャク','カナリア','ヒヨコ','ニワトリ','クリオネ','キリン',
'ヘビ','カメ','ハムスター','ウサギ','サル','マングース','ラクダ','ラッコ','お化け','ハブ'];
const things = ['数学','芸術','宝石','科学','野球','魔法','料理','本','ボール','コンピュータ',
'音楽','メロディ','絵の具','絵','城','家','酒','文字','言葉','カメラ','サッカー','ごみ','橋',
'塔','かばん','タオル','枕','金','毛布','りぼん','ほうき','くつ','コート','うちわ','ピストル',
'かさ','果物','野菜','真珠','きのみ','あんみつ','ラーメン','車','電車','気球','飛行機','ロケット','指輪',
'焼肉のタレ','幸せ','愛','希望','いす','机','コップ','小判'];

const verbs1 = [//自立
  {'alfa':'目覚める','bravo':'目覚めて','charlie':'目覚めた'},
  {'alfa':'立ち上がる','bravo':'立ち上がって','charlie':'立ち上がった'},
  {'alfa':'歌う','bravo':'歌って','charlie':'歌った'},
  {'alfa':'踊る','bravo':'踊って','charlie':'踊った'},
  {'alfa':'旅立つ','bravo':'旅立って','charlie':'旅立った'},
  {'alfa':'語る','bravo':'語って','charlie':'語った'},
  {'alfa':'夢見る','bravo':'夢見て','charlie':'夢見た'},
  {'alfa':'涙する','bravo':'涙して','charlie':'涙した'},
  {'alfa':'逃げ出す','bravo':'逃げ出して','charlie':'逃げ出した'},
  {'alfa':'勉強する','bravo':'勉強して','charlie':'勉強した'},
  {'alfa':'寝る','bravo':'寝て','charlie':'寝た'},
  {'alfa':'進化する','bravo':'進化して','charlie':'進化した'},
  {'alfa':'歩く','bravo':'歩いて','charlie':'歩いた'},
  {'alfa':'走る','bravo':'走って','charlie':'走った'},
  {'alfa':'笑う','bravo':'笑って','charlie':'笑った'},
  {'alfa':'鳴く','bravo':'鳴いて','charlie':'鳴いた'},
];
const verbs2=[//に もの
{'alfa':'めぐり合う','bravo':'めぐり合って','charlie':'めぐり合った'},
{'alfa':'恋する','bravo':'恋して','charlie':'恋した'},
{'alfa':'憧れる','bravo':'憧れて','charlie':'憧れた'},
{'alfa':'溺れる','bravo':'溺れて','charlie':'溺れた'},
{'alfa':'触れる','bravo':'触れて','charlie':'触れた'},
{'alfa':'のめり込む','bravo':'のめり込んで','charlie':'のめり込んだ'},
{'alfa':'魅了される','bravo':'魅了されて','charlie':'魅了された'},

  ];

const verbs3 = [//を もの
{'alfa':'見る','bravo':'見て','charlie':'見た'},
{'alfa':'残す','bravo':'残して','charlie':'残した'},
{'alfa':'探し求める','bravo':'探し求めて','charlie':'探し求めた'},
{'alfa':'愛する','bravo':'愛して','charlie':'愛した'},
{'alfa':'夢見る','bravo':'夢見て','charlie':'夢見た'},
{'alfa':'隠す','bravo':'隠して','charlie':'隠した'},
{'alfa':'託す','bravo':'託して','charlie':'託した'},
{'alfa':'手に入れる','bravo':'手に入れて','charlie':'手に入れた'},
{'alfa':'手放す','bravo':'手放して','charlie':'手放した'},
{'alfa':'燃やす','bravo':'燃やして','charlie':'燃やした'},
{'alfa':'拒絶する','bravo':'拒絶した','charlie':'拒絶した'},
{'alfa':'買う','bravo':'買って','charlie':'買った'},
{'alfa':'売る','bravo':'売って','charlie':'売った'},
{'alfa':'捧げる','bravo':'捧げて','charlie':'捧げた'},
{'alfa':'研究する','bravo':'研究して','charlie':'研究した'},
{'alfa':'測る','bravo':'測って','charlie':'測った'},
{'alfa':'思い出す','bravo':'思い出して','charlie':'思い出した'},
{'alfa':'勉強する','bravo':'勉強して','charlie':'勉強した'},
{'alfa':'運ぶ','bravo':'運んで','charlie':'運んだ'},
{'alfa':'首を長くして待つ','bravo':'首を長くして待ち','charlie':'首を長くして待った'},
];

const verbs4=[//に 人
{'alfa':'出会う','bravo':'出会って','charlie':'出会った'},
{'alfa':'恋する','bravo':'恋して','charlie':'恋した'},
{'alfa':'見つめる','bravo':'見つめて','charlie':'見つめた'},
{'alfa':'託す','bravo':'託して','charlie':'託した'},
{'alfa':'憧れる','bravo':'憧れて','charlie':'憧れた'},
{'alfa':'嫌われる','bravo':'嫌われて','charlie':'嫌われた'},
{'alfa':'抵抗する','bravo':'抵抗して','charlie':'抵抗した'},
{'alfa':'触れる','bravo':'触れて','charlie':'触れた'},
{'alfa':'魅了される','bravo':'魅了されて','charlie':'魅了された'},
{'alfa':'腹を立てる','bravo':'腹を立てて','charlie':'腹を立てた'},
{'alfa':'電話をかける','bravo':'電話をかけて','charlie':'電話をかけた'},
  ];

const verbs5=[//を　人
{'alfa':'見る','bravo':'見て','charlie':'見た'},
{'alfa':'育てる','bravo':'育てて','charlie':'育てた'},
{'alfa':'愛する','bravo':'愛して','charlie':'愛して'},
{'alfa':'祝う','bravo':'祝って','charlie':'祝った'},
{'alfa':'恨む','bravo':'恨んで','charlie':'恨んだ'},
{'alfa':'呼び出す','bravo':'呼び出して','charlie':'呼び出した'},
{'alfa':'魅了する','bravo':'魅了して','charlie':'魅了した'},
{'alfa':'真似する','bravo':'真似して','charlie':'真似した'},
{'alfa':'仲間にする','bravo':'仲間にして','charlie':'仲間にした'},
{'alfa':'捕まえる','bravo':'捕まえて','charlie':'捕まえた'},

]

const verbs6 = [//と人
{'alfa':'話す','bravo':'話して','charlie':'話した'},
{'alfa':'立ち上がる','bravo':'立ち上がって','charlie':'立ち上がった'},
  {'alfa':'歌う','bravo':'歌って','charlie':'歌った'},
  {'alfa':'踊る','bravo':'踊って','charlie':'踊った'},
  {'alfa':'語り合う','bravo':'語りあって','charlie':'語り合った'},
  {'alfa':'別れる','bravo':'別れて','charlie':'別れた'},
  {'alfa':'向き合う','bravo':'向き合って','charlie':'向き合った'},
  {'alfa':'戦う','bravo':'戦って','charlie':'戦った'},
  {'alfa':'相撲をする','bravo':'相撲をして','charlie':'相撲をした'},
  {'alfa':'宅飲みする','bravo':'宅飲みして','charlie':'宅飲みした'},
  {'alfa':'電話をする','bravo':'電話をして','charlie':'電話をした'},
  {'alfa':'添い寝した','bravo':'添い寝して','charlie':'添い寝した'},
  {'alfa':'抱き合う','bravo':'抱き合って','charlie':'抱き合った'},
  {'alfa':'かくれんぼする','bravo':'かくれんぼして','charlie':'かくれんぼした'},
  {'alfa':'鬼ごっこする','bravo':'鬼ごっこして','charlie':'鬼ごっこした'},
  {'alfa':'かけっこする','bravo':'かけっこして','charlie':'かけっこした'},
]
var color = ["#E67A7A","#E6E67A","#B0E67A","#7AE67A","#7AE6B0",
    "#7AE6E6","#7AB0E6","#7A7AE6","#B07AE6","#E67AE6","#E67AB0"]



  
//たくさんの円を動かす
function circles(){
  const col = color[Math.floor(Math.random()*color.length)];
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  window.requestAnimationFrame = 
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.weblitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (cb) { setTimeout(cb, 17); };
  
  const NUM = Math.floor(canvas.width*0.05); // 表示数
  const particles = [];
  
  class Particle {
    constructor(x, y, radius, directionX, directionY) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.directionX = directionX;
      this.directionY = directionY;
    }
    render() {
      // 円をかく
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      ctx.fillStyle = col
      ctx.fill();
    }
    update() {
  
      this.y += this.directionY;
      if(this.y > canvas.height + this.radius||this.y < - this.radius) {
        if(this.directionY>0){
          this.y=-this.radius
        }else{
          this.y=canvas.height+this.radius
        }
      }
      
      this.render();
    }
  }
  
  init();
  render();
  
  function init() {
    for(let i = 0; i < NUM; i++) {
      // particles 
      const x = Math.random() * canvas.width;
      const y = Math.floor(Math.random() * canvas.height);
      var radius = Math.floor(Math.random() * 70);
      if(radius<10){
        radius = Math.floor(Math.random() * 70);
      }
      const directionX = Math.random() * 2;
      var directionY = Math.random() * 2 - 1;
      if (directionY>-0.1||directionY<0.1){
        directionY = Math.random() * 2 - 1;
      }
      const particle = new Particle(x, y, radius, directionX, directionY);
      particles.push(particle);
    }
  }
  
  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < particles.length; i++) {
      particles[i].update();
    }
    requestAnimationFrame(render);
  }

}

//ページに移行する
function start(key){
  if(key==0){
    window.location='end.html?title='+encodeURIComponent(state)
  }else{
    window.location = "Alfa.html";
  }

  
}

//円の色を決める
function colorSelect(){
  var col1 = color[Math.floor(Math.random()*color.length)];
  var col2 = color[Math.floor(Math.random()*color.length)];
  var col3 = color[Math.floor(Math.random()*color.length)];
  while(col1==col2||col2==col3||col1==col3){
    var col1 = color[Math.floor(Math.random()*color.length)];
  var col2 = color[Math.floor(Math.random()*color.length)];
  var col3 = color[Math.floor(Math.random()*color.length)];
  }
circle1.style.backgroundColor=col1;
circle2.style.backgroundColor=col1;
circle3.style.backgroundColor=col1;
circle4.style.backgroundColor=col2;
circle5.style.backgroundColor=col2;
circle6.style.backgroundColor=col2;
circle7.style.backgroundColor=col3;
circle8.style.backgroundColor=col3;
circle9.style.backgroundColor=col3;
}

var a = Math.floor(Math.random()*2)
//三組の円を表示させる
function question(key1,key2,key3){
  switch(key1){//生まれ
    case  1: //situations
          var situation1, situation2,situation3
          while(situation1 == situation2||situation2 == situation3||situation1==situation3){
          situation1 = situations[Math.floor(Math.random()*(situations.length))]
          situation2 = situations[Math.floor(Math.random()*(situations.length))]
          situation3 = situations[Math.floor(Math.random()*(situations.length))]
          }
          document.write('<button id = "circle1" type="button" onclick="change(1,1)">'+situation1+'</button>')
          document.write('<button id = "circle2" type="button" onclick="change(2,1)">'+situation2+'</button>')
          document.write('<button id = "circle3" type="button" onclick="change(3,1)">'+situation3+'</button>')
         break;
        
    case 2:
          var event1,event2,event3
          while(event1==event2||event2==event3||event1==event3){
          event1 = events[Math.floor(Math.random()*(events.length))]
          event2 = events[Math.floor(Math.random()*(events.length))]
          event3 = events[Math.floor(Math.random()*(events.length))]
          }
          document.write('<button id = "circle1" type="button" onclick="change(1,2)">'+event1+'</button>')
          document.write('<button id = "circle2" type="button" onclick="change(2,2)">'+event2+'</button>')
          document.write('<button id = "circle3" type="button" onclick="change(3,2)">'+event3+'</button>')
       break;
    case 3:
      var time1,time2,time3
          while(time1==time2||time2==time3||time1==time3){
          time1 = times[Math.floor(Math.random()*(times.length))]
          time2 = times[Math.floor(Math.random()*(times.length))]
          time3 = times[Math.floor(Math.random()*(times.length))]
          }
          document.write('<button id = "circle1" type="button" onclick="change(1,3)">'+time1+'</button>')
          document.write('<button id = "circle2" type="button" onclick="change(2,3)">'+time2+'</button>')
          document.write('<button id = "circle3" type="button" onclick="change(3,3)">'+time3+'</button>')
       break;
    case 4:
      var place1,place2,place3
          while(place1==place2||place2==place3||place1==place3){
          place1 = places[Math.floor(Math.random()*(places.length))]
          place2 = places[Math.floor(Math.random()*(places.length))]
          place3 = places[Math.floor(Math.random()*(places.length))]
          }
          document.write('<button id = "circle1" type="button" onclick="change(1,4)">'+place1+'</button>')
          document.write('<button id = "circle2" type="button" onclick="change(2,4)">'+place2+'</button>')
          document.write('<button id = "circle3" type="button" onclick="change(3,4)">'+place3+'</button>')
       break;
    case 5:
      var adjective1,adjective2,adjective3
          while(adjective1==adjective2||adjective2==adjective3||adjective1==adjective3){
          adjective1 = adjectives[Math.floor(Math.random()*(adjectives.length))]
          adjective2 = adjectives[Math.floor(Math.random()*(adjectives.length))]
          adjective3 = adjectives[Math.floor(Math.random()*(adjectives.length))]
          }
          document.write('<button id = "circle1" type="button" onclick="change(1,5)">'+adjective1+'</button>')
          document.write('<button id = "circle2" type="button" onclick="change(2,5)">'+adjective2+'</button>')
          document.write('<button id = "circle3" type="button" onclick="change(3,5)">'+adjective3+'</button>')
      break;
    case 6:
      var animal1,animal2,animal3
          while(animal1==animal2||animal2==animal3||animal1==animal3){
          animal1 = animals[Math.floor(Math.random()*(animals.length))]
          animal2 = animals[Math.floor(Math.random()*(animals.length))]
          animal3 = animals[Math.floor(Math.random()*(animals.length))]
          }
          document.write('<button id = "circle1" type="button" onclick="change(1,6)">'+animal1+'</button>')
          document.write('<button id = "circle2" type="button" onclick="change(2,6)">'+animal2+'</button>')
          document.write('<button id = "circle3" type="button" onclick="change(3,6)">'+animal3+'</button>')
      break;
  }
  
  switch(key2){//人生
    case 1:
      var situation4,situation5,situation6;
      while(situation4 == situation5||situation5 == situation6||situation4==situation6){
        situation4 = situations[Math.floor(Math.random()*(situations.length))]
        situation5 = situations[Math.floor(Math.random()*(situations.length))]
        situation6 = situations[Math.floor(Math.random()*(situations.length))]
        }
        document.write('<button id = "circle4" type="button" onclick="change(4,1)">'+situation4+'</button>')
        document.write('<button id = "circle5" type="button" onclick="change(5,1)">'+situation5+'</button>')
        document.write('<button id = "circle6" type="button" onclick="change(6,1)">'+situation6+'</button>')
      break;
      case 2:
        var event4,event5,event6
        while(event4==event5||event5==event6||event4==event6){
        event4 = events[Math.floor(Math.random()*(events.length))]
        event5 = events[Math.floor(Math.random()*(events.length))]
        event6 = events[Math.floor(Math.random()*(events.length))]
        }
        document.write('<button id = "circle4" type="button" onclick="change(4,2)">'+event4+'</button>')
        document.write('<button id = "circle5" type="button" onclick="change(5,2)">'+event5+'</button>')
        document.write('<button id = "circle6" type="button" onclick="change(6,2)">'+event6+'</button>')
     break;
     case 3:
        var time4,time5,time6
        while(time4==time5||time5==time6||time4==time6){
        time4 = times[Math.floor(Math.random()*(times.length))]
        time5 = times[Math.floor(Math.random()*(times.length))]
        time6 = times[Math.floor(Math.random()*(times.length))]
        }
        document.write('<button id = "circle4" type="button" onclick="change(4,3)">'+time4+'</button>')
        document.write('<button id = "circle5" type="button" onclick="change(5,3)">'+time5+'</button>')
        document.write('<button id = "circle6" type="button" onclick="change(6,3)">'+time6+'</button>')
     break;
     case 4:
        var place4,place5,place6
        while(place4==place5||place5==place6||place4==place6){
        place4 = places[Math.floor(Math.random()*(places.length))]
        place5 = places[Math.floor(Math.random()*(places.length))]
        place6 = places[Math.floor(Math.random()*(places.length))]
        }
        document.write('<button id = "circle4" type="button" onclick="change(4,4)">'+place4+'</button>')
        document.write('<button id = "circle5" type="button" onclick="change(5,4)">'+place5+'</button>')
        document.write('<button id = "circle6" type="button" onclick="change(6,4)">'+place6+'</button>')
     break;
     case 5:
        var adverb4,adverb5,adverb6
        while(adverb4==adverb5||adverb5==adverb6||adverb4==adverb6){
        adverb4 = adverbs[Math.floor(Math.random()*(adverbs.length))]
        adverb5 = adverbs[Math.floor(Math.random()*(adverbs.length))]
        adverb6 = adverbs[Math.floor(Math.random()*(adverbs.length))]
        }
        document.write('<button id = "circle4" type="button" onclick="change(4,5)">'+adverb4+'</button>')
        document.write('<button id = "circle5" type="button" onclick="change(5,5)">'+adverb5+'</button>')
        document.write('<button id = "circle6" type="button" onclick="change(6,5)">'+adverb6+'</button>')
     break;
     case 6:
        var adjective4,adjective5,adjective6
        while(adjective4==adjective5||adjective5==adjective6||adjective4==adjective6){
        adjective4 = adjectives[Math.floor(Math.random()*(adjectives.length))]
        adjective5 = adjectives[Math.floor(Math.random()*(adjectives.length))]
        adjective6 = adjectives[Math.floor(Math.random()*(adjectives.length))]
        }
        document.write('<button id = "circle4" type="button" onclick="change(4,6)">'+adjective4+'</button>')
        document.write('<button id = "circle5" type="button" onclick="change(5,6)">'+adjective5+'</button>')
        document.write('<button id = "circle6" type="button" onclick="change(6,6)">'+adjective6+'</button>')
     break;
     case 7:
        var thing4,thing5,thing6
        while(thing4==thing5||thing5==thing6||thing4==thing6){
        thing4 = things[Math.floor(Math.random()*(things.length))]
        thing5 = things[Math.floor(Math.random()*(things.length))]
        thing6 = things[Math.floor(Math.random()*(things.length))]
        }
        document.write('<button id = "circle4" type="button" onclick="change(4,7)">'+thing4+'</button>')
        document.write('<button id = "circle5" type="button" onclick="change(5,7)">'+thing5+'</button>')
        document.write('<button id = "circle6" type="button" onclick="change(6,7)">'+thing6+'</button>')
     break;
     case 8:
        var animal4,animal5,animal6
        while(animal4==animal5||animal5==animal6||animal4==animal6){
        animal4 = animals[Math.floor(Math.random()*(animals.length))]
        animal5 = animals[Math.floor(Math.random()*(animals.length))]
        animal6 = animals[Math.floor(Math.random()*(animals.length))]
        }
        document.write('<button id = "circle4" type="button" onclick="change(4,8)">'+animal4+'</button>')
        document.write('<button id = "circle5" type="button" onclick="change(5,8)">'+animal5+'</button>')
        document.write('<button id = "circle6" type="button" onclick="change(6,8)">'+animal6+'</button>')
     break;
     case 9:
        var dou4,dou5,dou6
        while(dou4==dou5||dou5==dou6||dou4==dou6){
        var a = Math.floor(Math.random()*(verbs1.length))
        var b = Math.floor(Math.random()*(verbs1.length))
        var c = Math.floor(Math.random()*(verbs1.length))
        dou4 = verbs1[a].alfa
        dou5 = verbs1[b].alfa
        dou6 = verbs1[c].alfa
        }
        document.write('<button id = "circle4" type="button" onclick="change(4,9,'+a+')">'+dou4+'</button>')
        document.write('<button id = "circle5" type="button" onclick="change(5,9,'+b+')">'+dou5+'</button>')
        document.write('<button id = "circle6" type="button" onclick="change(6,9,'+c+')">'+dou6+'</button>')
     break;
     case 10:
        var dou4,dou5,dou6
        while(dou4==dou5||dou5==dou6||dou4==dou6){
        var a = Math.floor(Math.random()*(verbs2.length))
        var b = Math.floor(Math.random()*(verbs2.length))
        var c = Math.floor(Math.random()*(verbs2.length))
        dou4 = verbs2[a].alfa
        dou5 = verbs2[b].alfa
        dou6 = verbs2[c].alfa
        }
        document.write('<button id = "circle4" type="button" onclick="change(4,10,'+a+')">'+dou4+'</button>')
        document.write('<button id = "circle5" type="button" onclick="change(5,10,'+b+')">'+dou5+'</button>')
        document.write('<button id = "circle6" type="button" onclick="change(6,10,'+c+')">'+dou6+'</button>')
     break;
     case 11:
        var dou4,dou5,dou6
        while(dou4==dou5||dou5==dou6||dou4==dou6){
        var a = Math.floor(Math.random()*(verbs3.length))
        var b = Math.floor(Math.random()*(verbs3.length))
        var c = Math.floor(Math.random()*(verbs3.length))
        dou4 = verbs3[a].alfa
        dou5 = verbs3[b].alfa
        dou6 = verbs3[c].alfa
        }
        document.write('<button id = "circle4" type="button" onclick="change(4,11,'+a+')">'+dou4+'</button>')
        document.write('<button id = "circle5" type="button" onclick="change(5,11,'+b+')">'+dou5+'</button>')
        document.write('<button id = "circle6" type="button" onclick="change(6,11,'+c+')">'+dou6+'</button>')
     break;
     case 12:
        var dou4,dou5,dou6
        while(dou4==dou5||dou5==dou6||dou4==dou6){
        var a = Math.floor(Math.random()*(verbs4.length))
        var b = Math.floor(Math.random()*(verbs4.length))
        var c = Math.floor(Math.random()*(verbs4.length))
        dou4 = verbs4[a].alfa
        dou5 = verbs4[b].alfa
        dou6 = verbs4[c].alfa
        }
        document.write('<button id = "circle4" type="button" onclick="change(4,12,'+a+')">'+dou4+'</button>')
        document.write('<button id = "circle5" type="button" onclick="change(5,12,'+b+')">'+dou5+'</button>')
        document.write('<button id = "circle6" type="button" onclick="change(6,12,'+c+')">'+dou6+'</button>')
     break;
     case 13:
        var dou4,dou5,dou6
        while(dou4==dou5||dou5==dou6||dou4==dou6){
        var a = Math.floor(Math.random()*(verbs5.length))
        var b = Math.floor(Math.random()*(verbs5.length))
        var c = Math.floor(Math.random()*(verbs5.length))
        dou4 = verbs5[a].alfa
        dou5 = verbs5[b].alfa
        dou6 = verbs5[c].alfa
        }
        document.write('<button id = "circle4" type="button" onclick="change(4,13,'+a+')">'+dou4+'</button>')
        document.write('<button id = "circle5" type="button" onclick="change(5,13,'+b+')">'+dou5+'</button>')
        document.write('<button id = "circle6" type="button" onclick="change(6,13,'+c+')">'+dou6+'</button>')
     break;
     case 14:
        var dou4,dou5,dou6
        while(dou4==dou5||dou5==dou6||dou4==dou6){
        var a = Math.floor(Math.random()*(verbs6.length))
        var b = Math.floor(Math.random()*(verbs6.length))
        var c = Math.floor(Math.random()*(verbs6.length))
        dou4 = verbs6[a].alfa
        dou5 = verbs6[b].alfa
        dou6 = verbs6[c].alfa
        }
        document.write('<button id = "circle4" type="button" onclick="change(4,14,'+a+')">'+dou4+'</button>')
        document.write('<button id = "circle5" type="button" onclick="change(5,14,'+b+')">'+dou5+'</button>')
        document.write('<button id = "circle6" type="button" onclick="change(6,14,'+c+')">'+dou6+'</button>')
     break;  
  }

  switch(key3){//終わり
    case 1:
      var situation7,situation8,situation9;
      while(situation7 == situation8||situation8 == situation9||situation7==situation9){
        situation7 = situations[Math.floor(Math.random()*(situations.length))]
        situation8 = situations[Math.floor(Math.random()*(situations.length))]
        situation9 = situations[Math.floor(Math.random()*(situations.length))]
        }
        document.write('<button id = "circle7" type="button" onclick="change(7,1)">'+situation7+'</button>')
        document.write('<button id = "circle8" type="button" onclick="change(8,1)">'+situation8+'</button>')
        document.write('<button id = "circle9" type="button" onclick="change(9,1)">'+situation9+'</button>')
      break;
    case 2:
      var event7,event8,event9;
      while(event7 == event8||event8 == event9||event7==event9){
        event7 = events[Math.floor(Math.random()*(events.length))]
        event8 = events[Math.floor(Math.random()*(events.length))]
        event9 = events[Math.floor(Math.random()*(events.length))]
        }
        document.write('<button id = "circle7" type="button" onclick="change(7,2)">'+event7+'</button>')
        document.write('<button id = "circle8" type="button" onclick="change(8,2)">'+event8+'</button>')
        document.write('<button id = "circle9" type="button" onclick="change(9,2)">'+event9+'</button>')
      break;
    case 3:
      var time7,time8,time9;
      while(time7 == time8||time8 == time9||time7==time9){
        time7 = times[Math.floor(Math.random()*(times.length))]
        time8 = times[Math.floor(Math.random()*(times.length))]
        time9 = times[Math.floor(Math.random()*(times.length))]
        }
        document.write('<button id = "circle7" type="button" onclick="change(7,3)">'+time7+'</button>')
        document.write('<button id = "circle8" type="button" onclick="change(8,3)">'+time8+'</button>')
        document.write('<button id = "circle9" type="button" onclick="change(9,3)">'+time9+'</button>')
      break;
    case 4:
      var place7,place8,place9;
      while(place7 == place8||place8 == place9||place7==place9){
        place7 = places[Math.floor(Math.random()*(places.length))]
        place8 = places[Math.floor(Math.random()*(places.length))]
        place9 = places[Math.floor(Math.random()*(places.length))]
        }
        document.write('<button id = "circle7" type="button" onclick="change(7,4)">'+place7+'</button>')
        document.write('<button id = "circle8" type="button" onclick="change(8,4)">'+place8+'</button>')
        document.write('<button id = "circle9" type="button" onclick="change(9,4)">'+place9+'</button>')
      break;
    case 5:
      var adjective7,adjective8,adjective9;
      while(adjective7 == adjective8||adjective8 == adjective9||adjective7==adjective9){
        adjective7 = adjectives[Math.floor(Math.random()*(adjectives.length))]
        adjective8 = adjectives[Math.floor(Math.random()*(adjectives.length))]
        adjective9 = adjectives[Math.floor(Math.random()*(adjectives.length))]
        }
        document.write('<button id = "circle7" type="button" onclick="change(7,5)">'+adjective7+'</button>')
        document.write('<button id = "circle8" type="button" onclick="change(8,5)">'+adjective8+'</button>')
        document.write('<button id = "circle9" type="button" onclick="change(9,5)">'+adjective9+'</button>')
      break;

  }


        }
function isSmartPhone() {
  if (window.matchMedia && window.matchMedia('(max-device-width: 480px)').matches) {
    return true;
  } else {
    return false;
  }
}
var sma = isSmartPhone();
var i = 0;

var state = ''
var state2 = ''
var flag1 = 0;
var flag2 = 0;
//クリックされた時の変更
function change(key1,key2,key3){
  var size123,size456,size789,top1,top2,top3,left1,left2,left3;
  if(sma){
    size123 = "260px"
    size456 = "300px"
    size789="270px"
    top1="0px"
    top2="0px"
    top3="0px"
    left1="0%"
    left2="20%"
    left3="0%"
  }else{
    size123="500px"
    size456="550px"
    size789="400px"
    top1="0px"
    top2="400px"
    top3="0px"
    left1="40px"
    left2="0px"
    left3="0px"

  }
  const circle1 = document.getElementById("circle1")
    const circle2 = document.getElementById("circle2")
    const circle3 = document.getElementById("circle3")
    const circle4 = document.getElementById("circle4")
    const circle5 = document.getElementById("circle5")
    const circle6 = document.getElementById("circle6")
    const circle7 = document.getElementById("circle7")
    const circle8 = document.getElementById("circle8")
    const circle9 = document.getElementById("circle9")
    var situation = situations[Math.floor(Math.random()*situations.length)];
var eventt = events[Math.floor(Math.random()*events.length)];
var time = times[Math.floor(Math.random()*times.length)];
var place = places[Math.floor(Math.random()*places.length)];
var adverb = adverbs[Math.floor(Math.random()*adverbs.length)];
var adjective = adjectives[Math.floor(Math.random()*adjectives.length)];
var animal = animals[Math.floor(Math.random()*animals.length)];
var thing = things[Math.floor(Math.random()*things.length)];

var verb1 = verbs1[Math.floor(Math.random()*verbs1.length)];
var verb2 = verbs2[Math.floor(Math.random()*verbs2.length)];
var verb3 = verbs3[Math.floor(Math.random()*verbs3.length)];
var verb4 = verbs4[Math.floor(Math.random()*verbs4.length)];
var verb5 = verbs5[Math.floor(Math.random()*verbs5.length)];
var verb6 = verbs6[Math.floor(Math.random()*verbs6.length)];
  var str1,str2,str3,str4,str5,str6;
  var k = Math.floor(Math.random()*2)//0,1
  var d = Math.floor(Math.random()*3)//0,1,2
  var d2 = Math.floor(Math.random()*3)//0,1,2
  var p = Math.floor(Math.random()*4)//0,1,2,3
  var g = Math.floor(Math.random()*5)//0,1,2,3,4
  var u = Math.floor(Math.random()*7)//0,1,2,3,4,5
  if(key1<=3){//うまれ
    if(key2==1){
      str1=animal+'は'
      if(flag1==0){
      state += str1
      if(i>0){
        state2 += str1
      }
    }
      if(k==0){
        str2=time+'に生まれ、'
      }else{
        str2=place+'で生まれ、'
      }
    }else if(key2==2){
      str1=animal+'は'
      if(flag1==0){
      state += str1
      if(i>0){
        state2 += str1
      }
    }
      if(k==0){
        str2='の日の'+time+'に生まれ、'
      }else{
        str2='の日に'+place+'で生まれ、'
      }
    }else if(key2==3){
      if(flag1==0){
      state += animal
      state += 'は'
      
      if(i>0){
        state2 += animal
        state2 += 'は'
      }
    }
      if(k==0){
        str1=animal+'は'+situation
      }else{
        str1=animal+'は'+eventt+'の日の'
      }
      str2='に生まれ、'
    }else if(key2==4){
      if(flag1==0){
      state += animal
      state += 'は'
      if(i>0){
        state2 += animal
        state2 += animal
      }
      }
      if(p==0){
        str1=animal+'は'+situation
      }else if(p==1){
        str1=animal+'は'+eventt+'の日の'
      }else if(p==2){
        str1=animal+'は'+time+'に'
      }else{
        str1=animal+'は'+adjective
      }
      str2='で生まれ、'
    }else if(key2==5){
      str1=animal+'は'
      if(flag1==0){
      state += str1
      if(i>0){
        state2 += str1
      }
    }
      str2=place+'に生まれ'
    }else{
      str1=''
      if(flag==0){
      state += animal
      state += 'は'
      if(i>0){
        state2 += animal
        state2 += 'は'
      }
    }
      if(g==0){
        str2 = 'は'+situation+time+'に生まれ、'
      }else if(g==1){
        str2 = 'は'+eventt+'の日の'+time+'に生まれ、'
      }else if(g==2){
        str2 = 'は'+situation+'日に'+place+'で生まれ、'
      }else if(g==3){
        str2 = 'は'+eventt+'の日に'+place+'で生まれ、'
      }else{
        str2 = 'は'+adjective+place+'で生まれ、'
      }
    }
    
    switch(key1){
      case 1:
        circle1.style.animation = "none"
        circle2.style.display = "none";
        circle3.style.display = "none";
        circle1.textContent = str1 + circle1.textContent  + str2
        circle1.style.height=size123
        circle1.style.width=size123
        circle1.style.top=top1
        circle1.style.left=left1
        break;
      case 2:
        circle1.style.display = "none";
        circle2.style.animation = "none"
        circle3.style.display = "none";
        circle2.textContent = str1 + circle2.textContent  + str2
        circle2.style.height=size123
        circle2.style.width=size123
        circle2.style.top=top1
        circle2.style.left=left1
        break;
      case 3:
        circle1.style.display = "none";
        circle2.style.display = "none";
        circle3.style.animation = "none"
        circle3.textContent = str1 + circle3.textContent  + str2
        circle3.style.height=size123
        circle3.style.width=size123
        circle3.style.top=top1
        circle3.style.left=left1
        break;
    }
    circle1.onclick = () =>{
      return false;
  }
  circle2.onclick = () =>{
    return false;
}
circle3.onclick = () =>{
  return false;
}
if(i>0&&flag1==0){
  state = state2
}
    i +=1
    flag1+=1
  }else if(4<=key1&&key1<=6){//まんなか
    var ve,ve2;
    if(u==0){
      ve = verb1.bravo;
      ve2 = verb2.charlie
    }else if(u==1){
      ve = thing +'に'+verb2.bravo;
      ve2 = thing +'に'+verb2.charlie;
    }else if(u==2){
      ve = thing + 'を'+verb3.bravo;
      ve2 = thing + 'を'+verb3.charlie;
    }else if(u==3){
      ve = animal +'に'+verb4.bravo;
      ve2 = animal +'に'+verb4.charlie;
    }else if(u==4){
      ve = animal +'を'+verb5.bravo;
      ve2 = animal +'を'+verb5.charlie;
    }else{
      ve = animal + 'と'+verb6.bravo;
      ve2 = animal + 'と'+verb6.charlie;
    }
    if(key2==1){
      str3 = ''
      str4= '日の'+time+'に'+ve+'、'
      if(flag2==0){
      state += ve2
      state2 += ve2
      }
    }else if(key2==2){
      str3=''
      if(d==0){
        str4='の日の'+time+'に'+ve
      }else if(d==1){
        str4 = 'の日に'+place+'で'+ve
      }else{
        str4 = 'の日に'+ve
      }
      if(flag2==0){
      state += ve2
      state2 += ve2
      }
    }else if(key2==3){
      while(d==0&&d2==0){
        var d = Math.floor(Math.random()*3)
        var d2 = Math.floor(Math.random()*3)
      }
      if(d==0){
        str3 = ''
      }else if(d=-1){
        str3 = situation
      }else{
        str3 = eventt +'の'
      }
      if(d2==0){
        str4 = 'に'+ve
      }else if(d2=-1){
        str4 = 'に'+place+'で'+ve
      }else{
        str4 = 'に'+adverb+ve
      }
      if(flag2==0){
      state += ve2
      state2 += ve2
      }
    }else if(key2==4){
      if(g==0){
        str3=situation+'日に'
        str4='で'+ve
      }else if(g==1){
        str3=eventt+'の日に'
        str4='で'+ve
      }else if(g==2){
        str3=time+'に'
        str4='で'+ve
      }else if(g==3){
        str3=''
        str4='で'+adverb+ve
      }else{
        str3=adjective
        str4='で'+ve
      }
      if(flag2==0){
      state += ve2
      state2 += ve2
      }
    }else if(key2==5){
      if(flag2==0){
      state += ve2
      state2 += ve2
      }
      str4=ve
      if(p==0){
        if(d==0){
          str3=situation+'日に'
        }else if(d==1){
          str3=situation+time+'に'
        }else{
          str3=situation+'日に'+place+'で'
        }
      }else if(p==1){
        if(d==0){
          str3=eventt+'の日に'
        }else if(d==1){
          str3=eventt+'の日の'+time+'に'
        }else{
          str3=eventt+'の日に'+place+'で'        
        }
      }else if(p==2){
        if(k=-1){
          str3=time+'に'
        }else{
          str3=time+'に'+place+'で'
        }
      }else{
        str3=place+'で'
      }
      }else if(key2==6){
        if(k==0){
          str3=''
        }else{
          str3=adverb
        }
        if(k==0){
          str4=place+'で'+ve
          if(flag2==0){
          state += ve2
          state2 += ve2
          }
        }else{
          if(u==0){
            while(u!=0){
            var u = Math.floor(Math.random()*7)
            }
          }
          if(u==0){
            ve = verb1.bravo;
            ve2 = verb1.charlie;
          }else if(u==1){
            ve = thing +'に'+verb2.bravo;
            ve2 = thing +'に'+verb2.charlie;
          }else if(u==2){
            ve = thing + 'を'+verb3.bravo;
            ve2 = thing + 'を'+verb3.charlie;
          }else if(u==3){
            ve = animal +'に'+verb4.bravo;
            ve2 = animal +'に'+verb4.charlie;
          }else if(u==4){
            ve = animal +'を'+verb5.bravo;
            ve2 = animal +'を'+verb5.charlie;
          }else{
            ve = animal + 'と'+verb6.bravo;
            ve2 = animal + 'と'+verb6.charlie;
          }
          str4=ve
          if(flag2==0){
          state = ve2
          state2 += ve2
          }
        }
      }else if(key2>=7){
        var s = Math.floor(Math.random()*13)
        if(s==0){
          str3=situation+'日に'
        }else if(s==1){
          str3=situation+time+'に'
        }else if(s==2){
          str3=situation+'日に'+place+'で'
        }else if(s==3){
          str3=situation+'日に'+adverb
        }else if(s==4){
          str3=eventt+'の日に'
        }else if(s==5){
          str3=eventt+'の日の'+time+'に'
        }else if(s==6){
          str3=eventt+'の日に'+place+'で'
        }else if(s==7){
          str3=eventt+'の日に'+adverb
        }else if(s==8){
          str3=time+'に'+place+'で'
        }else if(s==9){
          str3=time+'に'
        }else if(s==10){
          str3=time+'に'+adverb
        }else if(s==11){
          str3=adverb
        }else if(s==12){
          str3=adjective+place+'で'
        }
        if(key2==7){
          if(k==0){
            str4='に'+verb2.bravo
            if(flag2==0){
            state += verb2.charlie
            state2 += verb2.charlie
            }
          }else{
            str4='を'+verb3.bravo
            if(flag2==0){
            state += verb3.charlie
            state2 += verb3.charlie
            }
          }
        }else if(key2==8){
          if(d==0){
            str4='に'+verb4.bravo
            if(flag2==0){
            state += verb4.charlie
            state2 += verb4.charlie
            }
          }else if(d=-1){
            str4='を'+verb5.bravo
            if(flag2==0){
            state += verb5.charlie
            state2 += verb5.charlie
            }
          }else{
            str4 = 'と'+verb6.bravo
            if(flag2==0){
            state += verb6.charlie
            state2 += verb6.charlie
            }
          }
        }else if(key2==9){
          str4=verbs1[key3].bravo
          if(flag2==0){
          state += verbs1[key3].charlie
          state2 += verbs1[key3].charlie
          }
        }else if(key2==10){
          str4=thing+'に'+verbs2[key3].bravo
          if(flag2==0){
          state += thing+'に'+verbs2[key3].charlie
          state2 += thing+'に'+verbs2[key3].charlie
          }
        }else if(key2==11){
          str4=thing+'を'+verbs3[key3].bravo
          if(flag2==0){
          state += thing+'を'+verbs3[key3].charlie
          state2 += thing+'を'+verbs3[key3].charlie
          }
        }else if(key2==12){
          str4=animal+'に'+verbs4[key3].bravo
          if(flag2==0){
          state += animal+'に'+verbs4[key3].charlie
          state2 += animal+'に'+verbs4[key3].charlie
          }
        }else if(key2==13){
          str4=animal+'を'+verbs5[key3].bravo
          if(flag2==0){
          state += animal+'を'+verbs5[key3].charlie
          state2 += animal+'を'+verbs5[key3].charlie
          }
        }else if(key2==14){
          str4=animal+'と'+verbs6[key3].bravo
          if(flag2==0){
          state += animal+'と'+verbs6[key3].charlie
          state2 += animal+'と'+verbs6[key3].charlie
          }
        }

        if(key2>=9){
          circle4.textContent=''
          circle5.textContent=''
          circle6.textContent=''
        }
      }
    
    switch(key1){
      case 4:
        circle4.style.animation = "none"
        circle5.style.display = "none";
        circle6.style.display = "none";
        circle4.textContent = str3 + circle4.textContent  + str4
        circle4.style.height=size456
        circle4.style.width=size456
        circle4.style.top=top2
        circle4.style.left=left2
        break;
      case 5:
        circle4.style.display = "none"
        circle5.style.animation = "none";
        circle6.style.display = "none";
        circle5.textContent = str3 + circle5.textContent  + str4
        circle5.style.height=size456
        circle5.style.width=size456
        circle5.style.top=top2
        circle5.style.left=left2
        break;
      case 6:
        circle4.style.display = "none"
        circle5.style.display = "none";
        circle6.style.animation = "none";
        circle6.textContent = str3 + circle6.textContent  + str4
        circle6.style.height=size456
        circle6.style.width=size456
        circle6.style.top=top2
        circle6.style.left=left2
        break;
    }
    circle4.onclick = () =>{
      return false;
  }
  circle5.onclick = () =>{
    return false;
}
circle6.onclick = () =>{
  return false;
}
flag2+=1
    i+=1
  }else{//おわり
    if(key2==1){
      str5=''
      if(k==0){
        str6=time+'にこの世を去った。'
      }else{
        str6='日に'+place+'でこの世を去った。'
      }
    }else if(key2==2){
      str5=''
      if(d==0){
        str6='の日にこの世を去った'
      }else if(d==1){
        str6='の日の'+time+'にこの世を去った'
      }else{
        str6='の日に'+place+'でこの世を去った'
      }
    }else if(key2==3){
      if(p==0){
        str5=situation
        str6='にこの世を去った'
      }else if(p==1){
        str5=''
        str6='にこの世を去った'
      }else if(p==2){
        str5=eventt+'の日の'
        str6='にこの世を去った'
      }else{
        str5=''
        str6='に'+place+'でこの世を去った'
      }
    }else if(key2==4){
      str6='でこの世を去った'
      if(p==0){
        str5=situation+'日に'
      }else if(p==1){
        str5=eventt+'の日に'
      }else if(p==2){
        str5=adjective
      }else{
        str5=''
      }
    }else if(key2==5){
      str6=place+'でこの世を去った'
      if(p==0){
        str5=''
      }else if(p==1){
        str5=situation+'日に'
      }else if(p==2){
        str5=eventt+'の日に'
      }else{
        str5=time+'に'
      }
    }
    switch(key1){
      case 7:
        circle7.style.animation = "none"
        circle8.style.display = "none";
        circle9.style.display = "none";
        circle7.textContent = str5 + circle7.textContent  + str6
        circle7.style.height=size789
        circle7.style.width=size789
        circle7.style.top=top3
        circle7.style.left=left3
        break;
      case 8:
        circle7.style.display = "none"
        circle8.style.animation = "none";
        circle9.style.display = "none";
        circle8.textContent = str5 + circle8.textContent  + str6
        circle8.style.height=size789
        circle8.style.width=size789
        circle8.style.top=top3
        circle8.style.left=left3
        break;
      case 9:
        circle7.style.display = "none"
        circle8.style.display = "none";
        circle9.style.animation = "none";
        circle9.textContent = str5 + circle9.textContent  + str6
        circle9.style.height=size789
        circle9.style.width=size789
        circle9.style.top=top3
        circle9.style.left=left3
        break;
    }
    circle7.onclick = () =>{
      return false;
  }
  circle8.onclick = () =>{
    return false;
}
circle9.onclick = () =>{
  return false;
}
    i+=1
  }
  if(i==3){
    var buttone= document.getElementById('fin');
    var ttt = document.getElementById('clickme');
    buttone.style.display="block";
    ttt.style.display = "none";
  }
}
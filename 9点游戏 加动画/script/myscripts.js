var names=['Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King'];
var suits=['Diamonds','Clubs','Hearts','Spades'];
function getRandom(){
    return Math.floor(Math.random()*52);
}
function Card(name, suit, value){
    this.name=name;
    this.suit=suit;
    this.value=value;
}
// 牌的名字 属性 值
function Player(id){
    this.id=id;
    this.hands=[];
    this.score=0;
}

Player.prototype.getCard=function(){
    if(this.hands.length==5)return;
    var position=getRandom();
    while(cardsPutout.indexOf(position)>=0){
        position=getRandom();
    }
    cardsPutout.push(position);
    this.hands.push(cards[position]);
    this.score+=cards[position].value;
    var newCard=document.createElement("div");
    newCard.classList.add('card');
    if(this.id==="Zj"){
        newCard.style.backgroundImage='url(images/cards/'+cards[position].suit+'/'+cards[position].name+'.png)';
    }
    playerDiv=document.getElementById(this.id);
    playerDiv.appendChild(newCard);
};
// 补牌方法
Player.prototype.getRank=function(){
    var score=this.score;
    var rank=-1;
    if(score===9||score===19||score===29)rank=0;
    else if(score===8||score===18||score===28)rank=1;
    else if(score===7||score===17||score===27)rank=2;
    else if(score===6||score===16||score===26)rank=3;
    else if(score===5||score===15||score===25)rank=4;
    else if(score===4||score===14||score===24)rank=5;
    else if(score===3||score===13||score===23)rank=6;
    else if(score===12||score===22)rank=7;
    else if(score===11||score===21)rank=8;
    else rank=9;
    return rank;
};
// Player.prototype.getRank=function(){
//     var score=this.score%10;
//     var rank=-1;
//     if(score===9)rank=0;
//     else if(score===8)rank=1;
//     else if(score===7)rank=2;
//     else if(score===6)rank=3;
//     else if(score===5)rank=4;
//     else if(score===4)rank=5;
//     else if(score===3)rank=6;
//     else if(score===2)rank=7;
//     else if(score===1)rank=8;
//     else rank=9;
//     return rank;
// };
// 设置优先级
Player.prototype.compare=function(player){
    if(this.getRank()>player.getRank())return 'lose';
    else if(this.getRank()<player.getRank())return 'win';
    else return 'win';
};
// 比较大小
Player.prototype.startGame=function(){
    this.getCard();
    this.getCard();
    this.getCard();
};
Player.prototype.restart=function(){
    this.hands=[];
    this.score=0;
};
var cards=[];
var cardsPutout=[];
var player;
var Zj;
var canStart=true;
window.onload=function(){
    names.forEach(function(name,index){
        suits.forEach(function(suit,i){
            if(index===0){
                cards.push(new Card(name,suit,11));
            }else if(index<9){
                cards.push(new Card(name,suit,index+1));
            }else{
                cards.push(new Card(name,suit,10));
            }
        })
    });
    player=new Player('player');
    Zj=new Player('Zj');
};
// 页面初始化 生成52张牌
function start(){
    if(canStart===false)return;
    var playerDiv=document.getElementById('player');
    while(playerDiv.childNodes.length>0){
        playerDiv.removeChild(playerDiv.firstChild);
    }
    var ZjDiv=document.getElementById('Zj');
    while(ZjDiv.childNodes.length>0){
        ZjDiv.removeChild(ZjDiv.firstChild);
    }
    playerDiv.classList.remove('win');
    playerDiv.classList.remove('lose');
    ZjDiv.classList.remove('win');
    ZjDiv.classList.remove('lose');
    

    cardsPutout=[];
    player.restart();
    Zj.restart();
    player.startGame();
    Zj.startGame();
    canStart=false;
};
// 抓牌
function down(){
    document.getElementById('star').src ="images/cards/3.png"
};
function up(){
    document.getElementById('star').src ="images/cards/1.png"
};
function downs(){
    document.getElementById('stars').src ="images/cards/4.png"
};
function ups(){
    document.getElementById('stars').src ="images/cards/2.png"
};

function downss(){
    document.getElementById('returns').src ="images/cards/returns.png"
};
function upss(){
    document.getElementById('returns').src ="images/cards/return.png"
};
// 按钮特效
function showCard(){
    if(canStart===true)return;
    var cardList=document.querySelectorAll('#player .card');
    var hands=player.hands;
    for(var i=0;i<cardList.length;i++){
        cardList[i].style.backgroundImage='url(images/cards/'+hands[i].suit+'/'+hands[i].name+'.png)';
    }
    var playerDiv=document.getElementById('player');
    var ZjDiv=document.getElementById('Zj');
    var result=Zj.compare(player);
    if(result==='lose'){
        ZjDiv.classList.add('lose');
        playerDiv.classList.add('win')
    }else if(result==='win'){
        ZjDiv.classList.add('win');
        playerDiv.classList.add('lose')
    }
    canStart=true;
}
// 开牌
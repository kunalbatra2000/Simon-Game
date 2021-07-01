var colors=["red","green","yellow","blue"];
var gamepattern=[];
var userclickedpattern=[];
var started=false;
var level=0;

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("LEVEL "+level);
        nextsequnce();
        started=true;
    }

});



$(".btn").click(function(){
    var userchoosencolor=$(this).attr("id");
    userclickedpattern.push(userchoosencolor);
    animate(userchoosencolor);
    playsound(userchoosencolor);
    checkansewer(userclickedpattern.length-1);
}); 

function nextsequnce(){
    userclickedpattern=[];
    level++;
    $("#level-title").text("LEVEL "+level);
    var randomnumber=Math.floor(Math.random()*4);
    var randomchoosencolor=colors[randomnumber];
    gamepattern.push(randomchoosencolor);
    $("#" + randomchoosencolor).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomchoosencolor);
   
}
function checkansewer(i){
    if(gamepattern[i]===userclickedpattern[i]){
        if(userclickedpattern.length===gamepattern.length){
            setTimeout(function(){
                nextsequnce();
            },1000);
        }
    }else{
        playsound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function(){
            $("body").removeClass("game-over");
        },200)
        startagain();

    }
    


}


function playsound(name){
    var audio=new Audio("./"+name+".mp3");
    audio.play();

}
function animate(currentkey){
    $("#"+currentkey).addClass("pressed");

    setTimeout(function(){
        $("#"+currentkey).removeClass("pressed")
    },100);

}

function startagain(){
    gamepattern=[];
    level=0;
    started=false;
}

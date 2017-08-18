 $(function(){
    $("#start").click(function() {
        var $player = $("#player");
        var $players = $("#players");
        var $Zj = $("#Zj")
             $Zj.stop().css({opacity:0}).animate({
                opacity:1
                },1500)
            $player.stop().css({opacity:0}).animate({
                opacity:1
                },1500)
            $players.stop().css({opacity:0}).animate({
                opacity:1
                },1500)
        });

    $("#show-card").click(function() {
        var $player = $("#player");
        var $players = $("#players");
            $player.stop().css({opacity:0.2}).animate({
                opacity:1
                },1500)
            $players.stop().css({opacity:0.2}).animate({
                opacity:1
            },1500)
        })
 })
 
$(function() {
    $('.game_item').mouseover(function() {
        if ($(this).hasClass('game_item_active')) {
            //alert(1);
        } else {
            $(this).addClass('game_item_active').siblings().removeClass('game_item_active');
        }
    })
}) 
$(function() {
    $('.bubbly-button').mouseover(function() {
        if ($(this).hasClass('animate')) {
            //alert(1);
        } else {
            $(this).addClass('animate');
            //$(this).addClass('game_item_active').siblings().removeClass('game_item_active');
        }
    })

    $('.bubbly-button').mouseout(function() {
        $(this).removeClass('animate');
    })
})

var baseUrls = ['j9nb.com'];
var randomIndex = Math.floor(Math.random() * baseUrls.length);
var randomString = baseUrls[randomIndex];
var j9 = "https://"+randomString;
var j9ct = "https://www.j9no1.com/";
var ky = "https://lgclub."+randomString;
var tb = "https://"+randomString+"/promo";
var pinbo = "https://t.me/J9_NB";
var yx = "https://mkvn9i.com/reg?dept=9";
var bd = "https://mkvn9i.com/";
function bd_jump() {
    window.open(bd);
}

function ky_jump() {
    window.open(ky);
}

function tb_jump() {
    window.open(tb);
}

function yx_jump() {
    window.open(yx);
}

function pinbo_jump() {
    window.open(pinbo);
}

function j9_jump() {
    window.open(j9);
}
function j9ct_jump() {
    window.open(j9ct);
}
function ob_jump() {
    window.open(ob);
}
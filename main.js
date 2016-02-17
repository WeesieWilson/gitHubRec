$('.profileHolderNav').append("<img src='" + userProfile.avatar_url +"' />");
$('.profileHolderNav').children('img').css('width','70%').css('border-radius', '20%');

$('.profileHolder').append("<img src='" + userProfile.avatar_url +"' />");
$('.profileHolder').children('img').css('width','54%').css('border-radius', '6%');

$('.profileHolder').append("<p>" + userProfile.login +  "</p>");



















// $('.profileHolderNav')
// [<div class=​"profileHolderNav">​</div>​]
// $('.profileHolderNav').append("<img src='" + "https://avatars.githubusercontent.com/u/16968905?v=3" +"' />")
// [<div class=​"profileHolderNav">​…​</div>​]
// $('.profileHolderNav').children('img')
// [<img src=​"https:​/​/​avatars.githubusercontent.com/​u/​16968905?v=3">​]
// $('.profileHolderNav').children('img').css('width','100%')
// [<img src=​"https:​/​/​avatars.githubusercontent.com/​u/​16968905?v=3">​]

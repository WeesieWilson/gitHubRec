

$('.navProfile').append("<img src='" + userProfile.avatar_url +"' />");
$('.navProfile').children('img').css('border-radius', '20%');

$('.profileHolder').append("<img src='" + userProfile.avatar_url +"' />");


$('.profileHolder').append("<p>" + userProfile.login +  "</p>" + "<p class='joined'>" + '<span class="octicon octicon-history">' + '</span>' + " " + "Joined on Jan 29, 2016" + "</p>");



$('.followersContainer').append("<h3>" + userProfile.followers + "<p>" + "Followers" + "</p>" + "</h3>" + "<h3>" + userProfile.following + "<p>" + "Starred" + "</p>" + "</h3>" + '<h3>' + "0" + "<p>" + "Following" + "</p>" +  "</h3>" );

















// $('.profileHolderNav')
// [<div class=​"profileHolderNav">​</div>​]
// $('.profileHolderNav').append("<img src='" + "https://avatars.githubusercontent.com/u/16968905?v=3" +"' />")
// [<div class=​"profileHolderNav">​…​</div>​]
// $('.profileHolderNav').children('img')
// [<img src=​"https:​/​/​avatars.githubusercontent.com/​u/​16968905?v=3">​]
// $('.profileHolderNav').children('img').css('width','100%')
// [<img src=​"https:​/​/​avatars.githubusercontent.com/​u/​16968905?v=3">​]

$(document).ready(function(){

var profilePicture = "<img src='" + userProfile.avatar_url +"' />";

$('.navProfile').prepend(profilePicture);


$('.profileHolder').prepend(profilePicture);


$('.profileHolder').append("<p>" + userProfile.login +  "</p>" + "<p class='joined'>" + '<span class="octicon octicon-history">' + '</span>' + " " + "Joined on Jan 29, 2016" + "</p>");



$('.followersContainer').append("<h3>"
+ userProfile.followers
+ "<p>"
+ "Followers"
+ "</p>"
+ "</h3>"
+ "<h3>"
+ userProfile.following
+ "<p>"
+ "Starred"
+ "</p>"
+ "</h3>"
+ '<h3>'
+ "0"
+ "<p>"
+ "Following"
+ "</p>"
+  "</h3>" );

var sectionNavItems = $('.sectionNav').find('a');

sectionNavItems.click(function(event){
  event.preventDefault();
  var selectedPage = '.' + $(this).attr('rel');
  $(selectedPage).siblings('div').addClass('inactive');
  $(selectedPage).removeClass('inactive');

});

sectionNavItems.click(function(event){
  event.preventDefault();
  $(this).siblings('a').removeClass('active');
  $(this).addClass('active');
})














});














// $('.profileHolderNav')
// [<div class=​"profileHolderNav">​</div>​]
// $('.profileHolderNav').append("<img src='" + "https://avatars.githubusercontent.com/u/16968905?v=3" +"' />")
// [<div class=​"profileHolderNav">​…​</div>​]
// $('.profileHolderNav').children('img')
// [<img src=​"https:​/​/​avatars.githubusercontent.com/​u/​16968905?v=3">​]
// $('.profileHolderNav').children('img').css('width','100%')
// [<img src=​"https:​/​/​avatars.githubusercontent.com/​u/​16968905?v=3">​]

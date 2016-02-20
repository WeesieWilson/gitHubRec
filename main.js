

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



filteredArray = activityArray.filter(function(el){return el.type === "PushEvent";});

var emptyPush = "";
var pushArray = filteredArray.forEach(function(el){
  if (el.payload.commits){
    var commitMessage = el.payload.commits[0].message;
  }
  else{
    commitMessage = " ";
  };
  emptyPush +=
  '<div class="pushEvent">'
  + "<h2>"
  + el.created_at
  + "</h2>"
  + "<p>"
  + "<span class='blue'>"
  + el.actor.login
  + "</span>"
  + "pushed to"
  + "<span class='blue'>"
  + "master"
  + "</span>"
  + "at"
  + "<span class='blue'>"
  + el.repo.name
  + "</span>"
  + "</p>"
  + "<br>"
  + "<img src='"
  + el.actor.avatar_url
  +"'/>"
  + '<span class="octicon octicon-mark-github">'
  + '</span>'
  + " "
  + "<p>"
  + el.payload.head.slice(0,7)
  + " "
  + "<p>"
  + " "
  + commitMessage
  + "</p>"
  + '</div>'
});

$(".activity").html(emptyPush).text();





























// $('.profileHolderNav')
// [<div class=​"profileHolderNav">​</div>​]
// $('.profileHolderNav').append("<img src='" + "https://avatars.githubusercontent.com/u/16968905?v=3" +"' />")
// [<div class=​"profileHolderNav">​…​</div>​]
// $('.profileHolderNav').children('img')
// [<img src=​"https:​/​/​avatars.githubusercontent.com/​u/​16968905?v=3">​]
// $('.profileHolderNav').children('img').css('width','100%')
// [<img src=​"https:​/​/​avatars.githubusercontent.com/​u/​16968905?v=3">​]

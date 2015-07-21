angular.module('userProfiles')
.service('mainService', function() {
	var data =
	[
  		{
      		"id": 1,
      		"first_name": "George",
      		"last_name": "Bluth",
      		"avatar": "http://24.media.tumblr.com/tumblr_m175qeio231qln00mo1_400.gif"
  		},
  		{
      		"id": 2,
      		"first_name": "Lucille",
      		"last_name": "Bluth",
      		"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
  		},
  		{
      		"id": 3,
      		"first_name": "Oscar",
      		"last_name": "Bluth",
      		"avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
  		}
	]

  this.getUsers = function() {
    return data
  }

});	
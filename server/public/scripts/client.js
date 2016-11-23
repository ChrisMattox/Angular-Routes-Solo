var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/potato' ,{
      templateUrl: '/views/templates/potato.html',
      controller: 'PotatoController',
      controllerAs: 'potato'
    })
    .when('/armfalloffboy' ,{
      templateUrl: '/views/templates/armfalloffboy.html',
      controller: 'ArmFallOfBoyController',
      controllerAs: 'armFallOffBoy'
    })
    .when('/hindsightlad' ,{
      templateUrl: '/views/templates/hindsightlad.html',
      controller: 'HindsightLadController',
      controllerAs: 'hindsightLad'
    })
    .otherwise({
      redirectTo: 'home'
    });

}]);

app.controller('HomeController', function() {
  console.log('home controller running');
  var self = this;
  self.message = "Home controller is the best!";

});

app.controller('PotatoController', function() {
  console.log('potato controller running');
  var self = this;
  self.message = "Potato controller is the best!";
  self.hero = "Mr. Potato Head";
  self.pic = "http://cdn.trendhunterstatic.com/thumbs/mr-potato-head-toy.jpeg";
  self.bio = "Mr. Potato Head is an American toy consisting of a plastic model of a potato which can be decorated with a variety of plastic parts that can attach to the main body. These parts usually include ears, eyes, shoes, a hat, a nose, and a mouth. The toy was invented and developed by George Lerner in 1949, and first manufactured and distributed by Hasbro in 1952. Mr. Potato Head was the first toy advertised on television and has remained in production since its debut. The toy was originally produced as separate plastic parts with pushpins that could be stuck into a real potato or other vegetable. However, due to complaints regarding rotting vegetables and new government safety regulations, Hasbro began including a plastic potato body within the toy set in 1964.Over the years, the original toy was joined by Mrs. Potato Head and supplemented with accessories such as a car and a boat trailer. Mr. and Mrs. Potato Head may be best known for their appearances in the Toy Story franchise. Additionally, in 1998 The Mr. Potato Head Show aired but was short lived, with only one season being produced. As one of the prominent marks of Hasbro, a Mr. Potato Head balloon has also joined others in the annual Macy's Thanksgiving Day Parade. Today, Mr. Potato Head can still be seen adorning hats, shirts, and ties. Toy Story Midway Mania! in Disney California Adventure at the Disneyland Resort, also features a large talking Mr. Potato Head."


});

app.controller('ArmFallOfBoyController', function() {
  console.log('Arm Fall Off Boy controller running');
  var self = this;
  self.message = "Arm Fall Off Boy controller is the best!";
  self.hero = "Arm Fall Off Boy";
  self.pic = "http://vignette1.wikia.nocookie.net/marvel_dc/images/b/b6/AFOB_1.JPG/revision/latest?cb=20140908191635";
  self.bio = "Ah, that crazy Legion of Superheroes and their crazy writers! They’ll let heroes with some of the stupidest powers into the Legion, but they pass up a great character like Arm Fall Off Boy. Arm Fall Off Boy is an oddity all his own because although he only made one appearance in a comic book ever (Secret Origins #46 [1989]), his appearance was so memorable that he has a cult following to this day. Arm Fall Off Boy made an apperance at a Legion of Superheroes recruitment drive where he displayed his “astounding” power to Saturn Girl, Lightning Lad and Cosmic Boy. His power? To detach his left arm from his body and use it as a club. Sadly, Arm Fall Off Boy was surprised when the Legion let him know that his talents weren’t quite right for their organization. Arm Fall Off Boy sulked away into comic book oblivion, but was not forgotten. One only wonders how he felt when later on the Legion would accept Bouncing Boy and, well, Matter Eater Lad to their ranks."

});

app.controller('HindsightLadController', function() {
  console.log('HindsightLad controller running');
  var self = this;
  self.message = "Arm Fall Off Boy controller is the best!";
  self.hero = "Hindsight Lad";
  self.pic = "http://blog.riptapparel.com/blog/wp-content/uploads/2016/02/hindsightlad.jpg";
  self.bio = "Possibly the most irritating superhero, Hindsight Lad has the superpower of being able to say annoying things like if only we had done it my way when the world around him is crumbling. Rather than come up with any sort of plan of action, Hindsight Lad's strength was essentially to criticise the more proactive superheroes. You know, the ones that actually wanted to do something effective. Hindsight is a wonderful thing, but it's also a 'power' that every single person possesses: and in the words of The Incredibles' Syndrome, when everyone is super, no-one is, which would make the entire superhero genre defunct. He might as well have the power of remembering what night to put the bins out, or the power to know when X Factor is on. The worst thing is, Hindsight wasn't even a superhero in his own right: he wormed his way into the New Warriors by basically holding them to ransom after discovering Speedball's alter ego. He finally proved himself to be of some use to the team, notably when they were lost in time after a battle with The Sphinx, but eventually the little puke betrayed them during the Marvel Civil War by leaking their true identities on the internet."

});

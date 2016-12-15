(function(){

"use strict";
angular
.module("chervicon")
.controller('cherviconCourouselCtrl', function ($scope) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var id= 600;
  var currIndex =0;

  $scope.addSlide = function() {
    var newArrayItem = (600 + slides.length + 0 + '.JPG');
  slides.push({
  image: '/images/' + newArrayItem,
  text: ['Instructor talking to a participant','Particpants listening attentively','Particpants concentrating in class','Assisting a participant','Being Assisted by the Instructor',
  'checking out the menu','role play-Waitressing','Participants doing a role play in the Hospitality course - Waitressing','Role Waitressing play','Waitressing play','Break time','Role play','Particpants taking part in classes','Class Sessions'][slides.length % 14],
    id: currIndex++
});

  };

/** slides.push({
  image: '/images/img' + newWidth,
  text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
    ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
});**/


  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  for (var i = 0; i < 14; i++) {
    $scope.addSlide();
  }

  // Randomize logic below

  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }

  // http://stackoverflow.com/questions/962802#962890
  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array;
  }
}); 

})();

/** slides.push({
  image: '/images/img' + newWidth,
  text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
    ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
});**/



//copied
/**
angular.module('ui.bootstrap.demo').controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: '//unsplash.it/' + newWidth + '/300',
      text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
      id: currIndex++
    });
  };

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }

  // Randomize logic below

  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }

  // http://stackoverflow.com/questions/962802#962890
  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array;
  }
});      **/

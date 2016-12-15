
angular.module('chervicon', ['ui.bootstrap','ui.router','ngAnimate', 'ngSanitize'])
     

       .config(function($stateProvider,$urlRouterProvider){
           $urlRouterProvider.when(' ','/#');

            $stateProvider
            
             .state('home',{
                  url:'/#',
                 //templateUrl:' '
            })

            .state('about',{
            url:'/about',
            templateUrl:'components/chervicontemplates/about.tpl.html'
            })
       
            .state('contact',{
            url:'/contact',
            templateUrl:'components/chervicontemplates/contact.tpl.html'}
            )

            .state('slideshow',{
            url:'/slideshow',
            templateUrl:'components/chervicontemplates/courousel.tpl.html'}
            )

            .state('courses',{
                  url:'/courses',
                  templateUrl:'components/chervicontemplates/course.tpl.html'
            })

              .state('modal',{
                  url:'/modal',
                  templateUrl:'components/chervicontemplates/modal.tpl.html'
            })

                 .state('courseDetails',{
                  url:'/courseDetails',
                  templateUrl:'components/chervicontemplates/course2.tpl.html'
            })
                      .state('venue',{
                  url:'/venue',
                  templateUrl:'components/chervicontemplates/venue.tpl.html'
            })
                           .state('notice',{
                  url:'/notice',
                  templateUrl:'components/chervicontemplates/notice.tpl.html'
            })
            ;
           



       });
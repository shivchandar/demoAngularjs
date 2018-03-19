app.config(function ($routeProvider) {

    $routeProvider
        .when("/home", {
            templateUrl: "templates/home.html",
            controller: "home"
        })
        .when("/about", {
            templateUrl: "templates/about.html",
            controller: "about"
        })
        .when("/services",{
            templateUrl : "templates/services.html",
            controller : "services"
        })
        .when("/team",{
            templateUrl : "templates/team.html",
            controller : "team"
        })
        .when("/work",{
            templateUrl : "templates/work.html",
            controller : "work"
        })
        .when("/contact",{
            templateUrl : "templates/contact.html",
            controller : "contact"
        })
        .otherwise("/home",{
            templateUrl: "templates/home.html",
            controller: "home"
        });



});
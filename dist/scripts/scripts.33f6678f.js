"use strict";angular.module("playApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/format/:id",{templateUrl:"views/format.html",controller:"FormatCtrl"}).otherwise({redirectTo:"/"})}]).directive("mediaelement",function(){return{link:function(a,b){a.$watch(function(){},function(){a.$evalAsync(function(){b.mediaelementplayer({enablePluginDebug:!0,pluginPath:"/mediaelement/"})})})}}}),angular.module("playApp").factory("Playapi",["$http",function(a){var b={api:"playapi.mtgx.tv",version:3,country:"ee"},c="http://"+b.api+"/v"+b.version+"/";return{getChannels:function(){return a.get(c+"channels?country="+b.country).then(function(a){return a.data._embedded.channels})},getChannel:function(b){return a.get(c+"channels/"+b).then(function(a){return a.data})},getChannelFormats:function(b){return this.getChannel(b).then(function(b){return a.get(b._links.formats.href).then(function(a){return a.data._embedded.formats})})},getFormat:function(b){return a.get(c+"formats/"+b).then(function(a){return a.data})},getStream:function(b){return a.get(c+"videos/stream/"+b).then(function(a){return{hls:a.data.streams.hls,medium:a.data.streams.medium}})},getLatestStream:function(a){var b=this;return b.getFormat(a).then(function(a){return b.getStream(a.latest_video.id).then(function(a){return a})})}}}]),angular.module("playApp").controller("MainCtrl",["$scope","$http","Playapi",function(a,b,c){c.getChannelFormats(1375).then(function(b){a.formats=b})}]),angular.module("playApp").controller("FormatCtrl",["$scope","$http","$sce","$routeParams","Playapi",function(a,b,c,d,e){a.src=function(a){return c.trustAsResourceUrl(a)},e.getFormat(d.id).then(function(b){a.format=b,a.title=b.title}),e.getLatestStream(d.id).then(function(b){a.stream=b})}]);
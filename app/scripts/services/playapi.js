'use strict';

angular.module('playApp')
  .factory('Playapi', function ($http) {
    var settings = {
      api: 'playapi.mtgx.tv',
      version: 3,
      country: 'ee'
    };
    var apiUrl = 'http://'+settings.api+'/v'+settings.version+'/';
    return {
      getChannels: function () {
        return $http.get(apiUrl + 'channels?country='+settings.country).then(function (response) {
          return response.data._embedded.channels;
        });
      },
      getChannel: function (channelId) {
        return $http.get(apiUrl + 'channels/' + channelId).then(function (response) {
          return response.data;
        });
      },
      getChannelFormats: function (channelId) {
        return this.getChannel(channelId).then(function (response) {
          return $http.get(response._links.formats.href).then(function (response) {
            return response.data._embedded.formats;
          });
        });
      },
      getFormat: function (formatId) {
        return $http.get(apiUrl + 'formats/' + formatId).then(function (response) {
          return response.data;
        });
      },
      getStream: function (videoId) {
        return $http.get(apiUrl + 'videos/stream/' + videoId).then(function (response) {
          return {
            hls: response.data.streams.hls,
            medium: response.data.streams.medium
          };
        });
      },
      getLatestStream: function (formatId) {
        var functions = this;
        return functions.getFormat(formatId).then(function (format) {
          return functions.getStream(format.latest_video.id).then(function (stream) {
            return stream;
          });
        });
      }
    };
  });

export default /*@ngInject*/ function ($http, $log, apiEndpoint) {
  var svc = {};

  svc.saveTrack = function (data) {
    $log.debug(data);
    return $http.post(apiEndpoint + '/map/track', data);
  };

  svc.getTrack = function (data) {
    $log.debug(data);
    if (data.bounds) {
      return $http.get(apiEndpoint + '/map/track?bounds=' + data.bounds);
    }
  };

  return svc;
}
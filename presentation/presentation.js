exports.init = function(SARAH){
SARAH.speak('initialisation terminé, Bonjour monsieur, mon interface et prèt.');
 }

exports.action = function(data, callback, config, SARAH) {
  var config = config.modules.presentation;
  var tts = data.test + ' ' + config.phrase;
  callback({'tts': tts});
}
console.log('Start Screen Module');
//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
var StartScreenModule = function(settings){
  this.settings = settings;
};
//---------------------------------------------------------------
StartScreenModule.prototype = BlankModulePrototype;
//---------------------------------------------------------------
//---------------------------------------------------------------
//---------------------------------------------------------------
s = new StartScreenModule({hello:'hello'});
s.update();

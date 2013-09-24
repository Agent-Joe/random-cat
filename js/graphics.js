
function Graphics (){}
Graphics.init = function() {

  Graphics.ctx = $("#canvas")[0].getContext("2d");

  size = {width:$("#canvas").width(), height:$("#canvas").height()}
  center = {x:size.width / 2,y:size.height / 2};
};


Graphics.clear = function()
{
  $("#canvas")[0].width = $("#canvas")[0].height;
}
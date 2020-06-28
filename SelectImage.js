var img=null;
var imgfileoriginal;
function ShowImage(){
    var canvas = document.getElementById("can");
var imgfile = document.getElementById("imagefile");
img = new SimpleImage(imgfile);
img.drawTo(canvas);
imgfileoriginal=imgfile;
}

function loadState()
{
    var canvas = document.getElementById("can");
  
  var imgnew = new SimpleImage(imgfileoriginal);
  
  imgnew.drawTo(canvas);
}

function GrayScaleImage(){
  
  for(var pixel of img.values())
    {
      var avg =(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
      
      pixel.setRed(avg);
      pixel.setGreen(avg);
      pixel.setBlue(avg);
      
    }
  var canvas = document.getElementById("can"); 
  img.drawTo(canvas);
}

function ChangeToRed(){
    for(var pixel of img.values())
    {
      var avg =(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
      if(avg<128)
      {
          pixel.setRed(2*avg);
          pixel.setGreen(0);
          pixel.setBlue(0);
      }
      else
      {
          pixel.setRed(255);
          pixel.setGreen(2*avg-255);
          pixel.setBlue(2*avg-255);
      }
      
    }
  var canvas = document.getElementById("can"); 
  img.drawTo(canvas);

}

function ClearImage(){
    var canvas = document.getElementById("can");
  
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}

function RainbowStyle()
{
    var canvas = document.getElementById("can"); 
    var h = img.height;
    for(var pixel of img.values())
    {
      var avg =(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
      var y = pixel.getY();
      if(y<h/7){
        if(avg<128)
        {
            pixel.setRed(2*avg);
            pixel.setBlue(0);
            pixel.setGreen(0);
        }
        else
        {
            pixel.setRed(255);
            pixel.setBlue(2*avg-255);
            pixel.setGreen(2*avg-255);
        }
      }

      else if(y>=h/7 && y<h*2/7){
        if(avg<128)
        {
            pixel.setRed(2*avg);
            pixel.setBlue(0);
            pixel.setGreen(0.8*avg);
        }
        else
        {
            pixel.setRed(255);
            pixel.setBlue(2*avg-255);
            pixel.setGreen(1.2*avg-51);
        }
      }
      else if(y>=h*2/7 && y<h*3/7){
        if(avg<128)
        {
            pixel.setRed(2*avg);
            pixel.setBlue(0);
            pixel.setGreen(2*avg);
        }
        else
        {
            pixel.setRed(255);
            pixel.setBlue(2*avg-255);
            pixel.setGreen(255);
        }
      }

      else if(y>=h*3/7 && y<h*4/7){
        if(avg<128)
        {
            pixel.setRed(0);
            pixel.setBlue(0);
            pixel.setGreen(2*avg);
        }
        else
        {
            pixel.setRed(2*avg-255);
            pixel.setBlue(2*avg-255);
            pixel.setGreen(255);
        }
      }
      else if(y>=h*4/7 && y<h*5/7)
      {
        if(avg<128)
        {
            pixel.setRed(0);
            pixel.setGreen(0);
            pixel.setBlue(2*avg);
        }
        else
        {
            pixel.setRed(2*avg-255);
            pixel.setGreen(2*avg-255);
            pixel.setBlue(255);
        }
      }
      else if(y>=h*5/7 && y<h*6/7)
      {
        if(avg<128)
        {
            pixel.setRed(0.8*avg);
            pixel.setGreen(0);
            pixel.setBlue(2*avg);
        }
        else
        {
            pixel.setRed(1.2*avg-51);
            pixel.setGreen(2*avg-255);
            pixel.setBlue(255);
        }
      }
      else if(y>=h*6/7 && y<=h){
        if(avg<128)
        {
            pixel.setRed(1.6*avg);
            pixel.setGreen(0);
            pixel.setBlue(1.6*avg);
        }
        else
        {
            pixel.setRed(0.4*avg+153);
            pixel.setGreen(2*avg-255);
            pixel.setBlue(0.4*avg+153);
        }
      }
    }
  img.drawTo(canvas);
}

var SpeechRecognition=window.webkitSpeechRecognition;
var recogniton=new SpeechRecognition();
function start (){
    document.getElementById("textbox").innerHTML="";
    recogniton.start();
}
recogniton.onresult=function(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML=Content;
    if (Content=="selfie"){
        console.log("taking selfie---")
        speak();
        speak_1();
        speak_2();
    }
}



Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});
camera = document.getElementById("camera");
function take_snapshot(){
    console.log(img_id);
    Webcam.snap (function(data_uri){
        if(img_id=="selfie1"){
        document.getElementById("result1").innerHTML='<img id="selfie1" src="'+data_uri+'"> ';
        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML='<img id="selfie2" src="'+data_uri+'"> ';
            }
            if(img_id=="selfie3"){
                document.getElementById("result3").innerHTML='<img id="selfie3" src="'+data_uri+'"> ';
                }

            });

}


function speak(){
    var synth= window.speechSynthesis;
    speak_data="taking selfie in 5 seconds";
    var utterThis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach("camera");
    setTimeout(function(){
        img_id="selfie1";
        take_snapshot();
        save();
    },5000);
}
function speak_1(){
    var synth= window.speechSynthesis;
   
    speak_data="taking selfie in 10 seconds";
    var utterThis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach("camera");
    setTimeout(function(){
         img_id="selfie2";
        take_snapshot();
        save();
    },10000);
}
function speak_2(){
    var synth= window.speechSynthesis;
   
    speak_data="taking selfie in 15 seconds";
    var utterThis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach("camera");
    setTimeout(function(){
        img_id="selfie3";
        take_snapshot();
        save();
    },15000);
}
     
    
    

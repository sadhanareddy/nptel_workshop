load()
function loadJSON(file, callback) {   

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 
 }
 

function load() {
    loadJSON("/home/sadhana/renarration_project/nptel_viewer_workshop/src/video_narration/video_narration.json", function(response) {
  		var actual_JSON = JSON.parse(response);
        console.log(response);
        alert(response);
        //alert("hello world");
        //alert(video_narration.name);
    });
}





// $.getJSON("video_narration.json", function(json) {
//     document.getElementById("test").innerHTML = json;
//     //console.log(json); // this will show the info it in firebug console
// });


 // function loadJSON(callback) {   

 //    var xobj = new XMLHttpRequest();
 //    xobj.overrideMimeType("application/json");
 //    xobj.open('GET', 'video_narration.json', true); // Replace 'my_data' with the path to your file
 //    xobj.onreadystatechange = function () {
 //          if (xobj.readyState == 4 && xobj.status == "200") {
 //            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
 //            callback(xobj.responseText);
 //          }
 //    };
 //    xobj.send(null);  
 // }

// var videotime = 0;
// var timeupdater = null;

// // 2. This code loads the IFrame Player API code asynchronously.
// var tag = document.createElement('script');
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// // 3. This function creates an <iframe> (and YouTube player) after the API code downloads.
// var player;
// function onYouTubeIframeAPIReady() {
// player = new YT.Player('player', {
//   height: '390',
//   width: '640', 
//   videoId: 'zWg7U0OEAoE',
//   events: {
//     //'onReady': onPlayerReady,
//     'onStateChange': onPlayerStateChange,
//     'onError': onPlayerError
//   }
// });
// }

// /* 4. The API calls this function when the player's state changes. The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop. */
// var done = false;
// function onPlayerStateChange(event) {
//     video_current_time = parseInt(player.getCurrentTime());
//     if (event.data == YT.PlayerState.PLAYING && !done) {
//         if( video_current_time == 52) {
//             document.getElementById("player").src = "test.pdf";
//             stopVideo()
//         }
//         if( video_current_time == 114) {
//             document.getElementById("player").src ="https://docs.google.com/presentation/d/1OvE-lB8iy-M8Pt-X_tz_bwu4eE62KLaNmj6UfOkkelA/embed?start=false&loop=false&delayms=3000";
//             stopVideo()
//         }
//     }

//     if( event.data === 0 ) {
//         console.log("Thanks for watching the video");          
//         alert('Thanks for watching the video');
//     }
//     // if (event.data == YT.PlayerState.PLAYING && !done) {
//     //     setTimeout(stopVideo, 13000);
//     //     // if(player.getCurrentTime() === 13000){
//     //     //     stopVideo()
//     //     // }
//     //     done = true;
//     // }
//     //alert(video_current_time);
//     //alert(event.data);
// }

// function stopVideo() {
//     player.stopVideo();
//     //document.getElementById("pdf").style.visibility = 'visible';
//     // document.getElementById("player").src ="test.pdf";
// }

// function playVideo() {
//     document.getElementById('player').src ="https://www.youtube.com/embed/zWg7U0OEAoE?enablejsapi=1&widgetid=1";
//     player.playVideo();
//     player.seekTo(parseInt(20));
//     // document.getElementById("play-button").style.visibility = 'hidden'
//     // document.getElementById("play-button").style.visibility = 'hidden'
// }

// // 4. The API will call this function when the video player is ready.
// function onPlayerReady(event) {
//   event.target.playVideo();
// }


// function onPlayerError(e) {
//     console.log('An error occurred: ' + e.data);
// }

// // //between 13secs and 17secs shoot off a firework every half a second (500ms)
// // player.at('13000-16500', function() {
// //     createFirework(14,73,3,2,null,null,null,20,true,true);
// // }, 500);


// // when the player is ready, start checking the current time every 100 ms.
// function onPlayerReady() {
//       function updateTime() {
//         var oldTime = videotime;
//         if(player && player.getCurrentTime) {
//           videotime = player.getCurrentTime();
//         }
//         // if(videotime !== oldTime) {
//         //   onProgress(videotime);
//         // }
//         if(videotime == 6) {
//           onProgress(videotime);
//         }
//       }
//       timeupdater = setInterval(updateTime, 100);
// }

// // when the time changes, this will be called.
// function onProgress(currentTime) {
//     if(currentTime > 6) {
//         console.log("the video reached 20 seconds!");
//         alert("the video reached 20 seconds!");
//     }
// }
 



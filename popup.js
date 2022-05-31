let changeColor = document.querySelector('#changeColor')

changeColor.addEventListener("click", async () => {
//     chrome.tabs.update({
//         url: "https://www.youtube.com/playlist?list=WL"
//    });
    let [tab] = await chrome.tabs.query( { active: true, currentWindow: true } ); 

    console.log(tab)

    if(tab.url === 'https://www.youtube.com/playlist?list=WL') {
        await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: setPageBackgroundColor,
          });
    } else {
        console.log('go to watch later')
    }
  
    
  });
  
  // The body of this function will be executed as a content script inside the
  // current page
  function setPageBackgroundColor() {
 
        let getNumberOfVideos = () => {
            let arr = document.querySelectorAll("#contents > ytd-playlist-video-renderer")
        
            return arr.length
        }

        function generateRandom(min = 100, max = 350) {

            let difference = max - min;
        
            let rand = Math.random();
        
            rand = Math.floor( rand * difference);
        
  
            rand = rand + min;
        
            return rand;
        }

        let delay = generateRandom()
        
        
        let deleteVideos = () => {
            let i = 0
            let idx = getNumberOfVideos()
            setInterval(()=> {
                i +=1
                document.querySelector("#contents > ytd-playlist-video-renderer:nth-child(1) #menu button").click()
                document.querySelector("#items > ytd-menu-service-item-renderer:nth-child(3)").click()
        
                if( i > idx) clearInterval()
            }, delay)
        }
    
        deleteVideos()
  }
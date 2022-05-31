document.querySelector("#contents > ytd-playlist-video-renderer:nth-child(3) #menu button").click()

document.querySelector("#items > ytd-menu-service-item-renderer:nth-child(3)").click() 

let some = () => {
     document.querySelector("#contents > ytd-playlist-video-renderer:nth-child(1) #menu button").click()
    setTimeout(()=> {
        console.log('done')
    }, 1000)
    document.querySelector("#items > ytd-menu-service-item-renderer:nth-child(3)").click() 
}
some()

let getNumberOfVideos = () => {
    let arr = document.querySelectorAll("#contents > ytd-playlist-video-renderer")

    return arr.length
}

let deleteVideos = () => {
    let i = 0
    let idx = getNumberOfVideos()

    setInterval(()=> {
        i +=1
        document.querySelector("#contents > ytd-playlist-video-renderer:nth-child(1) #menu button").click()
        document.querySelector("#items > ytd-menu-service-item-renderer:nth-child(3)").click()

        if( i > idx) clearInterval()
    }, 100)
}

deleteVideos()


(() => {
    let getNumberOfVideos = () => {
        let arr = document.querySelectorAll("#contents > ytd-playlist-video-renderer")
    
        return arr.length
    }
    
    let deleteVideos = () => {
        let i = 0
        let idx = getNumberOfVideos()
    
        setInterval(()=> {
            i +=1
            document.querySelector("#contents > ytd-playlist-video-renderer:nth-child(1) #menu button").click()
            document.querySelector("#items > ytd-menu-service-item-renderer:nth-child(3)").click()
    
            if( i > idx) clearInterval()
        }, 100)
    }

    deleteVideos()
})()
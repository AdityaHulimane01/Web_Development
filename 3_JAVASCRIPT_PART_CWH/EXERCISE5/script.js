function createCard( title , cName , views , monthsOld , duration , thumbnail){
    
    let viewNum 
    if(views < 1000){
        viewNum = views + "K";
    }
    else if(views > 1000000){
        viewNum = views/1000000 + "M";
    }
    else
       viewNum = views/1000 +"K";

    let html = `<div class="card">
            <div class="thumbnail">
                <div class="image">
                    <img src="${thumbnail}" alt="">
                    <div class="capsule">${duration}</div>
                </div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewNum}views . ${monthsOld} months ago</p>
            </div>
        </div>`  

        document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}


createCard("Introduction to Backend | Sigma Web Dev video #2" , "CodeWithHarry" , 560000 , 7 , "31:22" , 
    "https://i.ytimg.com/vi/UzYRQURh_pY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQ3wWyc69oKe6hWkHb-4Ua7K9UhA" );

//To see how the new card will be dinamically created use above createcard() function copy it and paste in the console of chrome 
// and then change the inner values and enter the new card will be created with the exact same style as of the privious one
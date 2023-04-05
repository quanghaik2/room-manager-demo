var imgs = ["../img/bedddd33 1.png","../img/bedddd33 2.png","../img/standard_sindle_room_1.png","../img/superior_room_1.png"];
const imgItems = document.getElementsByClassName("img_item--galleris");
const i = 0;
const j = i+1;

function animation(img,imgItem){
    for(var i = 0 ; i < imgItem.length; i++){
        const j = i;
        if(j > imgItem.length) j = 0;
        imgItem[i].src = img[j+1];
        j++;
    }
}

setInterval(animation(imgs,imgItems),2000);
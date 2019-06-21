window.onload = function () {
    ajust();
}

function ajust(){
    var imgHeight = 1400;
    var imgWidth = 640;
    var plotNum = 2;

    var winHeight = document.body.clientHeight;
    var winWidth = document.body.clientWidth;

    var xNum = winWidth/imgWidth;
    var yNum = winHeight/imgHeight;

    var area = document.getElementsByTagName('area');

    for(var i=0; i < area.length; i++) {
        nPosition = []
        oPosition = area[i].getAttribute('coords');
        a = oPosition.split(",");
        for(var m=0;m < a.length; m++){
            if(m%2==0){
                // x坐标
                nPosition.push(a[m]*xNum);
            }else{
                // y坐标
                nPosition.push(a[m]*yNum);
            }
        }
        np = nPosition.join(",");
        area[i].setAttribute("coords", np);
    }
}
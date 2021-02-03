function TBC() {
    let Math = document.getElementById('Math').value;
    let Physical = document.getElementById('Physical').value;
    let Chemistry = document.getElementById('Chemistry').value;
    let TBC = (parseFloat(Math) + parseFloat(Physical) + parseFloat(Chemistry))/3;
    document.getElementById('TBC').innerHTML = 'trung bình cộng là: '+ TBC;
    let message;

    let X=TBC;
    if(X >= 0 && X <=3.5) {
        message = 'hạng yếu';
    } else if(X >3.5 && X <=5) {
        message= 'hạng TB';
    }else if(X >5 && X <8) {
        message= 'hạng Khá';
    }else if (X >= 8){
        message= 'hạng Giỏi';
    }
   

    
    document.getElementById('Rank').innerHTML = message;
}
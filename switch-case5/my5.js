function TBC() {
    let Math = document.getElementById('Math').value;
    let Physical = document.getElementById('Physical').value;
    let Chemistry = document.getElementById('Chemistry').value;
    let TBC = (parseFloat(Math) + parseFloat(Physical) + parseFloat(Chemistry))/3;
    document.getElementById('TBC').innerHTML = 'trung bình cộng là: '+ TBC;
    let message;

    
    if(TBC >= 0 && TBC <=3.5) {
        message = 'hạng yếu';
    } else if(TBC >3.5 && TBC <=5) {
        message= 'hạng TB';
    }else if(TBC >5 && TBC <8) {
        message= 'hạng Khá';
    }else if (TBC >= 8){
        message= 'hạng Giỏi';
    }
   

    
    document.getElementById('Rank').innerHTML = message;
}
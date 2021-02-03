function checkMonth() {
    let month = document.getElementById('input').value;
    switch (parseInt(month)) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12: document.getElementById('Result').innerHTML= '31 ngày';break;
        case 4:
        case 6:
        case 9:
        case 11: document.getElementById('Result').innerHTML= '30 ngày';break;
        case 2: document.getElementById('Result').innerHTML= '28 hoặc 29 ngày';break;
        default:
            document.getElementById('Result').innerHTML= 'không hợp lệ';break;        
        
    }
}
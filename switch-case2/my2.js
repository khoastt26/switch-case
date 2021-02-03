function fruitPrice() {
    let fruit = document.getElementById('input').value;
    switch(fruit) {
        case 'Ổi': document.getElementById('Result').innerHTML = '20000 VNĐ/kg';break;
        case 'Dưa Hấu': document.getElementById('Result').innerHTML = '25000 VNĐ/kg';break;
        case 'Táo': document.getElementById('Result').innerHTML = '45000 VNĐ/kg';break;
        case 'Xoài': document.getElementById('Result').innerHTML = '35000 VNĐ/kg';break;
        case 'Cam': document.getElementById('Result').innerHTML = '30000 VNĐ/kg';break;
        case 'Chôm chôm': document.getElementById('Result').innerHTML = '40000 VNĐ/kg';break;
        case 'Măng cụt': document.getElementById('Result').innerHTML = '50000 VNĐ/kg';break;
    }
}
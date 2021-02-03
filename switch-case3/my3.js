function calculator (){
    let Math = document.getElementById('Math').value;
    let Literature = document.getElementById('Literature').value;
    let English = document.getElementById('English').value;
    let KV = document.getElementById('KV').value;
    switch (KV) {
        case 'KV1':document.getElementById('Result').innerHTML = parseFloat(Math) + parseFloat(Literature) + parseFloat(English) + 0.75;break;
        case 'KV2':document.getElementById('Result').innerHTML = parseFloat(Math) + parseFloat(Literature) + parseFloat(English) + 0.25;break;
        case 'KV2-NT':document.getElementById('Result').innerHTML = parseFloat(Math) + parseFloat(Literature) + parseFloat(English) + 0.5;break;
        case 'KV3':document.getElementById('Result').innerHTML = parseFloat(Math) + parseFloat(Literature) + parseFloat(English) ;break;

    }

}
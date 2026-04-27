let button = document.getElementById('btn');

button.addEventListener('click', function(){
    const gram = parseFloat(document.getElementById('grams').value);
    const type = document.getElementById('type').value;
    const output = document.getElementById('output');
    const error = document.getElementById('error');

    if(isNaN(gram) || gram <= 0){
        document.getElementById('grams').focus();
        error.innerHTML = 'Mohon masukkan angka berat yang valid!';
        output.innerHTML = '';
    } else {
        error.innerHTML = '';
        
        switch(type){
            case 'Kilograms':
                convert_kilogram(gram);
                break;
            case 'Pounds':
                convert_pounds(gram);
                break;
            case 'Ounces':
                convert_ounces(gram);
                break;
            case 'Miligrams':
                convert_mg(gram);
                break;
            case 'Quintals':
                convert_kuintal(gram);
                break;
            case 'Tons':
                convert_ton(gram);
                break;
            case 'Stones':
                convert_stones(gram);
                break;
            default:
                alert('Pilihan tidak tersedia');
        }
    }

    function convert_kilogram(gram){
        let result = gram / 1000;
        output.innerHTML = `${gram.toLocaleString()} gram = ${result.toFixed(3)} kg`;
    }

    function convert_pounds(gram){
        let result = gram * 0.00220462;
        output.innerHTML = `${gram.toLocaleString()} gram = ${result.toFixed(3)} pon`;
    }

    function convert_ounces(gram){
        let result = gram * 0.035274;
        output.innerHTML = `${gram.toLocaleString()} gram = ${result.toFixed(3)} ons`;
    }

    function convert_mg(gram){
        let result = gram * 1000;
        output.innerHTML = `${gram.toLocaleString()} gram = ${result.toLocaleString()} mg`;
    }

    function convert_kuintal(gram){
        let result = gram / 100000;
        output.innerHTML = `${gram.toLocaleString()} gram = ${result.toFixed(5)} kuintal`;
    }

    function convert_ton(gram){
        let result = gram / 1000000;
        output.innerHTML = `${gram.toLocaleString()} gram = ${result.toFixed(6)} ton`;
    }

    function convert_stones(gram){
        let result = gram * 0.00015747;
        output.innerHTML = `${gram.toLocaleString()} gram = ${result.toFixed(4)} stones`;
    }
});
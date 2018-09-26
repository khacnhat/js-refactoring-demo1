function readNumber() {
    var n = parseInt(document.getElementById('numberInput').value);

    if(n > 9){
        var a = Math.floor(n / 10);
        switch (a){
            case 1:
                document.getElementById('numberText').innerHTML = 'muoi ';
                break;
            case 2:
                document.getElementById('numberText').innerHTML = 'hai muoi ';
                break;
            case 3:
                document.getElementById('numberText').innerHTML = 'ba muoi ';
                break;
            case 4:
                document.getElementById('numberText').innerHTML = 'bon muoi ';
                break;
            case 5:
                document.getElementById('numberText').innerHTML = 'nam muoi ';
                break;
            case 6:
                document.getElementById('numberText').innerHTML = 'sau muoi ';
                break;
            case 7:
                document.getElementById('numberText').innerHTML = 'bay muoi ';
                break;
            case 8:
                document.getElementById('numberText').innerHTML = 'tam muoi ';
                break;
            case 9:
                document.getElementById('numberText').innerHTML = 'chin muoi';
                break;
        }
    }
    var b = n % 10;

    switch (b){
        case 0:
            document.getElementById('numberText').innerHTML += 'khong';
            break;
        case 1:
            document.getElementById('numberText').innerHTML += 'mot';
            break;
        case 2:
            document.getElementById('numberText').innerHTML += 'hai';
            break;
        case 3:
            document.getElementById('numberText').innerHTML += 'ba';
            break;
        case 4:
            document.getElementById('numberText').innerHTML += 'bon';
            break;
        case 5:
            document.getElementById('numberText').innerHTML += 'nam';
            break;
        case 6:
            document.getElementById('numberText').innerHTML += 'sau';
            break;
        case 7:
            document.getElementById('numberText').innerHTML += 'bay';
            break;
        case 8:
            document.getElementById('numberText').innerHTML += 'tam';
            break;
        case 9:
            document.getElementById('numberText').innerHTML = 'chin';
            break;
    }
}
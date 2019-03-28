var result = document.getElementById('result');


function day() {
    var a = document.getElementById('p').innerHTML;

    var b = parseInt(a);
    switch (b) {
        case 1:
            result.innerHTML = "Hello sir, Today is sunday";
            break;
        case 2:
            result.innerHTML = "Hello sir, Today is monday";
            break;
        case 3:
            result.innerHTML = "Hello sir, Today is tuesday";
            break;
        case 4:
            result.innerHTML = "Hello sir, Today is wednesday";
            break;
        case 5:
            result.innerHTML = "Hello sir, Today is thursday";
            break;
        case 6:
            result.innerHTML = "Hello sir, Today is friday";
            break;
        case 7:
            result.innerHTML = "Hello sir, Today is saturday";
            break;
        default:
            result.innerHTML = "wrong no."

    }

    console.log(b);
}

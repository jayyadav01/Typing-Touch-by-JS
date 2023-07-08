function randomnumber(length)
{
    let words = '';
    let charactors = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    charactorslength = charactors.length;
    counter = 0;
    while(counter < length)
    {
        words += charactors.charAt(Math.floor(Math.random() * charactorslength));
        counter++;
    }
    return words;
}
    document.getElementById('random').innerHTML = randomnumber(16);

let randomtext = document.querySelector('#random').innerHTML;
let inputtext = document.querySelector('input');
let container = document.querySelector('#box');

inputtext.onkeyup = () => 
{
    let str = randomtext.slice(0,inputtext.value.length)

    if((randomtext.length === inputtext.value.length && str == inputtext.value) && (randomtext.length>0 && inputtext.value.length>0))
    {
        inputtext.disabled = true;
        document.querySelector('#box h1').innerHTML = 'level completed';
        randomtext = 'You win';

        let button = document.createElement('button');
        button.innerText = 'Next';

        button.onclick = () => {
            location.reload();
        }
            document.querySelector('#message').append(button);
            document.querySelector('#message').style.display = 'block';
            document.querySelector('#message p').innerHTML = `Score : 100`;
    }
    else
    {
        if(inputtext.value == str)
        {
            container.style = '';
            document.querySelector('h1').innerHTML = 'Touch typing';
        }
        else
        {
            container.style.backgroundColor = 'red';
            document.querySelector('h1').innerHTML = 'Wrong typing';
        }
    }
}

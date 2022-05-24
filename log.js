let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenvalue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {

        let buttonText = e.target.innerText;
        console.log('Button Text is', buttonText);
        if (buttonText == 'C') {
            screenvalue = '';
            screen.value = screenvalue;
        } else if (buttonText == '=') {
            screenvalue = eval(screenvalue)
            screen.value = screenvalue
        } else if (buttonText == 'DEL') {
            screen.value = screen.value.slice(0, -1);
            screenvalue = screenvalue.slice(0, -1);
        } else {
            screenvalue += buttonText;
            screen.value = screenvalue;
        }

    })

}

const toggleTheme = document.getElementById('toggle-theme');
toggleTheme.onchange = () => {
    if (toggleTheme.checked) {
        document.querySelector('body').style.backgroundColor = '#000';
        document.querySelector('body').style.color = '#FFF';
    } else {
        document.querySelector('body').style.backgroundColor = '#FFF';
        document.querySelector('body').style.color = '#000';
    }
}
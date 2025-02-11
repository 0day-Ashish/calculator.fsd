document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.display input');
    const buttons = document.querySelectorAll('.buttons button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (button.textContent === 'Clear') {
                display.value = '';
            } else if (button.textContent === '=') {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Error';
                }
            } else {
                display.value += button.textContent;
            }
        });
    });
});
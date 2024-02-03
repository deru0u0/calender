'use strict';
{
    document.addEventListener('DOMContentLoaded',function() {
        const select = document.querySelector('select');
        const list = document.querySelector('ul');
        let h1 = document.querySelector('h1');

        select.addEventListener('change', function() {
            let choice = select.value;
            let days = 31;
        if( choice === '2' ) {
            days = 28;
        } else if ( choice === '4' || choice === '6' || choice === '9' || choice === '11' ) {
            days = 30;
        } 
        
        createCalender(days, choice+'月');
    },false);

    function createCalender(days, choice) {
        list.textContent = '';
        h1.textContent = choice;
        for( let i = 1;i<=days;i++ ) {
            let listItem = document.createElement('li');
            listItem.textContent = i;
            list.appendChild(listItem);
        }
    }
    

    createCalender(31,'1月');
    })
    
} 
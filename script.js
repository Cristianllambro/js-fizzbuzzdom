let boxNumber = document.querySelector('.item-number');

for (let i = 0; i <= 100; i++) {
    let item = document.createElement('div');
    item.classList.add('box');
    item.classList.add('number')
    item.innerHTML = i;

    if (i % 3 == 0) {
        item.classList.add('fizz')
        
    } else if (i % 5 == 0) {
        item.classList.add('buzz')
    }

    // } else ()
    //     item.classList.add('fizzbuzz')
    
    boxNumber.append(item)
}
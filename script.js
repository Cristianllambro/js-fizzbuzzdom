let boxNumber = document.querySelector('.item-number');

for (let i = 1; i <= 100; i++) {
    let item = document.createElement('div');
    item.classList.add('box');
    item.classList.add('number')
    item.innerHTML = i;

    if (i % 3 == 0) {
        item.classList.add('fizz')
        item.innerHTML = 'Fizz'
        
    } else if (i % 5 == 0) {
        item.classList.add('buzz')
        item.innerHTML = 'Buzz'
    }

    // } else (i % 15 == 0) {}
    //     item.classList.add('fizzbuzz')
    //     item.innerHTML = 'FizzBuzz'
    
    boxNumber.append(item)
}
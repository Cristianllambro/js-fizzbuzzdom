let boxNumber = document.querySelector('.item-number');

for (let i = 1; i <= 100; i++) {
    let item = document.createElement('div');
    item.classList.add('box');
    item.classList.add('number')
    item.innerHTML = i;

    if (i % 3 == 0) {
        item.classList.add('fizz')
        document.writeln('fizz')
        
    } else if (i % 5 == 0) {
        item.classList.add('buzz')
    }

    } else (i % 15 == 15){
        item.classList.add('fizzbuzz')
    }
    
    boxNumber.append(item)
}
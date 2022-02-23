let boxNumber = document.querySelector('.item-number');

for (let i = 0; i <= 100; i++) {
    let item = document.createElement('div');
    item.classList.add('box');
    item.innerHTML = i;

    if(i){

    }
    
    boxNumber.append(item)
}
let btn = document.querySelector("#add");
let sub = document.querySelector("#subtract");
let input = document.querySelector("input");

btn.addEventListener('click', () => {
    input.value = parseInt(input.value) + 1;

});

sub.addEventListener('click', () => {
    input.value = parseInt(input.value) - 1;

});

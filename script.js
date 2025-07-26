
let btn = document.querySelector(".btn");
let inpt = document.querySelector(".inpt");
let sound1 = new Audio("sound1.mp3")
btn.addEventListener('click', () => {
    if (inpt.value.trim() != '') {
        let container = document.querySelector(".ans");
        let newbtn = document.createElement("button");
        newbtn.classList.add("del");
        newbtn.textContent = "X";
        let newlist = document.createElement('li')
        newlist.textContent = inpt.value;
        newlist.appendChild(newbtn);
        container.appendChild(newlist);
        newbtn.addEventListener('click', function () {
            let li = this.closest('li');
            li.remove();
            sound1.play();
        });
        inpt.value = '';
    }
    sound1.play();
    
    
})

const toggleBtn = document.getElementById('themeToggle');

toggleBtn.addEventListener('click', () => {
    sound1.play();
    document.body.classList.toggle('alt-dark-theme');
    toggleBtn.textContent = document.body.classList.contains('alt-dark-theme')
    ? 'Switch to Default Dark'
        : 'Switch to Alt Dark';
});
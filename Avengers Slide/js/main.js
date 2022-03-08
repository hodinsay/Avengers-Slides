const avengers = document.getElementById("avengers");

const img = document.querySelectorAll("#avengers img");

let idx = 0;

function run() {
    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    }

    avengers.style.transform = `translateX(${-idx * 464}px)`;
}

setInterval(run, 2000);

/* let arr = [
  {
    name: "Alex",
    age: 25
  }
]

let jsonF = JSON.stringify(arr);

console.log(JSON.parse(jsonF)); */


for (let i = 0; i < 12; i++) {
    firstRender()
}

function firstRender() {
    fetch('https://randomuser.me/api/')
        .then(
            (res) => {
                return res.json();
            }
        )
        .then((data) => {

            const posts = document.querySelector('#posts');

            data.results.forEach(post => {
                    console.log(data.results)
                    posts.innerHTML += `
           
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                     <img src="${post.picture.large}" alt="">
                     <p>Hi! My name is:</p>
                     <span> ${post.name.first}</span>
                </div>
            </div>
        `
                }

            )

        })
}


function checkPosition() {
    const height = document.body.offsetHeight;
    const screenHeight = window.innerHeight;
    const scrolled = window.scrollY;

    const threshold = height - screenHeight / 6;
    const position = scrolled + screenHeight;

    if (position >= threshold) {
        firstRender();
    }
}

(() => {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);
})();
$(document).ready(function()
{
    let movie = JSON.parse(info);
    console.log(movie);
    var count = 0;

    for (let i = 0; i < movie.length; i++)
    {
        document.getElementById("container").innerHTML += 
                    `<div id="${i}" class="content">
                        <div class="pic">
                            <img src="${movie[i].img}" alt="Banner">
                        </div>
                        <div>
                            <h4>${movie[i].titel}</h4>
                            <p>${movie[i].info}</p>
                            <div class="likeOutput">
                                <button class="buttOn"><img src="${movie[i].like}"></button>
                                <h2 class="output"></h2>
                            </div>
                        </div>
                    </div>`; 
    }    

    

});
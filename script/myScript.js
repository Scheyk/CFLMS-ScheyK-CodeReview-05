$(document).ready(function()
{
    let movie = JSON.parse(info);
    console.log(movie);

    for (let i = 0; i < movie.length; i++)
    {
        document.getElementById("container").innerHTML += `<div class="content">
                        <div>
                            <img src="${movie[i].img}" alt="Banner">
                        </div>
                        <div>
                            <h4>${movie[i].titel}</h4>
                            <p>${movie[i].info}</p>
                            <button>${movie[i].like}</button>
                        </div>
                    </div>`;
    }
});
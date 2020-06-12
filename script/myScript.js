$(document).ready(function()
{
    let movie = JSON.parse(info);
    console.log(movie);        

    for (let i = 0; i < movie.length; i++)
    {
        document.getElementById("container").innerHTML += 
                    `<div id="${i}" class="content">
                        <div class="pic">
                            <img src="${movie[i].img}" alt="Banner">
                        </div>
                        <div>
                            <h4>${movie[i].titel}</h4>
                            <p>${movie[i].description}</p>
                            <div class="likeOutput">
                                <button><img src="${movie[i].like}"></button>
                                <h2 class="output">${movie[i].output}</h2>
                            </div>
                        </div>
                    </div>`;                                       
                    
    }     
        
    
    $("button").on("click", function()
    {
        let count = "div"+[this.id].output;
        $("#"+this.id).text(count += 1);        
    });    
    

});
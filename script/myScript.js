$(document).ready(function()
{
    let movie = JSON.parse(info);
    let count = 0;    
           
    //loop for create the movieDiv's
    for (let i = 0; i < movie.length; i++)
    {
       document.getElementById("container").innerHTML += 
                    `<div class="content" id="${movie[i].id}">
                        <div class="pic">
                            <img src="${movie[i].img}" alt="Banner">
                        </div>
                        <div>
                            <h4>${movie[i].titel}</h4>
                            <p>${movie[i].description}</p>
                            <div id="likeOutput_${i}" class="likeOutput">
                            <button id="button_${i}" class="button"><img src="${movie[i].click}"></button>
                            <h2 id="output_${i}" class="output">${movie[i].likes}</h2>                                
                            </div>
                        </div>
                    </div>`;                                       
                    
    }     
    
    //loop for the event "click" but with counter :(
    for (let i = 0; i < movie.length; i++)
    {
        
        let button = $(`#button_${i}`)
        let out = $(`#output_${i}`)
              

        $(button).on("click", function()
        {           
            $(out).text(count += 1);
          
        });
           
    } 

    //try sort
    $("input").on("click",sortMovie);
    for(let i = 0; i < movie.length; i++)
    {
        function sortMovie(a,b)
        {
        return a.likes - b.likes;
        }
    }

});
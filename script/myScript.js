$(document).ready(function()
{
    let movie = JSON.parse(info);
    let count = 0;    
           

    for (let i = 0; i < movie.length; i++)
    {
       document.getElementById("container").innerHTML += 
                    `<div  class="content">
                        <div class="pic">
                            <img src="${movie[i].img}" alt="Banner">
                        </div>
                        <div>
                            <h4>${movie[i].titel}</h4>
                            <p>${movie[i].description}</p>
                            <div id="likeOutput_${i}" class="likeOutput">
                            <button id="button_${i}" class="button"><img src="${movie[i].like}"></button>
                            <h2 id="output_${i}" class="output"></h2>                                
                            </div>
                        </div>
                    </div>`;                                       
                    
    }     
    
    for (let i = 0; i < movie.length; i++)
    {

        let button = $(`#button_${i}`)
        let out = $(`#output_${i}`)

        $(button).on("click", function()
        {           
            $(out).text(count +=1);
        });
           
    }    
  
    

});
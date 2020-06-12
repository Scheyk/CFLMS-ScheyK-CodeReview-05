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
                                <button id="${i}" class="button"><img src="${movie[i].like}"></button>
                                <h2 id="${i}" class="output"></h2>
                            </div>
                        </div>
                    </div>`;                   
                    
    } 

    $("button").on("click", function()
    {
        $("h2#").text(count += 1);
    });
   
   /* $("button"+this.id).click(function()
    {
        let count = 0;
        let selector = $("#"+this.id).find("#out");
    });*/

   /* $("button").click(function() { 
        var t = $(this).attr('id'); 
        $('h2#').text(count +=1); 
    });*/       
    
   /* $("button").on("click", function()
    {   
        let selector= $("#"+this.id).find("h2"+this.id);        
        
        let out = movie[this.id].like;
        selector.append("Hobby: " + hobby +"<br>");
    }
    ); */    

});
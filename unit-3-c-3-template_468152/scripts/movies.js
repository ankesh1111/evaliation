// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

 
 

let movies=document.getElementById("movies")

async function searchMovies(){

    try{
        let search=document.getElementById("search").value;

        let res=await fetch(`https://www.omdbapi.com/?apikey=6a41ddca&s=${search}`)
      
        let data=await res.json();
        


        let movies=data.Search;
        appendMovies(movies)
     

    }catch(err){
        console.log(err);
    }

}

function appendMovies(data){
    data.forEach(function(el){
        let Title=document.createElement("p")
        Title.innerText=el.Title;

        let img=document.createElement("img");
        img.src=el.Poster

        let btn=document.createElement("button")
        btn.innerText="Book Now"

        btn.addEventListener("click",function(){
            book(el)

        })


        movies.append(img,Title,btn)
        

    })
}

let addArr=[];
function book(el){
    addArr.push(el)
    localStorage.setItem("book",JSON.stringify(addArr));
    window.location.href="checkout.html"

}

 
 
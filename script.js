imgurl=''

function searchData(){
    movie=mname.value
    fetch(`http://www.omdbapi.com/?apikey=f18570ab&t=${movie}`)
    .then((data)=>data.json()).then((data)=>{
        
        displayData(data);
        console.log(movie);
        localStorage.setItem("Moviedata",data)
        const myElement = document.getElementById("maindiv");
        myElement.style.background = " #1B1B1B";
        
       
        
        
    })
    

}



function displayData(mdata){
    
    
    console.log("dattt",mdata);
    imgurl=mdata.Poster
    
    titile.innerHTML=`<h2>${mdata.Title}</h2>`;
    ratings.innerHTML=`<span> ${mdata.imdbRating}</span>`;
    release.innerHTML=`<span> ${mdata.Year}</span>`;
    runtime.innerHTML=`<span> ${mdata.Runtime}</span>`;
    genere.innerHTML=`<h4> ${mdata.Genre}</h4>`;
    iog.innerHTML=`<img src="${imgurl}" alt="">`;
    director.innerHTML=`<label>Director: ${mdata.Director}</label>`;
    plot.innerHTML=`<label>Plot: ${mdata.Plot}</label>`;
    cast.innerHTML=`<label>Cast: ${mdata.Actors}</label>`;
    
    
}
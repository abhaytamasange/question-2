document.getElementById("date").innerHTML=new Date;

async function getRecipies(){
    const response = await fetch("https://themealdb.com/api/json/v1/1/random.php");
    const recipies = await response.json();
    console.log(recipies)
    
    const recepies = document.getElementById("recepies");
    recepies.innerHTML="";
    for (let i = 0; i < recipies["meals"].length; i++) {
        const element = recipies["meals"][i];
        recepies.innerHTML+=`
        <h1>Recipe ${i+1}</h1>
        <span>${element.strInstructions}</span>
        `
    }

    return recipies
}

getRecipies();
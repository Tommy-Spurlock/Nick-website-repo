var nickObject= {
    firstName: "Nicholas",
    lastName: "Mitchell",
    favoriteFood: ["Fish and Chips", "Meat", "Soda"],
    firstJob: "Camp Staff",
    dreamJob: ["Petroleum Engineer", "CEO"],
    greatestFear: "Worms... Regular Earth Worms",
    homeTown: "Huntington",
    secretTalents: "Excellent Attention to Detail",
    wouldSkyDive: true,
    petInfo: {
        type: "Dog",
        name: "Peyton",
        breed: "Golden Retriever"
    }
}
 
var htmlString = `
    <h1>${nickObject.firstName} ${nickObject.lastName}</h1>
        <ul class="list"><strong>Favorite Foods</strong>:
            <li>${nickObject.favoriteFood[0]}</li>
            <li>${nickObject.favoriteFood[1]}</li>
            <li>${nickObject.favoriteFood[2]}</li>
        </ul>
    <p>First Job: ${nickObject.firstJob}</p>
    <p>Dream Job: ${nickObject.dreamJob}</p>
    <p>Greatest Fear: ${nickObject.greatestFear}</p>
    <p>Hometown: ${nickObject.homeTown}</p>
    <p>Nick's hidden talent is ${nickObject.secretTalents}.</p>
    <p>It is ${nickObject.wouldSkyDive}, Nick would love to sky dive.</p>
    <p>Nick has an amazing ${nickObject.petInfo.type} named ${nickObject.petInfo.name} the ${nickObject.petInfo.breed}.</p>

`

var nickContainer = document.querySelector("#personal-website")

nickContainer.innerHTML = htmlString
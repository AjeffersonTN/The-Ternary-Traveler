import dataManager from "./dataManager";

const displayOnDom = () => {
    document.querySelector("#display").innerHTML = ""
    document.querySelector(".displayInterest").innerHTML = ""

    dataManager.getPlacesData().then((events) => {
        events.forEach(event => {
           let startDate = event.startDate
           let endDate =event.endDate
           let name = event.name
           let visaRequired = event.visaRequired
           let blogPost = event.blogPost

           const placesHtml =
           `
           <section id="${event.id}">
           <p>Location: ${name}</p>
           <p>Start Date: ${startDate} End Date: ${endDate}</p>
           <p>Visa Required: ${visaRequired}</p>
           <p>Blog Post: ${blogPost}</p>
           <button id="editPlacesButton--${event.id}">Edit</button>
           <button id="deletePlacesButton--${event.id}">Delete</button>
           <hr>
           </section>
           `
           document.querySelector("#display").innerHTML += placesHtml

        });
    })
    dataManager.getInterestData().then((events) => {
        events.forEach(event => {

           let name = event.name
           let description = event.description

           const interestHtml =
           `
           <section id="${event.id}">
           <p>Interest Location: ${name}</p>
           <p>Description: ${description}</p>
           <button id="editInterestButton--${event.id}">Edit</button>
           <button id="deleteInterestButton--${event.id}">Delete</button>
           <hr><br>
           </section>
           `
           document.querySelector(".displayInterest").innerHTML += interestHtml

        });
    })
}
export default displayOnDom
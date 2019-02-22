import dataManager from "./dataManager";
import displayOnDom from "./displayOnDom";

const eventListeners = {
    placesSaveFunction: () => {
        document.querySelector("#savePlaces").addEventListener("click", () => {
            let startDate = document.querySelector("#placesStartDate").value
            let endDate = document.querySelector("#placesEndDate").value
            let placeName = document.querySelector("#placesLocation").value
            let visaRequired = document.querySelector("#dropDown").value
            let blogPost = document.querySelector("#placesBlog").value

            const placesObject = {
                startDate: startDate,
                endDate: endDate,
                name: placeName,
                visaRequired: visaRequired,
                blogPost: blogPost
            }

            dataManager.postPlacesData(placesObject)

        })
    },

    interestSaveFunction: () => {
        document.querySelector("#savePointsOfInterest").addEventListener("click", () => {
            if (event.target.id === "savePointsOfInterest") {

            let interestName = document.querySelector("#interestLocation").value
            let pointsOfIntrest = document.querySelector("#placesPointsOfIntrest").value

            const interestObject = {
                    placeId: placesObject.id,
                    name: interestName,
                    pointsOfIntrest: pointsOfIntrest
                }

                dataManager.postInterestData(interestObject)
            }
        })
    },

    editDeleteFunction: () => {
        document.body.addEventListener("click", (event) => {
            if (event.target.id.startsWith("deletePlacesButton--")) {
                let deleteId = event.target.id.split("--")[1]
                dataManager.deletePlacesData(deleteId).then(() => {
                    document.getElementById("display").innerHTML = ""
                    displayOnDom()
                })
            }
            if (event.target.id.startsWith("deleteInterestButton--")) {
                let deleteId = event.target.id.split("--")[1]
                dataManager.deleteInterestData(deleteId).then(() => {
                    document.getElementsByClassName("displayInterest").innerHTML = ""
                    displayOnDom()
                })
            }
            if (event.target.id.startsWith("editInterestButton--")) {
            let editId = event.target.id.split("--")[1]
            dataManager.deleteInterestData(editId).then(event => {
                document.querySelector("#interestLocation").value = event.name
                document.querySelector("#placesPointsOfIntrest").value = event.description

                document.getElementById("saveEvent").id = "editInterestSaveButton"
                document.getElementById("editInterestSaveButton").textContent = "Save Changes"

                let interestName = document.querySelector("#interestLocation").value
                let pointsOfIntrest = document.querySelector("#placesPointsOfIntrest").value

                const newIntrestObject ={
                    name: interestName,
                    pointsOfIntrest: pointsOfIntrest
                }

                dataManager.editInterestData(editId, newIntrestObject)

            })
    }
    })

    }
}

export default eventListeners
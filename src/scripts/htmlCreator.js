import eventListeners from "./eventListeners";

const htmlCreator = () => {
    document.querySelector("#output").innerHTML +=
    `
    <div id= "destination">
    <h1>Mira Journey's<h1>

    <fieldset>
    <label>Start Date:</label>
    <input type="date" id="placesStartDate"></input>
    <label>End Date:</label>
    <input type="date" id="placesEndDate"></input>
    </fieldset>

    <fieldset>
    <label>Location:</label>
    <input type="text" id="placesLocation"></input>
    </fieldset>

    <fieldset>
    <label>Visa Required:</label>
    <select id="dropDown">
    <option id=""></option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
    </select>
    </fieldset>

    <fieldset>
    <label>Blog Post:</label>
    <input type="textarea" id="placesBlog"></input>
    </fieldset>
    <button id="savePlaces">Save</button>

    <fieldset>
    <h3>Points of Interest</h3>
    <label>Name:</label>
    <input type="text" id="interestLocation"></input>
    <label>Description:</label>
    <input type="textarea" id="placesPointsOfIntrest"></input>
    </fieldset>

    <button id="savePointsOfInterest">Save Point of Interest</button>
    </div>
    `
    eventListeners.placesSaveFunction()
    eventListeners.interestSaveFunction()
}
    export default htmlCreator
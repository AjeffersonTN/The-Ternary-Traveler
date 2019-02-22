const dataManager = {
    getPlacesData: function() {
        return fetch("http://localhost:8088/places/")
        .then(res => res.json())

        },
    getInterestData: function() {
        return fetch("http://localhost:8088/interests/")
        .then(res => res.json())

        },
    postPlacesData: function(placesObject){
        return fetch("http://localhost:8088/places/", {
            method: "POST",
            headers: {"Content-Type":"application/json"
        },
        body: JSON.stringify(placesObject)
        })
        .then(res => res.json())

       },
    postInterestData: function(interestObject){
        return fetch("http://localhost:8088/interests/", {
            method: "POST",
            headers: {"Content-Type":"application/json"
        },
        body: JSON.stringify(interestObject)
        })
        .then(res => res.json())

       },
       deletePlacesData: (id) => {
        return fetch(`http://localhost:8088/places/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    },
       deleteInterestData: (id) => {
        return fetch(`http://localhost:8088/interests/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    },

        editPlacesData: (Id, placeToChangeObject) => {
          return fetch(`http://localhost:8088/places/${Id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(placeToChangeObject)
        })
        },
        getEditPlacesData: function(id) {
            return fetch(`http://localhost:8088/places/${id}`)
            .then(res => res.json())

            }
    }
    export default dataManager

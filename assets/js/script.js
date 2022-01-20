const searchFormEl = document.querySelector('#search-form');
const searchInputEl = document.querySelector('#search-term');
const searchContainerEl = document.querySelector('#search-info');

const formSubmitHandler = function(event) {
    event.preventDefault();
    
    const searchTerm = searchInputEl.value.trim();

    if (searchTerm) {
        getSearch();
        console.log(searchTerm);

        // clear old content
        // repoContainerEl.textContent = "";
        // nameInputEl.value = "";
    }
    else {
        alert("Please Enter a Valid Search");
    }
};

const getSearch = function() {
    const apiUrl = "https://collectionapi.metmuseum.org/public/collection/v1/search?q=sunflower" //+ search;

    fetch(apiUrl).then(function(response) {
        if(response.ok) {
            console.log(response);
            response.json().then(function(data) {
                console.log(data);
                displaySearch(data);
            })
        }
        else {
            alert("Error");
        }
    })
    .catch(function(error) {
        alert("Unable to Access");
    })
}

const displaySearch = function(search) {
    if (search.length === 0) {
        //
    }
}

searchFormEl.addEventListener('submit', formSubmitHandler);
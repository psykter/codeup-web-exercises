"use strict";

// Function to fetch Pokémon data and populate the list
function fetchAndPopulatePokemonList() {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10';

    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Pokemon API request failed with status ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const pokemonListSelect = document.getElementById('pokemon-list');
            pokemonListSelect.innerHTML = ''; // Clear existing options

            // Add a default option for "The Chosen One"
            const defaultOption = document.createElement('option');
            defaultOption.value = ''; // You can set a value if needed
            defaultOption.text = 'The Chosen One';
            pokemonListSelect.appendChild(defaultOption);

            // Populate the select element with Pokémon names
            const pokemonNames = data.results.map(pokemon => pokemon.name);
            pokemonNames.forEach(pokemonName => {
                const option = document.createElement('option');
                option.value = pokemonName;
                option.text = pokemonName;
                pokemonListSelect.appendChild(option);
            });

            // Return the list of Pokémon names
            return pokemonNames;
        })
        .catch(error => {
            console.error('Error fetching Pokémon list:', error);
            // Return an empty array in case of an error
            return [];
        });
}

// Function to fetch and display Pokémon details
function fetchAndDisplayPokemonDetails(pokemonName) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Pokemon details API request failed with status ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Update the DOM with Pokémon details
            document.getElementById('pokemon-name').textContent = `Name: ${data.name}`;
            document.getElementById('pokemon-image').src = data.sprites.front_default;

            // Clear previous data
            document.getElementById('pokemon-abilities').innerHTML = '';
            document.getElementById('pokemon-types').innerHTML = '';
            document.getElementById('pokemon-moves').innerHTML = '';

            // Append new data
            data.abilities.forEach(ability => {
                const listItem = document.createElement('li');
                listItem.textContent = ability.ability.name;
                document.getElementById('pokemon-abilities').appendChild(listItem);
            });

            data.types.forEach(type => {
                const listItem = document.createElement('li');
                listItem.textContent = type.type.name;
                document.getElementById('pokemon-types').appendChild(listItem);
            });

            data.moves.slice(0, 5).forEach(move => {
                const listItem = document.createElement('li');
                listItem.textContent = move.move.name;
                document.getElementById('pokemon-moves').appendChild(listItem);
            });

            // Display additional data (you may customize this part)
            document.getElementById('pokemon-data').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error fetching Pokémon details:', error));
}

(function () {
    // Your code here
    console.log("started...");

    function showOnePokemon(pokemon) {
        let pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

        // the following will fetch the details of one pokemon
        fetch(pokemonUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let pokemon = data;
                console.log(pokemon.name);
                console.log(pokemon.sprites.front_default);
                let pokemonName = document.getElementById('pokemon-name');
                pokemonName.innerHTML = pokemon.name;
                let pokemonImage = document.getElementById('pokemon-image');
                pokemonImage.src = pokemon.sprites.front_default;
                pokemonImage.title = JSON.stringify(pokemon.abilities);
            })
            .catch(err => console.log(err));
    }

    // The following code will fetch the list of pokemon from the pokemon api at the url - https://pokeapi.co/api/v2/pokemon?limit=10000

    fetchAndPopulatePokemonList();

    // Add an event listener to the dropdown
    document.getElementById('pokemon-list').addEventListener('change', function () {
        // Get the selected Pokémon name from the dropdown
        const selectedPokemon = this.value;

        // Call the function to fetch and display details for the selected Pokémon
        showOnePokemon(selectedPokemon);
    });

})();
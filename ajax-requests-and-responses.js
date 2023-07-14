$(() => {
    console.log("Inside js")
    //
    // // Requests information from /some-url
    // $.ajax('/some-url');
    // // Same thing
    // $.get('/some-url');
    //
    //
    //
    // // Post requests
    // $.ajax('/some-url', {
    //     type: 'POST',
    //     data: {
    //         title: "Matrix",
    //         release: 1999,
    //         runtime: 90,
    //         description: "some matrix description"
    //     }
    // })
    //
    // const url = '/some-url';
    // const options = {
    //     type: 'POST',
    //     data: {
    //         title: "Matrix",
    //         release: 1999,
    //         runtime: 90,
    //         description: "some matrix description"
    //     }
    // };
    // $.ajax(url, options);
    //



    // Let's run an actual request
    // And see how we deal with responses


    // console.log("Before AJAX request is sent");
    // const startTime = Date.now();
    // $.ajax('https://random.dog/woof.json').done((response) => {
    //     const endTime = Date.now();
    //     console.log(response);
    //     console.log("Response received");
    //     console.log(`It took ${endTime - startTime}ms to receive a response`);
    //     renderDog(response)
    // });
    // console.log("After AJAX request is sent");


    // $.ajax('https://pokeapi.co/api/v2/pokemon/dragonite/')
    //     .done((data) => {
    //         console.log(data)
    //     });
    //
    //
    //
    //
    //
    // function renderDog(dogData) {
    //     $('.dog-home').html(`
    //         <img src="${dogData.url}">
    //     `)
    // }




    $('button').on('click', () => {
        const userQuery = $('input').val();
        $.ajax(`https://pokeapi.co/api/v2/pokemon/${userQuery}`)
            .done((data) => {
                console.log(data);
                renderPokemon(data);
            })
            .fail((response) => {
                console.log("This failed")
            })
    })

    function renderPokemon(pokemonData) {
        $('div.pokemon').html(`
            <div class="card">
                <h3>${pokemonData.name}</h3>
                <img src="${pokemonData.sprites.front_default}">
            </div>
        `)
    }







})
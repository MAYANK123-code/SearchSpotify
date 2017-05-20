console.log("JS loaded");

const API_URL_BASE = 'https://api.spotify.com/v1/search?q=';
// const API_SONG = `${songSearch}&type=song`;
// const API_ARTIST = `${artistSearch}&type=artist`;
// const API_ALBUM = `${albumSearch}&type=album`;
// let API_URL = API_URL_BASE + searchURL;
// API_URL = API_URL_BASE
$(document).ready(function() {
  const $searchForm = $('#seach-form');
  const $resultsLocation = $("#results-location");
  var albumSearch = "Hornsby";
  var category = "album";
  // const showSpotify = (music) => {
  //   // execute the dynamic version with our data
  //   // our template is expecting a key called 'music'
  //   // we'll use an ES6 shorthand:
  //   // @see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
  //   const compiledTemplate = Handlebars.templates.spotifyList({
  //     music
  //   });
  //
  //
  //   // swap out the destination placeholder with our new HTML
  //   $resultsLocation.html(compiledTemplate);
  // };

  // const runSearch = function() {
  //   $.ajax({
  //       type: 'GET',
  //       url: `${API_URL_BASE}${albumSearch}&type=${category}`,
  //     })
  //     .then(function(showSpotify) {
  //       // console.log(results);
  //
  //       // form.reset()
  //     })
  //     // .then(printResults)
  //     .catch(e => console.error(e));
  // };



  $("header").on('submit', 'form', (event) => {
    // prevent the form from submitting
    event.preventDefault();
    // stop the event from porpagating
    event.stopPropagation();

    const form = event.currentTarget;
    const inputs = form.elements;
    console.log(inputs);
    const formData = {
      category: inputs.searchCategory.value,
      query: inputs.searchParam.value,
    }
    console.log(formData);

    // const showSpotify = function(people) {
    //   $("#results-location").html("Hello There");
    //   // execute the dynamic version with our data
    //   // our template is expecting a key called 'music'
    //   // we'll use an ES6 shorthand:
    //   // @see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
    //   const compiledTemplate = Handlebars.templates.spotifyList({
    //     people
    //   });
    //
    //
    //   // swap out the destination placeholder with our new HTML
    //   $("#results-location").html(compiledTemplate);
    // };

    const runSearchArtist = function() {
      $.ajax({
          type: 'GET',
          url: `https://api.spotify.com/v1/search?q=${formData.query}&type=${formData.category}`,
        })
        .then(function(artists) {
          console.log(artists);
          // showSpotify(results);
          $("#results-location").html("Hello There");
          // execute the dynamic version with our data
          // our template is expecting a key called 'artists'
          // we'll use an ES6 shorthand:
          // @see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
          const compiledTemplate = Handlebars.templates.spotifyListartist({
            artists
          });


          // swap out the destination placeholder with our new HTML
          $("#results-location").html(compiledTemplate);

          form.reset()
        })
        // .then(printResults)
        .catch(e => console.error(e));
    };
    const runSearchAlbum = function() {
      $.ajax({
          type: 'GET',
          url: `https://api.spotify.com/v1/search?q=${formData.query}&type=${formData.category}`,
        })
        .then(function(artists) {
          console.log(artists);
          // showSpotify(results);
          $("#results-location").html("Hello There");
          // execute the dynamic version with our data
          // our template is expecting a key called 'artists'
          // we'll use an ES6 shorthand:
          // @see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
          const compiledTemplate = Handlebars.templates.spotifyListalbum({
            artists
          });


          // swap out the destination placeholder with our new HTML
          $("#results-location").html(compiledTemplate);

          form.reset()
        })
        // .then(printResults)
        .catch(e => console.error(e));
    };
    const runSearchSong = function() {
      $.ajax({
          type: 'GET',
          url: `https://api.spotify.com/v1/search?q=${formData.query}&type=${formData.category}`,
        })
        .then(function(artists) {
          console.log(artists);
          // showSpotify(results);
          $("#results-location").html("Hello There");
          // execute the dynamic version with our data
          // our template is expecting a key called 'artists'
          // we'll use an ES6 shorthand:
          // @see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
          const compiledTemplate = Handlebars.templates.spotifyListsong({
            artists
          });


          // swap out the destination placeholder with our new HTML
          $("#results-location").html(compiledTemplate);

          form.reset()
        })
        // .then(printResults)
        .catch(e => console.error(e));
    };
    if (formData.category === "artist") {
      runSearchArtist();
    } else if (formData.category === "album") {
      runSearchAlbum();
    } else if (formData.category === "track") {
      runSearchSong();
      category
    }


  });

  // runSearch();
});

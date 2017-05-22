console.log("JS loaded");

const API_URL_BASE = 'https://api.spotify.com/v1/search?q=';

$(document).ready(function() {
  const $searchForm = $('#seach-form');
  const $resultsLocation = $("#results-location");
  const $modal = $("#modal");
  const $resultTitle2 = ".result-title-2";
  const $viewAlbumsButton = ".view-albums button";

  var viewArtistAlbums = function(name) {
    $resultsLocation.on('click', name, function(event) {
      event.preventDefault();
      const artistSelected = $(event.currentTarget).data('artistName');
      $(".artist-clicked").html($(event.currentTarget).data(
        'artistName'));
      // Stop the main page from scrolling while modal is displayed (Stack overflow: http://stackoverflow.com/questions/9538868/prevent-body-from-scrolling-when-a-modal-is-opened)
      $("body").css("overflow", "hidden");
      // prevent the form from submitting
      $.ajax({
          type: 'GET',
          url: `https://api.spotify.com/v1/search?q=${artistSelected}&type=album`,
        })
        .then(function(artists) {
          console.log(artists);
          const compiledTemplate = Handlebars.templates.spotifyListartistalbums({
            artists
          });

          // print new content to the modal
          $("#modal-content").html(compiledTemplate);
          $modal.fadeIn();

        })
        .catch(e => console.error(e));
    });
  };
  viewArtistAlbums($resultTitle2);
  viewArtistAlbums($viewAlbumsButton);

  var viewTrackAlbum = function() {
    $resultsLocation.on('click', '.result-image', function(event) {
      event.preventDefault();
      const albumSelected = $(event.currentTarget).data('albumTitle');
      // Stop the main page from scrolling while modal is displayed (Stack overflow: http://stackoverflow.com/questions/9538868/prevent-body-from-scrolling-when-a-modal-is-opened)
      // prevent the form from submitting
      $.ajax({
          type: 'GET',
          url: `https://api.spotify.com/v1/search?q=${albumSelected}&type=track`,
        })
        .then(function(artists) {
          console.log(artists);
          const compiledTemplate = Handlebars.templates.spotifyListsong({
            artists
          });

          // print new content to the page
          $resultsLocation.html(compiledTemplate);


        })
        .catch(e => console.error(e));
    });
  };



  $("header").on('submit', 'form', function(event) {
    // prevent the form from submitting
    event.preventDefault();
    // stop the event from porpagating
    event.stopPropagation();

    // Get entry data from the form for api URL
    const form = event.currentTarget;
    const inputs = form.elements;
    console.log(inputs);
    const formData = {
      category: inputs.searchCategory.value,
      query: inputs.searchParam.value,
    }
    console.log(formData);

    const runSearchArtist = function() {
      $.ajax({
          type: 'GET',
          url: `https://api.spotify.com/v1/search?q=${formData.query}&type=${formData.category}`,
        })
        .then(function(artists) {
          console.log(artists);

          const compiledTemplate = Handlebars.templates.spotifyListartist({
            artists
          });

          // swap out the destination placeholder with our new HTML
          $resultsLocation.html(compiledTemplate);

          form.reset();
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
          const compiledTemplate = Handlebars.templates.spotifyListalbum({
            artists
          });

          // swap out the destination placeholder with our new HTML
          $resultsLocation.html(compiledTemplate);
          // reset form
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
          const compiledTemplate = Handlebars.templates.spotifyListsong({
            artists
          });

          // swap out the destination placeholder with our new HTML
          $resultsLocation.html(compiledTemplate);

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
      viewTrackAlbum();
    }
    $("#search-param").html(
      `<h2>You searched for <span class="searched-text">${formData.query}</span> in <span class="searched-text">${formData.category}s</span>.</h2>`
    );

  });
  // event listener to close the modal when the "close" button is clicked and reactive the scroll on the body
  $("#close-modal").on("click", function() {
    $modal.fadeOut();
    $('body').css('overflow', 'auto');
  });
  $("button").on("mouseenter", function() {
    $(this).css("color", "#000");
  });
  $("button").on("mouseleave", function() {
    $(this).css("color", "#FFF");
  });
  $("h1").on("click", function() {
    $resultsLocation.html("");
    $("#search-param").html(
      `<img src="spotify-logo-3.png" width="500px" height="492px" />`
    );
  })
});

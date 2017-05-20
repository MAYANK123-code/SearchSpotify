console.log("JS loaded");

const API_URL_BASE = 'https://api.spotify.com/v1/search?q=';
// const API_SONG = `${songSearch}&type=song`;
// const API_ARTIST = `${artistSearch}&type=artist`;
// const API_ALBUM = `${albumSearch}&type=album`;
// let API_URL = API_URL_BASE + searchURL;
// API_URL = API_URL_BASE
$(document).ready(function() {
  const $searchForm = $('#seach-form');
  const $resultsLocation = $('#results-location');
  var albumSearch = "Hornsby";
  var category = "album";
  console.log();
  const runSearch = function() {
    $.ajax({
        type: 'GET',
        url: `${API_URL_BASE}${albumSearch}&type=${category}`,
      })
      .then(function(results) {
        console.log(results);

        // form.reset()
      })
      // .then(printResults)
      .catch(e => console.error(e));
  };



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
    var category = $("#search-category").val();
    // let category = form.inputs.searchCategory;
    console.log(category);
    // category = "album";
    let searchInput = $(".search-input").val();
    console.log(searchInput);
    const runSearch = function() {
      $.ajax({
          type: 'GET',
          url: `https://api.spotify.com/v1/search?q=${formData.query}&type=${formData.category}`,
        })
        .then(function(results) {
          console.log(results);

          // form.reset()
        })
        // .then(printResults)
        .catch(e => console.error(e));
    };
    runSearch();


  });

  // runSearch();
});

(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['spotifyListalbum'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"result\">\n  <div class=\"result-image\"><img class=\"result-image-style\" src=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.url : stack1), depth0))
    + "\" /></div>\n  <div class=\"result-title\">"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n  <div data-artist-name=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.artists : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.name : stack1), depth0))
    + "\" class=\"result-title-2\"><a>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.artists : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.name : stack1), depth0))
    + "</a></div>\n  <div data-artist-name=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.artists : depth0)) != null ? stack1["1"] : stack1)) != null ? stack1.name : stack1), depth0))
    + "\" class=\"result-title-2\"><a>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.artists : depth0)) != null ? stack1["1"] : stack1)) != null ? stack1.name : stack1), depth0))
    + "</a></div>\n  <div class=\"result-on-spotify\">Learn more on</br>\n    <a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.external_urls : depth0)) != null ? stack1.spotify : stack1), depth0))
    + "\" target=\"_blank\">\n      <img src=\"spotify-1.png\" height=\"25px\" width=\"76px\" /></a></div>\n</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "<p>sorry, no super heros here</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.artists : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['spotifyListartist'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing, alias5="function";

  return "<div class=\"result\">\n  <div class=\"result-image\"><img class=\"result-image-style\" src=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.url : stack1), depth0))
    + "\" /></div>\n  <div class=\"result-title\">"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n  <div class=\"view-albums\"><button data-artist-name=\""
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"album-buttom\" type=\"button\" name=\"albums\"><a>Albums</a></button>\n\n  </div>\n  <div class=\"result-on-spotify\">Learn more on</br>\n    <a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.external_urls : depth0)) != null ? stack1.spotify : stack1), depth0))
    + "\" target=\"_blank\">\n    <img src=\"spotify-1.png\" height=\"25px\" width=\"76px\" /></a></div>\n</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "<p>sorry, no super heros here</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.artists : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['spotifyListartistalbums'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"modal-result\">\n  <div class=\"modal-result-image\"><a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.external_urls : depth0)) != null ? stack1.spotify : stack1), depth0))
    + "\" target=\"_blank\"><img class=\"modal-result-image-style\" src=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.url : stack1), depth0))
    + "\" /></a></div>\n  <div class=\"result-on-spotify\">Learn more on</br>\n    <a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.external_urls : depth0)) != null ? stack1.spotify : stack1), depth0))
    + "\" target=\"_blank\">\n      <img src=\"spotify-1.png\" height=\"25px\" width=\"76px\" /></a></div>\n</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "<p>sorry, no super heros here</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.artists : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['spotifyListsong'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing, alias5="function";

  return "<div class=\"result\">\n  <div class=\"result-image\" data-album-title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.album : depth0)) != null ? stack1.name : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.artists : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.name : stack1), depth0))
    + "\"><img class=\"result-image-style\" src=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.album : depth0)) != null ? stack1.images : stack1)) != null ? stack1["0"] : stack1)) != null ? stack1.url : stack1), depth0))
    + "\" /></div>\n  <div class=\"result-title\">"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n  <div class=\"result-title-2\" data-artist-name=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.artists : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.name : stack1), depth0))
    + "\">by <a>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.artists : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1.name : stack1), depth0))
    + "</a></div>\n  <div class=\"audio-preview\">\n    <audio controls src=\""
    + alias2(((helper = (helper = helpers.preview_url || (depth0 != null ? depth0.preview_url : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"preview_url","hash":{},"data":data}) : helper)))
    + "\">\n\n    </audio>\n  </div>\n  <div class=\"result-on-spotify\">Learn more on</br>\n    <a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.external_urls : depth0)) != null ? stack1.spotify : stack1), depth0))
    + "\" target=\"_blank\">\n    <img src=\"spotify-1.png\" height=\"25px\" width=\"76px\" /></a></div>\n</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "<p>sorry, no super heros here</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.artists : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();

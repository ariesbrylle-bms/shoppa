// Compiled using marko@4.14.7 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/shop$1.0.0/server/views/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_attr = marko_helpers.a,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"./css/main.css\"><title>" +
    marko_escapeXml(data.title) +
    "</title></head><body>");

  component_globals_tag({}, out);

  out.w("<header><nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\"><a class=\"navbar-brand\" href=\"/\"><span class=\"logoSpan\">Sh</span>o<span class=\"logoSpan\">ppa</span></a><button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse\" id=\"navbarCollapse\"><ul class=\"navbar-nav mr-auto\"><li class=\"nav-item active\"><a class=\"nav-link\" href=\"/\">Home</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/addProduct\">Add Product</a></li></ul></div></nav></header><main role=\"main\" class=\"container\"><div class=\"row rowMain\">");

  var for__23 = 0;

  marko_forEach(data.products, function(item) {
    var keyscope__24 = "[" + ((for__23++) + "]");

    out.w("<div class=\"col-md-3\"><div class=\"card\"><img class=\"card-img-top\"" +
      marko_attr("src", "" + item.img) +
      " alt=\"Card image\"><div class=\"card-body\"><h4 class=\"card-title\">" +
      marko_escapeXml(item.productName) +
      "</h4><span class=\"price\">" +
      marko_escapeXml(item.priceStr) +
      "</span><p class=\"card-text\">" +
      marko_escapeXml(item.description.substring(0, 100)) +
      "...</p><a" +
      marko_attr("href", "/product/" + item.id) +
      " class=\"btn btn-primary\">See More</a></div></div></div>");
  });

  out.w("</div></main><footer class=\"footer\"><div class=\"container\"><span class=\"text-muted\">All Rights Reserved (c) 2018</span></div></footer><script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "39");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/shop$1.0.0/server/views/index.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };

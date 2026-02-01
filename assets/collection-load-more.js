var next_url = '';

function loadMoreProducts() {
let products_on_page = $(".products-onpage");
  if(next_url == '')
   next_url = products_on_page.data("next-url");

let load_more_btn = $(".load-more_btn");
var load_more_spinner = $(".load-more_spinner");
  $.ajax({
    url: next_url,
    type: "GET",
    dataType: "html",
    beforeSend: function () {
      load_more_btn.hide();
      load_more_spinner.show();
    },
  })
    .done(function (next_page) {
      load_more_spinner.hide();

      var new_products = $(".products-onpage", next_page);
      var new_url = new_products.data("next-url");

      load_more_btn.toggle(!!new_url);
      next_url = new_url;
      if(!next_url.trim().length) load_more_btn.hide();
      products_on_page.append(new_products.html());
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      console.error("AJAX request failed:", textStatus, errorThrown);
    })
    .always(function () {
    });
}

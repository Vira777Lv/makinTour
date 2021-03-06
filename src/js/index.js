$( document ).ready(function () {
  $(".datepicker").datepicker({
    dateFormat: "dd.mm.yy",
    onSelect: function (d, i) {
      if (d !== i.lastVal) {
        $(this).change();
      }
    }
  });

//change price and free places
  $('.datepicker').change(function () {
    let price = +$('.price-btn').attr("price");
    price = Math.floor((Math.random() * 600) + price);
    $(".price-btn").text(price);

    let freePlaces = +$('.free-places').attr("freePlaces");
    freePlaces = Math.floor((Math.random() * 30) + freePlaces);
    $(".free-places").text(freePlaces);
  });

// count of like
  $('.like').click(function() {
    let num = +$('.like').attr("count");
    num += 1;
    $(".count-like").text(num);
    $('.like').attr('count', num);
  });

// click on social icon
  $('.share-item').click(function(event) {
    alert( "click on social icon" );
    event.preventDefault();
  });
});

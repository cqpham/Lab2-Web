var $dashboard = $("#dashboard").isotope({
  itemSelector: '.dashboard-item',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name'
  }
});

/*
// bind sort button click
$('#sort-bar').on( 'click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $dashboard.isotope({ sortBy: sortByValue });
});

// bind filter button click
$('#filter-bar').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  //filterValue = filterFns[ filterValue ] || filterValue;
  $dashboard.isotope({ filter: filterValue });
});
*/

/*
$('#filterByBrand').on('click', 'input[type="checkbox"]', function() {
  if ($(this).prop("checked")) {
    var filterValue = $( this ).attr('data-filter');
    $dashboard.isotope({ filter: filterValue });
  }
});*/

// filter with selects and checkboxes
var $checkboxes = $('#filter-sort-sidepanel input');

$checkboxes.change( function() {
  // map input values to an array
  var inclusives = [];
  // inclusive filters from checkboxes
  $checkboxes.each( function( i, elem ) {
    // if checkbox, use value if checked
    if ( elem.checked ) {
      inclusives.push( elem.value );
    }
  });

  // combine inclusive filters
  var filterValue = inclusives.length ? inclusives.join(', ') : '*';

  $dashboard.isotope({ filter: filterValue })
});

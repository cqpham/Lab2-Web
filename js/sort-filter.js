var $dashboard = $("#dashboard").isotope({
  itemSelector: '.dashboard-item',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name'
  }
});

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

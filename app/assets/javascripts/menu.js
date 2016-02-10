$(document).ready(function() {
  $('a.new-menu').on('click', function() {
    $('#new_menu').toggleClass('hidden');
  });

  $('#new_menu').on('ajax:success', function(event, data, status, response) {
    $('ul.menus.list-group').append(data);
    $('#new_menu input[type=text]').val('');
    $('#new_menu').toggleClass('hidden');
  });
})

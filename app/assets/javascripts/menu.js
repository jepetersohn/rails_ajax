$(document).ready(function() {
  $('a.new-menu').on('click', function() {
    $('#new_menu').toggleClass('hidden');
  });

  $('#new_menu').on('submit', function(event) {
    event.preventDefault();
    var form = this;
    $.ajax({
      url: form.action,
      method: form.method,
      data: $(form).serialize(),
      dataType: 'html'
    }).done(function(response) {
      // var element = "<li class='list-group-item'><a href='/menu/" + response.id + "'>" + response.name + "</a></li>";
      // $('ul.menus.list-group').append(element);
      // $('#new_menu input[type=text]').val('');
      // $('#new_menu').toggleClass('hidden');
      $('ul.menus.list-group').append(response);
      $('#new_menu input[type=text]').val('');
      $('#new_menu').toggleClass('hidden');
    }).fail(function(response) {
      console.log("Got a bad response: " + response)
    });
  });
})

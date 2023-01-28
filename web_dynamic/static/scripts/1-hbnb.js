$(document).ready(function() {
  const amenities = [];
  $('input[type=checkbox]').change(function () {
    if (this.checked) {
      amenities.push($(this).data('id'));
    } else {
      const index = amenities.indexOf($(this).data('id'));
      amenities.splice(index, 1);
    }
    $('#amenities h4').text(amenities.join(', '));
  });
});

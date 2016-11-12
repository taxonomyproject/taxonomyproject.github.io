$(function() {

  var formId = '#salesforce-form',
      keyFieldId = '#00N30000009Hz7V',
      key = 'MwR6IuFGE6oTIdTFHYgGyYfrkiEUi6w9DN2',
      concatString = '',
      concatFields = [{title: 'Population', id: '#population'}, {title: 'Timeline', id: '#timeline'}, {title: 'Comments:', id: '#comments'}],
      receivesConcatenated = '#description';
  $(formId).submit(function (e) {
    // e.preventDefault();
    $(keyFieldId).val(key);
    $.each(concatFields, function (key, field) {
        concatString += field.title + ': ' + $(field.id).val() + '\n\n';
    });
    $(receivesConcatenated).val(concatString);
  });

});

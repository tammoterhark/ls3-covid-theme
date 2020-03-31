/******************
    User custom JS
    ---------------

   Put JS-functions for your template here.
   If possible use a closure, or add them to the general Template Object "Template"
*/


$(document).on('ready pjax:scriptcomplete',function(){
    /**
     * Code included inside this will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute
     * @see https://learn.jquery.com/using-jquery-core/document-ready/
     */
});

$(document).ready(function(){
  $('.question-container input:radio').click(function() {
    console.log($(this).attr("id"));
    console.log($(this).parent().attr("id"));
    console.log($(this).parent().parent().prop('nodeName'));
    $(this).parent().parent().children().removeClass('checked');
    $(this).parent().addClass('checked');
  });
  $('.question-container input:checkbox').click(function() {
    console.log($(this).prop('nodeName') + '#' + $(this).attr("id") + ' = ' + $(this).val());
    console.log($(this).prop("checked"));
    if($(this).prop("checked")){
      $(this).parent().addClass('checked');
    } else {
      $(this).parent().removeClass('checked');
    }
  });
  $('.question-container input:text').blur(function() {
    console.log('blur ' + $(this).prop('nodeName') + '#' + $(this).attr("id") + ' = ' + $(this).val());
    console.log($(this).parent().prop('nodeName'));
    console.log($(this).parent().parent().prop('nodeName'));
    console.log($(this).parent().parent().parent().prop('nodeName'));
	if ($(this).parent().parent().hasClass('checkbox-text-item')) {
      if($(this).val() != ''){
        $(this).parent().parent().addClass('checked');
      } else {
        $(this).parent().parent().removeClass('checked');
      }
	}
  });
  $('.question-container input:text').change(function() {
    console.log('change ' + $(this).prop('nodeName') + '#' + $(this).attr("id") + ' = ' + $(this).val());
    console.log($(this).parent().prop('nodeName'));
    console.log($(this).parent().parent().prop('nodeName'));
    console.log($(this).parent().parent().parent().prop('nodeName'));
	if ($(this).parent().parent().hasClass('checkbox-text-item')) {
      if($(this).val() != ''){
        $(this).parent().parent().addClass('checked');
      } else {
        $(this).parent().parent().removeClass('checked');
      }
	}
  });
});

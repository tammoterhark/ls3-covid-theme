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
  $('.question-container input:radio').click(function() {
    //console.log($(this).attr('type'));
    //console.log($(this).prop('nodeName'));
    //console.log($(this).parent().prop('nodeName'));
    //console.log($(this).parent().parent().prop('nodeName'));
    //console.log($(this).parent().parent().parent().prop('nodeName'));
    var radio_item = $(this);
    var radio_item_li = $(this).parent();
    var radio_item_ul = $(this).parent().parent();
    if ($(this).parent().parent().prop('nodeName') == 'LI') {
      // jump over the extra div
      radio_item_li = $(this).parent().parent();
      radio_item_ul = $(this).parent().parent().parent();
      //console.log("UL? " + radio_item_ul.prop('nodeName'));
    }
    // radio: remove checked class for every answer row in the current ul
    radio_item_ul.children().removeClass('checked');
    // change classes of answer row
    radio_item_li.addClass('checked');
  });
  $('.question-container input:checkbox').click(function() {
    //console.log($(this).prop('nodeName') + '#' + $(this).attr("id") + ' = ' + $(this).val() + ' checked = ' + $(this).prop("checked"));
    if($(this).prop("checked")){
      $(this).parent().addClass('checked');
    } else {
      $(this).parent().removeClass('checked');
    }
  });
  $('.question-container input:text').bind('change keyup', function() {
    //console.log('change ' + $(this).prop('nodeName') + '#' + $(this).attr("id") + ' = ' + $(this).val());
    //console.log($(this).parent().prop('nodeName'));
    //console.log($(this).parent().parent().prop('nodeName'));
    //console.log($(this).parent().parent().parent().prop('nodeName'));
    // change classes of answer rows
    var checkbox_other_text = $(this);
    var checkbox_other_li = $(this).parent().parent();
    if (checkbox_other_li.hasClass('checkbox-text-item')) {
      if(checkbox_other_text.val() != ''){
        checkbox_other_li.addClass('checked');
      } else {
        checkbox_other_li.removeClass('checked');
      }
    }
  });
  $('.question-container').removeClass('input-error');
  var inputErrorDelay0 = setInterval(function(){
    $('.question-container').removeClass('input-error');
    clearInterval(inputErrorDelay0);
    //console.log('inputErrorDelay0');
  }, 0);
  var inputErrorDelay500 = setInterval(function(){
    $('.question-container').removeClass('input-error');
    clearInterval(inputErrorDelay500);
    //console.log('inputErrorDelay500');
  }, 500);
  $('.ls-language-link[data-limesurvey-lang="en"]').text('English');
  var themelang = $('html').attr('lang');
  //console.log('themelang = ' + themelang);
  if (themelang == "am") {
    $('.ls-move-previous-btn').text('ወደ ኋላ ይመለሱ');
    $('.ls-move-next-btn').text('ወደ የሚቀጥለው ገጽ');
    var inner = $('.list-question-select').children().first().html();
    //console.log('inner = ' + inner);
    // Check for 'Fadlan dooro...'
    if(inner.indexOf('Fadlan') > 0) {
      $('.list-question-select').children().first().text('እባክዎ ይምረጡ...');
    }
  }
});

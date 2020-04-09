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
    // from the ul down to the last li, remove checked in all children of the li
    // no longer needed since https://github.com/tammoterhark/ls3-covid-theme/issues/3
    radio_item_ul.children().last().children().removeClass('checked');
    // change classes of answer row
    radio_item_li.addClass('checked');
    var radioDelay = setInterval(function(){
      radio_item_li.addClass('checked');
      clearInterval(radioDelay);
      //console.log('delay 500 radio = ' + radio_item.val());
    }, 500);
  });
  $('.question-container input:checkbox').click(function() {
    //console.log($(this).prop('nodeName') + '#' + $(this).attr("id") + ' = ' + $(this).val() + ' checked = ' + $(this).prop("checked"));
    if($(this).prop("checked")){
      $(this).parent().addClass('checked');
    } else {
      $(this).parent().removeClass('checked');
    }
    // The class of the 'Please select from 1 to 3 answers' div is changed after the click, not on click
    // Jquery - hasclass after delay > https://stackoverflow.com/q/52492071/872051
    // change classes of question div and the message and help div
    var vmsg_num_answers = $(this).parent().parent().parent().parent().prev().children().first().children().last();
    var checkIntervalDelay = setInterval(function(){ 
      var checkErrorClass = vmsg_num_answers.hasClass('ls-em-error');
      if(checkErrorClass) {
        vmsg_num_answers.addClass('ls-em-error-clicked');
        // input-error is set on page load
        // input-error-clicked is only set after a click
        vmsg_num_answers.parent().parent().parent().addClass('input-error-clicked');
        vmsg_num_answers.parent().parent().addClass('has-error');
      } else {
        vmsg_num_answers.removeClass('ls-em-error-clicked');
        vmsg_num_answers.parent().parent().parent().removeClass('input-error-clicked');
        vmsg_num_answers.parent().parent().removeClass('has-error');
      }
      clearInterval(checkIntervalDelay);
      //console.log('delay 500 hasClass ls-em-error = ' + checkErrorClass);
    }, 500);
  });
  // $('.question-container input:text').blur(function() {
  // not needed if .change() works OK
  // otherwise same statements
  $('.question-container input:text').change(function() {
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
    var checkboxOtherDelay = setInterval(function(){
      if (checkbox_other_li.hasClass('checkbox-text-item')) {
        if(checkbox_other_text.val() != ''){
          checkbox_other_li.addClass('checked');
        } else {
          checkbox_other_li.removeClass('checked');
        }
      }
      clearInterval(checkboxOtherDelay);
      //console.log('delay 500 hasClass checkbox-text-item = ' + checkbox_other_text.val());
    }, 500);
    // change classes of question div and message and help div
    var vmsg_num_answers = $(this).parent().parent().parent().parent().parent().prev().children().first().children().last();
    var checkboxDelay = setInterval(function(){ 
      var checkErrorClass = vmsg_num_answers.hasClass('ls-em-error');
      if(checkErrorClass) {
        vmsg_num_answers.addClass('ls-em-error-clicked');
        // input-error is set on page load
        // input-error-clicked is only set after a click
        vmsg_num_answers.parent().parent().parent().addClass('input-error-clicked');
        vmsg_num_answers.parent().parent().addClass('has-error');
      } else {
        vmsg_num_answers.removeClass('ls-em-error-clicked');
        vmsg_num_answers.parent().parent().parent().removeClass('input-error-clicked');
        vmsg_num_answers.parent().parent().removeClass('has-error');
      }
      clearInterval(checkboxDelay);
      //console.log('delay 500 hasClass ls-em-error = ' + checkErrorClass);
    }, 500);
  });
  $('.question-container').removeClass('input-error');
});

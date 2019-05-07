/* eslint-disable no-console */
/* eslint-disable no-multi-assign */

$(document).ready(() => {
  $('.home1').click(() => {
    $('.mediabutton1').fadeToggle('slow', 'linear');
  });
});

$(document).ready(() => {
  $('.home2').click(() => {
    $('.mediabutton2').fadeToggle('slow', 'linear');
  });
});

$(document).ready(() => {
  $('.home3').click(() => {
    $('.mediabutton3').fadeToggle('slow', 'linear');
  });
});

$(document).ready(() => {
  $('.hamburger').click(() => {
    $('.hamburger').fadeOut('slow', 'linear');
  });
});

$(document).ready(() => {
  $('.close-modal').click(() => {
    $('.hamburger').fadeIn('slow', 'linear');
  });
});

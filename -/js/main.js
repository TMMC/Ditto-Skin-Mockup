/**
 * @authors TMMC
 * @date    2014-09-25 14:35:41
 */
"use strict";
$(function() {
  $('.hacka').on('click', function(e) {
    e.preventDefault;
    $('#tabsPills a[href="#favs"]').tab('show');
  });
});
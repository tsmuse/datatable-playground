'use strict';
import FakeData from './fakeData.js';
$(document).ready(()=>{
  const $table001 = $('#table001');
  // $table001.DataTable();

  $table001.DataTable(
    {
      data: FakeData,
      columns: [
        // {"id":1,"first_name":"Ab","last_name":"Merner","email":"amerner0@blog.com","ip_address":"30.45.131.10"},
        { title: 'ID', data: 'id' },
        { title: 'First Name', data: 'first_name' },
        { title: 'Last Name', data: 'last_name' },
        { title: 'Email', data: 'email' },
        { title: 'IP Address', data: 'ip_address' },
      ],
      autoWidth: false,
      dom: 'fl<"table_wrapper" t> i<"bottom_paginate" p>',
      lengthMenu: [[10, 25, 50, -1], ['10 rows','25 rows','50 rows', 'All rows']],
    }
  );
  //NOTE: Both of these hacks totally ruin the already bad semantic HTML because they leave empty 
  //      <label> tags behind as a result of these two inputs being embedded in a <label> by DT.js

  // change remove the search label in the most laborious but only way possible *cry* 
  // this wouldn't work for multiple tables on the same page, and it's probably not a good idea
  let $filterInput = $('.dataTables_filter label input').detach();
  $('.dataTables_filter label').text('');
  $('.dataTables_filter label').append($filterInput);
  // add a class to the search input so, you know, we can select it without walking the DOM
  $filterInput.addClass('filterInput');
  $('.filterInput').attr('alt', 'Filter control for the table');
  $('.filterInput').attr('placeholder', 'Filter directory');
  // strip out the text from the select control embeded in the <label>
  // this could probably just be completely reimplimented as a new length control, but that seems
  // almost equally silly
  let $lenSelect = $('.dataTables_length label select').detach();
  $('.dataTables_length label')
    .text('')
    .append($lenSelect);
  // add a class to the select so we can actually select it w/o walking the DOM
  $lenSelect.addClass('lenSelect');
  // readding the event listeners because we have to recreate the DOM Node, THANKS!!!!
});


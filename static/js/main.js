$( document ).ready(function() {
  
  // Hamburger onClick
  $( '#hamburger' ).click(function() {
    $('.menu').toggleClass( 'active' );
    $('#header').toggleClass( 'active' );
  });

});
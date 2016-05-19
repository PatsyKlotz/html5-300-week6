/*Using AJAX and jQuery to interface with the server side.*/

  
/*================================================*/


/*Display results on web page*/


  
 /*Making AJAX calls with jQuery*/ 
  
$.ajax( 'https://shielded-sea-3725.herokuapp.com/data-api/pneher',
    {
        method: 'GET',
        data: {
                  skip: 1,
                  limit: 2
              },
        success: function logListResult( data ) {
            console.log( 'Data received:', data );
        },
        error: logAjaxError
    } );

function logAjaxError( jqXHR, textStatus, errorThrown ) {
    console.log( 'AJAX error. Status:', textStatus, 'error:', errorThrown );
}

/*Run the Create Operation using AJAX*/

$('#create-submit').off( );
$('#create-submit').on( 'click', function( evt ) {
    var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
    var collection = 'pneher'; //Use your own!
    var name = $('#create-name').val();
    var age = $('#create-age').val();

    evt.preventDefault( );

    $.ajax( baseUrl + collection,
    {
        method: 'POST',
        data: {
                  name: name,
                  age: age
              },
        success: logCreateResult,
        error: logAjaxError
    } );
} );

function logCreateResult( data ) {
    console.log( 'Data received:', data );
}

function logAjaxError( jqXHR, textStatus, errorThrown ) {
    console.log( 'AJAX error. Status:', textStatus, 'error:', errorThrown );
}

/*Run the Read Operation using AJAX*/

var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
var collection = 'pneher'; //Use your own!

$.ajax( baseUrl + collection,
{
    method: 'GET',
    success: logListResult,
    error: logAjaxError
} );

function logListResult( data ) {
    console.log( 'Data received:', data );
}

function logAjaxError( jqXHR, textStatus, errorThrown ) {
    console.log( 'AJAX error. Status:', textStatus, 'error:', errorThrown );
}

/*Run the Update Operation using AJAX*/

$('#update-submit').off( );
$('#update-submit').on( 'click', function( evt ) {
    var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
    var collection = 'pneher'; //Use your own!
    var id = $('#update-id').val();
    var name = $('#update-name').val();
    var age = $('#update-age').val();

    evt.preventDefault( );

    $.ajax( baseUrl + collection + '/' + id,
    {
        method: 'PUT',
        data: {
                  name: name,
                  age: age
              },
        success: logUpdateResult,
        error: logAjaxError
    } );
} );

function logUpdateResult( data ) {
    console.log( 'Data received:', data );
}

function logAjaxError( jqXHR, textStatus, errorThrown ) {
    console.log( 'AJAX error. Status:', textStatus, 'error:', errorThrown );
}

/*Run the Delete Operation using AJAX*/

$('#delete-submit').off( );
$('#delete-submit').on( 'click', function( evt ) {
    var baseUrl = 'https://shielded-sea-3725.herokuapp.com/data-api/';
    var collection = 'pneher'; //Use your own!
    var id = $('#delete-id').val();

    evt.preventDefault( );

    $.ajax( baseUrl + collection + '/' + id,
    {
        method: 'DELETE',
        success: logDeleteResult,
        error: logAjaxError
    } );
} );

function logDeleteResult( data ) {
    console.log( 'Data received:', data );
}

function logAjaxError( jqXHR, textStatus, errorThrown ) {
    console.log( 'AJAX error. Status:', textStatus, 'error:', errorThrown );
}

/*Function for page reset button*/


            
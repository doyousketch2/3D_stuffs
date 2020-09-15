 $( "#topnav button" ) .click(  function( event ) {

    var minimum  = 0,
        maximum  = 100,
        half = ( maximum -minimum ) /2;

    //============================================================================================//

    $( ".slider" ) .each(  function( index ) {
        $( this ) .slider(  {
            range: "max",
		        min: minimum,
          	max: maximum,
         	  value: half,
            slide: function( event, ui ) {
                $( this ) .prev( "input.info" ) .val( ui.value );  }
        }  );

        $( this ) .prev( "input.info" ) .val(
            $( this ) .slider( "value" )  );
    }  );

    //============================================================================================//

    $( ".info" ) .keyup( function () {
        if ( this .value < minimum ) { this .value = minimum }
        else if ( this .value > maximum ) { this .value = maximum };

        $( this ) .next( "div" ) .slider( "value",  this .value );
    } );

}  );

//  eof  =========================================================================================//

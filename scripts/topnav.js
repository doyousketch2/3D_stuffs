$(  function() {

//================================================================================================//

    $( "#topnav button" ) .hover(  function() {
            $( this ) .css( "border", "3px solid #789" ) .css( "padding", "6px" );
        }, function() {
            $( this ) .css( "border", "none" ) .css( "padding", "9px" );
    }  );


    $( "#topnav button" ) .click(  function( event ) {
        $( "#topnav button" ) .css( "background-color", "#123" ) .css( "color", "#DEF" );
        $( this ) .css( "background-color", "#789" ) .css( "color", "#123" );

        var target = $( event.target );

        if      ( target .is( "button#Head" ) )  {  $( "nav#sliders" ) .html( "head.html" );  }
        else if ( target .is( "button#Torso" ) )  {  $( "nav#sliders" ) .html( "torso.html" );  }

        else if ( target .is( "button#Arms" ) )  {  $( "nav#sliders" ) .load( "/scripts/arms.html" );  }
        else if ( target .is( "button#Hands" ) )  {  $( "nav#sliders" ) .html( "hands.html" );  }

        else if ( target .is( "button#Legs" ) )  {  $( "nav#sliders" ) .html( "legs.html" );  }
        else if ( target .is( "button#Feet" ) )  {  $( "nav#sliders" ) .html( "feet.html" );  }

        else if ( target .is( "button#Camera" ) )  {  $( "nav#sliders" ) .html( "camera.html" );  }
        else if ( target .is( "button#Accessories" ) )  {  $( "nav#sliders" ) .html( "accessories.html" );  };
    }  );

//================================================================================================//

    $( "#footer" ) .width(  $( "#topnav" ) .width()  );

//  eof  =========================================================================================//

}  );

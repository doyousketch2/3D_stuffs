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

        if      ( target .is( "button#Head" ) )  {  $( "nav#sliders" ) .html( "head.html" ) .load( "scripts/head.html" );  }
        else if ( target .is( "button#Torso" ) )  {  $( "nav#sliders" ) .html( "torso.html" ) .load( "scripts/torso.html" );  }

        else if ( target .is( "button#Arms" ) )  {  $( "nav#sliders" ) .html( "arms.html" ) .load( "scripts/arms.html" );  }
        else if ( target .is( "button#Hands" ) )  {  $( "nav#sliders" ) .html( "hands.html" ) .load( "scripts/hands.html" );  }

        else if ( target .is( "button#Legs" ) )  {  $( "nav#sliders" ) .html( "legs.html" ) .load( "scripts/legs.html" );  }
        else if ( target .is( "button#Feet" ) )  {  $( "nav#sliders" ) .html( "feet.html" ) .load( "scripts/feet.html" );  }

        else if ( target .is( "button#Camera" ) )  {  $( "nav#sliders" ) .html( "camera.html" ) .load( "scripts/camera.html" );  }
        else if ( target .is( "button#Accessories" ) )  {  $( "nav#sliders" ) .html( "accessories.html" ) .load( "scripts/accessories.html" );  };
    }  );

//================================================================================================//

    $( "#footer" ) .width(  $( "#topnav" ) .width()  );

//  eof  =========================================================================================//

}  );

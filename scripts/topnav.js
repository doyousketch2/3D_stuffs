$(  function() {  //  onload

    $( "nav#topnav button" ) .hover(  function() {
            $( this ) .css( "border", "3px solid #789" ) .css( "padding", "6px" );
        }, function() {
            $( this ) .css( "border", "none" ) .css( "padding", "9px" );
    }  );

    //============================================================================================//

    $( "nav#topnav button" ) .click(  function( event ) {
        $( "nav#topnav button" ) .css( "background-color", "#123" ) .css( "color", "#DEF" );
        $( this ) .css( "background-color", "#789" ) .css( "color", "#123" );

        var target = $( event .target ),
            delay_amount  = 300;

        if      ( target .is( "button#Head" ) )  {  $( "nav#sliders" ) .html( "head.html" )
            .delay( delay_amount ) .load( "https://raw.githubusercontent.com/doyousketch2/3D_stuffs/master/scripts/head.html" );  }

        else if ( target .is( "button#Torso" ) )  {  $( "nav#sliders" ) .html( "torso.html" )
            .delay( delay_amount ) .load( "https://raw.githubusercontent.com/doyousketch2/3D_stuffs/master/scripts/torso.html" );  }

        else if ( target .is( "button#Arms" ) )  {  $( "nav#sliders" ) .html( "arms.html" )
            .delay( delay_amount ) .load( "https://raw.githubusercontent.com/doyousketch2/3D_stuffs/master/scripts/arms.html" );  }

        else if ( target .is( "button#Hands" ) )  {  $( "nav#sliders" ) .html( "hands.html" )
            .delay( delay_amount ) .load( "https://raw.githubusercontent.com/doyousketch2/3D_stuffs/master/scripts/hands.html" );  }

        else if ( target .is( "button#Legs" ) )  {  $( "nav#sliders" ) .html( "legs.html" )
            .delay( delay_amount ) .load( "https://raw.githubusercontent.com/doyousketch2/3D_stuffs/master/scripts/legs.html" );  }

        else if ( target .is( "button#Feet" ) )  {  $( "nav#sliders" ) .html( "feet.html" )
            .delay( delay_amount ) .load( "https://raw.githubusercontent.com/doyousketch2/3D_stuffs/master/scripts/feet.html" );  }

        else if ( target .is( "button#Camera" ) )  {  $( "nav#sliders" ) .html( "camera.html" )
            .delay( delay_amount ) .load( "https://raw.githubusercontent.com/doyousketch2/3D_stuffs/master/scripts/camera.html" );  }

        else if ( target .is( "button#Accessories" ) )  {  $( "nav#sliders" ) .html( "accessories.html" )
            .delay( delay_amount ) .load( "https://raw.githubusercontent.com/doyousketch2/3D_stuffs/master/scripts/accessories.html" );  };

        var minimum  = 0,
            maximum  = 100,
            half = ( maximum -minimum ) /2;

        //========================================================================================//

        $( "div.slide" ) .delay( 1000 ) .each(  function( index ) {
            $( this ) .slider(  {
                range: "max",
		            min: minimum,
              	max: maximum,
             	  value: index *5,
                slide: function( event,  ui ) {
                    $( this ) .prev( "input.info" ) .val( ui .value );  }  //  update during sliding
            }  );

            $( this ) .prev( "input.info" ) .val(
                $( this ) .slider( "value" )  );  //  set initial value
        }  );

        //========================================================================================//

        $( "input.info" ) .keyup( function () {
            if ( this .value < minimum ) { this .value = minimum }
            else if ( this .value > maximum ) { this .value = maximum };

            $( this ) .next( "div.slide" ) .slider( "value",  this .value );  //  type-in nudges slider
        } );
    }  );

    //============================================================================================//

    $( "#footer" ) .width(  $( "nav#topnav" ) .width()  );

}  );

//  eof  =========================================================================================//

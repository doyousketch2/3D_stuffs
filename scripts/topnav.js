//================================================================================================//

function generate_sliders() {  //  callback during .load()
    var minimum  = 0,
        maximum  = 100,
        half = ( maximum -minimum ) /2;

    $( ".info" ) .each(  function( index ) {  //  populate initial values
        $( this ) .val( (index +1) *6 )
    }  );  //  input.info


    $( ".slide" ) .each(  function( index ) {
        $( this ) .slider(  {
            range: "min",  //  shade side

            min: minimum,
         	  value: $( this ) .children( ".info" ) .val(),
          	max: maximum,

            slide: function( event,  ui ) {
                $( this ) .children( ".info" ) .val( ui .value );  }  //  update during sliding
        }  );
    }  );  //  div.slide

};  //  generate_sliders()

//================================================================================================//

$( generate_sliders );  //  onload

$(  function() {  //  onload

    $( "nav#topnav button" ) .hover(  function() {
            $( this ) .css( "border", "3px solid #789" ) .css( "padding", "6px" );
        }, function() {
            $( this ) .css( "border", "none" ) .css( "padding", "9px" );
    }  );  //  .hover()

    //============================================================================================//

    $( "nav#topnav" ) .on( "click",  "button",  function( event ) {
        $( "nav#topnav button" ) .css( "background-color", "#123" ) .css( "color", "#DEF" );
        $( this ) .css( "background-color", "#789" ) .css( "color", "#123" );

        var target = $( event .target );

        if      ( target .is( "button#Head" ) )  {  $( "nav#sliders" ) .html( "head.html" )
            .load( "https://raw.githubusercontent.com/doyousketch2/3D_stuffs/master/scripts/head.html",  generate_sliders );  }

        else if ( target .is( "button#Torso" ) )  {  $( "nav#sliders" ) .html( "torso.html" )
            .load( "https://raw.githubusercontent.com/doyousketch2/3D_stuffs/master/scripts/torso.html",  generate_sliders );  }

        else if ( target .is( "button#Arms" ) )  {  $( "nav#sliders" ) .html( "arms.html" )
            .load( "https://raw.githubusercontent.com/doyousketch2/3D_stuffs/master/scripts/arms.html",  generate_sliders );  }

        else if ( target .is( "button#Hands" ) )  {  $( "nav#sliders" ) .html( "hands.html" )
            .load( "https://raw.githubusercontent.com/doyousketch2/3D_stuffs/master/scripts/hands.html",  generate_sliders );  }

        else if ( target .is( "button#Legs" ) )  {  $( "nav#sliders" ) .html( "legs.html" )
            .load( "https://raw.githubusercontent.com/doyousketch2/3D_stuffs/master/scripts/legs.html",  generate_sliders );  }

        else if ( target .is( "button#Feet" ) )  {  $( "nav#sliders" ) .html( "feet.html" )
            .load( "https://raw.githubusercontent.com/doyousketch2/3D_stuffs/master/scripts/feet.html",  generate_sliders );  }

        else if ( target .is( "button#Camera" ) )  {  $( "nav#sliders" ) .html( "camera.html" )
            .load( "https://raw.githubusercontent.com/doyousketch2/3D_stuffs/master/scripts/camera.html",  generate_sliders );  }

        else if ( target .is( "button#Accessories" ) )  {  $( "nav#sliders" ) .html( "accessories.html" )
            .load( "https://raw.githubusercontent.com/doyousketch2/3D_stuffs/master/scripts/accessories.html",  generate_sliders );  };

    }  );  //  .click()

    //============================================================================================//

    $( "input.info" ) .on( "keyup",  function () {
        if ( this .value < minimum ) { this .value = minimum }
        else if ( this .value > maximum ) { this .value = maximum };

        $( this ) .parent( "div.slide" ) .slider( "value",  this .value );  //  type-in nudges slider
    } );  //  .keyup()

    //============================================================================================//

    $( "#footer" ) .width(  $( "nav#topnav" ) .width()  );

    $( "#input" ) .val( "Input" );

}  );  //  document .ready()

//  eof  =========================================================================================//

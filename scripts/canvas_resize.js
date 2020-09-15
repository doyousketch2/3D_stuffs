function canvas_size() {

    var horiz_padding  = 35;
    var vert_padding  = 25;

    var used_horiz_space  = $( "#sliders" ) .width() +horiz_padding;
    var used_vert_space  = $( "#topnav" ) .height() +$( "#footer" ) .height() +vert_padding;

    var available_width  = $( document ) .width() -used_horiz_space;
    var available_height  = $( document ) .height() -used_vert_space;

    var available  = available_width;
    if ( available_width > available_height ) {  available  = available_height;  }

    $( "#cloth" ) .width( available ) .height( available );

    $( "#Info1" ) .html( "used_vertical_space: " +used_vert_space +"  used_horizontal_space: " +used_horiz_space );
    $( "#Info2" ) .html( "available_width: " +available_width +"  available_height: " +available_height +"   available: " +available );

}

//================================================================================================//

$( canvas_size );  //  onload
$( window ) .resize( canvas_size );

//  eof  =========================================================================================//

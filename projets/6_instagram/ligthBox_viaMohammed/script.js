  <script type="text/javascript">
  jQuery(function ($) {
    $("#my_image").click(function(){
      var img= $(this).attr("src");
      var appear_image = "<div id='appear_image_div' onClick='closeImage()'></div>";
      appear_image = appear_image.concat("<img id='appear_image' src='"+img+"'/>");
      appear_image = appear_image.concat("<img id='close_image' onClick='closeImage()' src='close.png'/>");
      $('body').append(appear_image);

    });

  });
  function closeImage(){
    $('#appear_image_div').remove();
    $('#appear_image').remove();
    $('#close_image').remove();

  }

  </script>
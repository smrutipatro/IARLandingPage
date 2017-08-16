(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin

    function GetURLParameter(sParam)
    	{
    	    var sPageURL = window.location.search.substring(1);
    	    var sURLVariables = sPageURL.split('&');
    	    for (var i = 0; i < sURLVariables.length; i++)
    	    {
    	        var sParameterName = sURLVariables[i].split('=');
    	        if (sParameterName[0] == sParam)
    	        {
    	            return sParameterName[1];
    	        }
    	    }
    	}

      for(var i=1;i<=6;i++)
      {
       $("#div"+i).hide();
    }

      var id = GetURLParameter('id');

        $("#div" + id).show();

      /*  $('#item1').click(function() {
            $("#div1").show();
            for(var i=2;i<=6;i++)
            {
             $("#div"+i).hide();
          }
        });

        $('#item2').click(function() {
            $("#div2").show();
            for(var i=1;i<=6;i++)
            {
              if(i!=2)
                $("#div"+i).hide();
            }
        });

        $('#item3').click(function() {
            $("#div3").show();
            for(var i=1;i<=6;i++)
            {
              if(i!=3)
             $("#div"+i).hide();
            }
        });

        $('#item4').click(function() {
            $("#div4").show();
            for(var i=1;i<=6;i++)
            {
              if(i!=4)
             $("#div"+i).hide();
            }
        });

        $('#item5').click(function() {
            $("#div5").show();
            for(var i=1;i<=6;i++)
            {
              if(i!=5)
             $("#div"+i).hide();
            }
        });

        $('#item6').click(function() {
            $("#div6").show();
            for(var i=1;i<=6;i++)
            {
              if(i!=6)
             $("#div"+i).hide();
            }
        });*/


})(jQuery); // End of use strict

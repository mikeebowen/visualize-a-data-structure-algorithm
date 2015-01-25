$(function(){
  var skiResorts = [];

  function Resort(name, altitude, image){
  this.name   = name;
  this.altitude = altitude;
  this.image = image
  };

  var create = function(name, altitude, image) {
    var resort = new Resort(name, altitude, image);
    skiResorts.push(resort);
    resort.domElement = $('<li class="mountains" data-altitude="' + resort.altitude + '"><img src="images/' + resort.image + '" />' + resort.name + '' + resort.altitude  + ' feet</li>');
    $("#resort-list").append(resort.domElement);
  };

  // create("Arapahoe Basin, Colorado" ,  13050 , "arapahoe-basin-colorado-small.jpg");
  // create("Aspen, Colorado" , 11212 , "aspen-colorado-small.jpg");
  // create("Beaver Creek, Colorado" ,  11440, "beaver-creek-colorado-small.jpg");
  // create("Big Sky, Montana" ,  11166 , "big--sky-montana-small.jpg");
  // create("Breckenridge, Colorado" ,  12998 , "breckenridge-colorado-small.jpg");
  // create("Brian Head, Utah" ,  10920 , "brian-head-utah-small.jpg");
  // create("Copper Mountain, Colorado" , 12313 , "copper-mountain-colorado-small.jpg");
  // create("Crested Butte, Colorado" , 12162 , "crested-butte-colorado-small.jpg");
  // create("Keystone, Colorado" ,  12408 , "keystone-colorado-small.jpg");
  // create("Loveland Ski Area, Colorado" , 13010 , "loveland-ski-area-colorado-small.jpg");
  // create("Mammoth Mountain, California" ,  11053 , "mammoth-mountain-california-small.jpg");
  // create("Moonlight Basin, Montana" ,  11166 , "moonlight-basin-montana-small.jpg");
  // create("Santa Fe, New Mexico" ,  12075, "santa-fe-new-mexico-small.jpg");
  // create("Snowbird, Utah" ,  11000 , "snowbird-utah-small.jpg");
  // create("Snowmass, Colorado" ,  12510 , "snowmass-colorado-small.jpg");
  // create("Telluride, Colorado" , 12570 , "telluride-colorado-small.jpg");
  // create("Vail, Colorado" ,  11570 , "vail-colorado-small.jpg");
  // create("Taos Ski Valley, New Mexico" , 11819 , "taos-ski-valley-new-mexico-small.jpg");
  // create("Winter Park, Colorado" , 12060 , "winter-park-colorado-small.jpg");

  create("Big Sky, Montana" ,  11166 , "big--sky-montana-small.jpg");
  create("Arapahoe Basin, Colorado" ,  13050 , "arapahoe-basin-colorado-small.jpg");
  create("Copper Mountain, Colorado" , 12313 , "copper-mountain-colorado-small.jpg");
  create("Brian Head, Utah" ,  10920 , "brian-head-utah-small.jpg");
  create("Breckenridge, Colorado" ,  12998 , "breckenridge-colorado-small.jpg");
  create("Mammoth Mountain, California" ,  11053 , "mammoth-mountain-california-small.jpg");
  create("Crested Butte, Colorado" , 12162 , "crested-butte-colorado-small.jpg");
  create("Keystone, Colorado" ,  12408 , "keystone-colorado-small.jpg");
  create("Santa Fe, New Mexico" ,  12075, "santa-fe-new-mexico-small.jpg");
  create("Loveland Ski Area, Colorado" , 13010 , "loveland-ski-area-colorado-small.jpg");
  create("Moonlight Basin, Montana" ,  11166 , "moonlight-basin-montana-small.jpg");
  create("Vail, Colorado" ,  11570 , "vail-colorado-small.jpg");
  create("Winter Park, Colorado" , 12060 , "winter-park-colorado-small.jpg");
  create("Snowbird, Utah" ,  11000 , "snowbird-utah-small.jpg");
  create("Snowmass, Colorado" ,  12510 , "snowmass-colorado-small.jpg");
  create("Beaver Creek, Colorado" ,  11440, "beaver-creek-colorado-small.jpg");
  create("Aspen, Colorado" , 11212 , "aspen-colorado-small.jpg");
  create("Telluride, Colorado" , 12570 , "telluride-colorado-small.jpg");
  create("Taos Ski Valley, New Mexico" , 11819 , "taos-ski-valley-new-mexico-small.jpg");

  $("#sortButton").on("click", function sort() {
    // alert(skiResorts.length);
    var c = 0;
    var len = $("li").length;
    function addSorted() {
      $current.prev().insertAfter($current);
    }

    for (i = 0; i < len ; i++) {
      // if (i != len) {
      //   setTimeout(addSorted, 500);
      // }
      $current = $("li").eq(i);
      while($current.data("altitude") < $current.prev().data("altitude")) {
        addSorted();
        $current.addClass("sorting");
        $current.prev().removeClass("sorting");
      }
    }
    $("li:last-child").append('<p>is the tallest ski resort in the US</p>');
  });
});

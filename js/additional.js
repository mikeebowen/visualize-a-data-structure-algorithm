$(function(){
  var skiResorts = [];
  // Create Resort constructor
  function Resort(name, altitude, image){
  this.name   = name;
  this.altitude = altitude;
  this.image = image
  };
  // Create variable to create resort objects and
  var create = function(name, altitude, image) {
    var resort = new Resort(name, altitude, image);
    skiResorts.push(resort);
    resort.domElement = $('<li class="mountains" data-altitude="' + resort.altitude + '" style="background-image: url(images/' + resort.image + ');"><p>' + resort.name + ' ' + resort.altitude  + ' feet</p></li>');
    $("#resort-list").append(resort.domElement);
  };
  // Create resorts
  create("Arapahoe Basin, Colorado" , 13050 , "arapahoe-basin-colorado-small.jpg");
  create("Aspen, Colorado" , 11212 , "aspen-colorado-small.jpg");
  create("Beaver Creek, Colorado" , 11440, "beaver-creek-colorado-small.jpg");
  create("Big Sky, Montana" , 11166 , "big--sky-montana-small.jpg");
  create("Breckenridge, Colorado" , 12998 , "breckenridge-colorado-small.jpg");
  create("Copper Mountain, Colorado" , 12313 , "copper-mountain-colorado-small.jpg");
  create("Crested Butte, Colorado" , 12162 , "crested-butte-colorado-small.jpg");
  create("Keystone, Colorado" , 12408 , "keystone-colorado-small.jpg");
  create("Loveland Ski Area, Colorado" , 13010 , "loveland-ski-area-colorado-small.jpg");
  create("Mammoth Mountain, California" , 11053 , "mammoth-mountain-california-small.jpg");
  create("Moonlight Basin, Montana" , 11166 , "moonlight-basin-montana-small.jpg");
  create("Santa Fe, New Mexico" , 12075, "santa-fe-new-mexico-small.jpg");
  create("Snowbird, Utah" , 11000 , "snowbird-utah-small.jpg");
  create("Snowmass, Colorado" , 12510 , "snowmass-colorado-small.jpg");
  create("Telluride, Colorado" , 12570 , "telluride-colorado-small.jpg");
  create("Vail, Colorado" , 11570 , "vail-colorado-small.jpg");
  create("Taos Ski Valley, New Mexico" , 11819 , "taos-ski-valley-new-mexico-small.jpg");
  create("Winter Park, Colorado" , 12060 , "winter-park-colorado-small.jpg");
  // Create on click function to sort resorts
  $("#sortButton").on("click", function() {
    // create variable with length of list
    var len = $("li").length;
    // Create function to insert lower resort after previous resort that was higher
    function addSorted() {
      $current.prev().insertAfter($current);
    }
    // This for loop runs once for every item in the list
    for (i = 0; i < len ; i++) {
      // Sets the value of $current to the current li
      $current = $("li").eq(i);
      // While the value of the current li is smaller than the previous perform the function
      while($current.data("altitude") < $current.prev().data("altitude")) {
        // call AddSorted function to insert small li after previous
        addSorted();
        // below works, but selects too many <li>s
        // $current.addClass("sorting");
        // $current.prev().removeClass("sorting");
      }
      // setTimeOut below, works, but makes the algorithm wrong
      // setTimeOut(addSorted, 1* 1000, $current);
    }
    // Add winning line to highest resort
    $("li:last-child").append('<p class="winner">The tallest ski resort in the US</p>');
  });
});

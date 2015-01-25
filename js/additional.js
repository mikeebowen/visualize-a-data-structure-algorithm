$(function(){
  var skiResorts = [];

  function Resort(name, altitude, image){
  this.name   = name;
  this.altitude = altitude;
  this.image = image;
  };

  var create = function(name, altitude, image) {
    var resort = new Resort(name, altitude, image);
    skiResorts.push(resort);
    resort.domElement = $('<li class="mountains">' + resort.name + ' has an altitude of ' + resort.altitude + '</li>');
    $("#resort-list").append(resort.domElement);
  };

  // create("Arapahoe Basin, Colorado" ,  13050 , "arapahoe-basin-colorado-small.jpg");
  create("Loveland Ski Area, Colorado" , 13010);
  create("Breckenridge, Colorado" ,  12998);
  create("Telluride, Colorado" , 12570);
  create("Snowmass, Colorado" ,  12510);
  create("Keystone, Colorado" ,  12408);
  create("Copper Mountain, Colorado" , 12313);
  create("Crested Butte, Colorado" , 12162);
  create("Santa Fe, New Mexico" ,  12075);
  create("Winter Park, Colorado" , 12060);
  create("Taos Ski Valley, New Mexico" , 11819);
  create("Aspen Highlands, Colorado" , 11675);
  create("Vail, Colorado" ,  11570);
  create("Beaver Creek, Colorado" ,  11440);
  create("Aspen, Colorado" , 11212);
  create("Big Sky, Montana" ,  11166);
  create("Moonlight Basin, Montana" ,  11166);
  create("Mammoth Mountain, California" ,  11053);
  create("Snowbird, Utah" ,  11000);
  create("Brian Head, Utah" ,  10920);

  $("#sortButton").on("click", function () {
    var c = 0;
    var len = skiResorts.length

    for (var i = 0; i < len ; i++) {
      min = i;
      for (var j=i+1; j < len; j++){
        if (skiResorts[j].altitude < skiResorts[min].altitude){
          min = j;
          skiResorts[j].domElement.removeClass("sorting");
          skiResorts[min].domElement.addClass("sorting");
        }
      }
      if (i != min){
          // skiResorts[j].domElement.removeClass("sorting");
          // skiResorts[i].domElement.addClass("sorting");

          setTimeout( function (element) {
            $("#resort-list").prepend(element);
          }, c*500, skiResorts[i].domElement);
          c++;
      }
    }
  });
});


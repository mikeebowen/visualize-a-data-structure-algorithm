$(function(){
  var skiResorts = [];

  function Resort(name, altitude){
  this.name   = name;
  this.altitude = altitude;
  };

  var create = function(name, altitude) {
    var resort = new Resort(name, altitude);
    skiResorts.push(resort);
    resort.domElement = $('<li class="mountains">' + resort.name + ' has an altitude of ' + resort.altitude + '</li>');
    $("#resort-list").append(resort.domElement);
  };

  create("Santa Fe New Mexico" , 12075);
  create("Mt. Rose Nevada" , 9700);
  create("Aspen Colorado" ,11212);
  create("Winter Park Colorado" ,12060);
  create("Crested Butte Colorado" ,12162);
  create("Snowmass Colorado" , 12510);
  create("Loveland Ski Area Colorado" ,13010);
  create("Taos Ski Valley New Mexico" ,11819);
  create("Telluride Colorado" ,12570);
  create("Aspen Highlands Colorado" ,11675);
  create("Vail Colorado" , 11570);
  create("Beaver Creek Colorado" , 11440);
  create("Big Sky Montana" , 11166);
  create("Moonlight Basin Montana" , 11166);
  create("Mammoth Mountain California" , 11053);
  create("Snowbird Utah" , 11000);
  create("Brian Head Utah" , 10920);
  create("Durango Mountain Colorado" , 10822);
  create("Steamboat Ski Resort Colorado" , 10568);
  create("Alta Utah" , 10550);
  create("Brighton Utah" , 10500);
  create("Jackson Hole Wyoming" ,10450);
  create("Mt. Bachelor Oregon" , 9065);
  create("Arapahoe Basin Colorado" , 13050);
  create("Breckenridge Colorado" , 12998);
  create("June Mountain California" ,10090);
  create("Heavenly California" , 10067);
  create("Solitude Utah" , 10035);
  create("Park City Mountain Resort Utah" ,10000);
  create("Deer Valley Utah" ,9570);
  create("Copper Mountain Colorado" ,12313);
  create("The Canyons Utah" ,9990);
  create("Buttermilk Colorado" , 9900);
  create("Kirkwood California" , 9876);
  create("Grand Targhee Wyoming" , 9862);
  create("Keystone Colorado" , 12408);
  create("Snowbasin Utah" ,9465);
  create("Sun Valley Idaho" ,9150);
  create("Squaw Valley California" , 9050);
  create("Powder Mountain Utah" ,8900);
  create("Sierra at Tahoe California" ,8852);
  create("Bridger Bowl Montana" ,8700);
  create("Stevens Pass Washington" , 5845);
  create("Alpine Meadows California" , 8637);
  create("Northstar at Tahoe California" , 8610);
  create("Sugar Bowl California" , 8383);
  create("Sundance Utah" , 8250);
  create("Crystal Mountain Washington" , 7012);
  create("Mission Ridge Washington" ,6820);
  create("Whitefish Mountain Resort Montana" , 6817);
  create("Schweitzer Idaho" ,6400);


  $("#sortButton").on("click", function () {
    // alert(skiResorts.length);
    var c = 0;
    var len = skiResorts.length

    for (var i = 0; i < len ; i++) {
      min = i;
      for (var j=i+1; j < len; j++){
        if (skiResorts[j].altitude < skiResorts[min].altitude){
          min = j;
        }
      }
      if (i != min){

          setTimeout( function (element) {
            $("#resort-list").prepend(element);
          }, c*500, skiResorts[i].domElement);
          c++;
      }
    }
  });
});


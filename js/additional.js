$(function(){
  var skiResorts = [];

  function Resort(name, altitude){
  this.name   = name;
  this.altitude = altitude;
  };

  var create = function(name, altitude) {
    var resort = new Resort(name, altitude);
    skiResorts.push(resort);
    $("#resort-list").append('<li class="mountains">' + resort.name + ' has an altitude of ' + resort.altitude + '</li>');
  };

create("Arapahoe Basin Colorado" , 13050);
create("Loveland Ski Area Colorado" ,13010);
create("Breckenridge Colorado" , 12998);
create("Telluride Colorado" ,12570);
create("Snowmass Colorado" , 12510);
create("Keystone Colorado" , 12408);
create("Copper Mountain Colorado" ,12313);
create("Crested Butte Colorado" ,12162);
create("Santa Fe New Mexico" , 12075);
create("Winter Park Colorado" ,12060);
create("Taos Ski Valley New Mexico" ,11819);
create("Aspen Highlands Colorado" ,11675);
create("Vail Colorado" , 11570);
create("Beaver Creek Colorado" , 11440);
create("Aspen Colorado" ,11212);
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
create("June Mountain California" ,10090);
create("Heavenly California" , 10067);
create("Solitude Utah" , 10035);
create("Park City Mountain Resort Utah" ,10000);
create("The Canyons Utah" ,9990);
create("Buttermilk Colorado" , 9900);
create("Kirkwood California" , 9876);
create("Grand Targhee Wyoming" , 9862);
create("Mt. Rose Nevada" , 9700);
create("Deer Valley Utah" ,9570);
create("Snowbasin Utah" ,9465);
create("Sun Valley Idaho" ,9150);
create("Mt. Bachelor Oregon" , 9065);
create("Squaw Valley California" , 9050);
create("Powder Mountain Utah" ,8900);
create("Sierra at Tahoe California" ,8852);
create("Bridger Bowl Montana" ,8700);
create("Alpine Meadows California" , 8637);
create("Northstar at Tahoe California" , 8610);
create("Sugar Bowl California" , 8383);
create("Sundance Utah" , 8250);
create("Crystal Mountain Washington" , 7012);
create("Mission Ridge Washington" ,6820);
create("Whitefish Mountain Resort Montana" , 6817);
create("Schweitzer Idaho" ,6400);
create("Stevens Pass Washington" , 5845);

console.log(skiResorts, "a string");

$("resort-list").add('<li class="mountains"> testing the list </li>');

});

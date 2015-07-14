/* global angular */

TabsApp.directive("mapsdemo",function(){
    return {
        restrict:'E',
        template:'<div ng-transclude></div>',
        replace:true,
        transclude:true,
        link:function(scope,value,attrs){
                        var MaryvillePlaces = [
  [40.4339335,-94.597262,"horizons"],
  [40.3457399, -94.8729789,"college"],
  [40.36611,-94.771954,"mozingo"],
  [40.3533,-94.8834,"university"]
];
var imageicon="images.png";
            var myLatlng=new google.maps.LatLng(40.3457399, -94.8729789);
    var options={
      center: myLatlng,
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.HYBRID  
    };
    
     var image = {
    blue:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
    black:"http://labs.google.com/ridefinder/images/mm_20_black.png",
    white:"http://labs.google.com/ridefinder/images/mm_20_white.png",
    yellow:"http://labs.google.com/ridefinder/images/mm_20_yellow.png"
    
  };
    var map=new google.maps.Map(document.getElementById(attrs.id),options);
      for (var i = 0; i < MaryvillePlaces.length; i++) {
        var Place = MaryvillePlaces[i];
        var LatLng = new google.maps.LatLng(Place[0], Place[1]);
        if(Place[2]=="horizons"){
        var marker = new google.maps.Marker({
        position: LatLng,
        map: map,
        icon:image.black,
        title:"horizons"
    });
       marker.info = new google.maps.InfoWindow({
  content: '<b>Team1 Memeber 1</b>'
});
google.maps.event.addListener(marker, 'click', function() {
  marker.info.open(map, marker);
});

  } 
     else if(Place[2]=="college"){
        var marker1 = new google.maps.Marker({
        position: LatLng,
        map: map,
        icon:image.blue,
        title:"college"
    });
     marker1.info = new google.maps.InfoWindow({
  content: '<b>Team1 Memeber2</b>'
});
google.maps.event.addListener(marker1, 'click', function() {
  marker1.info.open(map, marker1);
});
  }
      else if(Place[2]=="mozingo"){
          
        var marker2 = new google.maps.Marker({
        position: LatLng,
        map: map,
        icon:image.white,
        title:"college",
        clickable:true
    });
      marker2.info = new google.maps.InfoWindow({
  content: '<b>Team2 Member1</b>'
});
google.maps.event.addListener(marker2, 'click', function() {
  marker2.info.open(map, marker2);
});

  
  } 
      else{
        var marker3 = new google.maps.Marker({
        position: LatLng,
        map: map,
        icon:image.yellow,
        title:"college",
        clickable:true
    });
    marker3.info = new google.maps.InfoWindow({
  content: '<b> Team3 Member4</b>'
});

google.maps.event.addListener(marker3, 'click', function() {
  marker3.info.open(map, marker3);
});
 
  } 
  
      }
      
      }
      
     }
     
   
});





TabsApp.directive('directive',function(){
    return {
    restrict:'E',
        template:'<div class="row"><div class="col-md-2" style="height: 85%;overflow: auto">'+
                '<input type="text" ng-model="search"><br><br>'+
          '<table class="table-bordered" style="width:100%;alignment-adjust: central">'+
	'<tr ng-repeat="item in groups | filter:search " ng-switch on="$index % 1" >'+
     
        '<span ng-show="groups[$index]">'+
            '<td ng-switch-when="0">'+
                 ' <a href="" ><div class="panel text-center" ng-click="add(groups[$index])" focus>'+
                           ' <img class="circle" src="{{item.image}}" style="width:100%"/>'+
                            '<h4 class="ellipsis">Group Leader:{{item.name}}</h4>'+
                            '<h4 class="ellipsis">Members:{{item.name2}}</h4>'+
                        '</div></a>'+
            '</td>'+
        '</span>'+
	'</tr>'+
'</table>'+'</div><div ng-show="hide" ng-click="hide=!hide" class="col-md-10" style="background-color: lightgreen;height: 85%;im" >{{groupsdetail.name}}{{groupsdetail.name2}}<img ng-src="{{groupsdetail.image}}" width="25%"></div></div>'
,
        replace:true,
        transclude:true,
       controller:function($scope){
    var groups=[{name:"trilok",name2:"7",image:'noPicPhoto.jpg'},{name:"sravan",name2:"6",image:'noPicPhoto.jpg'},
        {name:"challa",name2:"6",image:'noPicPhoto.jpg'},{name:"Satya",name2:"4",image:'noPicPhoto.jpg'},{name:"Harry",name2:"6",image:'noPicPhoto.jpg'}
       ];

$scope.groups = groups; 
$scope.add=function(groups){
 $scope.groupsdetail=groups;  
 $scope.hide=true;
};
}
    };
});




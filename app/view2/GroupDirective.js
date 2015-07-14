TabsApp.directive('directive',function(){
    return {
    restrict:'E',
        template:'<div>'+
                '<input type="text" ng-model="search">'+
          '<table border="1" class="table table-striped" style="width:600px;alignment-adjust: central">'+
	'<tr ng-repeat="item in groups | filter:search " ng-switch on="$index % 3" >'+
     
        '<span ng-show="groups[$index]">'+
            '<td ng-switch-when="0">'+
                 ' <a href="" ><div class="panel text-center" ng-click="add(groups[$index])" focus>'+
                           ' <img class="circle" src="{{groups[$index].image}}" style="width:100px;height: 100px"/>'+
                            '<h4 class="ellipsis">Group Leader:{{groups[$index].name}}</h4>'+
                            '<h4 class="ellipsis">Members:{{groups[$index].name2}}</h4>'+
                        '</div></a>'+
            '</td>'+
        '</span>'+    
        '<span ng-show="groups[$index+1]">'+    
           '<td ng-switch-when="0">'+
                '<a href=""><div class="panel text-center" ng-click="add(groups[$index+1])" focus>'+
                           ' <img class="circle" src="{{groups[$index+1].image}}" style="width:100px;height: 100px"/>'+
                            '<h4 class="ellipsis">Group Leader:{{groups[$index+1].name}}</h4>'+
                            '<h4 class="ellipsis">Members:{{groups[$index+1].name2}}</h4>'+
                        '</div></a>'+
            '</td>'+
            '</span>'+
            '<span ng-show="groups[$index+2]">'+    
           '<td ng-switch-when="0">'+
                '<a href=""><div class="panel text-center" ng-click="add(groups[$index+2])" focus>'+
                           ' <img class="circle" src="{{groups[$index+2].image}}" style="width:100px;height: 100px"/>'+
                            '<h4 class="ellipsis">Group Leader:{{groups[$index+2].name}}</h4>'+
                            '<h4 class="ellipsis">Members:{{groups[$index+2].name2}}</h4>'+
                        '</div></a>'+
            '</td>'+
	'</tr>'+
'</table>'+
'<div ng-click="Hide=!Hide" ng-show="Hide" style="float:right;float:top">{{groupsdetail.name}}<img ng-src="{{groupsdetail.image}} style="width:100px;height: 100px"</div>'
,
        replace:true,
        transclude:true,
       controller:function($scope){
    var groups=[{name:"trilok",name2:"7",image:'certImage.jpg'},{name:"sravan",name2:"6",image:'cert2.jpg'},
        {name:"challa",name2:"6",image:'cert3.jpg'},{name:"Satya",name2:"4",image:'cert3.jpg'},{name:"Harry",name2:"6",image:'cert2.jpg'}
       ];

$scope.groups = groups; 
$scope.add=function(groups){
 $scope.groupsdetail=groups;  
 $scope.Hide=true;
};
}
    };
});




/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
TabsApp.directive('manage',function(){
    return {
    restrict:'E',
        template:'<div style="margin-left: 3%" >'+'<div>'+
            ' '+
            '<input type="checkbox" ng-click="checkall()" ng-model="selected"> select all'+
'<table class="table table-striped table-bordered">'+
  ' <tr>'+
   '<th class="text-center">User Name</th>'+
   '<th class="text-center">Phone</th>'+
   '<th class="text-center">Location</th>'+
   '<th class="text-center">Action</th>'+
  '<tr ng-repeat="x in names">'+
    '<td class="text-center">{{ x.username }}</td>'+
    '<td class="text-center">{{ x.phone }}</td>'+
    '<td class="text-center">{{ x.location }}</td>'+
    '<td align="center"><input type="checkbox" ng-checked="selected" ng-click="push(x)">'+'</td>'+
  '</tr>'+
'</table>'+'</div>'+'&nbsp' +'<button type="button" onclick="alert()" class="btn-success btn-lg">Add User</button>'+'&nbsp;'+
        '<button type="button" ng-click="delete(arr)" class="btn-danger btn-lg" >Delete User</button>'+'</div>',
        replace:true,
        transclude:true,
       controller:function($scope) {
    $scope.names = [
        {username:'Michael',phone:'123456789',location:'Horizons'},
        {username:'Merry',phone:'9849912345',location:'Parkway'},
        {username:'John',phone:'9700946001',location:'West 3rd'},
        {username:'Kerry',phone:'9849967768',location:'North buchanan'}
    ];
    $scope.arr=[];
    $scope.push=function(x)
    {
        var idx=$scope.arr.indexOf(x
        );
        if(idx>-1
        )
        $scope.arr.splice(idx,1);
        else
        $scope.arr.push(x);
    };
    $scope.delete=function(arr){
        for(var i=0;i<arr.length;i++)
        {
          var j=$scope.names.indexOf(arr[i]);
          $scope.names.splice(j,1);
          $scope.arr=[];
         }
    };
           $scope.checkall=function() {
               if ($scope.selected) {
                   for (var i = 0; i < $scope.names.length; i++) {
                       $scope.arr.push($scope.names[i]);
                   }
               }
               else{
                   $scope.arr=[];
               }
           }
}
    };

});






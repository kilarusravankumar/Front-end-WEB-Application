TabsApp.directive('directive',function(){
    return {
    restrict:'E',
        template:'<div class="row" ><div class="col-md-2" style="height: 85%;overflow: auto">'+
                '<input type="text" ng-model="search" placeholder="search"><br><br>'+
          '<table class="table-bordered" style="width:100%;alignment-adjust: central">'+
    '<tr ng-repeat="groups in groupsColumn">'+



        '<td ng-repeat="item in groups | filter:query">'+
        '<a href="#/dialog">   <div class="panel text-center" ng-click="add(item)">'+
        '<img class="circle" src="{{item.image}}"style="width:100px;height: 100px"/>'+
        '<h4 class="ellipsis">Group Leader:{{item.name}}</h4>'+
    '<h4 class="ellipsis">Members:{{item.name2}}</h4>'+
   ' </div></a>'+
    '</td>'+

    '</tr>'+
'</table>'
,
        replace:true,
        transclude:true,
        controller:function($scope,$modal){
            var groups=[{name:"trilok",name2:"7",image:'noPicPhoto.jpg'},{name:"sravan",name2:"6",image:'noPicPhoto.jpg'},
                {name:"Harry",name2:"6",image:'noPicPhoto.jpg'},{name:"Henry",name2:"6",image:'noPicPhoto.jpg'},{name:"challa",name2:"6",image:'noPicPhoto.jpg'},{name:"Satya",name2:"4",image:'noPicPhoto.jpg'},{name:"Harry",name2:"6",image:'noPicPhoto.jpg'}
            ];

            $scope.groupsColumn = part(groups, 3);
            function part(OriginalArray, size) {
                var rowsArray = [];
                for (var i=0; i<OriginalArray.length; i+=size) {
                    rowsArray.push(OriginalArray.slice(i, i+size));
                }
                return rowsArray;
            }
            $scope.add=function(groups){
                var modalInstance = $modal.open({
                    animation: true,
                    template: '<div>{{groupsdetail.name}} <img ng-src="{{groupsdetail.image}}"> <input type="button" ng-click="ok()"></div>',
                    controller: 'ModalInstanceCtrl',
                    size: 'lg',
                    resolve: {
                        items: function () {
                            return groups;
                        }
                    }
                });
            };
        }
    };
});
TabsApp.controller('ModalInstanceCtrl', function ($scope, $modalInstance,items) {

    $scope.groupsdetail = items;

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});





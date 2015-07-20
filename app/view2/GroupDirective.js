TabsApp.directive('directive',function(){
    return {
    restrict:'E',
        template:'<div class="row" ><div >'+
        '<div class="input-group">'+'<span class="input-group-addon">'+'<span class="glyphicon glyphicon-search">'+'</span>'+'</span>'+
        '<input type="text" ng-model="search.name" class="form-control" placeholder="Search group">' +'</div>'+'<p>'+'</p>'+
          '<table class="table-bordered" style="width:100%;alignment-adjust: central">'+
    '<tr ng-repeat="groups in groupsColumn">'+



        '<td ng-repeat="item in groups | filter:search">'+
        '<a href="#/dialog">   <div class="panel text-center" ng-click="add(item)">'+
        '<img class="circle" src="{{item.image}}"style="width:20%;height: 20%"/>'+
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
            var groups=[{name:"team leader 1",name2:"7",image:'noPicPhoto.jpg'},{name:"team leader 2",name2:"6",image:'noPicPhoto.jpg'},
                {name:"team leader 3",name2:"6",image:'noPicPhoto.jpg'},{name:"team leader 4",name2:"6",image:'noPicPhoto.jpg'},{name:"team leader 5",name2:"6",image:'noPicPhoto.jpg'},{name:"team leader 6",name2:"4",image:'noPicPhoto.jpg'},{name:"team leader 7",name2:"6",image:'noPicPhoto.jpg'}
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





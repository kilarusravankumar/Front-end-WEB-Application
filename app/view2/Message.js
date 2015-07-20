/**
 * Created by s521950 on 7/19/2015.
 */
TabsApp.directive("display",function() {
    return {
        restrict: 'E',
        template:   '<div class="container">' +
        '<form class="form-horizontal">' +
        '<div class="form-group">' +


        '<textarea class="form-control" placeholder="Write your message"  rows="6" required></textarea>' +
        '<input type="file" class="form-control">' +
        '<button type="button" class="btn btn-success btn-lg btn-block" ng-click="allTeam()">Broadcast</button>' +

        '<button type="button" class="btn btn-primary btn-lg btn-block" ng-click="displayAlert()">Send to each team</button>' +'</form>' +
        '</div>'+

'<div>'+'<div class="input-group">'+'<span class="input-group-addon">'+'<span class="glyphicon glyphicon-search">'+'</span>'+'</span>'+
        '<input type="text" ng-model="query.name" class="form-control" placeholder="Search group">' +'</div>'+'<div>'+'<p>'+'</p>'+
        ' <table border="1" class="table-responsive table-striped ">' +
        '<tr ng-repeat="groups in groupsColumn">' +


        '<td ng-repeat="item in groups | filter:query">'
        +'<div class="panel text-center">' +'<div class="checkbox" style="margin-right: 85%">'+
        '<input type="checkbox" ng-click="message(item,check)" ng-model="check" style="width: 100%;height: 100%">' +'</div>'+
        '<img class="circle" src="{{item.image}} "style="width:25%;height: 20%"/>'+
        ' <h4 class="ellipsis">Group Leader:{{item.name}}</h4>'+
        '<h4 class="ellipsis">Members:{{item.name2}}</h4>' +


        '</div>'+
        '</a>' +

        '</td>' +

        '</tr>' +
        '</table>' +'</div>'+


        '</div>' ,



        replace: true,
        transclude: true,
        controller: function ($scope) {
            var alertName;
            var original=[];
            var count=0;
            var groups = [{name: "team leader 1", name2: "7", image: 'noPicPhoto.jpg'}, {
                name: "team leader 2",
                name2: "6",
                image: 'noPicPhoto.jpg'
            },
                {name: "team leader 3", name2: "6", image: 'noPicPhoto.jpg'}, {
                    name: "team leader 4",
                    name2: "7",
                    image: 'noPicPhoto.jpg'
                }, {name: "team leader 5", name2: "6", image: 'noPicPhoto.jpg'}, {name: "team leader 6", name2: "6", image: 'noPicPhoto.jpg'}
                , {name: "team leader 7", name2: "6", image: 'noPicPhoto.jpg'}, {
                    name: "team leader 8",
                    name2: "6",
                    image: 'noPicPhoto.jpg'
                }];


            $scope.groupsColumn = part(groups, 3);
            function part(OriginalArray, size) {
                var rowsArray = [];
                for (var i = 0; i < OriginalArray.length; i += size) {
                    rowsArray.push(OriginalArray.slice(i, i + size));
                }
                return rowsArray;
            }
            $scope.allTeam=function(){
                window.alert("message sent successful to all the members");
            };

            $scope.message = function (item, check) {
                if (check) {
                    alertName = item.name;
                    original.push(alertName);
                    count = count + 1;
                }
                else {
                    original.splice(original.indexOf(item.name), 1);
                    count = count - 1;
                    alertName = original[0];
                }
            };
            $scope.displayAlert = function () {
                if (count === 1)
                    window.alert("message sent successful to " + alertName);
                else if (count > 1)
                    window.alert("message sent successful to " + count + " groups");
                else
                    window.alert("please select group");
            };

        }
    }
});
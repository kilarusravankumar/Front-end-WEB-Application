/**
 * Created by s521950 on 7/19/2015.
 */
TabsApp.directive("display",function() {
    return {
        restrict: 'E',
        template: '<div class="container">' +
        '<form class="form-horizontal">' +
        '<div class="form-group">' +


        '<textarea class="form-control" placeholder="Write your message"  rows="6" required></textarea>' +
        '<input type="file" class="form-control">' +
        '<button type="button" class="btn btn-success btn-lg btn-block">Broadcast</button>' +

        '<button type="button" class="btn btn-primary btn-lg btn-block">Send to each team</button>' +

        '<label for="available groups" name="available groups"> Available Groups </label>' +
        '<div id="available groups">' +
        '<input type="text" ng-model="query.name">' +
        ' <table border="1" class="table table-striped table-responsive">' +
        '<tr ng-repeat="groups in groupsColumn">' +


        '<td ng-repeat="item in groups | filter:query">' +
        '<a href="#">'
        +'<div class="panel text-center">' +
        '<input type="checkbox" ng-click="message(item,check)" ng-model="check">' +
        '<img class="circle" src="{{item.image}} "style="width:100px;height: 100px"/>'+
        ' <h4 class="ellipsis">Group Leader:{{item.name}}</h4>'+
            '<h4 class="ellipsis">Members:{{item.name2}}</h4>' +


        '</div>'+
        '</a>' +

        '</td>' +

        '</tr>' +
        '</table>' +

        '<input type="button" ng-click="displayAlert() value="send">' +

        '</div>' +

        '</div>' +
        '</form>' +

        '</div>',
        replace: true,
        transclude: true,
        controller: function ($scope) {
            var groups = [{name: "trilok", name2: "7", image: 'noPicPhoto.jpg'}, {
                name: "sravan",
                name2: "6",
                image: 'noPicPhoto.jpg'
            },
                {name: "challa", name2: "6", image: 'noPicPhoto.jpg'}, {
                    name: "trilok",
                    name2: "7",
                    image: 'noPicPhoto.jpg'
                }, {name: "sravan", name2: "6", image: 'noPicPhoto.jpg'}, {name: "yasaswini", name2: "6", image: 'noPicPhoto.jpg'}
                , {name: "yasaswini", name2: "6", image: 'noPicPhoto.jpg'}, {
                    name: "yasaswini",
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
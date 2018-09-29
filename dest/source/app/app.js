$(document).ready(function() {
    $('a[href^="#"]').click(function () {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top-45
        }, 1200);
        e.preventDefault();
    });
});

angular.module('ChatQuest', ['ngMaterial'])
    .controller('CreateFromCtrl',  ['$scope', function($scope) {
        $scope.user = {
            name: '',
            email: '',
            application: {id: 'B', name: 'Бизнес'}
        };
        $scope.applications = [{id: 'B', name: 'Бизнес'}, {id: 'Q', name: 'Реалити-квесты'}, {id: 'F', name: 'Искатели'}];
        $scope.selectedApplication = {id: 'B', name: 'Бизнес'};
    }]);
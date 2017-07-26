/**
 * Created by yeshajoshi on 7/23/2017.
 */
(function () {
    //iife
    angular
        .module("WebAppMaker")
        .controller("widgetListController",widgetListController);

    function widgetListController($routeParams,widgetService,$sce)
    {
        var model = this;
        var userId = $routeParams["uid"];
        var websiteId = $routeParams["wid"];
        var pageId = $routeParams["pid"];

        model.trustUrl = trustUrl;
        model.trustHtmlContent = trustHtmlContent;

        function init()
        {
            model.websiteId = websiteId;
            model.userId = userId;
            model.pageId = pageId;
            model.widgets = widgetService.findWidgetsByPageId(pageId);

        }
        init();

        function trustUrl(url)
        {
            console.log($sce.trustAsResourceUrl(url));
            var youtubeUrl = "https://youtube.com/embed/";
            var urlParts = url.split("/");
            youtubeUrl += urlParts[urlParts.length - 1];
            return $sce.trustAsResourceUrl(youtubeUrl);
        }

        function trustHtmlContent(htmlContent)
        {
            return $sce.trustAsHtml(htmlContent);
        }
    }
})();
define([
    "dojo/_base/declare",
    "mijit/_WidgetBase",
    "mijit/_TemplatedMixin",
    "dojomat/_AppAware",
    "../_global/widget/NavigationWidget",
    "dojo/text!./templates/ReleaseIndexPage.html",
    "dojo/text!./css/ReleaseIndexPage.css"
], function (
    declare,
    _WidgetBase,
    _TemplatedMixin,
    _AppAware,
    NavigationWidget,
    template,
    css
) {
    return declare([_WidgetBase, _TemplatedMixin, _AppAware], {
        request: null,
        router: null,
        session: null,
        templateString: template,
        navigationWidget: null,

        constructor: function (params) {
            this.request = params.request;
            this.router = params.router;
            this.session = params.session;
        },

        postCreate: function () {
            this.inherited(arguments);
            this.setCss(css);
            this.setTitle('Releases');

            this.navigationWidget = new NavigationWidget({
                router: this.router
            }, this.navigationNode);
        },

        startup: function () {
            this.inherited(arguments);
            this.navigationWidget.startup();
        }
    });
});
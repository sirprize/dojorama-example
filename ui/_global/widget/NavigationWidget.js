define([
    "dojo/_base/declare",
    "mijit/_WidgetBase",
    "mijit/_TemplatedMixin",
    "dojomat/_StateAware", // << updated
    "dojo/_base/lang", // << updated
    "dojo/on", // << updated
    "dojo/text!./templates/NavigationWidget.html",
    "dojo/i18n!./nls/NavigationWidget"
], function (
    declare,
    _WidgetBase,
    _TemplatedMixin,
    _StateAware, // << updated
    lang, // << updated
    on, // << updated
    template,
    nls
) {
    return declare([_WidgetBase, _TemplatedMixin, _StateAware], {
        router: null,
        templateString: template,

        constructor: function (params) {
            this.router = params.router;
        },

        postCreate: function () {
            this.inherited(arguments);
            this.homeNode.innerHTML = nls.homeLabel;
            this.releasesNode.innerHTML = nls.releasesLabel;

            this.own(on(this.homeNode, 'click', lang.hitch(this, function (ev) {
                var url = this.router.getRoute('home').assemble();
                ev.preventDefault();
                this.push(url);
            })));

            this.own(on(this.releasesNode, 'click', lang.hitch(this, function (ev) {
                var url = this.router.getRoute('releasesIndex').assemble();
                ev.preventDefault();
                this.push(url);
            })));
        }
    });
});
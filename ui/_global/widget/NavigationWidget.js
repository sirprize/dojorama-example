define([
    "dojo/_base/declare",
    "mijit/_WidgetBase",
    "mijit/_TemplatedMixin",
    "dojo/text!./templates/NavigationWidget.html",
    "dojo/i18n!./nls/NavigationWidget"
], function (
    declare,
    _WidgetBase,
    _TemplatedMixin,
    template,
    nls
) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,

        postCreate: function () {
            this.inherited(arguments);
            this.homeNode.innerHTML = nls.homeLabel;
            this.releasesNode.innerHTML = nls.releasesLabel;
        }
    });
});
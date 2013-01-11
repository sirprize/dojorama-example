define([
    "dojo/_base/declare",
    "mijit/_WidgetBase",
    "mijit/_TemplatedMixin",
    "dojomat/_StateAware",
    "dojo/_base/lang",
    "dgrid/OnDemandGrid",
    "dojo/store/Observable",
    "dojo/text!./templates/ReleaseGridWidget.html"
], function (
    declare,
    _WidgetBase,
    _TemplatedMixin,
    _StateAware,
    lang,
    OnDemandGrid,
    Observable,
    template
) {
    return declare([_WidgetBase, _TemplatedMixin, _StateAware], {
        router: null,
        store: null,
        templateString: template,
        gridWidget: null,

        constructor: function (params) {
            this.router = params.router;
            this.store = params.store;
        },

        postCreate: function () {
            this.inherited(arguments);
            this.store = Observable(this.store);
            this.gridWidget = this.buildGrid();
        },

        buildGrid: function () {
            var columns = {
                title: {
                    label: 'Title',
                    field: "title",
                    sortable: true
                },
                artist: {
                    label: 'Artist',
                    field: "artist",
                    sortable: true
                }
            };

            return new (declare([OnDemandGrid]))({
                store: this.store,
                columns: columns,
                queryOptions: { sort: [{ attribute: 'title', descending: false }] },
                loadingMessage: 'Loading...',
                noDataMessage: 'No Releases Available'
            }, this.gridNode);
        },

        setListeners: function () {
            // go to form
            this.gridWidget.on(".dgrid-column-task:click", lang.hitch(this, function (evt) {
                var cell = that.grid.cell(evt),
                    release = cell.row.data,
                    url = that.router.getRoute('releaseUpdate').assemble({ id: release.id })
                ;
                that.push(url);
            }));
        }
    });
});
define(["dojo/_base/config", "require"], function (config, require) {
    var p = config['routing-map'].pathPrefix;
    return {
        home: {
            schema: p + '/',
            widget: require.toAbsMid('./ui/home/HomePage')
        },
        releasesIndex: {
            schema: p + '/releases',
            widget: require.toAbsMid('./ui/release/ReleaseIndexPage')
        }
    }
});
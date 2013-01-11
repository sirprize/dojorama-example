define([
    "require",
    "dojo/store/JsonRest"
], function (
    require,
    JsonRest
) {
    return new JsonRest({
        target: require.toUrl("/data/releases.json"),
        idProperty: "id"
    });
});
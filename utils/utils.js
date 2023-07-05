webSiteModel = Backbone.Model.extend({
    defaults: {
        name: "Backbone.js",
        url: "https://backbonejs.org"
    },
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        this.on("change:name", function() {
            var name = this.get("name");
            console.log("Name changed to " + name);
        });
    }
});

$(document).ready(function() {
    var page_1 = new webSiteModel();
    console.log('Welcome to ' + page_1.get("name") + " you're in " + page_1.get("url"));
    page_1.set("name", "Backbone.js testing");
});
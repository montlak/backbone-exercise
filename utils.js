var page_1 = null;
webSiteModel = Backbone.Model.extend({
    defaults: {
        name: "Backbone.js",
        clicks: 0
    },
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        this.on("change:clicks", function() {
            var name = this.get("name");
            alert(name + " has " + this.get("clicks") + " clicks");
        });
    }
});

theview = Backbone.View.extend({
    el: $("#myDiv"),
    template: _.template("<button id='clickMe'>Click me!</button>"),
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html(this.template());
    },
    events: {
        "click #clickMe": "clicked"
    },
    clicked: function() {
        var clicks = page_1.get("clicks");
        page_1.set("clicks", clicks + 1);
    }  
});

$(document).ready(function() {
    page_1 = new webSiteModel();
    var pageView = new theview();
    
});
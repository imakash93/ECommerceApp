DashboardView = Backbone.View.extend({
  template: Handlebars.compile($("#dashboard-view-template").html()),
  initialize: function () {
    this.render();
  },
  render: function () {
    this.$el.html(this.template());
  }
});
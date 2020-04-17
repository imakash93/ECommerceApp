ProductView = Backbone.View.extend({
  template: Handlebars.compile($("#product-template").html()),
  initialize: function (options) {
    debugger;
    // this.listenTo(this.model, 'reset change', this.render);
    // this.model = new models.ProductModel();
    // var self = this;
    // this.model.fetch({
    //   url: "https://jsonplaceholder.typicode.com/posts?id=" + options.id,
    //   success: function () {
    //     debugger;
    //     console.log(self.model);
    //     self.render();
    //   }
    // });
    this.render();
  },
  render: function () {
    debugger;
    html = this.template(
        // this.model.toJSON()
     {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
        }
      ),
      this.$el.html(html);
    return this;
  }
});
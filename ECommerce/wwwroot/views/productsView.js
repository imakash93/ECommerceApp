
ProductsView = Backbone.View.extend({
    template: Handlebars.compile($("#products-template").html()),
  
    initialize: function () {
      debugger;
      this.listenTo(this.collection, 'reset change', this.render);
      this.collection = new models.ProductsModel();
      var self = this;
      this.collection.fetch({
        success: function () {
          debugger;
          console.log(self.collection);
      self.render();
  
        }
      });
      this.render();
    },
    render: function () {
      debugger;
      html = this.template({
          products: this.collection.toJSON()
          // products: [{
          //     "id": 1,
          //     "name": "Leanne Graham",
          //     "username": "Bret",
          //     "email": "Sincere@april.biz",
          //   },
          //   {
          //     "id": 2,
          //     "name": "Leanne Graham",
          //     "username": "Bret",
          //     "email": "Sincere@april.biz",
          //   }
          // ]
        }),
        this.$el.html(html);
      return this;
    }
  });
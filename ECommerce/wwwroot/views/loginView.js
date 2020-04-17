LoginView = Backbone.View.extend({
    template: Handlebars.compile($("#login-template").html()),
  
    events: {
      "click .login_btn" : "login"
    },
  
    login(){
      debugger;
      this.model.set("email",$('.email').val());
      this.model.set("password", $('.password').val());
    //   this.fetch({
    //     success: function (user) {
    //         alert(JSON.stringify(user));
    //     },
    //     error: function (user) {
    //       alert(JSON.stringify(user));
    //   }
    // });
    },
  
    initialize: function () {
      debugger;
      // this.listenTo(this.model, 'reset change', this.render);
      this.model = new models.LoginModel();
      var self = this;
      // this.model.fetch({
      //   success: function () {
      //     console.log(self.model);
      // self.render();
  
      //   }
      // });
      this.render();
    },
    render: function () {
      debugger;
      html = this.template(),
      this.$el.html(html);
      return this;
    }
  });
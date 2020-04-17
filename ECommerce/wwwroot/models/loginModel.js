(function () {
 var LoginModel = Backbone.Model.extend({
    urlRoot: '/user',
    defaults: {
      email: '',
      password: ''
    }  
  });
})();


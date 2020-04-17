UserModel = Backbone.Model.extend({
    urlRoot: '/user',
    defaults: {
      name: '',
      email: '',
      address:'',
      phone:'',
      password : ''
    },
    // validate(attrs){
    //   if(!attrs.name){
    //     return 'Name is required';
    //   }
    //   else if(!attrs.phone){
    //     return 'Phone is required';
    //   }
    //   else if(!attrs.password || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(attrs.password )){
    //     return 'Invalid Password';
    //   }
    //   else if(!attrs.password ){
    //     return 'Invalid PAssword';
    //   }
    //   else if(attrs.password){
    //     return 'Password is required';
    //   }
    //   else if(!attrs.email || /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(attrs.email)){
    //     return 'Email is required';
    //   }
    //   else if(!attrs.address){
    //     return 'Address is required';
    //   }
    // },
    saveUSer(){
      debugger;
      this.save(userDetails, {
        success: function (user) {
            alert(JSON.stringify(user));
        }
    });
    },
    getUser(){
      this.fetch({
        success: function (user) {
            alert(JSON.stringify(user));
        }
    });
    }
  });

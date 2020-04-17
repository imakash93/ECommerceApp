var products = [{
	"albumId": 1,
	"id": 1,
	"title": "accusamus beatae ad facilis cum similique qui sunt",
	"url": "https://via.placeholder.com/600/92c952",
	"thumbnailUrl": "https://via.placeholder.com/150/92c952"
},
{
	"albumId": 1,
	"id": 2,
	"title": "reprehenderit est deserunt velit ipsam",
	"url": "https://via.placeholder.com/600/771796",
	"thumbnailUrl": "https://via.placeholder.com/150/771796"
},
{
	"albumId": 1,
	"id": 3,
	"title": "officia porro iure quia iusto qui ipsa ut modi",
	"url": "https://via.placeholder.com/600/24f355",
	"thumbnailUrl": "https://via.placeholder.com/150/24f355"
},
{
	"albumId": 1,
	"id": 4,
	"title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
	"url": "https://via.placeholder.com/600/d32776",
	"thumbnailUrl": "https://via.placeholder.com/150/d32776"
},
{
	"albumId": 1,
	"id": 5,
	"title": "natus nisi omnis corporis facere molestiae rerum in",
	"url": "https://via.placeholder.com/600/f66b97",
	"thumbnailUrl": "https://via.placeholder.com/150/f66b97"
},
{
	"albumId": 1,
	"id": 6,
	"title": "accusamus ea aliquid et amet sequi nemo",
	"url": "https://via.placeholder.com/600/56a8c2",
	"thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
},
{
	"albumId": 1,
	"id": 7,
	"title": "officia delectus consequatur vero aut veniam explicabo molestias",
	"url": "https://via.placeholder.com/600/b0f7cc",
	"thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
},
{
	"albumId": 1,
	"id": 8,
	"title": "aut porro officiis laborum odit ea laudantium corporis",
	"url": "https://via.placeholder.com/600/54176f",
	"thumbnailUrl": "https://via.placeholder.com/150/54176f"
},
{
	"albumId": 1,
	"id": 9,
	"title": "qui eius qui autem sed",
	"url": "https://via.placeholder.com/600/51aa97",
	"thumbnailUrl": "https://via.placeholder.com/150/51aa97"
},
{
	"albumId": 1,
	"id": 10,
	"title": "beatae et provident et ut vel",
	"url": "https://via.placeholder.com/600/810b14",
	"thumbnailUrl": "https://via.placeholder.com/150/810b14"
},
{
	"albumId": 1,
	"id": 11,
	"title": "nihil at amet non hic quia qui",
	"url": "https://via.placeholder.com/600/1ee8a4",
	"thumbnailUrl": "https://via.placeholder.com/150/1ee8a4"
},
{
	"albumId": 1,
	"id": 12,
	"title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
	"url": "https://via.placeholder.com/600/66b7d2",
	"thumbnailUrl": "https://via.placeholder.com/150/66b7d2"
},
{
	"albumId": 1,
	"id": 13,
	"title": "repudiandae iusto deleniti rerum",
	"url": "https://via.placeholder.com/600/197d29",
	"thumbnailUrl": "https://via.placeholder.com/150/197d29"
},
{
	"albumId": 1,
	"id": 14,
	"title": "est necessitatibus architecto ut laborum",
	"url": "https://via.placeholder.com/600/61a65",
	"thumbnailUrl": "https://via.placeholder.com/150/61a65"
}
];

var DashboardView = Backbone.View.extend({
	template: Handlebars.compile($("#dashboard-view-template").html()),
	initialize: function () {
		this.render();
	},
	render: function () {
		this.$el.html(this.template());
	}
});

var ProductsView = Backbone.View.extend({
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

var ProductView = Backbone.View.extend({
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

var cartView = Backbone.View.extend({
	template: Handlebars.compile($("#cart-template").html()),

	initialize: function () {
		debugger;
		this.listenTo(this.collection, 'reset change', this.render);
		this.collection = new models.CartModel();
		var self = this;
		// this.collection.fetch({
		//   success: function () {
		//     console.log(self.collection);
		// self.render();

		//   }
		// });
		this.render();
	},
	handleSuccess: function (options) {
		debugger;
	},

	handleError: function (options) {
		debugger;

	},
	render: function () {
		debugger;
		html = this.template({
			// products: this.collection.toJSON()
			products: [{
				"id": 1,
				"name": "Leanne Graham",
				"username": "Bret",
				"email": "Sincere@april.biz",
			},
			{
				"id": 2,
				"name": "Leanne Graham",
				"username": "Bret",
				"email": "Sincere@april.biz",
			}
			]
		}),
			this.$el.html(html);
		return this;
	}
});

var WishlistView = Backbone.View.extend({
	template: Handlebars.compile($("#wishlist-template").html()),

	initialize: function () {
		debugger;
		this.listenTo(this.collection, 'reset change', this.render);
		this.collection = new models.WishlistModel();
		var self = this;
		// this.collection.fetch({
		//   success: function () {
		//     console.log(self.collection);
		// self.render();

		//   }
		// });
		this.render();
	},
	render: function () {
		debugger;
		html = this.template({
			// products: this.collection.toJSON()
			products: [{
				"id": 1,
				"name": "Leanne Graham",
				"username": "Bret",
				"email": "Sincere@april.biz",
			},
			{
				"id": 2,
				"name": "Leanne Graham",
				"username": "Bret",
				"email": "Sincere@april.biz",
			}
			]
		}),
			this.$el.html(html);
		return this;
	}
});

var UserView = Backbone.View.extend({
	// template: Handlebars.compile($("#user-template").html()),

	initialize: function () {
		debugger;
		this.listenTo(this.model, 'reset change', this.render);
		this.model = new models.UserModel();
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
		html = this.template(
			// products: this.model.toJSON()
			{
				"id": 1,
				"name": "Leanne Graham",
				"email": "Sincere@april.biz",
			}
		),
			this.$el.html(html);
		return this;
	}
});

var LoginView = Backbone.View.extend({
	template: Handlebars.compile($("#login-template").html()),

	events: {
		"click .login_btn": "login"
	},

	login() {
		debugger;
		this.model.set("email", $('.email').val());
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

var UserRegistrationView = Backbone.View.extend({
	template: Handlebars.compile($("#user-registration-template").html()),

	events: {
		"click .submit": "registerUser"
	},

	// validate: function(attrs){
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

	vaildateFields(attrs) {
		if (!attrs.name) {
			return 'Name is required';
		}
		else if (!attrs.phone) {
			return 'Phone is required';
		}
		else if (!attrs.password || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(attrs.password)) {
			return 'Invalid Password';
		}
		else if (!attrs.password) {
			return 'Invalid PAssword';
		}
		else if (attrs.password) {
			return 'Password is required';
		}
		else if (!attrs.email || /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(attrs.email)) {
			return 'Email is required';
		}
		else if (!attrs.address) {
			return 'Address is required';
		}
		else {
			return 'valid';
		}
	},

	registerUser: function (e) {
		debugger;
		this.model.set("name", $('#inputName').val());
		this.model.set("phone", $('#inputPhone').val());
		this.model.set("email", $('#inputEmail').val());
		this.model.set("address", $('#inputAddress').val());
		this.model.set("password", $('#inputPassword').val());
		var isValid = this.vaildateFields(this.model.attributes);

		// this.save({
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
		this.model = new models.UserModel();
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

var models = {};

models.ProductModel = Backbone.Model.extend({
	url: "https://jsonplaceholder.typicode.com/posts?userId="
});

models.ProductsModel = Backbone.Collection.extend({
	//// url: "https://jsonplaceholder.typicode.com/users",
	////url: "  https://jsonplaceholder.typicode.com/photos",
	url: "  api/Products",
	model: models.ProductModel
});

models.CartModel = Backbone.Collection.extend({
	url: "https://jsonplaceholder.typicode.com/users",
	model: models.ProductsModel
});

models.WishlistModel = Backbone.Collection.extend({
	url: "https://jsonplaceholder.typicode.com/users",
	model: models.ProductsModel
});

models.UserModel = Backbone.Model.extend({
	urlRoot: '/user',
	defaults: {
		name: '',
		email: '',
		address: '',
		phone: '',
		password: ''
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
	saveUSer() {
		debugger;
		this.save(userDetails, {
			success: function (user) {
				alert(JSON.stringify(user));
			}
		});
	},
	getUser() {
		this.fetch({
			success: function (user) {
				alert(JSON.stringify(user));
			}
		});
	}
});

models.LoginModel = Backbone.Model.extend({
	urlRoot: '/user',
	defaults: {
		email: '',
		password: ''
	}
});

var AppRouter = Backbone.Router.extend({
	routes: {
		'': 'dashboardRoute',
		'dashboard': 'dashboardRoute',
		'Products': 'createProductsRoute',
		"Products/:id": "showProduct",
		"cart": "showCart",
		"wishlist": "showWishlist",
		"login": "showLogin",
		"register": "registerUser"
	},
	dashboardRoute: function () {
		var dashboardView = new DashboardView();
		$("#content-container").html(dashboardView.el);
	},

	createProductsRoute: function () {
		debugger;
		var psm = new models.ProductsModel({});
		var createProductsView = new ProductsView();
		$("#content-container").html(createProductsView.el);
	},

	showProduct: function (id) {
		debugger;
		var createProductView = new ProductView({
			"id": id
		});
		$("#content-container").html(createProductView.el);
	},

	showCart: function () {
		debugger;
		var createProductsView = new cartView();
		$("#content-container").html(createProductsView.el);

	},

	showWishlist: function () {
		debugger;
		var createWishlistView = new WishlistView();
		$("#content-container").html(createWishlistView.el);

	},

	showLogin: function () {
		debugger;
		var createLoginView = new LoginView();
		$("#content-container").html(createLoginView.el);

	},

	registerUser: function () {
		debugger;
		var createRegistrationView = new UserRegistrationView();
		$("#content-container").html(createRegistrationView.el);

	}
});

var appRouter = new AppRouter();
Backbone.history.start();

var sharedMEthods = {
	messageType: function (type) {
		if (type == 0) {
			return 'alert-success';
		} else {
			return 'alert-warning';
		}
	},

	showSuccessMessage: function (message, type) {
		var alert = $('.alert');
		var alertMessage = $('.success-data');
		var alertClass = sharedMEthods.messageType(type);
		alertMessage.html(message);
		alert.removeClass('fade');
		alert.class(alertClass + 'show');
	}
}
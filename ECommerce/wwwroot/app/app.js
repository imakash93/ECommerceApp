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
		this.listenTo(this.collection, "reset change", this.render);
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
		(html = this.template({
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
		})),
			this.$el.html(html);
		return this;
	}
});

var ProductView = Backbone.View.extend({
	template: Handlebars.compile($("#product-template").html()),
	initialize: function (options) {
		this.listenTo(this.model, "reset change", this.render);
		this.model = new models.ProductModel();
		var self = this;
		this.model.fetch({
			url: "api/Products/" + options.id,
			success: function () {
				debugger;
				console.log(self.model);
				self.render();
			}
		});
	},
	render: function () {
		debugger;
		(html = this.template(this.model.toJSON())), this.$el.html(html);
		return this;
	}
});

var cartView = Backbone.View.extend({
	template: Handlebars.compile($("#cart-template").html()),

	initialize: function () {
		debugger;
		this.listenTo(this.collection, "reset change", this.render);
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
		(html = this.template({
			// products: this.collection.toJSON()
			products: [
				{
					id: 1,
					name: "Leanne Graham",
					username: "Bret",
					email: "Sincere@april.biz"
				},
				{
					id: 2,
					name: "Leanne Graham",
					username: "Bret",
					email: "Sincere@april.biz"
				}
			]
		})),
			this.$el.html(html);
		return this;
	}
});

var WishlistView = Backbone.View.extend({
	template: Handlebars.compile($("#wishlist-template").html()),

	initialize: function () {
		debugger;
		this.listenTo(this.collection, "reset change", this.render);
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
		(html = this.template({
			// products: this.collection.toJSON()
			products: [
				{
					id: 1,
					name: "Leanne Graham",
					username: "Bret",
					email: "Sincere@april.biz"
				},
				{
					id: 2,
					name: "Leanne Graham",
					username: "Bret",
					email: "Sincere@april.biz"
				}
			]
		})),
			this.$el.html(html);
		return this;
	}
});

var UserView = Backbone.View.extend({
	// template: Handlebars.compile($("#user-template").html()),

	initialize: function () {
		debugger;
		this.listenTo(this.model, "reset change", this.render);
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
		(html = this.template(
			// products: this.model.toJSON()
			{
				id: 1,
				name: "Leanne Graham",
				email: "Sincere@april.biz"
			}
		)),
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
		this.model.set("email", $(".email").val());
		this.model.set("password", $(".password").val());
		this.fetch({
			url: "api/Login/" + $(".email").val() + " " + $(".password").val() ;
			success: function (user) {
				alert(JSON.stringify(user));
			},
			error: function (user) {
				alert(JSON.stringify(user));
			}
		});
	},

	initialize: function () {
		debugger;
		this.listenTo(this.model, 'reset change', this.render);
		this.model = new models.UserModel();
		var self = this;
		this.model.fetch({
			success: function () {
				console.log(self.model);
				self.render();

			}
		});
		this.render();
	},
	render: function () {
		debugger;
		(html = this.template()), this.$el.html(html);
		return this;
	}
});

var UserRegistrationView = Backbone.View.extend({
	template: Handlebars.compile($("#user-registration-template").html()),

	events: {
		"click .submit": "registerUser"
	},

	validate: function (attrs) {
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
	},

	vaildateFields(attrs) {
		if (!attrs.name) {
			return "Name is required";
		} else if (!attrs.phone) {
			return "Phone is required";
		} else if (
			!attrs.password ||
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(attrs.password)
		) {
			return "Invalid Password";
		} else if (!attrs.password) {
			return "Invalid PAssword";
		} else if (attrs.password) {
			return "Password is required";
		} else if (
			!attrs.email ||
			/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(attrs.email)
		) {
			return "Email is required";
		} else if (!attrs.address) {
			return "Address is required";
		} else {
			return "valid";
		}
	},

	registerUser: function (e) {
		debugger;
		this.model.set("name", $("#inputName").val());
		this.model.set("phone", $("#inputPhone").val());
		this.model.set("email", $("#inputEmail").val());
		this.model.set("address", $("#inputAddress").val());
		this.model.set("password", $("#inputPassword").val());
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
		(html = this.template()), this.$el.html(html);
		return this;
	}
});

var models = {};

models.ProductModel = Backbone.Model.extend({
	//url: "https://jsonplaceholder.typicode.com/posts?userId=",
	url: "  api/Products/"
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
	urlRoot: "/user",
	defaults: {
		name: "",
		email: "",
		address: "",
		phone: "",
		password: ""
	},
	validate(attrs) {
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
	},

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
	},

});


var AppRouter = Backbone.Router.extend({
	routes: {
		"": "dashboardRoute",
		"dashboard": "dashboardRoute",
		"Products": "createProductsRoute",
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
			id: id
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
			return "alert-success";
		} else {
			return "alert-warning";
		}
	},

	showSuccessMessage: function (message, type) {
		var alert = $(".alert");
		var alertMessage = $(".success-data");
		var alertClass = sharedMEthods.messageType(type);
		alertMessage.html(message);
		alert.removeClass("fade");
		alert.class(alertClass + "show");
	}
};

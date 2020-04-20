Handlebars.registerHelper("productRoute", function (route) {
	return "#product/" + this.key;
})

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
		this.listenTo(this.collection, "reset change", this.render);
		this.collection = new models.ProductsModel();
		var self = this;
		this.collection.fetch({
			url: "api/Products/GetProducts",
			success: function () {
				self.render();
			}
		});
		this.render();
	},
	render: function () {
		(html = this.template({
			products: this.collection.toJSON()
		})),
			this.$el.html(html);
		return this;
	}
});

var OrdersView = Backbone.View.extend({
	template: Handlebars.compile($("#orders-template").html()),
	events: {
		"click .confirm-order": "placeOrder"
	},
	placeOrder: function (e) {
		var sum = 0;
		var totalTime = 0;
		var user = localStorage.getItem("user");
		jQuery.each(this.collection, function (i, val) {
			sum += val.price * val.quantity;
			totalTime += parseInt(val.deliveryTime);
		});
		totalTime += 2;

		$.ajax({
			url: 'api/Products/updateProducts/',
			type: 'Put',
			contentType: 'application/json',
			data: JSON.stringify(this.collection),
			dataType: 'text',
			error: function (xhr) {
			},
			success: function (result) {
			},
			async: true,
			processData: false
		});
		alert("Order Placed Total Amount : " + sum + " " + "Estimated Delivery time is : " + totalTime);
	},

	initialize: function () {
		this.listenTo(this.collection, "reset change", this.render);
		this.collection = new models.OrdersModel();
		var self = this;
		var collection = localStorage.getItem("orders");
		var items = JSON.parse(collection);
		this.collection = items;
		this.render();
	},
	render: function () {
		var total = 0;
		(html = this.template({
			products: this.collection
		})),
			this.$el.html(html);
		
		return this;
	},
});

var ProductView = Backbone.View.extend({
	events: {
		'click .add-to-cart': 'addToCart',
		'click .add-to-wishlist': 'addToWishList'

	},

	addToCart: function (e) {
		var items = parseInt($(".quantity").val());
		var self = this;
		defaults = {
			ProductId: this.model.get("key"),
			deliveryTime: parseInt(this.model.get("type")),
			quantity: parseInt($('.quantity').val()),
			UserId: this.user.key,
			isWishlist: false,
			price: parseInt(this.model.get("price")),
			ImgUrl: "images/wishlistImage.png"
		};

		$.ajax({
			url: 'api/Cart/PostCartDTO/',
			type: 'Put',
			contentType: 'application/json',
			data: JSON.stringify(defaults),
			dataType: 'text',
			error: function (xhr) {
			},
			success: function (result) {
				keyToUpdate = result.key;
			},
			async: true,
			processData: false
		});
	},

	addToWishList: function () {
		var items = parseInt($(".quantity").val());
		var self = this;
		defaults = {
			deliveryTime: parseInt(this.model.get("type")),
			ProductId: this.model.get("key"),
			quantity: parseInt($('.quantity').val()),
			UserId: this.user.key,
			isWishlist: true,
			price: parseInt(this.model.get("price")),
			ImgUrl: "images/wishlist.png"
		};

		$.ajax({
			url: 'api/Cart/PostCartDTO/',
			type: 'Put',
			contentType: 'application/json',
			data: JSON.stringify(defaults),
			dataType: 'text',
			error: function (xhr) {
			},
			success: function (result) {
				keyToUpdate = result.key;
			},
			async: true,
			processData: false
		});
	},

	template: Handlebars.compile($("#product-template").html()),
	initialize: function (options) {
		this.listenTo(this.model, "reset change", this.render);
		this.model = new models.ProductModel();
		loggedUser = localStorage.getItem("user");
		if (loggedUser) {
			this.user = JSON.parse(loggedUser);
		}
		else {
			alert("Login Required");
			window.location.hash = 'login';
			return;
		}

		var self = this; var items = parseInt($(".quantity").val());
		this.model.fetch({
			url: "api/Products/" + options.id,
			success: function () {
				console.log(self.model);
				self.render();
			}
		});
	},
	render: function () {
		(html = this.template(this.model.toJSON())), this.$el.html(html);
		return this;
	}
});

var cartView = Backbone.View.extend({
	template: Handlebars.compile($("#cart-template").html()),

	events: {
		"click .remove-from-cart": "removeFromCart",
		'change .quantity': 'updateValues',
		'click .place-order': "checkout"
	},

	checkout: function (e) {
		localStorage.setItem('orders', JSON.stringify(this.collection));
		window.location.hash = 'orders';

	},

	updateValues: function (e) {
		var items = parseInt(e.currentTarget.value);
		var price = parseInt(e.currentTarget.getAttribute("price"));
		e.currentTarget.parentElement.nextElementSibling.firstElementChild.firstElementChild.innerText = items * price;
	},

	removeFromCart(e) {
		var data = e.target.closest('td');
		var key = data.getAttribute("key");
		var cartProduct;
		jQuery.each(this.collection, function (i, val) {
			if (val.key == key) {
				cartProduct = val;
				return;
			}
		});
		e.currentTarget.closest('tr').remove()
		$.ajax({
			url: 'api/Cart/DeleteCartDTO/',
			type: 'Put',
			contentType: 'application/json',
			data: JSON.stringify(cartProduct),
			dataType: 'text',
			error: function (xhr) {
			},
			success: function (result) {
			},
			async: true,
			processData: false
		});
	},

	initialize: function () {
		this.listenTo(this.collection, "reset change", this.render);
		this.collection = new models.CartModel();
		loggedUser = localStorage.getItem("user");
		if (loggedUser) {
			this.user = JSON.parse(loggedUser);
		}
		else {
			alert("Login Required");
			window.location.hash = 'login';
			return;
		}
		var self = this;
		$.ajax({
			url: "/api/Cart/GetCart/",
			data: {
				userID: this.user.key,
				isWishList: false
			},
			type: 'GET',
			success: function (res) {
				self.collection = res;
				self.render();
			}
		});

	},

	render: function () {
		(html = this.template({
			products: this.collection
		})),
			this.$el.html(html);
		localStorage.setItem("cart", JSON.stringify(this.collection));

		return this;
	}
});

var WishlistView = Backbone.View.extend({
	template: Handlebars.compile($("#wishlist-template").html()),
	events: {
		"click .remove-from-wishlist": "deleteFromWishlist",
		"click .move-to-cart": "moveToCart"
	},
	deleteFromWishlist(e) {
		var data = e.target.closest('td');
		var key = data.getAttribute("key");
		var cartProduct;
		jQuery.each(this.collection, function (i, val) {
			if (val.key == key) {
				cartProduct = val;
				return;
			}
		});
		cartProduct.isWishList = false;
		e.currentTarget.closest('tr').remove()
		$.ajax({
			url: 'api/Cart/DeleteCartDTO/',
			type: 'Put',
			contentType: 'application/json',
			data: JSON.stringify(cartProduct),
			dataType: 'text',
			error: function (xhr) {
			},
			success: function (result) {
			},
			async: true,
			processData: false
		});
	},

	moveToCart(e) {
		var data = e.target.closest('td');
		var pid = data.getAttribute("pid");
		var pkey = data.getAttribute("key");
		var cartProduct;
		jQuery.each(this.collection, function (i, val) {
			if (val.productId == pid) {
				cartProduct = val;
				return;
			}
		});
		var items = parseInt($(".quantity").val());

		jQuery.each(this.collection, function (i, val) {
			if (val.key == pkey) {
				cartProduct = val;
				return;
			}
		});

		e.currentTarget.closest('tr').remove()
		cartProduct.isWishlist = false;
		$.ajax({
			url: 'api/Cart/RemoveFromCart/',
			type: 'Put',
			contentType: 'application/json',
			data: JSON.stringify(cartProduct),
			dataType: 'text',
			error: function (xhr) {
			},
			success: function (result) {

			},
			async: true,
			processData: false
		});
	},

	initialize: function () {
		this.listenTo(this.collection, "reset change", this.render);
		this.collection = new models.WishlistModel();
		loggedUser = localStorage.getItem("user");
		if (loggedUser) {
			this.user = JSON.parse(loggedUser);
		}
		else {
			alert("Login Required");
			window.location.hash = 'login';
			return;
		}
		var self = this;
		$.ajax({
			url: "/api/Cart/GetCart/",
			data: {
				userID: this.user.key,
				isWishList: true
			},
			type: 'GET',
			success: function (res) {
				self.collection = res;
				self.render();
			}
		});
		this.render();
	},
	render: function () {
		(html = this.template({
			products: this.collection
		})),
			this.$el.html(html);
		localStorage.setItem("cart", JSON.stringify(this.collection));

		return this;
	}
});



//To do
//var UserView = Backbone.View.extend({
//	// template: Handlebars.compile($("#user-template").html()),

//	initialize: function () {
//		this.listenTo(this.model, "reset change", this.render);
//		this.model = new models.UserModel();
//		var self = this;
//		// this.model.fetch({
//		//   success: function () {
//		//     console.log(self.model);
//		// self.render();

//		//   }
//		// });
//		this.render();
//	},
//	render: function () {
//		(html = this.template(
//			// products: this.model.toJSON()
//			{
//				id: 1,
//				name: "Leanne Graham",
//				email: "Sincere@april.biz"
//			}
//		)),
//			this.$el.html(html);
//		return this;
//	}
//});

var LoginView = Backbone.View.extend({

	template: Handlebars.compile($("#login-template").html()),

	events: {
		"click .login_btn": "login"
	},

	login() {
		this.model.set("email", $(".email").val());
		this.model.set("password", $(".password").val());
		var self = this;
		$.ajax({
			url: "/api/User/GetUser/",
			data: {
				'email': $(".email").val(),
				'pass': $(".password").val()
			},
			type: 'GET',
			success: function (res) {
				console.log(res);
				if (res) {
					self = res;
					localStorage.setItem('user', JSON.stringify(res));
					var userTemplate = Handlebars.compile($("#user-template").html());
					var html = userTemplate(res);
					var el = $('#userDropdown');
					el.html(html);
					alert("Login Successful");
					window.location.hash = 'dashboard';
				}
				else {
					alert("Invalid Credentials");
				}

			}
		});
	},

	initialize: function () {
		localStorage.removeItem('user');
		this.model = new models.UserModel();
		this.render();
	},

	render: function () {
		(html = this.template()), this.$el.html(html);
		return this;
	}
});

var UserRegistrationView = Backbone.View.extend({

	template: Handlebars.compile($("#user-registration-template").html()),

	events: {
		"click .submit-btn": "registerUser"
	},

	checkEmail(email, self) {
		var model = self
		$.ajax({
			url: "/api/User/checkEmail/",
			data: {
				'email': email,
			},
			type: 'GET',
			success: function (res) {
				if (!res) {
					model.saveUser(model);
				}
				else {
					alert("Email Already Registered");
					return;
				}
			}
		});
	},

	saveUser(model) {
		$.ajax({
			url: 'api/User/PostUser/',
			type: 'PUT',
			contentType: 'application/json',
			data: JSON.stringify(model.model),
			dataType: 'text',
			error: function (xhr) {
				alert("Registration Failed");
				window.location.hash = 'login';
			},
			success: function (result) {
				alert("Registration Successful");
				window.location.hash = 'login';
			},
			async: true,
			processData: false
		});
	},

	registerUser: function (e) {
		this.model.set("name", $("#inputName").val());
		this.model.set("phone", parseInt($("#inputPhone").val()));
		this.model.set("email", $("#inputEmail").val());
		this.model.set("address", $("#inputAddress").val());
		this.model.set("password", $("#inputPassword").val());
		this.model.set("confirmPassword", $(".confirmPassword").val());
			
		var self = this;
		var isValid = this.model.isValid();
		var isDuplicate = false;


		if (isValid) {
			this.checkEmail($("#inputEmail").val(), self);
		}
		else {
			alert(this.model.validationError);
		}
	},

	initialize: function () {
		this.model = new models.UserModel();
		var self = this;
		this.render();
	},
	render: function () {
		(html = this.template()), this.$el.html(html);
		return this;
	}
});

var models = {};

models.ProductModel = Backbone.Model.extend({
	url: "  api/Products/"
});

models.ProductsModel = Backbone.Collection.extend({
	url: "api/Products",
	model: models.ProductModel
});

models.OrdersModel = Backbone.Collection.extend({
	url: "api/Products/GetOrders",
	model: models.ProductModel
});

models.CartModel = Backbone.Collection.extend({
	defaults: {
		productId: 1,
		quantity: 1,
		UserId: 2,
		isWishlist: false,
		imageUrl: ""
	}
});

models.WishlistModel = Backbone.Collection.extend({
	defaults: {
		productId: "",
		quantity: 1,
		UserId: 2,
		isWishlist: true
	}
});

models.UserModel = Backbone.Model.extend({
	url: "api/User/PostUser",
	defaults: {
		name: "",
		email: "",
		address: "",
		phone: 0,
		password: "",
		confirmPassword: "",
	},
	validate: function (attrs, options) {
		if (!attrs.name) {
			return 'Name is required';
		}
		else if (!attrs.phone) {
			return 'Phone is required';
		}
		else if (!attrs.password) {
			return 'Password is required';
		} 
		else if (!attrs.confirmPassword) {
			return 'Confirm Password is required';
		} 
		else if(attrs.password != attrs.confirmPassword){
				return 'Password mismatch';
		}
		else if (!attrs.email) {
			return 'Email is required';
		} 
		else if (!attrs.address) {
			return 'Address is required';
		}


		if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(attrs.email)){
			return 'Invalid Email';
		}
		// at least one number, one lowercase and one uppercase letter
		// at least six characters
		if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(attrs.password)) {
			return 'Invalid Password';
		}
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
		"": "showLogin",
		"dashboard": "dashboardRoute",
		"Products": "createProductsRoute",
		"product/:id": "showProduct",
		"cart": "showCart",
		"wishlist": "showWishlist",
		"login": "showLogin",
		"register": "registerUser",
		"orders": "showOrders"
	},
	dashboardRoute: function () {
		var dashboardView = new DashboardView();
		$("#content-container").html(dashboardView.el);
	},

	createProductsRoute: function () {
		var psm = new models.ProductsModel({});
		var createProductsView = new ProductsView();
		$("#content-container").html(createProductsView.el);
	},

	showOrders: function () {
		var psm = new models.OrdersModel({});
		var createOrdersView = new OrdersView();
		$("#content-container").html(createOrdersView.el);
	},

	showProduct: function (id) {
		var createProductView = new ProductView({
			id: id
		});
		$("#content-container").html(createProductView.el);
	},

	showCart: function () {
		var createProductsView = new cartView();
		$("#content-container").html(createProductsView.el);
	},

	showWishlist: function () {
		var createWishlistView = new WishlistView();
		$("#content-container").html(createWishlistView.el);
	},

	showLogin: function () {
		var createLoginView = new LoginView();
		$("#content-container").html(createLoginView.el);
	},

	registerUser: function () {
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


var searchProduct = function (e) {
	loggedUser = localStorage.getItem("user");
	var user;
	if (loggedUser) {
		user = JSON.parse(loggedUser);
	}
	else {
		alert("Login Required");
		window.location.hash = 'login';
		return;
	}
	var productCode = parseInt($("#productId").val());
	var self = this;

	$.ajax({
		url: "api/Products/" + productCode,
		success: function (res) {
			if (res != null) {
				defaults = {
					ProductId: res.key,
					quantity: 1,
					UserId: user.key,
					isWishlist: false,
					price: parseInt(res.price),
					ImgUrl: "images/wishlistImage.png"
				};
				$.ajax({
					url: 'api/Cart/PostCartDTO/',
					type: 'Put',
					contentType: 'application/json',
					data: JSON.stringify(defaults),
					dataType: 'text',
					error: function (xhr) {
					},
					success: function (result) {
						alert("Product Added Successfully");
					},
					async: true,
					processData: false
				});
			}
			else {
				alert("Invalid Product ID");
			}
		}
	});


};

$(function () {
	$("#searchProductId").click(function () {
		searchProduct();
	});
});
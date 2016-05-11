angular.module('your_app_name.account.services', [])

.service('OrderService', function ($http, $q){

  this.getUserOrders = function(){
    var dfd = $q.defer();
    var service = this;

    $http.get('logged_user_db.json').success(function(database) {
      var orders = _.each(database.user.orders, function(order){
        service.getOrderProducts(order).then(function(products){
          order.products = products;
        }, function(error){
          console.log("ups", error);
        });
      });

      dfd.resolve(orders);
    });
    return dfd.promise;
  };

  this.getOrderProducts = function(order){
    var dfd = $q.defer();

    $http.get('fashion_db.json').success(function(database) {
      //add product data to this order
      var products = _.map(order.products, function(product){
        return _.find(database.products, function(p){ return p.id == product.id; });
      });
      dfd.resolve(products);
    });

    return dfd.promise;
  };

})



.service('ProfileService', function ($http, $q){
  var logged = {
  "user":{
    "id": 1,
    "first_name": "Billy",
    "last_name": "Fowler",
    "password": "billy12345678",
    "email": "bfowler0@gmail.com",
    "picture": "https://s3.amazonaws.com/uifaces/faces/twitter/teclaro/128.jpg",
    "orders": [
      {
        "id": 1,
        "products": [
          {
            "id": "4"
          }
        ],
        "date": "01/01/2016",
        "status": "delivered"
      },
      {
        "id": 2,
        "products": [
          {
            "id": "1"
          },
          {
            "id": "3"
          }
        ],
        "date": "09/19/2015",
        "status": "shipped"
      },
      {
        "id": 3,
        "products": [
          {
            "id": "2"
          },
          {
            "id": "7"
          },
          {
            "id": "4"
          }
        ],
        "date": "05/20/2015",
        "status": "canceled"
      }
    ],
    "lists": [
      {
        "id": 1,
        "name": "morbi a",
        "category": "realstate",
        "tags": "tag3",
        "creation_date": "09/28/2015",
        "products": [
          "4",
          "8",
          "6",
          "2"
        ]
      },
      {
        "id": 2,
        "name": "sit amet",
        "category": "food",
        "tags": "tag1",
        "creation_date": "07/04/2015",
        "products": [
          "3",
          "4",
          "1",
          "6",
          "7"
        ]
      },
      {
        "id": 3,
        "name": "aliquet pulvinar sed",
        "category": "realstate",
        "tags": "tag2",
        "creation_date": "02/01/2016",
        "products": [
          "1"
        ]
      },
      {
        "id": 4,
        "name": "sollicitudin ut suscipit a feugiat",
        "category": "fashion",
        "tags": "tag3",
        "creation_date": "06/12/2015",
        "products": [
          "6"
        ]
      },
      {
        "id": 5,
        "name": "lacus",
        "category": "deals",
        "tags": "tag1",
        "creation_date": "11/24/2015",
        "products": [
          "4",
          "5"
        ]
      }
    ],
    "shipping_addresses": [
      {
        "full_name": "Billy Fowler",
        "street": "0 Waubesa Junction",
        "city": "Houston",
        "state": "TX",
        "postal_code": "77020",
        "phone": "1-(713)471-0205"
      },
      {
        "full_name": "Betty Adams",
        "street": "50 Northfield Way",
        "city": "Brooklyn",
        "state": "NY",
        "postal_code": "11210",
        "phone": "1-(347)846-3569"
      }
    ],
    "credit_cards": [
      {
        "full_name": "Billy Fowler",
        "number": "**** **** **** 4295",
        "type": "visa",
        "ccv": 556,
        "expiration": "11/18/2016"
      }
    ]
  }
}

  this.getUserData = function(){
    var dfd = $q.defer();
    dfd.resolve(logged.user);
    return dfd.promise;
  };
})

;

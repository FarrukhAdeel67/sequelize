const seqeulize = require("./util/database");
const Customer = require("./models/customer");
const Order = require("./models/order");
Customer.hasMany(Order);
let customerId = null;
seqeulize
  .sync({ force: true })
  .then((result) => {
    return Customer.create({
      name: "Farrukh Adeel",
      email: "m.farrukhadeel@gmail.com",
    });
    console.log(result);
  })
  .then((customer) => {
    customerId = customer.id;
    console.log("First Customer Created: ", customer);
    return customer.createOrder({ total: 50 });
  })
  .then((order) => {
    console.log("Order is: ", order);
    return Order.findAll({ where: customerId });
  })
  .then((orders) => {
    console.log("All the orders are : ", orders);
    return Customer.create({
      name: "Hashir Asmat",
      email: "hashirasmat@gmail.com",
    });
    console.log(result);
  })
  .then((customer) => {
    customerId = customer.id;
    console.log("Second customer added....", customer);
    return customer.createOrder({ total: 34 });
  })
  .then((order) => {
    console.log("Order is: ", order);
    return Order.findAll({ where: customerId });
  })
  .then((orders) => {
    console.log("all the orders are ....", orders);
  })
  .catch((err) => {
    console.log(err);
  });

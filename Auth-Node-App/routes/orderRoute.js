const router = require('express').Router();
const Order = require('../model/Order');
const verify = require('./verifyToken');
const User = require('../model/User');
//get orders
router.get('/', verify, async (req, res) =>{
    const orders = await Order.find({}).populate('user');
  res.send(orders);
});
//get user orders
router.get('/mine', verify, async (req, res) =>{
    const orders = await Order.find({ user: req.user._id });
  res.send(orders);
});
//get orders based on ID
router.get('/:id', verify, async (req, res) =>{
    const order = await Order.findOne({ _id: req.params.id });
  if (order) {
    res.send(order);
  } else {
    res.status(404).send("Order Not Found.")
  }
});
//delete the order
router.delete('/:id', verify, async (req, res) =>{
    const order = await Order.findOne({ _id: req.params.id });
  if (order) {
    const deletedOrder = await order.remove();
    res.send(deletedOrder);
  } else {
    res.status(404).send("Order Not Found.")
  }
});
//create new order
router.post('/', verify, async (req, res) =>{
    const newOrder = new Order({
        orderItems: req.body.orderItems,
        user: req.user._id,
        shipping: req.body.shipping,
        payment: req.body.payment,
        itemsPrice: req.body.itemsPrice,
        taxPrice: req.body.taxPrice,
        shippingPrice: req.body.shippingPrice,
        totalPrice: req.body.totalPrice,
      });
      const newOrderCreated = await newOrder.save();
      res.json(newOrderCreated)
      res.status(201).send({ message: "New Order Created", data: newOrderCreated });
});
//update the order
router.put('/:id/pay', verify, async (req, res) =>{
    const order = await Order.findById(req.params.id);
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.payment = {
      paymentMethod: 'paypal',
      paymentResult: {
        payerID: req.body.payerID,
        orderID: req.body.orderID,
        paymentID: req.body.paymentID
      }
    }
    const updatedOrder = await order.save();
    res.send({ message: 'Order Paid.', order: updatedOrder });
  } else {
    res.status(404).send({ message: 'Order not found.' })
  }
});


module.exports = router;
import Order from "../models/orderModel.js";

//@description Create new order
//@route POST /api/orders
//@access Private
const addOrderItems = async (req, res) => {
  try {
    console.log("Hello");
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body;

    if (orderItems && orderItems.length === 0) {
      throw new Error("No order items");
      return;
    } else {
      const order = new Order({
        orderItems,
        user: req.user._id,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
      });
      console.log(order);
      const createdOrder = await order.save();

      res.status(201).json(createdOrder);
    }
  } catch (error) {
    res.status(400);

    console.log("yo:", error);
  }
};

//@description Get order by Id
//@route GET /api/orders/:id
//@access Private
const getOrderById = async (req, res) => {
  try {
    // console.log(req.params.id);
    const order = await Order.findById(req.params.id).populate(
      "user",
      "name email"
    );
    // console.log(order);
    if (order) {
      res.json(order);
    } else {
      throw new Error("Order Not Found");
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

//@description Update order to paid
//@route GET /api/orders/:id/pay
//@access Private
const updateOrderToPaid = async (req, res) => {
  try {
    // console.log(req.params.id);
    const order = await Order.findById(req.params.id).populate();
    // console.log(order);

    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.payer.email_address,
      };

      const updatedOrder = await order.save();

      res.json(updatedOrder);
    } else {
      throw new Error("Order Not Found");
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

export { addOrderItems, getOrderById, updateOrderToPaid };

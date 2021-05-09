const router = require('express').Router();

const OrderModel = require('../models/order');
const OrderStatus = require('../constants/order-status');
const Passport = require('../modules/passport');

router.get('/', Passport.requireAuth, async (req, res) => {
  res.redirect('/admin/order/danh-sach.html');
});

router.get('/danh-sach.html', Passport.requireAuth, async (req, res) => {
  const model = {};
  
  model.data = await OrderModel.find().lean();
  
  res.render('admin/order/list', model);
});

router.get('/chi-tiet/:id.html', Passport.requireAuth, async (req, res) => {
  const model = {};
  
  model.order = await OrderModel.findOne(
    {
      id: req.params.id
    }
  ).lean();
  
  res.render('admin/order/detail', model);
});

router.get('/thanh-toan/:id', Passport.requireAuth, async (req, res) => {
  const docOrder = await OrderModel.findOne(
    {
      id: req.params.id,
      status: OrderStatus.submit
    }
  ).lean();
// chuyển đổi trạng thái thanh toán
  if (!docOrder || !docOrder.id) {
    req.flash('response_message', 'Tham Số Đầu Vào Không Hợp Lệ');
  }
  else {
    await OrderModel.update(
      {
        id: docOrder.id
      },
      {
        status: OrderStatus.paid
      }
    );
    
    req.flash('response_message', 'Cập Nhật Thành Công');
  }

  res.redirect(`/admin/order/chi-tiet/${req.params.id}.html`);
});

module.exports = router;

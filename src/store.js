import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nowuser: null,
    commodity: [
      {
        c_num: 1,
        c_name: 'iphone12',
        c_pride: 'iphone',
        c_pride_id: 1,
        c_price: 5000,
        c_img: 'static/img/iPhone/iPhone12.jpg',
        c_isincar: 1,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 2,
        c_name: 'iphone11',
        c_pride: 'iphone',
        c_pride_id: 1,
        c_price: 5000,
        c_img: 'static/img/iPhone/iphone11.jpg',
        c_isincar: 1,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 3,
        c_name: 'iphoneX',
        c_pride: 'iphone',
        c_pride_id: 1,
        c_price: 5000,
        c_img: 'static/img/iPhone/iPhoneX.jpg',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 4,
        c_name: 'iphone8',
        c_pride: 'iphone',
        c_pride_id: 1,
        c_price: 5000,
        c_img: 'static/img/iPhone/iPhone8.jpg',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 5,
        c_name: 'iphone7',
        c_pride: 'iphone',
        c_pride_id: 1,
        c_price: 5000,
        c_img: 'static/img/iPhone/iPhone7.jpg',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 6,
        c_name: 'iphone6',
        c_pride: 'iphone',
        c_pride_id: 1,
        c_price: 5000,
        c_img: 'static/img/iPhone/iPhone6.jpg',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 7,
        c_name: 'iphone5s',
        c_pride: 'iphone',
        c_pride_id: 1,
        c_price: 5000,
        c_img: 'static/img/iPhone/iPhone5s.jpg',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 8,
        c_name: '畅享10e',
        c_pride: '华为',
        c_pride_id: 2,
        c_price: 5000,
        c_img: 'static/img/华为/畅享10e.png',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 9,
        c_name: '畅享20',
        c_pride: '华为',
        c_pride_id: 2,
        c_price: 5000,
        c_img: 'static/img/华为/畅享20.png',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },

      {
        c_num: 10,
        c_name: '华为Mate30',
        c_pride: '华为',
        c_pride_id: 2,
        c_price: 5000,
        c_img: 'static/img/华为/华为Mate30.jpg',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 11,
        c_name: '华为Meta40',
        c_pride: '华为',
        c_pride_id: 2,
        c_price: 5000,
        c_img: 'static/img/华为/华为Mate40.jpg',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 12,
        c_name: '华为P30',
        c_pride: '华为',
        c_pride_id: 2,
        c_price: 5000,
        c_img: 'static/img/华为/华为P30.jpg',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 13,
        c_name: '华为P40',
        c_pride: '华为',
        c_pride_id: 2,
        c_price: 5000,
        c_img: 'static/img/华为/华为P40.jpg',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 14,
        c_name: '麦芒9',
        c_pride: '华为',
        c_pride_id: 2,
        c_price: 5000,
        c_img: 'static/img/华为/麦芒9.png',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 15,
        c_name: 'nova5',
        c_pride: '华为',
        c_pride_id: 2,
        c_price: 5000,
        c_img: 'static/img/华为/nova5.jpg',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 16,
        c_name: 'nova7',
        c_pride: '华为',
        c_pride_id: 2,
        c_price: 5000,
        c_img: 'static/img/华为/nova7.jpg',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 17,
        c_name: 'nova8',
        c_pride: '华为',
        c_pride_id: 2,
        c_price: 5000,
        c_img: 'static/img/华为/nova8.jpg',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 18,
        c_name: '小米10',
        c_pride: '小米',
        c_pride_id: 3,
        c_price: 5000,
        c_img: 'static/img/小米/小米10.png',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 19,
        c_name: '小米10pro',
        c_pride: '小米',
        c_pride_id: 3,
        c_price: 5000,
        c_img: 'static/img/小米/小米10pro.png',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 20,
        c_name: 'redmi note9',
        c_pride: '小米',
        c_pride_id: 3,
        c_price: 5000,
        c_img: 'static/img/小米/redmi note9.png',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 21,
        c_name: 'redmi note9pro',
        c_pride: '小米',
        c_pride_id: 3,
        c_price: 5000,
        c_img: 'static/img/小米/redmi note9pro.png',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 22,
        c_name: 'redmi9',
        c_pride: '小米',
        c_pride_id: 3,
        c_price: 5000,
        c_img: 'static/img/小米/redmi9.png',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 23,
        c_name: 'redmi9a',
        c_pride: '小米',
        c_pride_id: 3,
        c_price: 5000,
        c_img: 'static/img/小米/redmi9a.png',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 24,
        c_name: 'redmi9pro',
        c_pride: '小米',
        c_pride_id: 3,
        c_price: 5000,
        c_img: 'static/img/小米/redmi9pro.png',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 25,
        c_name: 'redmik30',
        c_pride: '小米',
        c_pride_id: 3,
        c_price: 5000,
        c_img: 'static/img/小米/redmik30.png',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 26,
        c_name: 'redmik30s',
        c_pride: '小米',
        c_pride_id: 3,
        c_price: 5000,
        c_img: 'static/img/小米/redmik30s.png',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 27,
        c_name: 'oppo a8',
        c_pride: 'oppo',
        c_pride_id: 4,
        c_price: 5000,
        c_img: 'static/img/oppo/a8.png',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 28,
        c_name: 'oppo a32',
        c_pride: 'oppo',
        c_pride_id: 4,
        c_price: 5000,
        c_img: 'static/img/oppo/a32.png',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 29,
        c_name: 'oppo a52',
        c_pride: 'oppo',
        c_pride_id: 4,
        c_price: 5000,
        c_img: 'static/img/oppo/a52.png',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 30,
        c_name: 'oppo a72',
        c_pride: 'oppo',
        c_pride_id: 4,
        c_price: 5000,
        c_img: 'static/img/oppo/a72.png',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 31,
        c_name: 'oppo a92s',
        c_pride: 'oppo',
        c_pride_id: 4,
        c_price: 5000,
        c_img: 'static/img/oppo/a92s.png',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 32,
        c_name: 'oppo ace2',
        c_pride: 'oppo',
        c_pride_id: 4,
        c_price: 5000,
        c_img: 'static/img/oppo/ace2.png',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 33,
        c_name: 'oppo findx2',
        c_pride: 'oppo',
        c_pride_id: 4,
        c_price: 5000,
        c_img: 'static/img/oppo/findx2.png',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 34,
        c_name: 'oppo K7',
        c_pride: 'oppo',
        c_pride_id: 4,
        c_price: 5000,
        c_img: 'static/img/oppo/K7.png',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 35,
        c_name: 'oppoK7x',
        c_pride: 'oppo',
        c_pride_id: 4,
        c_price: 5000,
        c_img: 'static/img/oppo/K7x.png',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 36,
        c_name: 'oppo reno3',
        c_pride: 'oppo',
        c_pride_id: 4,
        c_price: 5000,
        c_img: 'static/img/oppo/reno3.png',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 37,
        c_name: 'oppo reno4 se',
        c_pride: 'oppo',
        c_pride_id: 4,
        c_price: 5000,
        c_img: 'static/img/oppo/reno4 se.png',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 38,
        c_name: 'oppo reno',
        c_pride: 'oppo',
        c_pride_id: 4,
        c_price: 5000,
        c_img: 'static/img/oppo/reno4.png',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 39,
        c_name: 'oppo reno5',
        c_pride: 'oppo',
        c_pride_id: 4,
        c_price: 5000,
        c_img: 'static/img/oppo/reno5.png',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 40,
        c_name: 'oppo reno5 pro',
        c_pride: 'oppo',
        c_pride_id: 4,
        c_price: 5000,
        c_img: 'static/img/oppo/reno5 pro.png',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 41,
        c_name: 'iqoo u1x',
        c_pride: 'vivo',
        c_pride_id: 5,
        c_price: 5000,
        c_img: 'static/img/vivo/iqoo u1x.jpg',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 42,
        c_name: 'iqoo5 pro',
        c_pride: 'vivo',
        c_pride_id: 5,
        c_price: 5000,
        c_img: 'static/img/vivo/iqoo5pro.jpg',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 43,
        c_name: 'vivo s5',
        c_pride: 'vivo',
        c_pride_id: 5,
        c_price: 5000,
        c_img: 'static/img/vivo/s5.jpg',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 44,
        c_name: 'vivo s6',
        c_pride: 'vivo',
        c_pride_id: 5,
        c_price: 5000,
        c_img: 'static/img/vivo/s6.jpg',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 45,
        c_name: 'vivo s7',
        c_pride: 'vivo',
        c_pride_id: 5,
        c_price: 5000,
        c_img: 'static/img/vivo/s7.jpg',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 46,
        c_name: 'vivo s7e',
        c_pride: 'vivo',
        c_pride_id: 5,
        c_price: 5000,
        c_img: 'static/img/vivo/s7e.jpg',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 47,
        c_name: 'vivo x60',
        c_pride: 'vivo',
        c_pride_id: 5,
        c_price: 5000,
        c_img: 'static/img/vivo/x60.jpg',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 48,
        c_name: 'vivo y30',
        c_pride: 'vivo',
        c_pride_id: 5,
        c_price: 5000,
        c_img: 'static/img/vivo/y30.jpg',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 49,
        c_name: 'vivo y73s',
        c_pride: 'vivo',
        c_pride_id: 5,
        c_price: 5000,
        c_img: 'static/img/vivo/y73s.jpg',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      },
      {
        c_num: 50,
        c_name: 'vivo z6',
        c_pride: 'vivo',
        c_pride_id: 5,
        c_price: 5000,
        c_img: 'static/img/vivo/z6.jpg',
        c_isincar: 0,
        c_quantity: 1,
        checked: false,
        c_size: 8
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
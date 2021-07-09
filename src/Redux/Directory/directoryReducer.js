const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a190fb98-650a-4584-bb0b-d13a3b4603d4/featherlight-womens-running-cap-127RF5.png",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b9ede720-9662-4104-87b7-89e3b1209760/club-am%C3%A9rica-repel-academy-awf-mens-soccer-jacket-dtX3zm.png",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b12c27c7-aaee-450d-ae5e-0aa224ef3789/space-hippie-01-shoe-14Tq8r.png",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl:
        "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ce53baba196e4aeaac57ac8601300c8d_9366/adicolor-tricolor-tank-dress.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "kids",
      imageUrl:
        "https://images.pexels.com/photos/35188/child-childrens-baby-children-s.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      size: "large",
      id: 5,
      linkUrl: "shop/kids",
    },
    {
      title: "mens",
      imageUrl:
        "https://static.zara.net/photos///2021/V/0/2/p/9240/409/310/2/w/527/9240409310_2_1_1.jpg?ts=1620662337878",
      size: "large",
      id: 6,
      linkUrl: "shop/mens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;

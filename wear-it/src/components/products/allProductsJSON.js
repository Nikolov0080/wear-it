const products = [
    { "type": "Hats", "price": "7000", "name": "Blue hat", "imageURL": "https://res.cloudinary.com/recepsbg/image/upload/v1617093555/wear-it/hats/hat_5_yz15gx.png", "id": "57341c5c003a37fb3d0db135e1afe388" },
    { "type": "Hats", "price": "10", "name": "Supra", "imageURL": "https://res.cloudinary.com/recepsbg/image/upload/v1617093555/wear-it/hats/hat_3_ajossj.png", "id": "2490e3d98f87e5d23d3d6bc809f07fb5" },
    { "type": "Hats", "price": "28", "name": "Duck", "imageURL": "https://res.cloudinary.com/recepsbg/image/upload/v1617093555/wear-it/hats/hat_6_ddivv1.png", "id": "38378bcc6ad4218f20ac738149c8d681" },
    { "type": "Hats", "price": "16", "name": "Dogo", "imageURL": "https://res.cloudinary.com/recepsbg/image/upload/v1617093555/wear-it/hats/hat_4_yq2fqx.png", "id": "a245b4533b09b59f557d3cfe0d252bd4" },
    { "type": "Hats", "price": "30", "name": "Weird hat", "imageURL": "https://res.cloudinary.com/recepsbg/image/upload/v1617093555/wear-it/hats/hat_2_ijukut.png", "id": "71a29de01e39b0047ceeb95753aa48dd" },
    { "type": "Hats", "price": "25", "name": "Nice One", "imageURL": "https://res.cloudinary.com/recepsbg/image/upload/v1617093554/wear-it/hats/hat_1_mrni03.png", "id": "e8a794477d2dd568c7cc2f47e54143c4" },
    { "type": "Jackets", "price": "180", "name": "Stylish blue", "imageURL": "https://res.cloudinary.com/recepsbg/image/upload/v1617093553/wear-it/jackets/jacket_2_s7sldo.png", "id": "67f4a379e7ec6926602e4d5682d726ae" },
    { "type": "Jackets", "price": "130", "name": "Orange and black", "imageURL": "https://res.cloudinary.com/recepsbg/image/upload/v1617093553/wear-it/jackets/jacket_5_chu0se.png", "id": "aa1afa5fdf927eecd7afe3ae69970ceb" },
    { "type": "Jackets", "price": "80", "name": "Brown one", "imageURL": "https://res.cloudinary.com/recepsbg/image/upload/v1617093553/wear-it/jackets/jacket_6_zunmm0.png", "id": "1c89b53e24f75bd9f6315cfd81d3e1ba" },
    { "type": "Jackets", "price": "340", "name": "Fan outfit", "imageURL": "https://res.cloudinary.com/recepsbg/image/upload/v1617093553/wear-it/jackets/jacket_3_fxzwn6.png", "id": "1312643c0ea61a0ec80ebea9b84d52b6" },
    { "type": "Jackets", "price": "220", "name": "Industrial style", "imageURL": "https://res.cloudinary.com/recepsbg/image/upload/v1617093553/wear-it/jackets/jacket_4_x2bcwo.png", "id": "703c7b7a0359102b8483ce836eb25df9" },
    { "type": "Jackets", "price": "170", "name": "Clean black", "imageURL": "https://res.cloudinary.com/recepsbg/image/upload/v1617093552/wear-it/jackets/jacket_1_hdguuz.png", "id": "b8852d89384a384bda037e3b2a3b932a" },
    { "type": "Jeans", "price": "70", "name": "Dark blue", "imageURL": "https://res.cloudinary.com/recepsbg/image/upload/v1617093554/wear-it/jeans/jeans_6_gj77dn.png", "id": "a274137789c0c1f5bb7ceaeeee41ae40" },
    { "type": "Jeans", "price": "80", "name": "Ripped", "imageURL": "https://res.cloudinary.com/recepsbg/image/upload/v1617093554/wear-it/jeans/jeans_5_p3e8xb.png", "id": "2830fc0208bd11210a81b10716160a73" },
    { "type": "Jeans", "price": "56", "name": "Light blue", "imageURL": "https://res.cloudinary.com/recepsbg/image/upload/v1617093553/wear-it/jeans/jeans_2_qf1k8x.png", "id": "0774877a2858289142e37fe365e6f78a" },
    { "type": "Jeans", "price": "85", "name": "Deep black", "imageURL": "https://res.cloudinary.com/recepsbg/image/upload/v1617093553/wear-it/jeans/jeans_4_ckzcza.png", "id": "75e055d1e535ec29aaa4e77d27ecbfc9" },
    { "type": "Jeans", "price": "120", "name": "Stylish blue", "imageURL": "https://res.cloudinary.com/recepsbg/image/upload/v1617093553/wear-it/jeans/jeans_3_y7xebp.png", "id": "31b9a5d0ca4da0b41af5ff5647497362" },
    { "type": "Jeans", "price": "90", "name": "Regular jeans", "imageURL": "https://res.cloudinary.com/recepsbg/image/upload/v1617093553/wear-it/jeans/jeans_1_lqgrh3.png", "id": "01318bb3039618d111fcf8462a8f7580" },
    { "type": "Shirts", "price": "50", "name": "Black symbol", "imageURL": "https://res.cloudinary.com/recepsbg/image/upload/v1617093554/wear-it/t-shirts/t_3_b3bwqn.png", "id": "6dd992e6eaba49a77e9e65c9ac770b42" },
    { "type": "Shirts", "price": "40", "name": "Team shirt", "imageURL": "https://res.cloudinary.com/recepsbg/image/upload/v1617093554/wear-it/t-shirts/t_6_mmvpme.png", "id": "2463e2c036715c5ec8eb005175f87ca7" },
    { "type": "Shirts", "price": "35", "name": "Light blue", "imageURL": "https://res.cloudinary.com/recepsbg/image/upload/v1617093554/wear-it/t-shirts/t_5_lngush.png", "id": "25bc3b97cc8ff3f17d15c0058a28ccd5" },
    { "type": "Shirts", "price": "45", "name": "Dark blue", "imageURL": "https://res.cloudinary.com/recepsbg/image/upload/v1617093554/wear-it/t-shirts/t_4_dvxny9.png", "id": "6e8d165c8167535f558e691a8ddc082a" },
    { "type": "Shirts", "price": "80", "name": "Pure green", "imageURL": "https://res.cloudinary.com/recepsbg/image/upload/v1617093554/wear-it/t-shirts/t_1_rcytmn.png", "id": "3b8ae765d04561a452220c5abf85757a" }
];

export default products;
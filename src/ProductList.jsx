import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        {
          name: 'Snake Plant',
          image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
          description: 'Produces oxygen at night and improves indoor air quality.',
          cost: '$15',
        },
        {
          name: 'Spider Plant',
          image: 'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg',
          description: 'Filters toxins from the air and is easy to grow.',
          cost: '$12',
        },
        {
          name: 'Peace Lily',
          image: 'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg',
          description: 'A beautiful plant that helps purify the air.',
          cost: '$18',
        },
        {
          name: 'Boston Fern',
          image: 'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg',
          description: 'Adds humidity and freshness to indoor spaces.',
          cost: '$20',
        },
        {
          name: 'Rubber Plant',
          image: 'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg',
          description: 'A strong indoor plant that removes air toxins.',
          cost: '$17',
        },
        {
          name: 'Areca Palm',
          image: 'https://cdn.pixabay.com/photo/2017/08/06/22/01/palm-2590710_1280.jpg',
          description: 'A decorative plant that helps clean indoor air.',
          cost: '$22',
        },
      ],
    },
    {
      category: 'Aromatic Plants',
      plants: [
        {
          name: 'Lavender',
          image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop',
          description: 'Known for its calming fragrance and relaxing effect.',
          cost: '$20',
        },
        {
          name: 'Jasmine',
          image: 'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop',
          description: 'A sweet-smelling plant that adds elegance to rooms.',
          cost: '$18',
        },
        {
          name: 'Rosemary',
          image: 'https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg',
          description: 'A fragrant herb often used in cooking.',
          cost: '$15',
        },
        {
          name: 'Mint',
          image: 'https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg',
          description: 'A refreshing aromatic plant used in drinks and food.',
          cost: '$12',
        },
        {
          name: 'Lemon Balm',
          image: 'https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg',
          description: 'A citrus-scented plant that creates a fresh atmosphere.',
          cost: '$14',
        },
        {
          name: 'Hyacinth',
          image: 'https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg',
          description: 'A colorful flowering plant with a strong fragrance.',
          cost: '$22',
        },
      ],
    },
    {
      category: 'Medicinal Plants',
      plants: [
        {
          name: 'Aloe Vera',
          image: 'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg',
          description: 'Famous for its soothing gel and skin benefits.',
          cost: '$14',
        },
        {
          name: 'Echinacea',
          image: 'https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg',
          description: 'Often used to support the immune system.',
          cost: '$16',
        },
        {
          name: 'Peppermint',
          image: 'https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg',
          description: 'Helpful for a fresh smell and digestive comfort.',
          cost: '$13',
        },
        {
          name: 'Chamomile',
          image: 'https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg',
          description: 'Known for calming and relaxing benefits.',
          cost: '$15',
        },
        {
          name: 'Calendula',
          image: 'https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg',
          description: 'A medicinal flower often used for skin care.',
          cost: '$12',
        },
        {
          name: 'Basil',
          image: 'https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg',
          description: 'A useful herb with medicinal and cooking value.',
          cost: '$9',
        },
      ],
    },
  ];

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isPlantInCart = (plant) => {
    return cart.some((item) => item.name === plant.name);
  };

  return (
    <div className="product-page">
      <nav className="navbar">
        <div className="brand" onClick={handleHomeClick}>
          🌿 Paradise Nursery
        </div>

        <div className="nav-links">
          <button onClick={handleHomeClick}>Home</button>
          <button onClick={() => setShowCart(false)}>Plants</button>
          <button className="cart-button" onClick={() => setShowCart(true)}>
            🛒 Cart ({totalQuantity})
          </button>
        </div>
      </nav>

      {!showCart ? (
        <main className="products-container">
          <h1>Our Houseplants</h1>

          {plantsArray.map((category) => (
            <section key={category.category} className="plant-category">
              <h2>{category.category}</h2>

              <div className="product-grid">
                {category.plants.map((plant) => (
                  <div className="product-card" key={plant.name}>
                    <img src={plant.image} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <h4>{plant.cost}</h4>

                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={isPlantInCart(plant)}
                      className={isPlantInCart(plant) ? 'disabled-btn' : ''}
                    >
                      {isPlantInCart(plant) ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </main>
      ) : (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      )}
    </div>
  );
}

export default ProductList;

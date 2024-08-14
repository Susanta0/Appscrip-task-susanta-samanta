import Link from "next/link";
import "./Shop.css";

const Shop = () => {
  return (
    <>
      <section className="shop-section">
        <div className="container">
          <div className="grid-container">
            <div className="card">
              <div className="text-content">
                <header>
                  <h2 className="title">Watches</h2>
                  <p className="description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quas rerum quam amet provident nulla error!
                  </p>
                </header>
                <Link href="#" className="shop-button">
                  Shop All
                </Link>
              </div>
            </div>

            <div className="products">
              <ul className="product-list">
                <li className="product-item">
                  <Link href="#" className="product-link">
                    <img
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                      alt=""
                      className="product-image"
                    />
                    <div className="product-info">
                      <h3 className="product-title">Simple Watch</h3>
                      <p className="product-price">$150</p>
                    </div>
                  </Link>
                </li>
                <li className="product-item">
                  <Link href="#" className="product-link">
                    <img
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                      alt=""
                      className="product-image"
                    />
                    <div className="product-info">
                      <h3 className="product-title">Simple Watch</h3>
                      <p className="product-price">$150</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;

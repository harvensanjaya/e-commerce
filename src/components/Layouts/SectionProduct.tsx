import { CardProduct, CardProductEmpty } from "../Fragments/CardProduct";

function SectionProduct(props) {
  const { title, className } = props;
  return (
    <div className={`flex flex-col gap-2 py-5 items-center ${className}`}>
      {/* {
          products.length > 0 && products.map((product) => (
            <div key={product.id}>
              {product.title}
            </div>
          ))
        } */}
      <div className="flex w-4/5 mt-10 mb-5 self-center justify-between items-center">
        <h1 className="text-3xl font-medium">{title}</h1>
        <a href="">
          <p className="text-slate-500 text-lg">See All</p>
        </a>
      </div>

      <div className="xl:flex xl:gap-5 gap-5 w-4/5 xl:flex-nowrap grid lg:grid-cols-3 grid-cols-2 transition-all">
        <CardProduct>
          <CardProduct.Header image="https://images.pexels.com/photos/34582998/pexels-photo-34582998.jpeg" />
          <CardProduct.Body title="Linen T-Shirt">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardProduct.Body>
          <CardProduct.Footer price="Rp 1.000.000" />
        </CardProduct>
        <CardProduct>
          <CardProduct.Header image="https://images.pexels.com/photos/34582998/pexels-photo-34582998.jpeg" />
          <CardProduct.Body title="Linen T-Shirt">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardProduct.Body>
          <CardProduct.Footer price="Rp 1.000.000" />
        </CardProduct>
        <CardProduct>
          <CardProduct.Header image="https://images.pexels.com/photos/34582998/pexels-photo-34582998.jpeg" />
          <CardProduct.Body title="Linen T-Shirt">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardProduct.Body>
          <CardProduct.Footer price="Rp 1.000.000" />
        </CardProduct>
        <CardProduct>
          <CardProduct.Header image="https://images.pexels.com/photos/34582998/pexels-photo-34582998.jpeg" />
          <CardProduct.Body title="Linen T-Shirt">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardProduct.Body>
          <CardProduct.Footer price="Rp 1.000.000" />
        </CardProduct>
        <CardProduct>
          <CardProduct.Header image="https://images.pexels.com/photos/34582998/pexels-photo-34582998.jpeg" />
          <CardProduct.Body title="Linen T-Shirt">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardProduct.Body>
          <CardProduct.Footer price="Rp 1.000.000" />
        </CardProduct>
        <CardProductEmpty>See all Products</CardProductEmpty>
      </div>
    </div>
  );
}

export default SectionProduct;

import './Product.css'

// eslint-disable-next-line no-unused-vars,react/prop-types
function Product({productLabel, productImage, productName, productPrice}) {
    return (
        <article>
            <span>{productLabel}</span>
            <img src={productImage} alt="{productName} image"/>
            <p>{productName}</p>
            <h2>{productPrice}</h2>
            </article>
    );
}

export default Product;
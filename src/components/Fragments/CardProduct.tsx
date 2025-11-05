import Button from "../Elements/Button"

function CardProduct(props) {
    const {children} = props
    return (
        <div className="max-w-sm bg-gray-800 rounded-lg shadow">
            {children}
        </div>
    )
}

const Header = (props) => {
    const {image} = props
    return (
        <a href="">
            <img src={image} alt="" className="rounded-t-lg h-70 w-full object-cover object-center"/>
        </a>
    )
}

const Body = (props) => {
    const {children, title} = props
    return (
        <div className="px-5 pb-5">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-white">
                    {title}
                </h5>
                <p className="text-xs text-white">
                    {children}
                </p>
            </a>
        </div>
    )
}

const Footer = (props) => {
    const {price} = props
    return (
        <div className="flex flex-col justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">{price}</span>
            <Button className='bg-slate-500 text-white w-full'>
                Add to Cart
            </Button>
        </div>
    )
}

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer

export default CardProduct
function PromoImg(props) {
    return (
       
    <section className="mb-2 sm:hidden">
    <a>
        <img src={props.src} alt={props.alt}></img>
    </a>
    </section>
    )
}

export default PromoImg;
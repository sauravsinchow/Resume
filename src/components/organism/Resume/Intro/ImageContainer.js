function ImageContainer(props){

    return (
        <div className="image-container">
            <img src={props.img.url} alt='' />
            <div className="name">
                <h1 id="name1">{props.intro.name}</h1>
                <p>{props.intro.role}</p>
            </div>
        </div>
    )

}

export default ImageContainer;
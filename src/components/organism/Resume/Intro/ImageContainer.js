import { useSelector } from "react-redux";

function ImageContainer(){

    const introData = useSelector(state => state.intro);
    const imageData = useSelector(state => state.img);

    return (
        <div className="image-container">
            <img src={imageData.url} alt='' />
            <div className="name">
                <h1 id="name1">{introData.name}</h1>
                <p>{introData.role}</p>
            </div>
        </div>
    )

}

export default ImageContainer;
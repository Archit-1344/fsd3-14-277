const Pen = (props) => {
    const {picurl , company , price} = props.pen ;
    return (
        <div>
            <img src={picurl} alt={company} />
            <h1>{company}</h1>
            <h2>Price: {price}</h2>
        </div>
    ) ;
} ;

export default Pen ;
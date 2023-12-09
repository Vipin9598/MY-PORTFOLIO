function button(props){
    return (
        <button className="btn-pink   rounded-md " disabled={props.loading}>
            <span className="text-xl btn-text">{props.data}</span>
        </button>
    )
}
export default button
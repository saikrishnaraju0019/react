function ButtonComponent(prop){
    const {text,background="white"}=prop;
    return(
        <div>
        <button style={{color:"black",background:background}}>{text}</button>
</div>
    )
}
export default ButtonComponent;
const Title = (props)=>{
    const {description, color}=props;
    return(<h1 style={{color:color}}>{description}</h1>)
}
export default Title;
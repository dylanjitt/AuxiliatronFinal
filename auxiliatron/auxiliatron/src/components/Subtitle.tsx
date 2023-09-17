const SubTitle = (props)=>{
    const {setCont}=props
    const reset = () => {
        setCont(0)
    }

    return(
    <>
        <h2>Hola uwu</h2>
        <button onClick={reset}>Reset</button>
    </>
    )
}
export default SubTitle

const Display = (props:any)=>{
  const {text} = props

  return(
    <div style={{width:400,height:100,display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#f7f8f9',borderWidth:1,borderColor:'#000',margin:10,borderRadius:10}}>
      <h1 style={{fontSize:30,fontWeight:'bold',color:'#000'}}>{text}</h1>
    </div>
  )
}

export default Display
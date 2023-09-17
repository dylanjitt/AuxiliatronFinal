import React from "react";

const namePoke = 'pikachu'
export default function PokeCard(){
  return(
    <div style={{width: 300,height:500,borderWidth:1,borderColor:'#fff',alignItems:'center',justifyContent:'center',display:'flex',flexDirection:'column'}}>
      <h1 style={{fontSize:30,fontWeight:'bold'}}>{namePoke}</h1>
      <img  style={{width:'100%',height:'200',backgroundColor:'#000'}}/>
      
    </div>
  )
}
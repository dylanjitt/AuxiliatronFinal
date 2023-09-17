import { useState } from "react";

import "./calcStyles.css"

const Calculadora = () => {

  const [data, setData] = useState<string>("")
  const numfloats: JSX.Element[] = [];
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ".", "-"].forEach(item => {
    numfloats.push(
      <button onClick={(e) => {
        setData(data + e.currentTarget.value)
      }}
        value={item}
        key={item}>
        {item}
      </button>
    )
  })


  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginLeft: 100 }}>

      <div style={{ padding: 30, backgroundColor: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 10 }}>
        <div style={{ width: 400, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f7f8f9', borderWidth: 1, borderColor: '#000', margin: 10, borderRadius: 10 }}>
          <article title='result'style={{ fontSize: 30, fontWeight: 'bold', color: '#000' }}>{data}</article>
        </div>
        <div style={{ width: 400 }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div className="digits flex">{numfloats}</div>
            <div className="operations subgrid">
              <button onClick={() => setData(data.substring(0, data.length - 1))} value={"<="}>{"<"}</button>
              <button onClick={() => setData("")} value={"C"}>C</button>
              <button onClick={e => setData(data + e.currentTarget.value)} value={"+"}>+</button>
              <button onClick={() => {
                try {
                  setData(
                    String(eval(data)).length > 3 &&
                      String(eval(data)).includes(".") ?
                      String(eval(data).toFixed(4)) :
                      String(eval(data))
                  )
                }
                catch (err) {
                  console.log(err)
                }
              }} value={"="}>=</button>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Calculadora
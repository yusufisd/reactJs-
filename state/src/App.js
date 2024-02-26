import {useState} from "react";

function App() {
  const [sayac, setSayac] = useState(0);
  const [alert, setAlert] = useState("");
  const deneme = (type) => {
    let lastVal = sayac;
    if(type == 0){
      lastVal -= 1;
    }else{
      lastVal += 1;
    }

    if(lastVal < 0){
      setAlert("sayaç 0'dan küçük değer olamaz.")
    }else{
      setSayac(lastVal)
      setAlert("")
    }

  }
  return (
    <div className="items-center mt-40 flex flex-col ml-20">
        <h1 className="flex mb-10 text-3xl">SAYAÇ</h1>
        <div className="flex flex-row gap-4 items-center">
          <button onClick={() => deneme(0) } className="border p-2 bg-black text-white rounded-lg">Azalt (-)</button>
          <h4 className="text-4xl border px-8 py-2 rounded-lg">{sayac}</h4>
          <button onClick={() => deneme(1)} className="border p-2 bg-black text-white rounded-lg">Arttır (+)</button>
        </div>
        <p>{alert}</p>
    </div>
  );
}

export default App;

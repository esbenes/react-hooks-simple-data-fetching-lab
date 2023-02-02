import React from 'react';
import { useEffect, useState } from 'react';

function App () {
const [data, setData] = useState([]);

useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random").then(res => res.json())
    .then((data) => {
        setData(data.message);
    });
}, []);
return (<>
{data.length<1 ? <p>Loading...</p> : <img alt='A Random Dog'
src={data}></img>}
</>

);
}
export default App;
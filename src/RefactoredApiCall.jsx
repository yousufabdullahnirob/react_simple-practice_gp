import {useEffect, useState} from 'react'

export default function ApiCallWithUseEffect() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);
  return (
    <div>
        {data.map(item => (
            <div key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.body}</p>
            </div>
        ))}
    </div>
  )
}

import './App.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function App() {
    const url =
        'https://api.unsplash.com/photos/random?client_id=X9T6Nn9PKeXkpwjk9c1lLLyuLqtdzpVUlOXaUIIagrA&count=30';
    const [images, setImages] = useState([]);
    const getImages = () => {
        Axios.get(url).then((res) => {
            setImages(res.data);
        });
    };
    useEffect(() => {
        getImages();
    }, []);

    if (!images) {
        return <h1>Loading</h1>;
    }
    return (
        <div className='App'>
            {images.map((image) => {
                return (
                    <LazyLoadImage
                        effect='blur'
                        src={image.urls.regular}
                        alt={image.id}
                        key={image.id}
                        height='500px'
                        weight='400px'
                        placeholderSrc={process.env.PUBLIC_URL + '/logo192.png'}
                    />
                );
            })}
        </div>
    );
}

export default App;

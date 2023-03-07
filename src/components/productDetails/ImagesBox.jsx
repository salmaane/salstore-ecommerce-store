import {useState} from 'react';
import "../../styles/imagesBox.css";

function ImagesBox({image}) {

    const [selectedImage,setSelectedImage] = useState(image.smallImageUrl);
    
    const thumbs = [    
        image.smallImageUrl,
        "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0",
        "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=fff&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0",
        "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0",
    ];
    
    function handleImageChange(thumb) {
        setSelectedImage(thumb);
    }

  return (
    <div className='imageBox-container'>
        <img src={selectedImage} alt="" className='large-image'/>
        <div className='thumbs-container'>
            {thumbs.map( (thumb,i) => (
                <img 
                    src={thumb} 
                    alt="" 
                    key={i} 
                    className={selectedImage===thumb 
                        ? "thumb-image active" : "thumb-image"
                    }
                    onClick={()=>handleImageChange(thumb)}
                />
            ))}
        </div>
    </div>
  )
}



export default ImagesBox
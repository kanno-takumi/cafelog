import cafecard from '../../styles/cafecard.module.css'
import Image from 'next/image'
import {getImagePaths} from '../../firebase/firebase'
export default function CafeImage(props){
    const imageUrl = props.imageUrl
    return(
        <div className={cafecard.imagebox}>
            <Image src={imageUrl} width={210} height={210} className={cafecard.imageradius}></Image>
        </div>
    )
}
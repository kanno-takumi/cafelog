import cafecard from '../../styles/cafecard.module.css'
import Image from 'next/image'
import {getImagePaths} from '../../firebase/firebase'
export default function CafeImage(props){
    const imageUrl = props.imageUrl
    return(
        <div className={cafecard.imageboxsize}>
            <Image src={imageUrl} width={210} height={210} ></Image>
        </div>
    )
}
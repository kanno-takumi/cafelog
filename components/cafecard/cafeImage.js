import cafecard from '../../styles/cafecard.module.css'
import Image from 'next/image'
import {getImagePaths} from '../../firebase/firebase'
export default function cafeImage(props){
    const fileName = props.fileName
    const imagePaths = getImagePaths()
    return(
        <div className={cafecard.imageboxsize}>
            <Image src={imagePaths} width={210} height={210} ></Image>
        </div>
    )
}
//要素として写真、文章を取り入れる。
import cardstyle from '../../styles/cafecard.module.css'
import CafeImage from './cafeImage'
import CafeText from './cafeText'

export default function cafecard(){
    return(
        <div className={cardstyle.cardsize}>
            <CafeImage />
            <CafeText />
        </div>
    )
}
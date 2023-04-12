import cafeButton from '../../styles/cafeAddButton.module.css'
import modalStyles from '../../styles/popup/modal.module.css'
import React, {useState} from 'react' 
import ModalContent from './modalContent'

export default function Button(){

    const [modal , openModal] = useState(false);
    // const onModal=(isOpen)=>{
    //     openModal(isOpen);
    // }
    return(
        <>
                <div className={`  ${cafeButton.btnmod} ${cafeButton.btnborder} ${cafeButton.btnlarge} ${cafeButton.btnround}`}
                onClick={()=>openModal(true)}>
                    カフェを追加
                </div>

            {modal && (
            <div>
                <div className={modalStyles.isOpen}>
	                <div className={modalStyles.window}>
                        <ModalContent propsopenModal={(boolean)=>{openModal(boolean)}}/>
                    <div className={modalStyles.close}//×の部分 
                        onClick={()=>{openModal(false)}}
                    >×</div>
                        
                    </div>
                </div>
            </div>
            )}
            
            {console.log(modal)}
        </>
    )
}
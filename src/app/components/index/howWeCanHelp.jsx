import styles from './index.module.css';
import ImageButton from '../reuseable/image-buttons/imageButton';

export default function HowWeCanHelp(){

    return(
        <>

        
            <div className="bg-[#1C4F70] h-[290px] md:h-[354px]">
    
                <div className='ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px]'>
    
                    <h2 className="text-center text-white pt-[35px]">How we can help</h2>
    
                </div>
    
            </div>



            <div className='ms-[3vw] me-[3vw] sm:ms-[5vw] sm:me-[5vw] xl:ms-[162px] xl:me-[162px] relative'>
    
                <div className='relative flex justify-center'>
        
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-[25px] relative top-[-160px]'>
        
                        <div className='flex justify-end'>
    
                            <ImageButton
                                imageSource={"/images/hwch-1.png"}
                                title={'Number 1'}
                                content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                            />
        
                        </div>

        
                        <div className='flex justify-start'>

                            <ImageButton
                                imageSource={"/images/hwch-two.png"}
                                title={'Number 2'}
                                content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                            />

                        </div>
        

                        <div className='flex justify-end'>

                            <ImageButton
                                imageSource={"/images/hwch-three.png"}
                                title={'Number 3'}
                                content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                            />

                        </div>
    
    
                        <div className='flex justify-end'>

                            <ImageButton
                                imageSource={"/images/hwch-four.png"}
                                title={'Number 4'}
                                content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                            />

                        </div>
    
                    </div>
        
                </div>
    
            </div>

        </>
    )
}
import './Page.css';

import Carousel from '../components/Carousel';


const Page = () => {
    return (
        <div className='Page'>
            <div  style={{margin: "10px"}}>
                <Carousel></Carousel>
            </div>
        </div>
    )
}

export default Page;
import React from 'react'
import loader from '../assets/images/loader.gif'
import flightLoader from '../assets/images/Flight_Loader.gif'

const LoadingImg = ({ isFlight }) => (
    <div className='page-preloader-wrapper'>
        {isFlight ? <img src={flightLoader} alt='Loader' className='flight-page-preloader' /> : <img src={loader} alt='Loader' className='page-preloader' />}
    </div>
)


export default LoadingImg
import React from 'react';
import InfoCard from './InfoCard';
import clock from '../Assets/icons/clock.svg'
import marker from '../Assets/icons/marker.svg'
import phone from '../Assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5'>
            <InfoCard cardTitle="আমাদের স্কুল শুরু হওয়ার সময়ঃ সকাল ৮ঃ৩০ মিনিট" bgClass="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>
            <InfoCard cardTitle="আমাদের অবস্থান মৃজাপুর,তালা,সাতক্ষীরা" bgClass="bg-accent" img={marker}></InfoCard>
            <InfoCard cardTitle="যোগাযোগঃ ০১৭৮৫৮৭১৯৩২ অথবা ০১৭৮৮৮৭১৯৩২" bgClass="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCard>
        </div>
    );
};

export default Info;
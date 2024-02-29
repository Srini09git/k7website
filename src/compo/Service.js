import React from 'react'
import front from '../assets/frontend k7.jpg'
import { ServiceHero } from './ServiceHero';
import uiux from '../assets/ui k7.jpg'
import backend from '../assets/backend k7.jpg'
import apiz from '../assets/Api k7.jpg'
import ServiceSection from './ServiceSection';

export const Service = () => {
    return (
        <div className="pt-20">
            <section className="bg-white  max-w-[1240px] mx-auto">

                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
                        Our Service
                    </h1>

                    <section className="mt-8 mr-3 space-y-8 lg:mt-12">
                        <ServiceSection
                            title="Front-End "
                            subtitle="Our front-end professionals build secure and user-friendly applications delivering high-end solutions to enhance business prospects"
                            imageSrc={front}
                        />

                        <ServiceSection
                            title="Back-End "
                            subtitle="We have skilled backend professionals creating tailor-made solutions for business for your business and have many years of experience in offering feature-rich and enhanced user experience."
                            imageSrc={backend}
                        />

                        <ServiceSection
                            title="API "
                            subtitle="Our professionals help in powering enhanced business outcomes with premium database development with our experienced database design and development experts"
                            imageSrc={apiz}
                        />

                        <ServiceSection
                            title="UI/UX"
                            subtitle="Our experts are specialized in producing smooth UI/UX interface design offering enhanced user experience by incorporating streamlined projects for better results."
                            imageSrc={uiux}
                        />
                    </section>
                </div>
            </section>
        </div>
    )
}

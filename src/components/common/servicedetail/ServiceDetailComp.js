import React from 'react'
import { Link } from 'react-router-dom'
import PackageDetail from './PackageDetail'

function ServiceDetailComp() {
    return (
        <div className='row my-4'>
            <div className='col-lg-8'>
                heelo
            </div>
            <div className='col-lg-4'>
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Basic</button>
                        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Standard</button>
                        <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Premium</button>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <PackageDetail data={{
                            tittle: "Basic",
                            price: "$ 20.00",
                            description: `Basic The Lorem Ipsum text used today can be tracked down to the printing press industry in the 16th century. An unknown printer used a scrambled version of Cicero's philosophical book "De Finibus Bonorum et Malorum", written in 45 BC, to create filler text" `
                        }} /></div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <PackageDetail data={{
                            tittle: "Standard",
                            price: "$ 30.00",
                            description: `Standard The Lorem Ipsum text used today can be tracked down to the printing press industry in the 16th century. An unknown printer used a scrambled version of Cicero's philosophical book "De Finibus Bonorum et Malorum", written in 45 BC, to create filler text" `
                        }} />
                    </div>
                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                        <PackageDetail data={{
                            tittle: "Premium",
                            price: "$ 40.00",
                            description: `Premium Basic The Lorem Ipsum text used today can be tracked down to the printing press industry in the 16th century. An unknown printer used a scrambled version of Cicero's philosophical book "De Finibus Bonorum et Malorum", written in 45 BC, to create filler text" `
                        }} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ServiceDetailComp
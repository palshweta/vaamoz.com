import React from 'react';
import Cards from './Cards';

const Plan = () => {
    return (
        <div>
            <div className="flex h-1/2 w-1/2 px-20 py-20">
                <div className="text-[#0084ff] text-lg font-bold">
                    <p>PRICING PLAN</p>
                    <div className="text-2xl text-black">
                        <p>Choose The Right Plan</p>
                    </div>
                    <div className="text-[#505b6d] text-base font-normal">
                        <p>Whether you want to go out or shop online, we have curated the perfect membership which will cater to all your needs.  Choose a plan that suits your needs and let the magic begin. We highly recommend the one year plan if you are looking for maximum savings.</p>
                    </div>
                </div>
            </div>
            {/* <div className="flex border-red-500 border px-20 py-20"> */}

                {/* <Cards /> */}
            {/* </div> */}
        </div>
    );
};

export default Plan;

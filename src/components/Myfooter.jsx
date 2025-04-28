import React from 'react';
import {resourcesLinks,platformLinks,communityLinks} from '../constants';

function Myfooter() {
    return (
        <footer className='mt-20 border-t py-10 border-neutral-700'>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
                    {/* Resources */}
                    <div className='mt-5'>
                        <h3 className='text-md  font-semibold mb-4'>Resources</h3>
                        <ul className='space-y-2'>
                                {resourcesLinks.map((item,index)=>(
                                    <li key={index} className=''>
                                        <a href={item.href}  className='text-neutral-300 hover:text-white text-sm'> {item.text} </a>
                                    </li>
                                ))}
                        </ul>
                    </div>

                    {/* Platforms */}
                    <div className='mt-5'>
                        <h3 className='text-md  font-semibold mb-4'>Platform</h3>
                        <ul className='space-y-2'>
                                {platformLinks.map((item,index)=>(
                                    <li key={index} className=''>
                                        <a href={item.href}  className='text-neutral-300 hover:text-white text-sm'> {item.text} </a>
                                    </li>
                                ))}
                        </ul>
                    </div>

                    {/* Community */}
                    <div className='mt-5'>
                        <h3 className='text-md  font-semibold mb-4'>Community</h3>
                        <ul className='space-y-2'>
                                {communityLinks.map((item,index)=>(
                                    <li key={index} className=''>
                                        <a href={item.href}  className='text-neutral-300 hover:text-white text-sm'> {item.text} </a>
                                    </li>
                                ))}
                        </ul>
                    </div>

                </div>
        </footer>
    )
}

export default Myfooter

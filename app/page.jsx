import React from 'react'

import Feed from '@components/Feed'

const Home = () => {
    return (
        <section className='w-full flex-center flex-col'>
            <h1 className=' head_text text-center'>Discover and Share
                <br className='max-md:hidden' />
                <span className='orange_gradient text-center'>AI powered prompts</span>
            </h1>
            <p className='desc text-center'>
                Proomtopia is an open source project that uses GPT-4 to generate writing prompts.
            </p>
            <Feed />
        </section>
    )
}

export default Home
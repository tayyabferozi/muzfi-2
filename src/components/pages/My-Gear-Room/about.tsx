import { useState } from 'react';

export default function About() {
  const [isExpandedState, setIsExpandedState] = useState(false);

  return (
    <section className='mt-4'>
      <p className='text-lg font-semibold text-black'>About us</p>
      <div className='mt-3 text-base font-normal'>
        {isExpandedState ? (
          <>
            {text}
            {text.length > 220 && (
              <span
                className='cursor-pointer text-accentYellow-500'
                onClick={() => setIsExpandedState(false)}
              >
                {' '}
                Read less
              </span>
            )}
          </>
        ) : (
          <>
            {text.slice(0, 220)}
            {text.length > 220 && (
              <>
                ...{' '}
                <span
                  className='cursor-pointer text-accentYellow-500'
                  onClick={() => setIsExpandedState(true)}
                >
                  Read more
                </span>
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
}

const text =
  "Hi folks I'm Matthew,  matt just turned 18 started when I was 16- 2020 I'm a guitar, banjo, steel guitar and mandolin player small collector instrument enthusiast mostly. Hi folks I'm Matthew, matt just turned 18 started when I was 16- 2020 I'm a guitar, banjo, steel guitar and mandolin player small collector instrument enthusiast mostly. Hi folks I'm Matthew, matt just turned 18 started when I was 16- 2020 I'm a guitar, banjo, steel guitar and mandolin player small collector instrument enthusiast mostly.";

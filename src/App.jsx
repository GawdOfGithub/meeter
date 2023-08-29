import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import p4 from './p4.jpg';
import Page1 from '../Page1';
import Page2 from '../Page2';
// import Page3 from '../Page3';
const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}${name}${wrap ? ')' : ''}`;

function App() {
  const parallax = useRef();

  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <Parallax ref={parallax} pages={3}>
        {/* Common Background Image */}
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url(p4, true),
            backgroundSize: 'cover',
            zIndex: -1,
          }}
        />

        {/* Page 1 */}
        <ParallaxLayer offset={0} speed={1.5} style={{ height: '100vh' }}>
          <Page1 />
        </ParallaxLayer>

        { /* Page 2 */}
        <ParallaxLayer offset={1} speed={1.5} style={{ height: '100vh' }}>
          <Page2 />
        </ParallaxLayer>

    
         <ParallaxLayer offset={5} speed={1} style={{ height: '200vh' }}>
          <Page2 />
        </ParallaxLayer> 

        {/* Page 3 */}
        {/* <ParallaxLayer offset={5} speed={1} style={{ height: '500vh' }}>
          <Page3 />
        </ParallaxLayer> */}
      </Parallax>
    </div>
  );
}

export default App;

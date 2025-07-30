// App.js

import { useEffect, useRef, useState } from "react";
import Menu from "./components/Menu";
import "./App.css";
import SplitText from  "../reactbits/SplitText/SplitText.jsx";
import TextType from '../reactbits2/TextType/TextType.jsx';
import ShinyText from '../reactbits3/ShinyText/ShinyText.jsx';

import GlareHover from '../reactbits/GlareHover/GlareHover';// this also works

import TargetCursor from '../reactbits/TargetCursor/TargetCursor';
import Magnet from '../reactbits/Magnet/Magnet'

import AnimatedList from '../reactbits/AnimatedList/AnimatedList'

import ScrollStack, { ScrollStackItem } from '../reactbits/ScrollStack/ScrollStack'

import Lightning from '../reactbits/Lightning/Lightning';











// 2 function App() is not possible
const handleAnimationComplete = () => {
    console.log('All letters have animated!');
};

function App() {
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [lineWidth, setLineWidth] = useState(5);
    const [lineColor, setLineColor] = useState("black");
    const [lineOpacity, setLineOpacity] = useState(0.1);

    // Initialization when the component
    // mounts for the first time
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.globalAlpha = lineOpacity;
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = lineWidth;
        ctxRef.current = ctx;
    }, [lineColor, lineOpacity, lineWidth]);

    // Function for starting the drawing
    const startDrawing = (e) => {
        ctxRef.current.beginPath();
        ctxRef.current.moveTo(
            e.nativeEvent.offsetX,
            e.nativeEvent.offsetY
        );
        setIsDrawing(true);
    };

    // Function for ending the drawing
    const endDrawing = () => {
        ctxRef.current.closePath();
        setIsDrawing(false);
    };

    const draw = (e) => {
        if (!isDrawing) {
            return;
        }
        ctxRef.current.lineTo(
            e.nativeEvent.offsetX,
            e.nativeEvent.offsetY
        );

        ctxRef.current.stroke();
    };

    return (
        <div className="App" style={{ width: '100%', height: '600px', position: 'relative' }}>
            <Lightning
                hue={220}
                xOffset={0}
                speed={10} // works
                intensity={1}
                size={1} // 1 is best
            />


            <SplitText
                text="Hello, GSAP!   i am gokul"
                className="text-2xl font-semibold text-center"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
            />


            <TextType
                text={["Text typing effect", "for your websites", "Happy coding!"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
            />




            <ShinyText text="Just some shiny text!  gokul" disabled={false} speed={3} className='custom-class' />



            <Magnet padding={80} disabled={false} magnetStrength={1}>
                <p>Star React Bits is best </p>
                <button> magnetic button </button>
                {/*magnetStrength=Controls the strength of the pull; higher values reduce movement, lower values increase it.*/}

            </Magnet>




            <ScrollStack scaleDuration={0.5} rotationAmount={5}>
                <ScrollStackItem>
                    <h2>Card 1</h2>
                    <p>This is the first card in the stack</p>
                </ScrollStackItem>
                <ScrollStackItem>
                    <h2>Card 2</h2>
                    <p>This is the second card in the stack</p>
                </ScrollStackItem>
                <ScrollStackItem>
                    <h2>Card 3</h2>
                    <p>This is the third card in the stack</p>
                </ScrollStackItem>
            </ScrollStack>










            <div className={"new"} style={{ height: '600px', position: 'relative' }}>
                <GlareHover
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={800}
                    playOnce={false}
                >
                    <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#333', margin: 0 }}>
                        Hover Me
                    </h2>
                </GlareHover>
            </div>





            {/*const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10'];*/}

            {/*<AnimatedList*/}
            {/*    items={items}*/}
            {/*    onItemSelect={(item, index) => console.log(item, index)}*/}
            {/*    showGradients={true}*/}
            {/*    enableArrowNavigation={true}*/}
            {/*    displayScrollbar={true}*/}
            {/*/>*/}











            {/*<TargetCursor*/}
            {/*    spinDuration={2}*/}
            {/*    hideDefaultCursor={true}*/}
            {/*/>*/}
            {/*<h1>Hover over the elements below</h1>*/}
            {/*<button className="cursor-target">Click me!</button>*/}
            {/*<div className="cursor-target">Hover target</div>*/}


            <h1>Paint App</h1>
            <div className="draw-area">
                <Menu
                    setLineColor={setLineColor}
                    setLineWidth={setLineWidth}
                    setLineOpacity={setLineOpacity}
                />
                <canvas
                    onMouseDown={startDrawing}
                    onMouseUp={endDrawing}
                    onMouseMove={draw}
                    ref={canvasRef}
                    width={`1280px`}
                    height={`720px`}
                />
            </div>
        </div>
    );
}

export default App;

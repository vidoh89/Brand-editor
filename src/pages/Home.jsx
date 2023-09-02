import {motion,AnimatePresence, color} from 'framer-motion';
import {useSnapshot} from 'valtio';
import state from '../store';
import { CustomButton } from '../components';

import{
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion';
const Home = () => {
    const snap = useSnapshot(state);
  return (
<AnimatePresence>
    {snap.intro &&(
        <motion.section className="home"{...slideAnimation('left')}>
            <motion.header{...slideAnimation('down')}>
                <img
                src='./threejs.png'
                alt="logo"
                className= "w-8 h-8 object-contain"
                />
            </motion.header>
            
             <motion.div className="home-content"{...headContainerAnimation}>
                <motion.div {...headTextAnimation}>
                    <h1 className ="head-text">
                        <span style={{color:snap.color}} >Create</span><br className="xl:block hidden"/> with imagination<span style={{color:snap.color}}>.</span>
                    </h1>
                </motion.div>
                 <motion.div {...headContentAnimation}
                             className="flex flex-col gap-5"
                   >
                    <p className="max-w-md font-normal text-gray-600 text-base">
                    Want to stand out from the crowd with your own unique style?<br/>
                    With our easy-to-use interface, you can upload and edit your logo with just a few clicks.<br/>
                    Whether it's for your business, team, or personal use, our app gives you the power to create your own custom shirts.
                    Try it out today <strong>
                    and see the magic of your imagination come to life!</strong>
                    </p>
                    <CustomButton
                    type="filled"
                    title="Customize It"
                    handleClick={() =>  state.intro =false}
                    customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                    />
                 </motion.div>
                 </motion.div>
            
        </motion.section>
    )}
</AnimatePresence>
  )
}

export default Home

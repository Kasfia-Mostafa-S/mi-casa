import {motion} from "framer-motion"


const Banner = () => {
  const titleAnimation = {
    hidden:{
      opacity:0,
    },
    show:{
      opacity:1,
      transition:{
        staggerChildren:0.2,
      }
    }
  }
  const titleAnimationChildren = {
    hidden:{
      y:-100
    },
    show:{
      y:0,
      transition:{
        ease:'easeInOut',
      }
    }
  }

  const imgAnimation = {
    hidden:{
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
    },
    show:{
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: {
        delay:2.2,
        duration:0.5,
        ease:'easeInOut',
      }
    }
  }

  const explainAnimation = {
    hidden:{
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    },
    show:{
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition:{
        delay:2.8,
        duration:0.5,
        ease:'easeInOut',
      }
    }
  }

  const circleAnimation = {
    hidden:{
      scale:0,
    },
    show:{
      scale:1,
      transition:{
        delay:3.2,
        duration:0.5,
        ease:'easeInOut',
      }
    }
  }
  return (
    <div className="h-screen px-12 relative overflow-hidden">
  

      <div className="absolute -top-12 -left-12 w-[300px] h-[300px] bg-[#50748c] blur-[120px]"/>
      <div className="absolute bottom-0 -right-12 w-[300px] h-[300px] bg-[#749CB6] blur-[100px]"/>
      <div>
        <motion.img src="https://i.ibb.co/0f0LQHs/circle.png" alt="art" className="w-[100px] absolute top-[60px] right-[440px] animate-spin-slow z-50" variants={circleAnimation} initial="hidden" animate="show" />
      </div>

      <section className="h-[calc(100vh-80px)] flex flex-col items-center relative">
        <div className="absolute left-[200px] top-[200px] h-[100px] flex items-center overflow-hidden">
          <motion.div
            variants={titleAnimation}
            initial="hidden"
            animate="show"
            className="flex text-8xl font-bold text-[#497898] drop-shadow-lg z-50">
            {Array.from("Mi-CASA").map((letter,idx) => (
              <motion.span key={idx} variants={titleAnimationChildren}>{letter}</motion.span>
            ))}
          </motion.div>
        </div>
        <div className="w-[800px] m-auto">
          <motion.img src="https://i.ibb.co/kmSpxh5/R-6.jpg" alt="art" className="object-cover" variants={imgAnimation} initial="hidden" animate="show" />
        </div>
        <motion.div className="bg-white p-4 w-[300px] absolute bottom-[150px] right-[200px] drop-shadow-lg z-50" variants={explainAnimation} initial="hidden" animate="show">
          <p className="text-[#35729c] text-sm text-justify">
          "Welcome to our real estate platform! Discover properties, connect with agents, and explore insights for seamless property transactions. Start your search today!"          </p>
        </motion.div>
      </section>
      
    
    </div>
  )
}

export default Banner
import { motion } from "framer-motion"
import Typewriter from "typewriter-effect";
import {BsArrowUpRight, BsChevronDown} from "react-icons/bs"

import me from "/img-2.png"


function Home() {

    const animations = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,
            },
        },
        button: {
            initial: {
                y: "-100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            },
        },
    };

    const scrollToNextSection = () => {
        const nextSection = document.querySelector("#about"); // Make sure your next section has an ID
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <>
            <div id="home">
                <section>
                    <div>
                        <motion.h1 {...animations.h1}>
                            Hi, I am <br /> Pinky Singh
                        </motion.h1>

                        <Typewriter
                            options={{
                                strings: ["A Software Developer"],
                                autoStart: true,
                                loop: true,
                                cursor: "",
                                wrapperClassName: "typewriterpara",
                            }}
                        />

                        <div>
                            <a href="mailto:pinkysingh1722@gmail.com">Hire Me</a>
                            <a href="#work">
                                Projects <BsArrowUpRight/>
                            </a>
                        </div>
                    </div>
                </section>
{/* second section */}
                <section>
                    <img src={me} alt="Pic" />
                </section>
                <BsChevronDown onClick={scrollToNextSection}/>
            </div>
        </>
    )
}

export default Home

import { useState } from "react"
import vg from "/contact.png"
import toast from "react-hot-toast"
import {motion} from 'framer-motion'
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

function Contact() {
    const [disableBtn, setDisableBtn] = useState(false);
    const [inputs, setInputs] = useState({name: "", email : "", message : ""})

    const submitHandler = async (e) => {
      e.preventDefault();
      setDisableBtn(true);
      try {
        await addDoc(collection(db, "contacts"), {
          name : inputs.name,
          email : inputs.email,
          message : inputs.message,
        });
        setInputs({ name: "", email: "", message: "" });
        toast.success("Message Sent");
        setDisableBtn(false);
      } catch (error) {
        toast.error("Error");
        console.log(error);
        setDisableBtn(false);
      }
    }

    const changeHandler = (e) => {
        setInputs({...inputs, [e.target.name] : e.target.value})

    }


    const animations = {
      form: {
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
        transition: {
          delay: 0.5,
        },
      },
    };
  return (
    <>
      <div id="contact">
        <section>
            <motion.form onSubmit={submitHandler} {...animations.form}>
                <h2>Contact Me</h2>
                <input type="text" name="name" value={inputs.name} onChange={changeHandler}  placeholder="Your Name" required />
                <input type="email" name="email" value={inputs.email} onChange={changeHandler}  placeholder="Your Email" required />
                <textarea  name="message" placeholder="Your Message" value={inputs.message} onChange={changeHandler}  required></textarea>
                <motion.button  type="submit" disabled={disableBtn}
            className={disableBtn ? "disableBtn" : ""} {...animations.button} >Send</motion.button>
            </motion.form>
        </section>
        <aside>
            <img src={vg} alt="graphic" />
        </aside>
      </div>
    </>
  )
}

export default Contact

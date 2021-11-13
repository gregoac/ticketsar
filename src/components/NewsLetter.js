import { useState } from "react";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc } from "firebase/firestore";
import { DarkContext } from "../context/DarkContext";
import { useContext } from "react";
// import { getAnalytics } from "firebase/analytics";


// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app"
const firebaseApp = initializeApp({
  apiKey: "AIzaSyDrG3Wi14ZxDr_3qU9eb5oSa340wLqwqvo",
  authDomain: "ticketsar-82108.firebaseapp.com",
  projectId: "ticketsar-82108"
});

const db = getFirestore();

// const analytics = getAnalytics(app);

const NewsLetter = () => {

    const [isButtonPress, setIsButtonPress] = useState(false);
    const [emailSent, setEmailSent] = useState(false);

    function buttonPress() {
        setIsButtonPress(true);
    }

    function notButtonPress() {
        setIsButtonPress(false);
    }

    const {isDark} = useContext(DarkContext);

    async function handleFinishPurchase(){

        var email = document.getElementById("email");

        const newsletterCollection = collection(db, "newsletter");
        
        try {
            const docRef = await addDoc(newsletterCollection, {
                    email: email.value
            })
            console.log("Document written with ID: ", docRef.id);
            if(docRef.id){
                setEmailSent(true);
            }
          } catch (e) {
            console.error("Error adding document: ", e);
          }
      };


    return (
        <>
            {emailSent ? 
                <>
                <div className="newsletter_container_sent width-90" >
                <h5>Gracias por tu suscripción!</h5>
                </div>
                </>
                :
                <>
                <div className={`newsletter_container ${!isDark ? "newsletter_container_white" : ''}`}>
                <h2 className="newsletter_title">Suscribite al newsletter</h2>
                <form id="form-newsletter"
                onSubmit = {(e) => e.preventDefault()}>
                    <input id="email" required className={`newsletter_input ${isDark ? 'input-black' : 'input-white'}`} type="text" placeholder="Ingresa tu email" />
                    <button 
                    onMouseEnter={() => buttonPress()}
                    onMouseLeave={() => notButtonPress()}
                    onTouchStart={() => buttonPress()}
                    onTouchEnd={() => notButtonPress()}
                    className={`newsletter_input ${isButtonPress ? 'newsletter_container_button_hover' : ''}`}
                    type="submit" onClick={() => handleFinishPurchase()}>Suscribirse</button>
                </form>
                </div>
                </>
                }
            
        </>
    );
}

export default NewsLetter;
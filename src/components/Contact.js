import React, { useState } from 'react'
import './Contact.css'
import GoogleMaps from './GoogleMaps'
import { db } from '../firebase'

function Contact() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setmessage] = useState("")
    const [loader, setLoader] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        setLoader(true)

        db.collection("contacts").add({
            name: name,
            email: email,
            message: message,
        }).then(() => {
            alert('Message has been submitted')
            setLoader(false)
        }).catch((error) => {
            alert(error.message)
            setLoader(false)
        });
        setName("");
        setEmail("");
        setmessage("");
    }
    return (
        <div className="contact">
            <div class="map">
                <GoogleMaps />
            </div>
            <div class="contact-us">
                <form className="form" onSubmit={handleSubmit}>
                    <h1>Contact</h1>
                    <span>Interested working with me?</span>

                    <label>Name</label>
                    <input placeholder="name" value={name} onChange={e => setName(e.target.value)} />

                    <label>Email</label>
                    <input placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />

                    <label>Message</label>
                    <textarea placeholder="message" value={message} onChange={e => setmessage(e.target.value)}></textarea>

                    <button type="submit" style={{ background: loader ? "#ccc" : "rgb(2,2,110)" }}>Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Contact

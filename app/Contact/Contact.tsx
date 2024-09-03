import "./Contact.css"
import "../globals.css"
import {ReactElement, useRef, useState} from "react";
import {EmailService} from "@/app/EmailService";
import emailjs from "emailjs-com";
function Contact() {
    const form = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        EmailService(form.current);
    }

    return (
        <main id={"Contact"} className={"mt-3 mb-20 Contact"} style={{height: "calc(96vh - 160px)", overflowY: "auto", margin: "16px auto"}}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
            <div>
                <h1 className={"text-center text-2xl Contacts mb-1"}>Contact</h1>
                <h1 className={"text-center mt-1"}>Email: <a
                    href='ma&#105;lto&#58;&#100;&#101;&#118;%7&#48;%61%7&#52;&#101;l&#52;5&#50;8%&#52;&#48;&#103;&#109;&#97;il&#37;2E&#99;&#37;6Fm'>
                    d&#101;vpa&#116;el4528&#64;&#103;mail&#46;com</a>
                </h1>
                <h1 className={"text-center mt-1"}>Phone Number: <a
                    href={"tel:848-467-2044"}>&#56;&#52;&#56;&#45;&#52;&#54;&#55;&#45;&#50;&#48;&#52;&#52;</a></h1>&#13;
            </div>
            <div>
                <h1 className={"text-center text-2xl mt-3 Socials mb-1"}>Socials</h1>
                <div className={"flex flex-col Social"}>
                    <a href={"https://www.linkedin.com/in/dev-patel-7110072b7/"} className={"text-center mt-1"}
                       target="_blank">
                        <i className={"fab fa-linkedin mr-2"}/>
                        <button>
                            LinkedIn
                        </button>
                        <span className="wave"></span>
                    </a>
                    <a href={"https://github.com/devpatel2404"} target="_blank">
                        <i className={"fab fa-github mr-2"}/>
                        <button className={"text-center mt-1"}>
                            Github
                        </button>
                        <span className="wave"></span>
                    </a>
                    <a href={"https://www.instagram.com/devsp.4/"} target="_blank">
                        <i className={"fab fa-instagram mr-2"}/>
                        <button className={"text-center mt-1"}>
                            Instagram
                        </button>
                        <span className="wave"></span>
                    </a>
                    <a href={"https://discord.gg/Gje8nyBh"} target="_blank">
                        <i className={"fab fa-discord mr-2"}/>
                        <button className={"text-center mt-1"}>
                            Discord
                        </button>
                        <span className="wave"></span>
                    </a>
                </div>
            </div>
            <div>
                <h1 className={"text-center text-2xl mt-3 Form_Title"}>Connect with Me</h1>
                <p className={"form_Description"}>Feel free to reach out if you&apos;re interested with my work, have a
                    project in mind or simply want to chat</p>
                <form className={"Contact_Form"} onSubmit={onSubmit} ref={form}>
                    <label className={"Name_Title"}>Your Name</label>
                    <div className={"NameContainer flex justify-between"}>
                        <div>
                            <input type={"text"} className={"FirstNameInput"} name={"firstName"} minLength={1}/>
                            <p>First name</p>
                        </div>
                        <div>
                            <input type={"text"} className={"SecondNameInput"} name={"lastName"} minLength={1}/>
                            <p>Last name</p>
                        </div>
                    </div>
                    <div className={"InformationContainer flex justify-between"}>
                        <div>
                            <label className={"Phone_Title"}>Phone Number</label>
                            <input placeholder={"000-000-0000"} type={"tel"} className={"PhoneNumberInput"} minLength={10}
                                   name={"phone"} pattern={"[0-9]{3}-[0-9]{3}-[0-9]{4}"}/>
                        </div>
                        <div className={""}>
                            <label className={"Email_Title"}>Your E-mail Address</label>
                            <input type={"email"} className={"EmailInput"} name={"email"} minLength={8} />
                            <p>example@examplemail.com</p>
                        </div>
                    </div>
                    <div className={"MessageContainer"}>
                        <label className={"Contact_Description_Title"}>Message</label>
                        <textarea className={"Contact_Description"} rows={5} cols={30} draggable={"false"}
                                  minLength={20} name={"message"} />
                        <p className={"Contact_Requirement"}>Minimum of 20 characters</p>
                    </div>
                    <button type={"submit"} className={"Connect_Button"}>Contact Me</button>
                </form>
            </div>
        </main>
    );
}

export default Contact;
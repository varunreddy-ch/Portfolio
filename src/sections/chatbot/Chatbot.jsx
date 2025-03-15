import React, { useState } from 'react';
import chatbotStyles from "./Chatbot.module.css";
import ChatBot, { ChatBotProvider } from "react-chatbotify";
import axios from "axios";
axios.defaults.timeout = 10000;
import dotenv from 'dotenv';


const settings = {
    general: {
        PrimaryColor: '#D0F4EA',
        secondaryColor: '#C73E1D',
        fontFamily: "Rubik",
        showFooter: false,
    },
    header: {
	title: "Senti AI",
    },
};

const styles = {
    headerStyle: {
        background: '#C73E1D',
        color: '#ffffff',
        padding: '10px',
    },
    chatWindowStyle: {
        backgroundColor: '#f2f2f2',
    },
};

//const [history, setHistory] = useState([]);

const addr = process.env.AWS
const getResult = async (req) => {
        let output = axios.post(addr, {
            query: req,
        },)
        .then( (res)=> {
            console.log(res)



            console.log(res.data.reply);
            return res.data.reply;
        })
        .catch( (err)=> {
            window.console.log(err)
	    return err.message
            return "Sorry, I'm out of fuel."
        })
        return output;
    
}

const Chatbot = () => {
    const flow = {
        start: {
            //transition: {duration: 1000},
            message: "Hi there, This is Mini-programmer, How can I help you?",
            options: {items: ["Who is Varun?", "What are Varun's Skills?", "What are Varun's Projects?", "How can I contact Varun?" ], reusable:true},
            UserInput: true,
            path: "msg"
        },
        msg: {
            chatDisabled: true,
            //transition: {duration:1000},
            message: async(params) => {
                const msg = params.userInput;
                const output = getResult(msg);
                return output
            },
            chatDisabled: false,
            path:"msg"
        }
    }
    return (
        <div className={chatbotStyles.centerDiv}>
            <ChatBotProvider>
                <ChatBot
                    styles={styles}
                    settings={settings}
                    flow={flow}
                    //onSendMessage={handleUserInput}
                />
            </ChatBotProvider>
        </div>
    );
};

export default Chatbot;

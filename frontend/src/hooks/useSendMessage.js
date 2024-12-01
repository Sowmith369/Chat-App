import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";



const useSendMessage = () => {
    const [loading,setLoading] = useState(false);
    const {messages,setMessages,selectedConversation} = useConversation();
    console.log('Selected Conversation:', selectedConversation);

    const sendMessage = async (message) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/message/send/${selectedConversation._id}`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({message}),
            });
            if (!res.ok) {
                const errorText = await res.text();
                throw new Error(errorText || 'Failed to send message');
            }
            const data = await res.json();
            if(data.error) {
                throw new Error(data.error);
            }
            setMessages([...messages, data]);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    return {sendMessage, loading};
}

export default useSendMessage;

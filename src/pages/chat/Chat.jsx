import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../../App'
import FooterBar from '../../components/footer-bar/FooterBar'
import NavigationBar from '../../components/navigation-bar/NavigationBar'
import SideBar from '../../components/side-bar/SideBar'
import moment from 'moment';

export default function Chat() {

  const userContext = useContext(UserContext);
  const [chat, setchat] = useState([]);
  const [messageForm, setMessageForm] = useState({
    senderId: userContext.user.studentId,
    sender: userContext.user.name,
    group: userContext.group._id,
    message: ""
  });

  const fetchData = () => {
    axios.get(`http://localhost:3000/api/chats/group/${userContext.group._id}`)
    .then(res => {
      setchat(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }

  const submitMessage = (e) => {
    e.preventDefault();
    console.log(messageForm);
    axios.post(`http://localhost:3000/api/chats`, messageForm)
    .then(res => {
      console.log(res.data);
      fetchData();
      setMessageForm({ ...messageForm, message: "" });
    })
    .catch(err => {
      console.log(err);
    });
  }

  fetchData();

  useEffect(() => {
    console.log();
  }, []);

  return (
    <div>
        <NavigationBar />
        <div className="container mt-md-5 pb-md-5" style={{minHeight: '60vh'}}>
          <div className="row">
              <SideBar />
              <div className="col-md-9 ps-md-5">
                <h4 className="mb-3">Discussion</h4>
                {chat && (chat.senderId == userContext.user._id) ? chat.map(chat => (
                  <div className="row d-flex justify-content-start" key={chat.id}>
                    <div className="col-md-8 message-item mb-3">
                      <small>{chat.sender}</small>
                      <p>{chat.message}</p>
                      <span className="d-flex justify-content-end text-muted">
                        <small style={{fontSize: ".8rem"}}>{moment(chat.createdAt).format("YYYY-MM-DD HH:mm:ss")}</small>
                      </span>
                    </div>
                  </div>
                ))
                : chat.map(chat => (
                  <div className="row d-flex justify-content-end" key={chat.id}>
                    <div className="col-md-8 message-item-colored mb-3 text-white">
                      <small>{chat.sender}</small>
                      <p>{chat.message}</p>
                      <span className="d-flex justify-content-end text-white">
                        <small style={{fontSize: ".8rem"}}>{moment(chat.createdAt).format("YYYY-MM-DD HH:mm:ss")}</small>
                      </span>
                    </div>
                  </div>
                ))}
                
                <div className="row mt-3 border-top py-3">
                  <form onSubmit={submitMessage}>
                    <textarea onChange={(e) => {
                      setMessageForm({ ...messageForm, message: e.target.value });
                    }} name="message" className="col-md-12 form-control" placeholder="Type your message here..." value={messageForm.message}></textarea>
                    <button type="submit" className="btn btn-primary col-md-2 ml-md-auto mt-2">
                      <span className="me-2">Send</span>
                      <i className="fa fa-paper-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        <FooterBar />
    </div>
  )
}

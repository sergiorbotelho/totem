import React, { useState } from "react";
import './home.css'
import Button from "../../components/Button";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
export default function Home() {

  const [ticket, setTicket] = ('')
  const [ticketNormal, setTicketNormal] = useState([]);
  const [ticketPreferencial, setTicketPreferencial] = useState([]);
  const [ticketExame, setTicketExame] = useState([]);

  function handleTicketNormal() {
    let cont = 0;
    const newTicket = ticketNormal.push(cont++);
    console.log(newTicket);
    toast.success("Aguarde ser chamado.")
  }

  function handleTicketPreferencial() {
    let cont = 0;
    const newTicket = ticketPreferencial.push(cont++);
    console.log(newTicket);
    toast.success("Aguarde ser chamado.")
  }
  function handleTicketExame() {
    let cont = 0;
    const newTicket = ticketExame.push(cont++);
    console.log(newTicket);
    toast.success("Aguarde ser chamado.")
  }
  function handleTicket(){
    toast.success("Senha 000.")
  }

  return (
    <div className="container">
      <div className="container-ticket">
        <h1>Senha</h1>
        <span>000</span>
      </div>
      <div className="container-button">
        <Button data="Normal" onClick={(handleTicketNormal)} />
        <Button data="Preferecial" onClick={handleTicketPreferencial} />
        <Button data="Exame" onClick={handleTicketExame} />
      </div>
      <div className="btn-atendente">
        <Button data="Atendente" onClick={handleTicket} />
      </div>
      <footer className="footer">
        Direitos resevados ao <Link to="/sobre">Grupo 02</Link>
      </footer>

    </div>
  )
}


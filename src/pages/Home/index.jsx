import React, { useState, useEffect } from "react";
import axios from 'axios'
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input/Input";
import 'react-toastify/dist/ReactToastify.css';
import './home.css'

export default function Home() {

  const [ tickets, setTickets ] = useState([{ticket_pass: 1,}])
  const [ postTickets, setPostTickets ] = useState(0)
  const [ ticketName, setTicketName ] = useState('')
  const [ type, setType ] = useState('')
  const [ goPost, setGoPost ] = useState(false)
  const baseUrl = 'http://localhost:3000/api/ticket'

  useEffect( () => {
    getTickets()
  }, [])

  useEffect( () => {

    switch(tickets?.type){
      case 1:
        setType('Normal')
        break
      case 2:
        setType('Exame')
        break
      case 3:
        setType('Preferencial')
        break
      default:
        setType('')
      break
    }
  }, [tickets?.type])

  useEffect(() => {
    if(goPost){
      post()
      return setGoPost(false)
    }
  }, [goPost])

  // START AXIOS //

  const api = axios.create({ baseURL: baseUrl })

  const getTickets = async () => {
    const response = await api.get('')
    setTickets(response.data)
  }

  const post = async () => {
    await axios.post(baseUrl, {
      "name": ticketName.toString(),
      "type": postTickets,
    })
    .then(data => {
      console.log(data)
      getTickets()
      toast.success(`Ficha ${data?.data.ticket_pass}`)
    })
    .catch(error => console.log(error))
  }

  const nextTicket = async () => {
    axios.delete(baseUrl)
      .then(() => {
        getTickets()
      })
      .catch(error => console.log(error))
      .finally(() => !!tickets && toast.success('Próximo'))
  }

  // END AXIOS //

  function typeNum(typ){
    setPostTickets(typ)
    setGoPost(true)
    getTickets()
  }

  return (
    <div className="container">
      <div className="container-ticket">
        <h1>Senha</h1>
        <span className="ticket-num">
          { tickets?.ticket_pass || '000' }
        </span>
        <span className="type-name">
          { tickets?.name || '' }
        </span>
        <span className="type-name">
          { type }
        </span>
      </div>
      <Input
        placeholder='Digite seu nome'
        type='text'
        onChange={(e) => setTicketName(e.target.value)}
      />
      <div className="container-button">
        <Button
          data="Normal"
          onClick={() => typeNum(1)}
        />
        <Button
          data="Exame"
          onClick={() => typeNum(2)}
        />
        <Button
          data="Preferecial"
          onClick={() => typeNum(3)}
        />
      </div>
      <div className="btn-atendente">
        <Button
          data="Atendente"
          onClick={nextTicket}
        />
      </div>
      <footer className="footer">
        Direitos resevados ao <Link to="/sobre">Grupo 02</Link>
      </footer>

    </div>
  )
}


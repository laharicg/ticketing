import React from 'react'
import Ticketcard from './Ticketcard'
function DisplayOpenTickets({data,handleResolveChange , handleEditTicket}) {
 

    return (
        <div>
            <h2>UnResolved Tickets</h2>
            {data.filter((ticket) => ticket.status === "unresolved").length === 0 ? <h1>No tickets here</h1> : <div></div> }
            {data.filter((ticket) => ticket.status === "unresolved").map(ticket => <Ticketcard ticket ={ticket} handleResolveChange={handleResolveChange} key ={ticket.id} handleEditTicket ={handleEditTicket} /> )}
        </div>
    )
}

export default DisplayOpenTickets

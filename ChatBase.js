import React, { useState } from 'react';
import io from 'socket.io-client'

function Chat() {
  const [message, setMessage] = useState('');
  const socket = io.connect('http://localhost:8081')
  return (
      <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1, overflow: 'auto' }}>
        <h3>Mensagens</h3>
        {/* Aqui você pode mapear suas mensagens */}
      </div>
      <div style={{ flex: 2, display: 'flex', flexDirection: 'column' }}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ flex: 1 }}
        />
        <div style={{ overflow: 'auto' }}>
          <h3>Grupos</h3>
          {/* Aqui você pode mapear seus grupos */}
        </div>
      </div>
    </div>
  );
}

export default Chat;

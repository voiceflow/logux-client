import { CrossTabClient } from '../index.js'

let client = new CrossTabClient({
  subprotocol: '1.0.0',
  server: 'ws://localhost',
  userId: '10'
})

client.on('preadd', (action, meta) => {
  // THROWS Type 'number' is not assignable to type 'string'.
  action.type = 1
  // THROWS Type '1' is not assignable to type 'string | undefined'.
  meta.tab = 1
})

import { eventChannel, END } from "redux-saga"
import { baconListProtectedEventSource } from "./config"

export function friendRequestsChannel () {

  return eventChannel(emitter => {

    const eventHandler = (event) => {
      emitter(JSON.parse(event.data))
    }

    const source = baconListProtectedEventSource("/me/friend_requests/stream")
    source.onmessage = eventHandler

    return () => {
      source.close()
      emitter(END)
    }
  })
}

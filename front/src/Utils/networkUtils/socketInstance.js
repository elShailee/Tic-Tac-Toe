let ws = null;

const connect = (gameState, setGameState) => {
	if (!ws) {
		ws = new WebSocket('ws://localhost:4001');

		ws.onopen = () => {
			console.log('Websocket Connection Opened');
			ws.send(JSON.stringify({ action: 'sync', data: gameState }));
		};

		ws.onclose = () => {
			console.log('Websocket Connection closed');
			ws = null;
		};

		ws.onmessage = res => {
			try {
				let state = JSON.parse(res.data);
				if (state?.status === 202) {
					console.log(state?.data);
				} else {
					if (state.data) {
						state = state.data;
					}
					setGameState(state);
				}
			} catch {
				console.log('invalid response from socket server.');
			}
		};
	}
};

const disconnect = () => {
	ws?.close();
};

const send = ({ action, data }) => {
	ws?.send(JSON.stringify({ action, data }));
};

export default ws;
export const wsOperators = { connect, disconnect, send };

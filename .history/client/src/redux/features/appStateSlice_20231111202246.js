if (action.payload == null) {
     localStorage.removeItem("actkn");
} else {
     if (action.payload.token) localStorage.setItem("actkn", action.payload.token);
}
state.user = action.payload
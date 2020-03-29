const initialState = {
  conversation: null,
  loading: false,
  errors: null,
  conversations: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
}

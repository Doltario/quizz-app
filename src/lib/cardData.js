const card = [
  {
    isFlippedOnce: false,
    question: 'What is the redux store?',
    answer: 'The minimal representation of data in the app. A JavaScript object describing everything that can change in your app, including data, and UI changes.',
    fakeAnswers: [String],
    visible: true
  },
  {
    isFlippedOnce: false,
    question: 'What is an action?',
    answer: 'A JavaScript object describing a state change. A minimal representation of the state change.',
    fakeAnswers: [String],
    visible: true
  },
  {
    isFlippedOnce: false,
    question: 'What is a reducer?',
    answer: 'A pure function that takes the previous state, the action, and returns the next state.',
    fakeAnswers: [String],
  },
  {
    isFlippedOnce: false,
    question: 'What is an action creator?',
    answer: 'A function that returns an action',
    fakeAnswers: [String],
    visible: true
  },
  {
    isFlippedOnce: false,
    question: 'What is middleware?',
    answer: 'Code you can put between the framework receiving a request and the framework generating a response',
    fakeAnswers: [String],
    visible: true
  },
  {
    isFlippedOnce: false,
    question: 'What should the reducer do if it receives an action it doesn\'t understand?',
    answer: 'Return the state unchanged.',
    fakeAnswers: [String],
    visible: true
  },
  {
    isFlippedOnce: false,
    question: 'What should the reducer do if it receives a state of undefined?',
    answer: 'Return the initial state.',
    fakeAnswers: [String],
    visible: true
  },
  {
    isFlippedOnce: false,
    question: 'What are the arguments of createStore?',
    answer: 'reducer, [preloadedState], [enhancer]',
    fakeAnswers: [String],
    visible: true
  },
  {
    isFlippedOnce: false,
    question: 'What does createStore return?',
    answer: 'The store.',
    fakeAnswers: [String],
    visible: true
  },
  {
    isFlippedOnce: false,
    question: 'What are the 3 most important methods of the store?',
    answer: 'getState, dispatch, subscribe',
    fakeAnswers: [String],
    visible: true
  },
  {
    isFlippedOnce: false,
    question: 'What does getState do?',
    answer: 'Returns the state.',
    fakeAnswers: [String],
    visible: true
  },
  {
    isFlippedOnce: false,
    question: 'What does dispatch do?',
    answer: 'Dispatches an action.',
    fakeAnswers: [String],
    visible: true
  },
  {
    isFlippedOnce: false,
    question: 'What does subscribe do?',
    answer: 'Takes a callback that gets called anytime an action is dispatched.',
    fakeAnswers: [String],
    visible: true
  },
  {
    isFlippedOnce: false,
    question: 'What is the difference between splice and slice?',
    answer: 'splice mutates the array.',
    fakeAnswers: [String],
    visible: true
  },
  {
    isFlippedOnce: false,
    question: 'What does combineReducers do?',
    answer: 'Creates a single reducer from multiple reducers. It takes an object that maps from the part of the state to the reducer for that part of the state.',
    fakeAnswers: [String],
    visible: true
  },
  {
    isFlippedOnce: false,
    question: 'What property does an action need?',
    answer: 'Type',
    fakeAnswers: [String],
    visible: true
  },
  {
    isFlippedOnce: false,
    question: 'How do you use Redux middleware?',
    answer: 'Pass applyMiddleware as the enhancer to createStore.\n' +
      '  import {createStore, applyMiddleware} from \'redux\'\n' +
      'createStore(reducer, applyMiddleware(middleware1 [,middleware2, etc...]))',
    fakeAnswers: [String],
    visible: true
  },
  {
    isFlippedOnce: false,
    question: 'How can you apply multiple store enhancers to the redux store?',
    answer: 'Use compose()',
    fakeAnswers: [String],
    visible: true
  },
  {
    isFlippedOnce: false,
    question: 'What are the 3 main things you can import from redux?',
    answer: 'createStore, combineReducers, applyMiddleware',
    fakeAnswers: [String],
    visible: true
  },
  {
    isFlippedOnce: false,
    question: 'How do you add the store to the context with react-redux?',
    answer: 'Wrap the entire app with the Provider component and pass it the store prop.',
    fakeAnswers: [String],
    visible: true
  },
  {
    isFlippedOnce: false,
    question: 'How do you access the store with react-redux?',
    answer: 'Export a presentational component wrapped in connect. Example: export default connect()(PresentationalComponent);',
    fakeAnswers: [String],
    visible: true
  },
  {
    isFlippedOnce: false,
    question: 'What does connect return?',
    answer: 'A function that accepts a presentational component and returns a container component.',
    fakeAnswers: [String],
    visible: true
  },
  {
    isFlippedOnce: false,
    question: 'What is a container component?',
    answer: 'A component that is subscribed to the store.',
    fakeAnswers: [String],
    visible: true
  },
  {
    isFlippedOnce: false,
    question: 'What are the arguments to connect?',
    answer: 'mapStateToProps, and mapDispatchToProps',
    fakeAnswers: [String],
    visible: true
  },
  {
    isFlippedOnce: false,
    question: 'What mapStateToProps?',
    answer: 'A function that returns an object. The keys are the props, and the values are the values.',
    fakeAnswers: [String],
    visible: true
  },
  {
    isFlippedOnce: false,
    question: 'What are the arguments passed to mapStateToProps?',
    answer: 'state, props',
    fakeAnswers: [String],
    visible: true
  },
  {
    isFlippedOnce: false,
    question: 'What is mapDispatchToProps?',
    answer: 'A function that returns an object. The keys are the props, and the values are the values.',
    fakeAnswers: [String],
    visible: true
  },
];

export default card

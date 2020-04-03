const currentTabMap = {
  LESSONS: 'lessons',
  CARDS: 'cards'
};

const initialQuizzState = {
  currentTab: currentTabMap.LESSONS
};

const quizzReducer = (state = initialQuizzState, action) => {
  switch (action.type) {
    case 'TODO_ADD_TO_LIST':
      const newTodo = {
        value: action.value,
        strikethrough: false
      };
      return { ...state, list: [...state.list, newTodo] };
    default:
      return state
  }
};

export default quizzReducer

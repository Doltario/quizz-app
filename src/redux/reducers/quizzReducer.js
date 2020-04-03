const currentTabMap = {
  LESSONS: 'LESSONS',
  CARDS: 'CARDS'
}

const initialQuizzState = {
  currentTab: currentTabMap.LESSONS
};

const quizzReducer = (state = initialQuizzState, action) => {
  switch (action.type) {
    case 'SWITCH_TO_TAB':
      if (currentTabMap[action.tabName]) {
        return { ...state, currentTab: currentTabMap[action.tabName] }
      } else {
        // Unknown tab name
        return state
      }
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

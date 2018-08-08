export const test = (state = [], action) => {
    switch (action.type) {
      case 'SHOW_TEXT':
        return [
          ...action.data
        ]
      default:
        return state
    }
  }
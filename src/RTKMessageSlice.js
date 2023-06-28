import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 //colors generated
  projects: [{projectId: "1", projectName: "pn", projectBudgetItems: [{projectBudgetItemId: 1, projectItemDescription: "id", projectBudgetItemAmount: 100, projectItemAddedByUserId: 1, projectBudgetItemAddedDate: 1}]}],
};

//A function to generate random RGB values
const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

//State slice
export const messagesSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setMessages: (state, action) => {
      //state.value = [...state.value, randomRgb()];
      state.value = [...state.value, action.payload];
    },
    deleteProjectBudgetItem: (state, action) => {
      //state.value = [...state.value, randomRgb()];
      //find project index by projectId
      //action.payload.projectId
      const projectIndex = state.projects.findIndex(project => project.projectId == 1);
      console.log(projectIndex + " " + JSON.stringify(state)); 
      const projectBudgetItems = state.projects[projectIndex].projectBudgetItems;
      //remove item from projectBudgetItemsList
      //state.projects.projectBudgetItems
      const itemIndex = projectBudgetItems.findIndex(item => item.projectBudgetItemId == 1);
      //filter where itemId 1= 1
      //slice/splice
      projectBudgetItems.splice(itemIndex, 1);
      //or just delte item at index
      state.projects[0].projectBudgetItems = projectBudgetItems;
      state.value = [...state.projects]

      console.log(JSON.stringify(state));

      //state.value = [...state.value, action.payload];
      //state;
    },
    updateProjectBudgetItem: (state, action) => {
      //state.value = [...state.value, randomRgb()];
      //find project index by projectId
      //action.payload.projectId
      const projectIndex = state.projects.findIndex(project => project.projectId == 1);
      console.log(projectIndex + " " + JSON.stringify(state)); 
      const projectBudgetItems = state.projects[projectIndex].projectBudgetItems;
      //remove item from projectBudgetItemsList
      //state.projects.projectBudgetItems
      const itemIndex = projectBudgetItems.findIndex(item => item.projectBudgetItemId == 1);
      //filter where itemId 1= 1
      //slice/splice
      //projectBudgetItems.splice(itemIndex, 1);
      //or just delte item at index
      state.projects[0].projectBudgetItems = {...projectBudgetItems, amount: 100};
      state.value = [...state.projects]

      console.log(JSON.stringify(state));

      //state.value = [...state.value, action.payload];
      //state;
    },
  },
});

// Action creators are automatically generated for each case reducer function 
export const { setMessages, deleteProjectBudgetItem } = messagesSlice.actions;

export default messagesSlice.reducer;
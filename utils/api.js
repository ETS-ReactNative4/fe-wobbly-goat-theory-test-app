import axios from "axios";

const theoryTestApi = axios.create({
  baseURL: "https://theory.sajjel.info/api",
});

export const getQuestionByID = (id) => {
  return theoryTestApi.get(`/question/${id}`).then(({ data }) => {
    return data;
  });
};

export const getNewTest = (email, password, type_id, categories) => {
  return theoryTestApi
    .post("/test/create", {
      email: email,
      password: password,
      type_id: type_id,
      categories: categories,
    })
    .then(({ data }) => {
      return data;
    });
};

export const getCategories = () => {
  return theoryTestApi.get(`/categories`).then(({ data }) => {
    return data;
  });
};

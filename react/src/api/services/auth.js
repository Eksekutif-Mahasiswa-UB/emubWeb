import coreApi from "../coreApi";

const login = async (form) => {
  try {
    const response = await coreApi.post(
      "login",
      form,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    window.localStorage.setItem("token", response.data);
    
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const logout = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await coreApi.get("logout", {
        headers: {
          "Content-Type": "application/json",
       
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
const getProfile = async () => {
    try {
      const token = localStorage.getItem("token");
  
      const response = await coreApi.get("user", {
        headers: {
          "Content-Type": "application/json",
      
        },
      });
      return response
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
export { login ,logout,getProfile};
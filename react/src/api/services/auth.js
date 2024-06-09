import axios from "axios";
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
          Authorization: `Bearer ${token}`, 
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
      await axios.get('https://superapart-me.preview-domain.com/sanctum/csrf-cookie');
     
      const token = localStorage.getItem("token");
  
   
      const response = await coreApi.get("user", {
        method:"GET",
        headers: {
          Accept:"application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
          
        },
      });
      return response
    } catch (error) {
      console.log(error);
   
    }
  };
export { login ,logout,getProfile};
import coreApi from "../coreApi";

const createBerita = async (form) => {
    const token = localStorage.getItem("token");
  try {
    const response = await coreApi.post(
      "tambahBerita",
      form,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`, 
          
        
        },
      }
    );
      return response
    
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const deleteBerita = async (id) => {
    try {
      const token = localStorage.getItem("token");
  
      const response = await coreApi.delete(`deleteBerita/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, 
        },
      });
      return response
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
const getAllBerita = async () => {
    try {
  
      const response = await coreApi.get("lihatBerita", {
       
      });
      return response
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
const getBeritaById = async (id ) => {
    try {
      
      const response = await coreApi.get(`lihatBerita/${id}`, {
      
      });
      return response
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
export { createBerita ,deleteBerita,getAllBerita,getBeritaById};
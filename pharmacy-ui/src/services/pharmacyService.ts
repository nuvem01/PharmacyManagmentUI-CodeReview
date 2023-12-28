import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Pharmacy } from "../stores/Pharmacy/Pharmacy";
import { PaginationModel } from "../stores/PaginationModel"


export type pharma = {
  id: number,
  pagingParams: PaginationModel
}

export const fetchPharmacistReport =  createAsyncThunk(
  'fetchPharmacistReport',
  async (params: any) => {
    try {    
      //console.log(pagingParams);
      const response = await axios({
        method: 'POST',
        url: `/api/pharmacy/${params.id}/Pharmacist`,
        headers: {"Content-Type": "application/json"}, 
        data: params.pagingParams
      });
      return response.data;
  } 
  catch (err) {   
    console.log("there was an error")
  }
  })

  export const fetchPharmacyList =  createAsyncThunk(
    'fetchPharmacyList',
    async (pagingParams: any) => {
      try {    
        //console.log(pagingParams);
        const response = await axios({
          method: 'POST',
          url: `/api/pharmacy`,
          headers: {"Content-Type": "application/json"}, 
          data: pagingParams
        });
        return response.data;
    } 
    catch (err) {   
      console.log("there was an error")
    }
    })


  export const updatePharmacy = createAsyncThunk(
    "updatePharmacy",
    async (Pharmacy:any) => {
      try {    
          const response = await axios({
            method: 'put',
            url: `/api/pharmacy`,
            headers: {"Content-Type": "application/json"},          
            data: Pharmacy
          });
          return response.data;
      } 
      catch (err) {   
        console.log("there was an error")
      }
    }
  );  


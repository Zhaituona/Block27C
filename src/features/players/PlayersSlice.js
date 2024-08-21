import {createSlice} from "@reduxjs/toolkit";
import { puppyBowlApi } from "../../api/puppyBowlApi";


const puppyAndBowlApi = puppyBowlApi.injectEndpoints({
    endpoints :(builder) =>({
        getPlayers : builder.query({
            query:()  =>({
                url:'/players',
                method :"GET",
                responseHandler: (response) => response.text(),
            }),
        }),
    }),
});

const puppyBowlSlice = createSlice({
    name :"puppyBowl",
    initialState :{},
    extraReducers : (builder) =>{
    builder.addMatcher(
        puppyBowlApi.endpoints.getPlayers.matchFullfilled,
        (state, {payload}) =>{
            return payload;
        }
    );
    },
});

export default puppyBowlSlice.reducer;

export const {useFetchPlayersQuery} = puppyAndBowlApi;


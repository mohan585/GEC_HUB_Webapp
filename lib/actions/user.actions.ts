"use server"
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import User from "../models/user.model";
import { connectToDB } from "../mongoose"
import axios from 'axios';

interface Params {
    userId: string,
    username: string,
    name: string,
    pinnumber: string,
    bio: string,
    image: string,
    path: string,
}

export async function updateUser({
    userId,

    name,
    pinnumber,
    bio,
    path,
}: Params
    ): Promise<void> {

    connectToDB();

    try {
    await User.findOneAndUpdate(
        { id: userId },
        {

        name,
        pinnumber,
        bio,

        onboarded: true,

        
        },
        { upsert: true }

         );

    if(path === '/profile/edit') {
        revalidatePath(path);
    }
    } catch (error: any) {
        throw new Error(`Failed to create/update user: ${error.message}`)
    }
    
}

export async function fetchUser(userId: string) {
    try {
        connectToDB();

        return await User.findOne({ id: userId })
    }catch (error: any) {
        throw new Error(`Failed to fetch user: ${error.message}`)
    }
}



export async function fetchSearchResults(query:any) {
  try {
    const response = await axios.get(`https://gec_results-1-b4240270.deta.app/search/?query=${query}`);
    if (!(response.status === 200)) {
      throw new Error('Network response was not ok');
    }
    const jsonData = response.data;
    // console.log(jsonData); // Log the data returned by the API
    return jsonData; // Return the data retrieved from the API
  } catch (error) {
    console.error('Error fetching search results:', error);
    throw error;
  }
}

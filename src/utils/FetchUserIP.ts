import { IPInfo } from "@/types/all-types";

// Fetch user's IP address
export const fetchUserIP = async (): Promise<IPInfo> => {
  try {
    const response = await fetch("http://ip-api.com/json/");
    const data = await response.json();
    const ipLocation = {
      city: data.city,
      region: data.regionName,
      country: data.country,
    };
    const ip = data.query;
    return { ip, ipLocation };
  } catch (error) {
    console.error("Failed to fetch IP address:", error);
    return null;
  }
};

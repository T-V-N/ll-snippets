const API_URL = "https://app.sentiment.xyz/api/points";

interface SentimentUser {
  user: string;
  totalPoints: number;
}

interface SentimentResponse {
  users: SentimentUser[];
}

/*
Expected API response structure:
{
  "users": [
    {
      "user": "0x6d7823cd5c3d9dcd63e6a8021b475e0c7c94b291",
      "totalPoints": 1234,
      // ... other user data
    }
    // ... more users
  ]
}
*/

export default {
  getUserPoints: async (userAddress: string): Promise<number> => {
    try {
      const data = (await (await fetch(API_URL)).json()) as SentimentResponse;
      const userObj = data?.users?.find(
        (u: SentimentUser) => u.user.toLowerCase() === userAddress.toLowerCase()
      );
      return userObj?.totalPoints || 0;
    } catch (error) {
      console.error("Error fetching sentiment points:", error);
      return 0;
    }
  },
};

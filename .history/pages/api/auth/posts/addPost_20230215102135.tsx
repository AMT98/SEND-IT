// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { getServerSession } from "next-auth/next";
import { authOptions } from "../[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions);
    if(!session)
    return res.status(401).json({message: 'Please login to create a post'})
    if(session)
  }
  
}

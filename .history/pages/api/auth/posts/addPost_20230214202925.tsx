// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { getServerSession } from "next-auth/next";
import { authOptions } from "../";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method === "POST"){

  }
}

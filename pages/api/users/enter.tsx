// import client from "@/libs/client";
import withHandler from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  res.json({ ok: true });
}
// {
//   await client.user.create({
//     data: {
//       email: "hi@email.com",
//       name: "hi",
//     },
//   });

//   res.json({
//     ok: true,
//   });
// }

export default withHandler("POST", handler);

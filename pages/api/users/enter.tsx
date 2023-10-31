import client from "@/libs/client";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : { email };
  if (!user) return res.status(400).json({ ok: false });

  const payload = Math.floor(100000 + Math.random() * 900000) + "";

  // const user = await client.user.upsert({
  //   where: {
  //     ...payload,
  //   },
  //   create: {
  //     name: "Anonymous",
  //     ...payload,
  //   },
  //   update: {},
  // });

  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });

  /* if (phone) {
    user = await client.user.findUnique({
      where: {
        phone: +phone,
      },
    });
    if (!user) {
      user = await client.user.create({
        data: {
          name: "Anonymous",
          phone: +phone,
        },
      });
    }
  }
  if (email) {
    user = await client.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      user = await client.user.create({
        data: {
          name: "Anonymous",
          email,
        },
      });
    }
  } */
  console.log(token);
  return res.json({
    ok: true,
  });
}

export default withHandler("POST", handler);

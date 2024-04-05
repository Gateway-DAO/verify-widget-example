import { appendHttps } from "@/utils/https";
import axios, { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

export type IssueBody = { claim: any; dataModel: string; image?: string };

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as IssueBody;

    const params = {
      widgetKey: "b28bc773-f862-40c7-9296-0ebab2fdcf48",
      dataModelId: body.dataModel,
      callbackUrl:
        appendHttps(process.env.NEXT_PUBLIC_VERCEL_URL!) ??
        "http://localhost:3000",
      image: body.image ?? "",
      claim: body.claim,
    };

    try {
      const createSession = await axios.post(
        "https://sandbox.widget.mygateway.xyz/api/issue/generate-session",
        params
      );
      return NextResponse.json(createSession.data);
    } catch (error) {
      console.error((error as AxiosError).code);
      return NextResponse.json("Error on generate issue", { status: 400 });
    }
  } catch (error) {
    return NextResponse.json("Error on generate issue", { status: 400 });
  }
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export class API {
  req: {
    new(input: RequestInfo, init //nextjs.org/docs/api-routes/introduction
      ?: RequestInit | undefined): Request; prototype: Request;
  };
  res: {
    new(body?: BodyInit | null | //nextjs.org/docs/api-routes/introduction
      undefined, init?: ResponseInit | undefined): Response; prototype: Response; error(): Response; redirect(url: string | URL, status?: number | undefined): Response;
  };
  constructor(){
    this.req = Request;
    this.res = Response
  }
  static Request = async (url:String, data:Object) => {
    try {
      const response = await fetch(url,data);
      if(response.status !== 200 ) return  new Error(response.status);
      return response.json();
    } catch (error) {
      throw error;
    }
  }
}
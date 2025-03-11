import { NextResponse } from "next/server";

export default function Middleware(request) {
  console.log("middle run");
  // if (request.nextUrl.pathname != "/about") {
  //   return NextResponse.redirect(new URL("/about", request.url));
  // }
}

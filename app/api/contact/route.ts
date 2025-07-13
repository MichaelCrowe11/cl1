import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log("New Demo Request:", body)

    // Here you would typically:
    // 1. Validate the data
    // 2. Send an email notification
    // 3. Save the lead to a CRM or database

    return NextResponse.json({ message: "Demo request received successfully." }, { status: 200 })
  } catch (error) {
    console.error("API Error:", error)
    return NextResponse.json({ message: "Error processing request." }, { status: 500 })
  }
}

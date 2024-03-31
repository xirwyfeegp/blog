import { Metadata } from "next";

//  You should not manually add <head> tags such as <title> and <meta> to root layouts. Instead, you should use the Metadata API
export const metadata: Metadata = {
    title: 'title for report page',
}


export default function ReportPage() {
    return <h1>Hello report detail page</h1>
}

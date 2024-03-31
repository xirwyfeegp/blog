export default function ReportLayout({
    children,
}: {
    children: React.ReactNode;
})  {
    return (
        <section>
            <nav>{'a search bar for searching the posts'}</nav>
            {children}
        </section>
    )
}

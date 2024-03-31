export default function ReportLayout({
    children,
}: {
    children: React.ReactNode;
})  {
    return (
        <section>
            <nav>{'the title of the post'}</nav>
            <div>{'the Back button'}</div>
            {children}
        </section>
    )
}

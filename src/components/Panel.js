export default function Panel({ id, title, children }) {
    return (
        <section
            id={id}
            className="justify-center bg-white-lilac-50 border-1 shadow-sm border-mako-500 p-4 m-4 rounded-md"
        >
            <h2 className="text-picton-blue-500 text-4xl text-center mb-4">
                {title}
            </h2>
            {children}
        </section>
    );
}

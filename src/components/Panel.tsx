import { ReactNode } from "react";

const Panel = (props: { id: string; title: string; children: ReactNode }) => {
    return (
        <section
            id={props.id}
            className="justify-center bg-white-lilac-50 border-1 shadow-sm border-mako-500 p-4 m-4 rounded-md"
        >
            <h2 className="text-picton-blue-500 text-4xl text-center mb-4 border-b-2 pb-4">
                {props.title}
            </h2>
            {props.children}
        </section>
    );
};

export default Panel;

import React from "react";
import { Pagination } from "@nextui-org/react";

export default function App() {
    const [currentPage, setCurrentPage] = React.useState(1);

    return (
        <div className="flex flex-col gap-5">
            <p className="text-small text-default-500">Selected Page: {currentPage}</p>
            <Pagination
                total={10}
                color="default"
                page={currentPage}
                onChange={setCurrentPage}
            />
        </div>
    );
}

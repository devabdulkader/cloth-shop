import React from "react";
import { Collapse } from "react-collapse";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

interface AccordionItemProps {
    open: boolean;
    toggle: () => void;
    tilte: string;
    desc: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ open, toggle, tilte, desc }) => {
    return (
        <div className=" border-t-2 py-2">
            <div
                className=" cursor-pointer  flex justify-between items-center text-md font-semibold py-1"
                onClick={toggle}
            >
                <p>{tilte}</p>
                    {open ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
              
            </div>
            <Collapse isOpened={open} className=" duration-500 ease-in-out ">
                <div className="py-4 text-justify duration-500 ease-in-out ">{desc}</div>
            </Collapse>
        </div>
    );
};

export default AccordionItem;
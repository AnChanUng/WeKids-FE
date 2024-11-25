"use client";

import Assign from "@/src/ui/Components/atoms/signup/Assign";
import {assigndata} from "@/src/constants/assign";
import React, {useState, useEffect} from "react";

export default function Bottom ({setAllChecked, option = 3}){

    const [allCheck, setAllCheck] = useState(false);
    const [checkedItems, setCheckedItems] = useState(Array(assigndata.length).fill(false));

    useEffect(() => {
        const items = checkedItems.slice(0, option);
        setAllChecked(items.every((isChecked) => isChecked));
        if (checkedItems.some((item) => item === false)) {
            setAllCheck(false);
        }
        
    }, [checkedItems]);

    useEffect(() => {
        
        allCheck ? setCheckedItems(Array(assigndata.length).fill(true)) : "";
    }, [allCheck]);

    const handleCheckboxChange = (index, isChecked) => {
        if(index == -1){
            setAllCheck(!allCheck);
        }
        else{
            const newCheckedItems = [...checkedItems];
            newCheckedItems[index] = isChecked;
            setCheckedItems(newCheckedItems);
        }
        
    };


    return(
        <>
        <div className="px-10 py-4">
                
                <h2>약관동의</h2>
                <div className="border-black border-2 h-68 rounded-lg">
                    <div className="flex flex-col space-y-2 p-3 items-start">
                        <div className="flex flex-row justify-between w-full">
                            <input type="checkbox" className="ml-2" checked={allCheck}
                            onChange={(isChecked) => handleCheckboxChange(-1, isChecked)}/>
                        <div className="text-R-14 ml-5 flex-grow">전체 동의</div>
                        </div>
                    </div> 
                    {assigndata.map((text, idx)=>(
                        <Assign key={idx} text={text} isChecked={ checkedItems[idx] } 
                        onChange={(isChecked) => handleCheckboxChange(idx, isChecked)} option={idx < option} />
                    ))}
                </div>
            </div>
        </>
    )

}
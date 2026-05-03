import React, { useEffect, useState, createContext, useContext, useMemo } from "react"
import { studentsData as initialStudents } from "../data/studentsData";


const AppContext = React.createContext()



const AppProvider = (props) => {


    const [studentsData, setstudentsData] = useState(initialStudents);

    const addStudent = (student) => {
        setstudentsData((prev) => [student, ...prev]); // newest on top
    };

    const getStudentById = (id) => studentsData.find((s) => s.id === id);


    const value = useMemo(
        () => ({ studentsData, addStudent, getStudentById }),
        [studentsData]
    );



    return (
        <AppContext.Provider value={{
            studentsData:value.studentsData,addStudent:value.addStudent,getStudentById:value.getStudentById
        }}>{props.children}</AppContext.Provider>
    )

}




export { AppProvider, AppContext }
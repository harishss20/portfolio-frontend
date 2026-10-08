
"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useConfigTheme } from "./ThemeReducer";

const ThemeBase = () => {

    const selectedTheme = useSelector(useConfigTheme);
    useEffect(() => {
        document.body.setAttribute("product-theme", selectedTheme);
    }, [
    ]);
    return <></>;
};

export default ThemeBase;

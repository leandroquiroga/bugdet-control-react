import { useState } from "react";

export const useForm = (initialValue = 0) => {

    const [value, setValue] = useState(initialValue);

    // reset form
    const resetForm = () => setValue(initialValue);

    // add new info to form
    const setForm = ({ target }) => setValue(target.value);

    return [value, setForm, resetForm];
}
import { useState } from 'react';


interface IInput {
    name: string;
    account: string;
    calls: string;
    minutes: string;
    [key: string]: any;
}

interface IFilterComponet {
    setParam: any;
}

const FilterComponent = ({ setParam }: IFilterComponet) => {

    const [input, setInput] = useState<IInput>({ name: "", account: "", calls: "", minutes: "" });


    const onSubmit = (e: any) => {
        e.preventDefault();
        setParam(input);
    }


    const onChange = (e: any) => {
        const { dataset: { id } } = e.currentTarget;
        setInput(prev => ({ ...prev, [id]: e.target.value }));
    }

    return <form onSubmit={onSubmit} style={{ marginBottom: "20px" }}>
        <input onChange={onChange} data-id="name" type="text" placeholder="name" />
        <input onChange={onChange} data-id="account" type="text" placeholder="account" />
        <input onChange={onChange} data-id="calls" type="text" placeholder="calls" />
        <input onChange={onChange} data-id="minutes" type="text" placeholder="minutes" />
        <button>submit</button>
    </form>

}

export default FilterComponent;
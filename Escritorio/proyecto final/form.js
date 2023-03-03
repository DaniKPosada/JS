const [form, setForm] = useState(addBeneficiaries);
const handleInput = e=>{
        let {name, value} = e.target;
        let newForm = {...form, [name]: value};
        setForm(newForm);
    };
<input onChange={handleInput} name='numDoc' type='text' value={form.numDoc} required/>
import React from "react"


export default function Forms(props) {
    const {values, change, submit} = props

    const handleChange = (evt) => {
        const {name, value} = evt.target
        change(name, value)
    }


    const handleSubmit = (evt) => {
        evt.preventDefault()
        props.submit()
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:
                <input 
                type="text"
                name="name"
                value={values.name}
                placeholder="Enter Name Here!"
                onChange={handleChange}
                />
            </label>
            <label>Email:
                <input 
                type="email"
                name="email"
                value={values.email}
                placeholder="Enter email Here!"
                onChange={handleChange}
                />

            </label>
            <label>Role:
                <select
                name="role"
                onChange={handleChange}>
                    <option value="placeholder">-----Select a Role!-----</option>
                    <option value="Laborer">Laborer</option>
                    <option value="Supervisor">Supervisor</option>
                    <option value="Manager">Manager</option>
                </select>
            </label>
            <input
            type="submit"
            value="Submit"/>
        </form>
    )
}
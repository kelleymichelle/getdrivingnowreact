import React, { Component } from 'react'

export class Form2 extends Component {
    
    state = {
        address: "",
        apt: "",
        city: "",
        state: "",
        residence_type: "",
        monthly_housing_cost: "",
        address_duration_years: "",
        address_duration_months: ""
    }
    
    render() {
        return (
            <div>
                <form>
                    <label>Address:</label>
                    <input type="text" name="address" value={this.state.address} />
                    <label>Apt:</label>
                    <input type="text" name="apt" value={this.state.apt} />
                    <label>City:</label>
                    <input type="text" name="city" value={this.state.city} />
                    <label>State:</label>
                    <input type="text" name="state" value={this.state.state} />
                    <label>Residence Type:</label>
                    <input type="text" name="residence_type" value={this.state.residence_type} />
                    <label>Monthly Housing Cost:</label>
                    <input type="text" name="monthly_housing_cost" value={this.state.monthly_housing_cost} />
                    <label>How long have you lived there in years?:</label>
                    <input type="text" name="address_duration_years" value={this.state.address_duration_years} />
                    <label>How long have you lived there in months:</label>
                    <input type="text" name="address_duration_months" value={this.state.address_duration_months} />
                </form>
            </div>
        )
    }
}

export default Form2;

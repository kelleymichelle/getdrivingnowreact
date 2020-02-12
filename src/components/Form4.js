import React, { Component } from 'react'

export class Form4 extends Component {

    state = {
        employment_type: "",
        employer_name: "",
        employer_phone_number: "",
        job_title: "",
        job_duration_years: "",
        job_duration_months: "",
        monthly_income: ""
    }

    render() {
        return (
            <div>
                <form>
                    <label>Employment Type:</label>
                    <input type="text" name="employment_type" value={this.state.employment_type} />
                    <label>Employer Name:</label>
                    <input type="text" name="employer_name" value={this.state.employer_name} />
                    <label>Employer phone number:</label>
                    <input type="text" name="employer_phone_number" value={this.state.employer_phone_number} />
                    <label>Job Title:</label>
                    <input type="text" name="job_title" value={this.state.job_title} />
                    <label>Job Duration Years:</label>
                    <input type="text" name="job_duration_years" value={this.state.job_duration_years} />
                    <label>Job Duration Months:</label>
                    <input type="text" name="job_duration_months" value={this.state.job_duration_months} />
                    <label>Monthly Income:</label>
                    <input type="text" name="monthly_income" value={this.state.monthly_income} />
                </form>
            </div>
        )
    }
}

export default Form4;

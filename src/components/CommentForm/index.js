import React, { Component } from 'react';

class ContactForm extends Component {

    state = {
        name: '',
        email: '',
        number: '',
        events: '',
        notes: '',
        error: {}
    }


    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error
        })
    }

    subimtHandler = (e) => {
        e.preventDefault();

        const { name,
            email,
            number,
            events,
            notes, error } = this.state;

        if (name === '') {
            error.name = "Iltimos, ismingizni kiriting";
        }
        if (email === '') {
            error.email = "Iltimos, elektron pochtangizni kiriting";
        }
        if (number === '') {
            error.number = "Raqam raqamingizni tanlang";
        }
        if (events === '') {
            error.events = "Tadbirlar ro'yxatini tanlang";
        }
        if (notes === '') {
            error.notes = "Iltimos, qaydingizni kiriting";
        }


        if (error) {
            this.setState({
                error
            })
        }
        if (error.name === '' && error.email === '' && error.email === '' && error.number === '' && error.events === '' && error.notes === '') {
            this.setState({
                name: '',
                email: '',
                number: '',
                events: '',
                notes: '',
                error: {}
            })
        }
    }

    render() {

        const { name,
            email,
            number,
            events,
            notes, error } = this.state;

        return (
            <form onSubmit={this.subimtHandler}>
                <div className="contact-form form-style row">
                    <div className="col-12 col-lg-6">
                        <input type="text" value={name} onChange={this.changeHandler} placeholder="Ismingiz*" id="fname" name="name" />
                        <p>{error.name ? error.name : ''}</p>
                    </div>
                    <div className="col col-lg-6">
                        <input type="text" placeholder="Telefon" onChange={this.changeHandler} value={number} id="number" name="number" />
                        <p>{error.number ? error.number : ''}</p>
                    </div>
                    <div className="col-12  col-lg-6">
                        <input type="email" placeholder="Sizning elektron manzilingiz" onChange={this.changeHandler} value={email} id="email" name="email" />
                        <p>{error.email ? error.email : ''}</p>
                    </div>
                    <div className="col col-lg-6">
                        <select className="form-control" onChange={this.changeHandler} value={events} name="events">
                            <option disabled value="">Shinalarni almashtirish</option>
                            <option value="1">Avto Moyka</option>
                            <option value="2">Kompyuter Diagnostika</option>
                            <option value="3">Batareyalarni Almashtirish</option>
                            <option value="4">Singan Joylarni Almashtirish</option>
                        </select>
                        <p>{error.events ? error.events : ''}</p>
                    </div>
                    <div className="col-12 col-sm-12">
                        <textarea className="contact-textarea" value={notes} onChange={this.changeHandler} placeholder="Xabar" name="notes"></textarea>
                        <p>{error.notes ? error.notes : ''}</p>
                    </div>
                    <div className="col-12">
                            <button type="submit" className="theme-btn-s4">Uchrashuv</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default ContactForm;
import React from 'react'
import './bookNow.css';
import BookingInlineForm from './BookingInlineForm';

const BookNow = () => {
  return (
    <div className="book-now-container">
        <div className="book-now-heading discover-page-heading">
            Let's book your <br /><span className="highlighted-text ">Tamil Nadu</span> Adventure
        </div>
        <div className="book-now-form">
            <BookingInlineForm />
        </div>
    </div>
  )
}

export default BookNow
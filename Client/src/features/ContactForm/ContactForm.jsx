// import React, { useState } from 'react';
// import './ContactForm.css';

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Здесь будет логика отправки формы
//     console.log('Форма отправлена:', formData);
//     alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
//     setFormData({
//       name: '',
//       email: '',
//       message: ''
//     });
//   };

//   return (
//     <form className="contact-form" onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label htmlFor="name">Ваше имя</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//       </div>
      
//       <div className="form-group">
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </div>
      
//       <div className="form-group">
//         <label htmlFor="message">Сообщение</label>
//         <textarea
//           id="message"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           rows="5"
//           required
//         ></textarea>
//       </div>
      
//       <button type="submit" className="submit-btn">Отправить</button>
//     </form>
//   );
// }
// import React from 'react';
// import axios from 'axios';

// class QAForm extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       body: '',
//       name: '',
//       email: '',
//       images: [],
//     };
//     this.onChange = this.onChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   onChange(e) {
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   checkVaild() {
//     const { body, name, email } = this.state;
//     if (body.length <= 0) {
//       alert('You must enter the following: Answer');
//       return false;
//     }
//     if (name.length <= 0) {
//       alert('You must enter the following: Nickname');
//       return false;
//     }
//     if (email.length <= 0) {
//       alert('You must enter the following: E-mail Address');
//       return false;
//     }
//     if (!validateEmail(email)) {
//       alert('Please enter a valid E-mail Address.');
//       return false;
//     }
//     return true;
//   }

//   validateEmail(email) {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
//   }

//   handleSubmit() {
//     const { body, name, email, photos } = this.state;
//     const { questionBody, questionId, close, getQA } = this.props;
//     axios
//       .post(
//         `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${questionId}/answers`,
//         {
//           'body': body,
//           'name': nickname,
//           'email': email,
//           'photos': photos,
//         }
//       )
//       .then((response) => {
//         console.log('success posting answer', response);
//       })
//       .catch((err) => {
//         console.log('error posting answer', err);
//       })
//       .then(() => {
//         console.log('success getting updated questions');
//         getQA();
//       })
//       .catch((err) => {
//         console.log('error getting new question list', err);
//       });
//   }

//   render() {
//     const { questionBody, questionId, updateAnswers } = this.props;
//     return (
//       <form className='qaModalForm'>
//         <p className='qaModalSubHeader'>{questionBody}</p>
//         <form className='qaModalForm'>
//           <div id='qaModalyourAnswer'>YOUR ANSWER :</div>
//           <br />
//           <textarea
//             type='text'
//             className='qaModalyourAnswer'
//             name='body'
//             value={this.value.body}
//             onChange={this.onChange}
//             maxLength='1000'
//             placeholder='Your answer here...'
//             required
//           />
//           <br />
//           <div className='nickName'>WHAT IS YOUR NICKNAME : </div>
//           <br />
//           <input
//             type='text'
//             name='name'
//             value={this.value.name}
//             onChange={this.onChange}
//             className='qaModalNickNameAnswer'
//             maxLength='60'
//             placeholder='Example: jack543!'
//             required
//           />
//           <br />
//           <p className='qaModalPrivacyWarning'>
//             For privacy reasons, do not use your full name or email address
//           </p>
//           <br />
//           <div className='qaModalEmail'>YOUR EMAIL : </div>
//           <br />
//           <input
//             type='text'
//             name='email'
//             value={this.value.email}
//             onChange={this.onChange}
//             className='qaModalEmailAnswer'
//             maxLength='60'
//             placeholder='Example: jack@email.com'
//             required
//           />
//           <br />
//           <p className='qaModalEmailWarning'>For authentication reasons, you will not be emailed</p>
//           <br />
//           <div className='qaModalPhotoUpload' onClick={() => getFiles()}>
//             UPLOAD YOUR PHOTOS :{' '}
//           </div>
//           <br />
//           <input
//             className='qaModalPhotoUpload'
//             type='file'
//             accept='image/*'
//             id='file-input'
//             multiple
//             onChange={() => {
//               setImages([]);
//               handlePhotoUpload(setImages);
//             }}
//           />
//           <br />
//           <div className='qaModalPhotoPreview' id='qaModalPhotoPreview'>
//             <button
//               type='submit'
//               onClick={(e) => {
//                 e.preventDefault();
//                 setImages([]);
//                 document.getElementById('qaModalPhotoPrevoew').innerHTML = '';
//                 document.getElementById('qaModalPhotoUpload').style.visibility = 'visible';
//               }}
//             />
//             <br />
//             <input
//               className='qaModalSubmit'
//               type='submit'
//               value='submit'
//               onClick={(e) => {
//                 e.preventDefault();
//                 if (checkValid()) {
//                   handleSubmit(questionId, images, populateQuestions);
//                 }
//               }}
//             />
//           </div>
//         </form>
//       </form>
//     );
//   }
// }

// export default QAForm;

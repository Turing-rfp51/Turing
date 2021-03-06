import React from 'react';
import axios from axios;

class QAForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          body : '',
          name : '',
          email : '',
          photos : [],
        }

        }
    }

    postAnswerResponse() {
        axios
          .post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${questionId}/answers`, {
        'body': body,
        'name': nickname,
        'email': email,
        'photos': photos
      })
        .then((response) => {
          console.log('success', response);
        })
        .catch((err) => {
          console.log('error posting answer', err);
        })
        .then(() => {
          return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions?product_id=${this.props.productId}`)
        })
        .then((response) => {
          console.log('success getting updated quesitons');
          console.log(response.data.results);
          populateQuestions(response.data.results);
        })
        .catch((err) => {
          console.log('error getting new question list', err);
        })
    }
render() {
    return (
       <form className="QandA-modal-form">
       <label htmlFor="your-answer">YOUR ANSWER:</label>
       <br></br>
       <textarea type="text"  name="your-answer" maxLength="1000" placeholder="Your answer here..." required></textarea>
       <br></br>
       <label htmlFor="answer-nickname">WHAT IS YOUR NICKNAME:</label>
       <br></br>
       <input type="text"  name="answer-nickname" maxLength="60" placeholder="Example: jack543!" required></input>
       <br></br>
       <p className="modal-privacy-warning">For privacy reasons, do not use your full name or email address</p>
       <br></br>
       <label htmlFor="answer-email">YOUR E-MAIL:</label>
       <br></br>
       <input type="text"  name="answer-email" maxLength="60" placeholder="Example: jack@email.com" required></input>
       <br></br>
       <p className="modal-email-warning">For authentication reasons, you will not be emailed</p>
       <br></br>
       <input className="QandA-submit" type="submit" value="SUBMIT" onClick={(e) => {
           e.preventDefault();
           if (checkVaild()) {
             handleSubmit(questionId, product.id, images, populateQuestions);
             postInteraction();
             onClose();
           }
        }}>
       </input>
     </form>

    )
}
};

export default QAForm;
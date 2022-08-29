import Button from "./shared/Button"
import Card from "./shared/Card"
import RatingSelect from "./RatingSelect"
import {useState, useContext, useEffect} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm({}) {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisable] = useState(true)
    const [message, setMessage] = useState('')

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() =>{
        if(feedbackEdit.edit === true){
            setBtnDisable(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if(text === ''){
            setBtnDisable(true)
            setMessage(null)
        } else if(text !== '' && text.trim().length <= 10){
            setMessage('Text must be at least 10 characters')
            setBtnDisable(true)
        } else {
            setBtnDisable(false)
            setMessage(null)
        }
        setText(e.target.value)
    }
    const handlsSubmit = (e) =>{
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating, 
            }
            if(feedbackEdit.edit === true ){
                updateFeedback(feedbackEdit.item.id , newFeedback)
            } else {
                addFeedback(newFeedback)
            }
            
            setText('')
        }
    }
  return (
    <Card>
      <form onSubmit={handlsSubmit}>
        <h2> How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
            <input onChange={handleTextChange} type="text" placeholder="Write a review"
            value={text} />
            <Button type="submit" isDisabled={btnDisabled} >Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm

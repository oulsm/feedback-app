import PropTypes from "prop-types"
import Card from "./shared/Card"
function FeedbackItem({item}) {
   // const [rating, setRating] = useState(7)
    //const [text, setText] = useState('This is an example of a feedback item')
  
    
    return (
    <Card >
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
       
    </Card>
  )
}
FeedbackItem.propTypes ={
    item: PropTypes.object.isRequired,
}

export default FeedbackItem

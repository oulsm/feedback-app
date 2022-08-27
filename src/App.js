import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

function App() {
    const title = 'Blog Post'
    

    return(
        <>
        <Header />
        <div className="container">
          <FeedbackItem />
        </div>
    </>
       
    ) 
}

export default  App;
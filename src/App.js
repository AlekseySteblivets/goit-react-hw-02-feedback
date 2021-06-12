import React, {Component} from "react";
import TitleSection from './components/TitleSection';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;
  countPositiveFeedbackPercentage = () => {
    let total = this.countTotalFeedback();
    let result = (this.state.good / total) * 100;
    if(total <= 0) {
      return;
    }
    return result;
  };
  
  leaveFeedbackGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }))
  }

  leaveFeedbackNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }))
  }

  leaveFeedbackBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }))
  }


  render () {

    const goodFeedback = this.state.good;
    const neutralFeedback = this.state.neutral;
    const badFeedback = this.state.bad;

    return (
      <div className="App">
        <TitleSection 
        title = "please leave feedback" 
         />
         <FeedbackOptions
          // options={} 
          onLeaveFeedbackGood={this.leaveFeedbackGood}
          onLeaveFeedbackNeutral={this.leaveFeedbackNeutral}
          onLeaveFeedbackBad={this.leaveFeedbackBad}
            />
         <Statistics
          good={goodFeedback}
           neutral={neutralFeedback}
            bad={badFeedback}
             total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
              />
         
      </div>
    );
  }
}


export default App;

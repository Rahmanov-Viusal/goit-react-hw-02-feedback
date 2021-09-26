import { Component } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";
import { FEEDBACK_OPTIONS } from "./data";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = ({ target }) => {
    const { feedback } = target.dataset;
    console.log(target.dataset);
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div className="App">
        <Section title={"please leave feedback"}>
          <FeedbackOptions
            options={FEEDBACK_OPTIONS}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title={"statistics"}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;

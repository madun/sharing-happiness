import { useEffect, Component } from "react";
import HomeScreen from "./home";
import InterestedTag from "./InterestedTag";

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      interest: [],
    };
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      this.setState(
        {
          interest: JSON.parse(localStorage.getItem("interested")) || [],
        },
        () => console.warn("interested", this.state.interest)
      );
    }
  }

  setItem(item) {
    if (typeof window !== "undefined") {
      localStorage.setItem("interested", JSON.stringify(item));
      this.setState({
        interest: JSON.parse(localStorage.getItem("interested")) || [],
      });
    }
  }

  render() {
    if (this.state.interest.length) {
      return <HomeScreen />;
    }

    return <InterestedTag setItem={(data) => this.setItem(data)} />;
  }
}

export default index;

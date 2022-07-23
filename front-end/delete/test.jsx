class Child extends Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [],
      };
    }
  
    componentDidMount() {
      this.setState({
        items: this.props.data,
      });
    }
  
    render() {
      const { items } = this.state;
      console.log("Child data from state: ", items);
      console.log("Child data from props: ", this.props.data);
      return (
        <>
          <ReactApexChart options={items} />
        </>
      );
    }
  }
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import CardsList from '../../components/CardsList';
import data from '../../mock/fakeData.json';
import './style.scss';

type Data = { id: number; img: string; title: string; price: number }[];

class Home extends React.Component<unknown, { value: string; dataList: Data }> {
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(props: {} | Readonly<unknown>) {
    super(props);
    this.state = {
      value: '',
      dataList: [],
    };
  }

  componentDidMount() {
    const keyInput = localStorage.getItem('keyInput');
    this.setState({ value: keyInput ?? '' });
    this.setState({ dataList: data });
  }

  componentWillUnmount() {
    localStorage.setItem('keyInput', this.state.value);
  }

  inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div className="home-container">
        <h1>Home page</h1>
        <input
          type="text"
          onChange={this.inputHandler}
          value={this.state.value}
          placeholder="Search"
        />
        <CardsList data={this.state.dataList} />
      </div>
    );
  }
}

export default Home;

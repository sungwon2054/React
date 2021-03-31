import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state === undefined) {
      return null;
    }
    const {
      state: { year, title, finedSummary, poster, genres },
    } = location;
    return (
      <div className='container'>
        <div className='detail'>
          <img src={poster} alt={title} title={title} />
          <div className='detail__data'>
            <h3 className='detail__title'>{title}</h3>
            <h5 className='detail__year'>{year}</h5>
            <ul className='detail__genres'>
              {genres.map((genre, index) => (
                <li key={index} className='genres__genre'>
                  {genre}
                </li>
              ))}
            </ul>
            <p className='detail__summary'>{finedSummary}...</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;

import StarRating from 'react-native-star-rating';
import React, {Component} from 'react'
import { StyleSheet, 
} from 'react-native';

class Rating
 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
      <StarRating 
        disabled={false}
        maxStars={5}
        fullStarColor="#ebda1e"
        starSize={20}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
      />
    );
  }
}




export default Rating


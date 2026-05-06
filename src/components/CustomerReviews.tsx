import { Star } from 'lucide-react';
import './CustomerReviews.css';

const reviews = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    location: 'UK',
    rating: 5,
    comment: 'JourneyLanka made our honeymoon unforgettable. Amazing service!',
    avatar: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Australia',
    rating: 5,
    comment: 'Best prices and smooth booking. Safari was incredible!',
    avatar: 'https://i.pravatar.cc/150?img=11'
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    location: 'Spain',
    rating: 5,
    comment: 'Excellent service and knowledgeable driver.',
    avatar: 'https://i.pravatar.cc/150?img=5'
  }
];

const CustomerReviews: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="section-title">What Our Travelers Say</h2>
        <p className="section-subtitle">Don't just take our word for it. Read the experiences of our happy customers.</p>
        
        <div className="reviews-grid">
          {reviews.map(review => (
            <div key={review.id} className="review-card animate-on-scroll">
              <div className="review-stars">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} className="star-icon" fill="currentColor" />
                ))}
              </div>
              <p className="review-comment">"{review.comment}"</p>
              <div className="review-author">
                <img src={review.avatar} alt={review.name} className="author-avatar" />
                <div className="author-info">
                  <h4 className="author-name">{review.name}</h4>
                  <p className="author-location">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;

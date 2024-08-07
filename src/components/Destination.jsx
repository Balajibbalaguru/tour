import { useState, useEffect } from 'react';
import california from "../assets/california.png"

function Destination() {
  const [searchQuery, setSearchQuery] = useState('');
  const [regionFilter, setRegionFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const destinationData = [
      { name: 'California', region: 'west', rating: '4', type: 'Beach', favorite: false },
      { name: 'Missouri', region: 'midwest', rating: '3', type: 'City', favorite: false },
      { name: 'Arizona', region: 'west', rating: '4', type: 'Desert', favorite: false },
      { name: 'Pennsylvania', region: 'northeast', rating: '4', type: 'Historical', favorite: false },
      { name: 'Tennessee', region: 'south', rating: '4', type: 'Music', favorite: false },
      { name: 'Florida', region: 'south', rating: '5', type: 'Beach', favorite: false },
      { name: 'Indiana', region: 'midwest', rating: '3', type: 'City', favorite: false },
      { name: 'Louisiana', region: 'south', rating: '4', type: 'Cultural', favorite: false },
      { name: 'Nevada', region: 'west', rating: '4', type: 'Entertainment', favorite: false },
      { name: 'Idaho', region: 'west', rating: '3', type: 'Nature', favorite: false },
      { name: 'Delaware', region: 'northeast', rating: '3', type: 'Coastal', favorite: false },
      { name: 'Illinois', region: 'midwest', rating: '4', type: 'City', favorite: false },
      { name: 'New Jersey', region: 'northeast', rating: '4', type: 'Coastal', favorite: false },
      { name: 'North Carolina', region: 'south', rating: '4', type: 'Mountain', favorite: false },
      { name: 'Colorado', region: 'west', rating: '5', type: 'Mountain', favorite: false },
      { name: 'Washington', region: 'west', rating: '5', type: 'Nature', favorite: false },
      { name: 'Hawaii', region: 'west', rating: '5', type: 'Beach', favorite: false },
      { name: 'Utah', region: 'west', rating: '4', type: 'Mountain', favorite: false },
      { name: 'Texas', region: 'south', rating: '5', type: 'City', favorite: false },
      { name: 'Montana', region: 'west', rating: '3', type: 'Nature', favorite: false },
      { name: 'Michigan', region: 'midwest', rating: '4', type: 'Lake', favorite: false },
      { name: 'South Dakota', region: 'midwest', rating: '3', type: 'Nature', favorite: false },
      { name: 'Massachusetts', region: 'northeast', rating: '4', type: 'Historical', favorite: false },
      { name: 'Vermont', region: 'northeast', rating: '3', type: 'Nature', favorite: false },
    ];
    setDestinations(destinationData);
  }, []);

  const handleSearchChange = (e) => setSearchQuery(e.target.value.toLowerCase());
  const handleRegionChange = (e) => setRegionFilter(e.target.value);
  const handleRatingChange = (e) => setRatingFilter(e.target.value);
  const handleTypeChange = (e) => setTypeFilter(e.target.value.toLowerCase());

  const toggleFavorite = (index) => {
    setDestinations((prevDestinations) => {
      const updatedDestinations = [...prevDestinations];
      updatedDestinations[index] = {
        ...updatedDestinations[index],
        favorite: !updatedDestinations[index].favorite,
      };
      return updatedDestinations;
    });
  };

  const filterDestinations = () => {
    return destinations.filter((destination) => {
      const matchesRegion = !regionFilter || destination.region === regionFilter;
      const matchesRating = !ratingFilter || destination.rating === ratingFilter;
      const matchesType = !typeFilter || destination.type.includes(typeFilter);
      const matchesSearch = !searchQuery || destination.name.toLowerCase().includes(searchQuery);

      return matchesRegion && matchesRating && matchesType && matchesSearch;
    });
  };

  return (
    <div className="destinations mt-5">
      <h2 className='text-white'>Destinations</h2>
      <div className="search-filters">
        <input id="search-bar" type="search" className='searchbar' placeholder="Search..." onChange={handleSearchChange} />
        <div className="filters">
          <select id="region-filter" className='option-style' onChange={handleRegionChange}>
            <option value="">All Regions</option>
            <option value="west">West</option>
            <option value="midwest">Midwest</option>
            <option value="northeast">Northeast</option>
            <option value="south">South</option>
          </select>
          <select id="rating-filter" className='option-style' onChange={handleRatingChange}>
            <option value="">All Ratings</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <select id="type-filter" className='option-style' onChange={handleTypeChange}>
            <option value="">All Types</option>
            <option value="Beach">Beach</option>
            <option value="City">City</option>
            <option value="Desert">Desert</option>
            <option value="Historical">Historical</option>
            <option value="Music">Music</option>
            <option value="Cultural">Cultural</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Nature">Nature</option>
            <option value="Coastal">Coastal</option>
            <option value="Mountain">Mountain</option>
            <option value="Lake">Lake</option>
          </select>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          {filterDestinations().map((destination, index) => (
            <div key={index} className="destination-item shadow col-lg-4" data-region={destination.region} data-rating={destination.rating} data-type={destination.type}>
              <img src={california} alt={destination.name} className="travel-img"/>
              <div className="destination-info">
                <h3>{destination.name}</h3>
                <p>{destination.type}</p>
                <div className="rating">{'⭐'.repeat(destination.rating)}</div>
                <button className="view-more mt-2">View More</button>
                <span className="favorite" onClick={() => toggleFavorite(index)}>
                  {destination.favorite ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                  </svg>: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                  </svg>}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Destination;

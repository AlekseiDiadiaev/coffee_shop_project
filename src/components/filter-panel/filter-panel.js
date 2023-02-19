import './filter-panel.scss';



function FilterPanel ({search}) {
    function onSearch(e) {
        search(e.target.value)
    }
    return (
        <div className="filter-panel">
                <div className="container"> 
                    <div className="filter-panel__search-wrap">
                        <span className="filter-panel__search-text">Lookiing for</span>
                        <input  
                            type="text" 
                            className="filter-panel__search-input" 
                            placeholder="start typing here..."
                            onChange={(e) => onSearch(e)}
                        />
                    </div>
                    <div className="filter-panel__filter-wrap">
                        <span className="filter-panel__filter-text">Or filter</span>
                        <button className="filter-panel__filter-tab">Brazil</button>
                        <button className="filter-panel__filter-tab">Kenya</button>
                        <button className="filter-panel__filter-tab">Columbia</button>
                    </div>
                </div>
            </div>
    );
  }
  
  export default FilterPanel;
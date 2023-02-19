import './filter-panel.scss';



function FilterPanel ({search, filter}) {

    function onSearch(e) {
        search(e.target.value)
    }

    function onFilter(e) {
        const btns = document.querySelectorAll('.filter-panel__filter-tab')
        if (e.target.classList.contains('active')) {
            search('');
            btns.forEach(item => {
                item.classList.remove('active')
            })
        } else {
            btns.forEach(item => {
                item.classList.remove('active')
            })
            e.target.classList.add('active')
            search(e.target.getAttribute('data-country'))
        }
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
                        <button className="filter-panel__filter-tab" data-country="Brazil" onClick={(e) => onFilter(e)}>Brazil</button>
                        <button className="filter-panel__filter-tab" data-country="Kenya" onClick={(e) => onFilter(e)}>Kenya</button>
                        <button className="filter-panel__filter-tab" data-country="Columbia" onClick={(e) => onFilter(e)}>Columbia</button>
                    </div>
                </div>
            </div>
    );
  }
  
  export default FilterPanel;
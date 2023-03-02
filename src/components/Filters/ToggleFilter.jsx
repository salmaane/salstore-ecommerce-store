import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function ToggleFilter({colors,handleToggle,options}) {
  return (
    <div className='toggle-filter-container'>
        <ToggleButtonGroup
          value={colors}
          onChange={handleToggle}
          className="toggle-button-group"
          color="success"
        >
            {options.map((option) => (
                <ToggleButton 
                  key={option.id}
                  value={option.color}
                  aria-label={option.color}
                >
                    <span className='color-span'
                          style={{backgroundColor:option.color,}}
                    ></span>
                    {option.label}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    </div>
  )
}

function getToggleFilterQuery(items, query) {
  let queryStr = '';
  items.forEach(item => {
    queryStr += query + item;
  })
  return queryStr;
}

export { ToggleFilter as default, getToggleFilterQuery }
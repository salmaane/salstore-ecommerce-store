import { Slider } from '@mui/material';

function SliderFilter({value,handleRange}) {
  return (
    <div className='slider-filter-container'>
        <Slider 
            value={value}
            getAriaLabel={() => 'Temperature range'}
            getAriaValueText={(value)=> {'$'+value}}
            valueLabelDisplay="auto"
            min={0}
            max={1000}
            step={50}
            onChange={handleRange}  
        />
    </div>
  )
}

export default SliderFilter
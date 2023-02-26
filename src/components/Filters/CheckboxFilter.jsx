import Checkbox from '@mui/material/Checkbox'
import { FormControlLabel } from "@mui/material";



function CheckboxFilter({options, handleBrandCheck}) {
  return (
    <div className="checkbox-filter-container">
        {options.map( (option) => (
            <FormControlLabel 
              key={option.id}
              label={option.label}
              control={
                <Checkbox 
                    size="small"
                    checked={option.checked}
                    onClick={()=> handleBrandCheck(option.id)}
                    color="default"
                />
              }
            />
        ))}
    </div>
  )
}

export default CheckboxFilter
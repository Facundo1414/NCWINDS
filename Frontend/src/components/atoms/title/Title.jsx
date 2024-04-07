
import { Typography } from "@mui/material"
import "./Title.css"
const Title = (props)=> {
    
    // eslint-disable-next-line react/prop-types
    const {title, subtitle} = props
  return (
    <div className="container-text">
    <Typography style={{color:"white", margin:0, textAlign:"left", fontSize:24, fontWeight:"bold"}}>{title}</Typography>
    <Typography style={{color:"white", margin:0, textAlign:"left", fontSize:20, fontWeight:"bold"}}>{subtitle}</Typography>
    </div>
  )
}
export default Title

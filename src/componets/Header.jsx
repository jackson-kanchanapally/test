import Links from './Links'
export default function Header(props){
    return (
        <div style={{color:'white',backgroundColor:'black' ,display:'flex'}}>
            
            <h1 style={{paddingLeft:'10%',paddingRight:'60%'}}>
            {props.title}
            </h1>
           
            <Links href='#' text="lkins"/>
            <Links href='#' text="lkins"/>
            <Links href='#' text="lkins"/>
        </div>
    )
}
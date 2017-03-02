export default class Section extends React.Component {
   render () {
    return (
      <div style={{ margin: '10px'}}>    
        { this.props.children }   
     </div>
    )
  } 
}

const styles = {
  a: {
    marignTop: '1em'
  }
}
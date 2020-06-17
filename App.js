

class App extends React.Component{

state={
   
AvailableProducts:10,
SchopingCart:0
}
handleRemove=()=>{
this.setState({
SchopingCart:this.state.SchopingCart-1

})



}
handleAdd=()=>{
this.setState({

SchopingCart:this.state.SchopingCart+1

})



}

handleBay=()=>{
this.setState({
AvailableProducts:this.state.AvailableProducts-this.state.SchopingCart,
SchopingCart:0

})


}





    render() {
        const style={
            backgroundColor:'red',
            color:'white'
        }
        return (
             <div>
<button disabled={this.state.SchopingCart===0?true:false} onClick={this.handleRemove}>-</button>
        <span  className={this.state.SchopingCart===0?'clear':null}>  {this.state.SchopingCart}  </span>
<button disabled={this.state.SchopingCart===this.state.AvailableProducts?true:false} onClick={this.handleAdd}>+</button>
{this.state.SchopingCart >0 && <button onClick={this.handleBay} style={{backgroundColor:'red',
color:'white'}} className='anime'>Buy</button>}
        <h1>Available products:{this.state.AvailableProducts}</h1>
             </div>
        );
    }


}















ReactDOM.render(<App/>, document.getElementById('root'));
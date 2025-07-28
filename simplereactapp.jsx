
const Card=({title})=>{
    return (<div style={{border :'1px solid red'}}><h2> Card component : {title}  </h2></div>);
}

const App=()=>{

    return (
        <div className="CardContainer">

            {/*<h2> functional arrow </h2>*/}
            <Card title={"dune 2"} />  {/*rating={8}*/}
            <Card title="lion king"/>
        </div>
       );


}
export default App

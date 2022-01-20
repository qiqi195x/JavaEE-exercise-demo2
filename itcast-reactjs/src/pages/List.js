import React from "react";

class List extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dateList : [1,2,3],
            maxNum : 3
        }
    }

    render() {
        return (
         <div>
             <ul>
                 {
                     this.state.dateList.map((value, index)=>{
                         return <li key={index}>{value}</li> ;
                     })
                 }
             </ul>
             <button
                 onClick={()=>{
                     let maxNum = this.state.maxNum + 1;
                     let list = [...this.state.dateList,maxNum];
                     this.setState({
                     dateList : list,
                     maxNum : maxNum
                 })
             }}>
                 点我
             </button>
         </div>
        );
    }

}

export default List;
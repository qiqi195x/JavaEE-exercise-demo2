import React from 'react';
import {connect} from "../.umi/plugin-dva/exports";



const namespace = 'list';
const mapStateToProps = (state) => {
    const listData = state[namespace].data;
    const maxNum = state[namespace].maxNum;
    return {
        listData, maxNum
    };
};
const mapDispatchToProps = (dispatch) => { // 定义方法，dispatch是内置函数
    return { //返回的这个对象将绑定到this.props对象中
        addNewData : () =>{ // 定义方法
            dispatch({ // 通过调用dispatch()方法，调用model中reducers的方法
                type: namespace + "/addNewData" // 指定方法，格式：namespace/方法名
            });
        }
    }
}
@connect(mapStateToProps, mapDispatchToProps) //mapDispatchToProps：函数，将方法映射到props中
class List extends React.Component{
    render(){
        return (
            <div>
                <ul>
                    {
// 遍历值
                        this.props.listData.map((value,index) => {
                            return <li key={index}>{value}</li>
                        })
                    }
                </ul>
                <button
                    onClick={()=>{this.props.addNewData()}}>
                    添加
                </button>
            </div>
        );
    }
}

export default List;

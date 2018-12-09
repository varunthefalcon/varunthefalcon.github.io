import React, {Component} from 'react';
import {connect} from "react-redux";
import Recipelist from './recipeList'
class index extends Component {

    render(){
        return(
            <div className="recipe-list">
                { this.props.recipeList.map((recipe, index) => {
                    return (
                        <div key={index}>
                            <Recipelist recipe = { recipe } />
                        </div>                    
                    )} 
                ) }
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        recipeList : state.recepies
    }
}

export default connect(mapStateToProps, null)(index);
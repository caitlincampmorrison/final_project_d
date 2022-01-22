import React from "react"
import { connect } from "react-redux"
import { selectedStudent, selectCampus, clearStudent } from "../store";
import StudentUpdate from "./StudentUpdate";

function findCampusId(name, campuses ) {
    const campus = campuses.find(campus => campus.name === name)
    console.log("FIND CAMPUS ID: " + campus.name + campus.id)
    return campus
}
class SingleStudent extends React.Component{
    render(){
        const nowhere = "no where"
      return (
        <div className="student-details"> 
            <img id="student-image"src={this.props.selectedStudent.imageUrl} />
            <h1>{this.props.selectedStudent.first_name} {this.props.selectedStudent.last_name}</h1>
            <p>{this.props.selectedStudent.first_name} <a onClick={() => {
                    this.props.selectCampus(findCampusId(this.props.selectedStudent.campus_name, this.props.campuses)) 
                    this.props.clearStudent()}
                    }> 
                    goes to {this.props.selectedStudent.campus_name ? this.props.selectedStudent.campus_name : nowhere }</a> with a {this.props.selectedStudent.gpa} gpa
            </p> 
            <hr></hr>
            <StudentUpdate />      
        </div>
       )  
    }
    
}

const mapStateToProps = (state) => {
    return {
      selectedStudent: state.selectedStudent,
      campuses: state.campuses
    };
  };

const mapDispatchToProps = (dispatch) => {
    return {
        selectCampus: (campus) => dispatch(selectCampus(campus)),
        clearStudent: () => dispatch(clearStudent())
    }
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
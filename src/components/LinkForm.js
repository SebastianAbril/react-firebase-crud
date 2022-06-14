import React from "react";

const LinkForm = () =>{
    return (
        <form className="card card-body">

            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i class="material-icons">insert_link</i>
                </div>
                <input type="text" className="form-control" placeholder="https://someurl.com" name="url" />
            </div>

            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i class="material-icons">create</i>
                </div> 
                <input type="text" className="form-control" name="name" placeholder="Website name" /> 
            </div>

            <div className="form-group">
                <textarea name="description" rows="3" className="form-control"></textarea>
            </div>
        </form>
    )
}

export default LinkForm;
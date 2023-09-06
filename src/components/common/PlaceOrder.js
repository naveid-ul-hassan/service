import React from "react";

const PlaceOrder = () => {
    return(
   <form class="row g-2 ">
            <div class="col-md-12">
              <label htmlFor="validationDefault01" class="form-label">First name</label>
              <input type="text" class="form-control" id="validationDefault01"  required />
            </div>
            <div class="col-md-12">
              <label htmlFor="validationDefault01" class="form-label">Last name</label>
              <input type="text" class="form-control" id="validationDefault01" required />
            </div>
            <div class="col-md-12">
              <label htmlFor="validationDefault01" class="form-label">Email</label>
              <input type="email" class="form-control" id="validationDefault01" required />
            </div>
            <div class="col-md-12">
              <label htmlFor="validationDefault01" class="form-label">Mobile Number</label>
              <input type="number" class="form-control" id="validationDefault01" required />
            </div>
            <div class="col-12 d-flex justify-content-center ">
              <button class="btn btn-primary w-50 my-2" type="submit">Submit</button>
            </div>
          </form>
    )
}
export default PlaceOrder
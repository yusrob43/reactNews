var React = require('react');

var Query = React.createClass({

	render: function(){

		return(
			<div className="row">
				<div className="col-lg-12">
					<div className="panel panel-primary">

						<div className="panel-heading">
							<h1 className="panel-title">
								<strong><i className="fa fa-newspaper-o" aria-hidden="true"></i><span> Query</span></strong>
							</h1>
						</div>

						<div className="panel-body">
						  <form>
						    <div className="form-group">
						      <h4><strong>Topic</strong></h4>
						      <input type="text" className="form-control" id="search" onChange= {this.props.handleChange} required=""/>
						      <h4 className=""><strong>Start Year</strong></h4>
						      <input type="number" className="form-control" id="start" onChange= {this.props.handleChange} required=""/>
						      <h4 className=""><strong>End Year</strong></h4>
						      <input type="number" className="form-control" id="end" onChange= {this.props.handleChange} required=""/>
						    </div>
						    <div className="pull-right">
						      <button type="button" className="btn btn-danger" onClick= {this.props.handleClick}>
						        <h4>Search</h4>
						      </button>
						    </div>
						  </form>
						</div>
							
					</div>
				</div>
			</div>
		)
	}
});

module.exports = Query;
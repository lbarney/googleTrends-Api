module.exports = {
	read: function(req, res){
		if(err){
			res.send(err);
		}else{
			res.send(result);
		}
	}
};
const Report = require("../models/report");

exports.createReport = (req,res,next) => {
  console.log('Fecha: '+req.body.date);
  const report = new Report({
    sensor: req.body.sensor,
    humidity: req.body.humidity,
    environmentHumidity: req.body.environmentHumidity,
    environmentTemperature: req.body.environmentTemperature,
    date: req.body.date,
    hour: req.body.hour
  });
  report.save()
  .then(createdReport => {
    console.log(createdReport);
    console.log('saved!');
    res.status(201).json({
      message: 'Post added successfully!',
      postId: createdReport._id
    });
  });
}

exports.getReports = (req, res, next) => {

  Report.find()
      .then(documents => {
        res.status(200).json({
          message: 'Post fetched successfully!',
          reports: documents
        });
      });
  }


exports.getReport = (req, res, next) => {
  Report.findById(req.params.id)
  .then(post => {
    if(post){
      res.status(200).json(post);
    }else{
      res.status(404).json({
        message: 'Post not found'
      });
    }
  })
}

exports.deleteReport = (req,res,next) => {
  Report.deleteOne({_id: req.params.id})
    .then(result => {
      console.log(result);
      res.status(200).json({message: 'Post deleted'});
    });
}

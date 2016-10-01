const express = require('express')
const path = require('path')
// const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
const babelRegister  = require('babel-register')

babelRegister({
	presets: ['es2015', 'react', 'stage-1'],
	plugins: ['syntax-decorators','syntax-object-rest-spread','transform-class-properties']
})

const setupMongoose = require('./utils/setupMongoose.js')
const routes = require('./routes/index.js')
const api = require('./routes/api.js')
const app = express()


setupMongoose()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// app.use(express.static(path.join(__dirname, 'public')))
app.use('/app', express.static(__dirname + '/src/app'))
app.use('/assets', express.static(__dirname + '/src/assets'))
app.use('/api/v1/', api)
app.use('/', routes)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
})


module.exports = app